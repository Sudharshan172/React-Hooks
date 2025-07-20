import json
from django.http import JsonResponse, HttpResponseBadRequest, HttpResponseNotAllowed
from django.views.decorators.csrf import csrf_exempt
from .models import Employee

@csrf_exempt
def add_employee(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            employee = Employee.objects.create(
                name=data.get("name"),
                email=data.get("email"),
                designation=data.get("designation"),
                department=data.get("department"),
                salary=data.get("salary"),
                date_of_joining=data.get("date_of_joining"),
                last_working_day=data.get("last_working_day"),
            )
            return JsonResponse({"status": "success", "id": employee.id})
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)

    return HttpResponseNotAllowed(["POST"])

@csrf_exempt
def update_employee(request):
    if request.method == "PUT":
        try:
            data = json.loads(request.body)
            email = data.get("email")

            employee = Employee.objects.get(email=email)

            if data.get("designation") not in [None, ""]:
                employee.designation = data["designation"]
            if data.get("department") not in [None, ""]:
                employee.department = data["department"]
            if data.get("salary") not in [None, ""]:
                employee.salary = data["salary"]
            if data.get("last_working_day") not in [None, ""]:
                employee.last_working_day = data["last_working_day"]

            employee.save()

            return JsonResponse({"status": "success"})
        except Employee.DoesNotExist:
            return JsonResponse({"status": "error", "message": "Employee not found"}, status=404)
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)
    return HttpResponseNotAllowed(["PUT"])


def display_employees(request):
    if request.method == "GET":
        employees = Employee.objects.all().values()
        return JsonResponse(list(employees), safe=False)

    return HttpResponseNotAllowed(["GET"])

@csrf_exempt
def delete_employee(request):
    if request.method == "DELETE":
        try:
            data = json.loads(request.body)
            email = data.get("email")

            employee = Employee.objects.get(email=email)
            employee.delete()

            return JsonResponse({"status": "success", "message": "Employee deleted"})
        except Employee.DoesNotExist:
            return JsonResponse({"status": "error", "message": "Employee not found"}, status=404)
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)

    return HttpResponseNotAllowed(["DELETE"])