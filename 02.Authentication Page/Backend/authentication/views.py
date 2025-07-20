import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name', '').strip()
            email = data.get('email', '').strip()
            password = data.get('password', '')

            if not name or not email or not password:
                return JsonResponse({'error': 'All fields are required'}, status=400)

            if User.objects.filter(email=email).exists():
                return JsonResponse({'error': 'Email already registered'}, status=400)

            User.objects.create_user(name=name, email=email, password=password)
            return JsonResponse({'message': 'User registered successfully'}, status=201)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        refresh_token = response.data.get('refresh')
        access_token = response.data.get('access')

        # ✅ Set refresh token as cookie; remove from JSON payload
        if refresh_token:
            response.data.pop('refresh', None)
            response.set_cookie(
                key='refresh_token',
                value=refresh_token,
                httponly=True,
                secure=True,             # Make sure HTTPS is used in production
                samesite='Lax',
                path='/',
                max_age=86400            # 1 day
            )

        return Response({'access': access_token})
