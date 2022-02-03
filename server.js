const express = require('express')
const app = express()
const cors = require('cors')
const title = require('url-to-title');


app.use(cors())
app.get('/', (req,res) => res.send(`Hello from APIs`))
app.get('/siteInfo', async (req,res) => {
    let site = req.query.site
    if(!site){
        res.status(400).send('Site not found')
        return
    }

    try{
    let _title = await title(site)
    res.send({
        title: _title
    })
    }catch(e){
        res.status(422).send(`Error in getting title! ${e.toString()}`)
    }

})



app.listen(4193)