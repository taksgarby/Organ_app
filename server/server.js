const express = require('express');
const cors = require('cors');
const createRouter = require('./helpers/create_router');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
           .then((client) => {
            const db = client.db('organ_app')
            const bodypartsCollection = db.collection('bodyparts')
            const bodypartsRouter = createRouter(bodypartsCollection)
            app.use('/api/bodyparts', bodypartsRouter)
           })
           .catch(console.error)

app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
    });
