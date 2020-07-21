const mongoose = require('mongoose');
const schema = mongoose.Schema;

//  Configurando o mongoose
    mongoose.Promise = global.Promise;  // --> Linha de código p/ evitar erros
    mongoose.connect('mongodb://localhost/bancoMongo',{ 
        useNewUrlParser: true, useUnifiedTopology: true 
    }).then(() => {
        console.log('MongoDB is Connected...');
    }).catch((err) => {
        console.log(err);
    });

//  Definindo o Schema
    const userSchema = mongoose.Schema({
        name: String,
        lastName: String,
        age: Number,
    });
//  Definindo a Collection
const userModel = mongoose.model('users', userSchema);
//  Criando documento/registro
new userModel({
    name: "Caio",
    lastName: "Almeida",
    age: 21
}).save().then(() => {
    console.log('User created successfully');
}).catch((err) => {
    console.log('User not created: err ' + err);
});

/*  MongoBD

    O MongoDB é um banco de dados de documentos NoSQL sem esquema. Isso significa que você pode armazenar 
    documentos JSON nele e a estrutura desses documentos pode variar, pois não é aplicada como os bancos 
    de dados SQL. Essa é uma das vantagens do uso do NoSQL, pois acelera o desenvolvimento de aplicativos 
    e reduz a complexidade das implantações.

    --> É um banco de dados orientado a documentos, diferente dos bancos de dados tradicionais que seguem o 
    modelo relacional.

    A primeira diferença entre os dois modelos é que o modelo orientado a documentos lida com documentos e não
    com registros como nos modelos relacionais onde tudo é representado de forma bidimensional, pois tabelas
    possuem duas dimensões: Linhas e colunas.

    Entre as empresas que já utilizam o MongoDB destacam-se: Globo.com, SourceForge, FourSquare, MailBox 
    (serviço de e-mail do Dropbox), LinkedIn, SAP, MTV, Pearson Education, e muitos outros. 

    --> Mongoose

        Mongoose é uma biblioteca ODM (Object Data Modeling) para MongoDB e Node.js. Ele gerencia relacionamentos 
        entre dados, fornece validação de esquema e é usado para converter entre objetos no código e a representação 
        desses objetos no MongoDB.

        É um módulo que nos permite trabalhar com o mongodb diretamente do node!!

    INSTALAÇÃO:

        $ npm install --save mongoose

    CONEXÃO:

        const mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost/nomeDoBanco', { useNewUrlParser: true, useUnifiedTopology: true });

        { useNewUrlParser: true, useUnifiedTopology: true } --> Serve para evitar um erro de versão que tenho no meu caso.

    DEFININDO SCHEMA

        Tudo no mogoose começa com um esquema(Schema).Cada esquema é mapeado para uma coleção do MongoDB e define
        a forma dos documentos nessa coleção.

        SEGUINDO EXEMPLO:

        const userSchema = mongoose.Schema({
            name: String,   --> Uma forma abreviada {type: String}
            lastNamne: String,
            email: {type: String, require: true}, --> require: true define que uma informação seja obrigatória
            idade: Number
        });

    OS SchemaTypes PERMITIDOS SÃO:

        ->   String      ->   Number      ->   Date        ->   Buffer
        ->   Boolean     ->   Mixed       ->   ObjectId    ->   Array
        ->   Decimal128  ->   Map

    CRIANDO UM MODEL

        Para usar a nossa definição de esquema, nós precisamos converter o nosso Schema em um módel. Para fazer
        isso passamos o seguinte comando: mongoose.model('modelName', schema)

        SEGUINDO EXEMPLO:

            mongoose.model('users', userSchema);

*/