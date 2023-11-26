import mongoose from 'mongoose';

export type User = {
    name: String;
    isAdmin: Boolean;
}

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        select: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

export const UserModel = mongoose.model('User', UserSchema);