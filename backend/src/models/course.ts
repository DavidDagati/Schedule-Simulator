import mongoose from 'mongoose';

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
    //TODO: Add prerequisites and antirequisites
})

export const CourseModel = mongoose.model('Course', CourseSchema);