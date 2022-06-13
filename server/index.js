const express = require('express')

const db = require("./models")

const cors = require("cors")


const app = express();
const port = 8000


const postrouter = require('./routes/Posts')



app.use(express.json())
app.use(cors())


app.use("/posts", postrouter)




db.sequelize.sync().then(() => {
    app.listen(port,()=>{
    console.log("im running on port " + port)

    });

})

