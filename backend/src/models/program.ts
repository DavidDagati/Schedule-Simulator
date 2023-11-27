import mongoose from 'mongoose';

export type Program = {
    name: String;
    department: Number;
    requiredCourses?: Array<Number>;
}


export type Sequence = {
    
}

export type Term = Array<String>

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

export const ProgramModel = mongoose.model('Programs', ProgramSchema);