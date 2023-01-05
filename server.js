import express from 'express'
import path from 'path'

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 8000;
const app = express();

console.log(__dirname)
console.log(import.meta.url)

app.use(express.static(__dirname))
app.get('*', (req,res)=>{
    res.sendFile(path.resolve('src/index.html'))
});

app.listen(port,()=>{
    console.log(`server at ${port}`)
});
