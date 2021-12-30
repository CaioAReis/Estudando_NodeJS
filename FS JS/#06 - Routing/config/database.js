//  OBS: Algumas dependências estão com versões antigas pois
//  minha máquina é MUITO ruim e não roda as versões atuais!! T-T
//  Sigo usando versões antigas apenas para estudos!!

const mongoose = require("mongoose");
mongoose.Promisse = global.Promise;

mongoose.connect("mongodb://localhost/meu-banco")
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));