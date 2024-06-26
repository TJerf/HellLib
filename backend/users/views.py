import re

from rest_framework.generics import ListAPIView, ListCreateAPIView

from .models import Student
from .serializers import StudentSerializer


class StudentsAPIView(ListCreateAPIView):
    serializer_class = StudentSerializer

    def perform_create(self, serializer: serializer_class):
        first_name = serializer.validated_data["first_name"]
        last_name = serializer.validated_data["last_name"]
        class_number = serializer.validated_data["class_number"]
        national_code = serializer.validated_data["national_code"]

        student = Student.objects.filter(
            first_name=first_name,
            last_name=last_name,
            class_number=class_number,
            national_code=national_code,
        ).first()

        if student is not None:
            return

        return serializer.save()

    def get_queryset(self):
        return Student.objects.all()


class SuggestStudents(ListAPIView):
    serializer_class = StudentSerializer

    def get_queryset(self):
        query = self.request.query_params.get("q", "").strip()

        if not query:
            return

        return Student.objects.all().filter(
            national_code__iregex=r"(?mi).*%s.*" % re.escape(query)
        )[:50]
