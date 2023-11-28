import mongoose from 'mongoose';

export type User = {
    username: String;
    password?: String;
    isAdmin: Boolean;
}

//Change back to use proper hashed passwords
const UserSchema = new mongoose.Schema<User>({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

export const UserModel = mongoose.model<User>('User', UserSchema);