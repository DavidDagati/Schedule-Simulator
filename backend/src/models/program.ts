import mongoose from 'mongoose';

const ProgramSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    department: {
        type: Number,
        ref: 'Department',
        required: true,
    },
    requiredCourses: {
        type: [String] //Format of DEPT_CODE-COURSE_CODE, example: COMP-4150
    },
    otherRequirements: {
        type: String
    },
    defaultSequence: {
        type: Object 
    }
})

export const ProgramModel = mongoose.model('Program', ProgramSchema);