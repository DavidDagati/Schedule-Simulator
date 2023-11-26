import mongoose from 'mongoose';

export type Program = {
    name: String;
    department: Number;
    requiredCourses?: Array<Number>;
}

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
        type: [String] //Format of DEPT_CODE-COURSE_CODE, example: 0-58
    }
})

export const ProgramModel = mongoose.model('Program', ProgramSchema);