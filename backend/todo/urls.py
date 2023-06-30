from django.urls import path

from .views import (
    create_todo,
    delete_todo,
    todo_list,
    todo_list_done,
    todo_list_undone,
    update_todo,
)

urlpatterns = [
    path("", todo_list, name="todo_list"),
    path("done/", todo_list_done, name="todo_list_done"),
    path("undone/", todo_list_undone, name="todo_list_undone"),
    path("create/", create_todo, name="create_todo"),
    path("update/<int:todo_id>/", update_todo, name="update_todo"),
    path("delete/<int:todo_id>/", delete_todo, name="delete_todo"),
]
