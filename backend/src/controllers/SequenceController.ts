import express from 'express'

export const sequence = (app: express.Router) => {
    const route = express.Router();
    app.use('/sequence', route);

    app.get('/', async (req, res, next) => {
        return 'home sequence route'
    })
}