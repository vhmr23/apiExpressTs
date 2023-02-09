import express from 'express';

const routes = express.Router();

routes.get('/', (_req, res) => {
    res.send('Get the all diaries')
});

routes.post('/', (_req, res) => {
    res.send('Post a new diary')
});

export default routes;