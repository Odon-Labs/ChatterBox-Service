import express from 'express';

//app config
const app = express();

const port = 9093 || process.env.PORT

app.listen(port,()=>console.log(`Listening on port ${port}`))