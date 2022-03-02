const express = require("express");
const app = express(); //isntancia do express
const bodyParser = require("body-parser");

const connection = require("./database/database");

//view engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

// Body parser para trabalhar com formulários
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Database connection
connection
    .authenticate()
    .then(() =>{
        console.log("Conexão feita com sucesso!");
    }).catch((error) => {
        console.log(error);
    })


//rota principal
app.get("/", (req, res) => {
    res.render("index");
})

//definir a porta que o app rodará
app.listen(8085, () => {
    console.log("Servidor rodando!")
})