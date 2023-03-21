const express = require('express')
const cors = require('cors')
const port =process.env.PORT || 5000;
const app= express()
require('dotenv').config()

app.use(cors())
app.use(express.json())


async function run(){
    try{

    }
    finally{

    }
}
run().catch((error)=>{console.log(error)})

app.get('/',async(req,res)=>{
    res.send('hero rider running')
})

app.listen(port,()=>console.log(`hero rider server run on ${port}`))