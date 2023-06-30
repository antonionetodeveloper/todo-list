from django.db import models
from django.forms import ModelForm


class Todo(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    is_done = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class TodoLabel(ModelForm):
    class Meta:
        model = Todo
        fields = ["title", "is_done"]
