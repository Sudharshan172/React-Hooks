from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.db.models import Q


class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        # Debug: Optional print to verify incoming data
        # print("Register payload:", request.data)

        if not username or not email or not password:
            return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email already registered'}, status=status.HTTP_400_BAD_REQUEST)

        User.objects.create_user(username=username, email=email, password=password)
        return Response({'message': 'Registration successful'}, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    def post(self, request):
        credential = request.data.get('username')  # Accepts either username or email
        password = request.data.get('password')

        # Debug: Optional print to verify incoming login data
        # print("Login payload:", request.data)

        if not credential or not password:
            return Response({'error': 'Email or username and password are required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user_obj = User.objects.get(Q(username=credential) | Q(email=credential))
            user = authenticate(username=user_obj.username, password=password)

            if user:
                return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
