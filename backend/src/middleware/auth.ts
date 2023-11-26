import mongoose from 'mongoose';
import express from 'express';
import { UserModel } from '../models/user';
import { userService } from '../services/UserService';

export const checkLoggedIn: express.RequestHandler = async (req, res, next) => {
    try {
        if(!req.session.userId) {
            throw new Error('Unauthorized, User is not logged in')
        }
        next()
    } catch(err) {
        next(err)
    }
};

export const checkAdmin: express.RequestHandler = async (req, res, next) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.session.userId)
        const user = await UserModel.findById(userId)
        if(!user?.isAdmin) {
            throw new Error('Unauthorized, user does not have admin permissions')
        }
        next()
    }
    catch(err) {
        next(err)
    }
}