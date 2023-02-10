import express from 'express'
import diariesRouter from './routes/diaries'

const app = express();
app.use(express.json());
app.use('/api/diaries', diariesRouter);

const PORTR = 5000;

app.get('/', (_req, res) => {
    res.send('Hello World!')
})

app.listen(PORTR, () => {
    console.log(`Server Ragnar Lockbrock started on port ${PORTR}`);
})
