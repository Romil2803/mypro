const mongooes = require('mongoose');
// const mongoUri ="mongodb://127.0.0.1:27017/";
const mongoUri ="mongodb://localhost:27017/i-NoteBook"; // this is the default uri

const connecttoMongo = () => {
    mongooes.connect(mongoUri).then(() => {
        console.log("Connected to Mongo Successfully");
    }).catch((e) => {
        console.log("Error connecting to Mongo");
        console.log(e);
    });
}
module.exports = connecttoMongo;