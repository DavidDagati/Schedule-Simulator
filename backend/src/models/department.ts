import mongoose from 'mongoose';

export type Department = {
    name: String;
    code: Number;
}

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: Number,
        required: true,
    }
})

export const DepartmentModel = mongoose.model('Department', DepartmentSchema);