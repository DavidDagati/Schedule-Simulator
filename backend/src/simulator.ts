import {Program, ProgramModel} from './models/program'

/*
    # Logic Rules:
    # Find all required classes for the program, and sort by class code
    # Loop through classes, find all their pre-requisites recursively
    # For each class that doesn't have pre-reqs, find the soonest possible slot
    # For now, prioritize getting all requirements out of the way before electives
*/

/**
 * Takes a program as input and outputs a simulated schedule in JSON
 * @param program 
 */
export const simulate = (program: ProgramModel) => {
    program.requiredCourses?.forEach((course) => {

    })

}