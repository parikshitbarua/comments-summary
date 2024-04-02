import path from "path";
import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());
// app.use();

console.log(__dirname)
console.log(path.basename(__filename))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/landing-page.html');
});

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
});