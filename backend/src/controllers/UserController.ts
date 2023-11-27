import express from 'express'
import mongoose from 'mongoose';
import argon2 from 'argon2'
import { UserModel } from '../models/user';

export const user = (app: express.Router) => {
    const route = express.Router();
    app.use('/user', route);

    route.get('/activeUser', async(req, res, next) => {
        try {
            const userId = req.session?.userId;
            if(!userId || !mongoose.isValidObjectId(userId)) {
                return res.json({
                    user: null,
                })
            }

            const user = await UserModel.findById(new mongoose.Types.ObjectId(userId));
            if(!user) throw new Error('User not found');

            return res.json({user})
        } catch(err) {
            next(err)
        }
    })

    // route.post('/login', async (req, res, next) => {
    //     try {
    //         const userLogin: {username: String, password: string} = req.body.userLogin;
      
    //         const user = await UserModel.findOne({username: userLogin.username});
    //         if (!user) {
    //           throw new Error(
    //             `User ${userLogin.username} not found`
    //           );
    //         }
    //         if (!passwordHash)
    //           throw new Error('User does not have a password');
    //         const verified = await argon2.verify(passwordHash, userLogin.password);
    //         if (!verified) throw new Error('Incorrect password');
      
    //         req.session.userId = user._id.toString();
    //         return res.json({ user });
    //       } catch (err) {
    //         next(err);
    //       }
    // })

    route.post('/logout', async(req, res, next) => {
        try {
            req.session.destroy(() => {
                return res.json({
                    success: true
                })
            })
        } catch(err) {
            next(err)
        }
    })
}