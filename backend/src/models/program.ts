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
        type: [String] //Format of DEPT_CODE-COURSE_CODE, example: 0-4150 for COMP 4150
    }
})

export const ProgramModel = mongoose.model('Program', ProgramSchema);