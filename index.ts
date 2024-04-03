import path from 'path';
import express from "express";
import cors from 'cors';
import routes from "./src/routes/routes";
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use('/function', routes);

app.use(express.static(path.join(__dirname, '/src/views')));

console.log(__dirname)
console.log(path.basename(__filename))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/views/landing-page.html');
});

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
});