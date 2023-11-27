import mongoose from 'mongoose';

export type Course = {
    name: String;
    department: Number;
    course_code: Number;
    term: String;
    description: String;
    prerequisites: Array<String>;
    antirequisites: Array<String>;
}

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    department: {
        type: Number,
        ref: 'Department',
        required: true,
    },
    course_code: {
        type: Number,
        required: true
    },
    term: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    prerequisites: {
        type: [String] 
    },
    antirequisites: {
        type: [String]
    }
})

export const CourseModel = mongoose.model('Course', CourseSchema);