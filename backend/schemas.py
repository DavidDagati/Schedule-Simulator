from mongoengine import *

class Course(Document):
    name = StringField(required=True)
    department = ObjectIdField(required=True) #References Departments
    course_code = StringField(required=True)
    term = StringField(required=True)
    description = StringField()
    meta = {'collection': 'courses'}

class Department(Document):
    name = StringField(required=True)
    code = StringField(required=True)
    meta = {'collection': 'departments'}

class Program(Document):
    name = StringField(required=True)
    department = ObjectIdField(required=True) #References Departments
    meta = {'collection': 'programs'}

#Relationship: Courses required by a program
class RequiredCourses(Document):
    program = ObjectIdField(required=True) #References Programs
    course = ObjectIdField(required=True) #References Courses
    meta = {'collection': 'programs'}