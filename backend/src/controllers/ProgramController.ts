import express from 'express'
import { ProgramModel } from '../models/program';
import mongoose from 'mongoose';

export const program = (app: express.Router) => {
    const route = express.Router();
    app.use('/program', route);

    route.get('/', async(req, res, next) => {
        try {
            return res.json(await ProgramModel.find({}))
        } catch(err) {
            next(err)
        }
    })

    // app.get('/:id', async(req, res, next) => {
    //     const programId = req.params.id
    //     const program = await ProgramModel.findById(programId)

    // })

    //Get default sequence from programId
    route.post('/', async (req, res, next) => {
        try {
            const {programId} = req.body
            const program = await ProgramModel.findById(programId)
            return res.json(program?.defaultSequence)
        } catch(err) {
            next(err)
        }
    })

    route.get('/', async (req, res, next) => {
        return 'home sequence route'
    })
}