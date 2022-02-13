import express  from 'express';
import fs from "fs";
import cors from'cors';
import compression from 'compression';
const app = express();

const PORT = 5000;



app.use(cors({ origin: '*' }));
app.use(compression());

app.get("/api", (req, res) => {
    fs.readFile(__dirname + '/' + 'static/data.json', 'utf-8', (error, data) => {
        error ? console.log(error) : (res.end(data));
    });
});






app.listen(PORT,()=> console.log('SERVER START ' + PORT))