import mongoose from 'mongoose';

export type User = {
    username: String;
    passwordHash?: String;
    isAdmin: Boolean;
}

const UserSchema = new mongoose.Schema<User>({
    username: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
        select: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
})

export const UserModel = mongoose.model<User>('User', UserSchema);