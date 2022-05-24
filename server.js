const express = require('express'),
    app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(require('./routes'));

const connection = require('./config/connection');

connection.once("open", ()=>{
    app.listen(PORT, ()=>{
        console.log(`listening on ${PORT}`);
    });
})

