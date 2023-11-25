from mongoengine import *
from schemas import Course

class CourseService:

    def __init__(self, courseModel):
        self.courseModel = Course(courseModel)

    def getPreRequisites(self):
        self.courseModel.objects
