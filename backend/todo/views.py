import json

from django.core.serializers import serialize
from django.http import JsonResponse
from django.shortcuts import get_list_or_404
from django.views.decorators.csrf import csrf_exempt

from .models import Todo, TodoLabel


def todo_list(request):
    data = get_list_or_404(Todo)
    data = json.loads(serialize("json", data))

    return JsonResponse(data, safe=False)


def todo_list_done(request):
    data = get_list_or_404(Todo.objects.filter(is_done=True))
    data = json.loads(serialize("json", data))

    return JsonResponse(data, safe=False)


def todo_list_undone(request):
    data = get_list_or_404(Todo.objects.filter(is_done=False))
    data = json.loads(serialize("json", data))

    return JsonResponse(data, safe=False)


@csrf_exempt
def create_todo(request):
    body = json.loads(request.body)
    if request.method == "POST":
        try:
            data = {"title": body.get("title")}
            TodoLabel(data=data).save()
            return JsonResponse({"message": "Todo created successfully"}, status=201)

        except Exception:
            return JsonResponse(
                {
                    "message": "Failed creating todo.",
                    "Internal server code": "[todo/views.py create_todo]: Except - 1",
                    "Error": Exception,
                },
                status=400,
            )

    return JsonResponse({"message": "Method not allowed"}, status=405)


@csrf_exempt
def update_todo(request, todo_id):
    body = json.loads(request.body)
    if request.method == "PUT":
        try:
            todo = Todo.objects.get(id=todo_id)
            todo.title = (
                body.get("title") if body.get("title") is not None else todo.title
            )
            todo.is_done = (
                body.get("is_done") if body.get("is_done") is not None else todo.is_done
            )

            todo.save()
            return JsonResponse({"message": "Todo updated successfully"}, status=200)

        except Exception:
            return JsonResponse(
                {
                    "message": "Failed updating todo.",
                    "Internal server code": "[todo/views.py update_todo]: Except - 1",
                    "Error": Exception,
                },
                status=400,
            )

    return JsonResponse({"message": "Method not allowed"}, status=405)


@csrf_exempt
def delete_todo(request, todo_id):
    if request.method == "DELETE":
        try:
            todo = Todo.objects.get(id=todo_id)
            todo.delete()
            return JsonResponse({"message": "Todo deleted successfully"}, status=200)

        except Exception:
            return JsonResponse(
                {
                    "message": "Failed deleting todo.",
                    "Internal server code": "[todo/views.py delete_todo]: Except - 1",
                    "Error": Exception,
                },
                status=400,
            )

    return JsonResponse({"message": "Method not allowed"}, status=405)
