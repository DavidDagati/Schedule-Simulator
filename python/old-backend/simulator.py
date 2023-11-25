from schemas import Program

# Logic Rules:
# Find all required classes for the program, and sort by class code
# Loop through classes, find all their pre-requisites recursively
# For each class that doesn't have pre-reqs, find the soonest possible slot
# For now, prioritize getting all requirements out of the way before electives

class Simulator():
    program = Program()

    def __init__(self, program):
        self.program = program

    def simulate(self):
        