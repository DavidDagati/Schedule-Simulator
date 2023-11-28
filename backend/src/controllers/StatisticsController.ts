import express from 'express'
import { ProgramModel } from '../models/program';
import mongoose from 'mongoose';
import { DepartmentModel } from '../models/department';
import { CourseModel } from '../models/course';
import { UserModel } from '../models/user';

export const statistics = (app: express.Router) => {
    const route = express.Router();
    app.use('/stats', route);

    route.post('/', async(req, res, next) => {
        try {
            const password = await req.body.password
            const adminUser = await UserModel.findOne({username: 'admin'})
            if(adminUser?.password === password) {
                return res.json({
                    programCount: await ProgramModel.countDocuments({}),
                    departmentCount: await DepartmentModel.countDocuments({}),
                    courseCount: await CourseModel.countDocuments({})
                })
            }
            else {
                throw new Error('Not Authorized')
            }
        } catch(err) {
            next(err)
        }
    })
}