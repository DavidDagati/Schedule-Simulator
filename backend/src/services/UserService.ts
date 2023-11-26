import mongoose from "mongoose";
import { UserModel } from "../models/user";

class UserService {
    async isUserAdmin(userId: mongoose.Types.ObjectId) {
        const user = await UserModel.findById(userId)
        return user?.isAdmin
    }
}

export const userService = new UserService()