import express from 'express'
import { ProgramModel } from '../models/program';
import mongoose from 'mongoose';
import { DepartmentModel } from '../models/department';
import { CourseModel } from '../models/course';

export const statistics = (app: express.Router) => {
    const route = express.Router();
    app.use('/stats', route);

    //Make admin route
    route.get('/', async(req, res, next) => {
        try {
            return res.json({
                programCount: await ProgramModel.countDocuments({}),
                departmentCount: await DepartmentModel.countDocuments({}),
                courseCount: await CourseModel.countDocuments({})
            })
        } catch(err) {
            next(err)
        }
    })
}