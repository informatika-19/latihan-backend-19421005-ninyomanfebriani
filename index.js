const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json ({
    extended: true,
    limit:'20mb'
}))

app.use(bodyParser.urlencoded ({
    extended: true,
    limit: '20mb'
}))
 
app.get('/', (req, res) => {
  res.send('<h1>tuhan yang terbaik</h1>')
})

app.get('/profile/:username/:id', (req, res) => {
    console.log(req.params)
    res.send('Username Anda ' + req.params.username)
})

app.get('/daerah/:namadaerah/:id', (req, res) => {
    const namaDaerah = req.params.namadaerah
    const idDaerah = req.params.id
    res.send('Anda di ' + namaDaerah + 'id daerah = ' + namaDaerah)
})

app.post('/register', (req,res) => {
    console.log(req.body)
    res.json(req.body)
})

app.listen(3000, () => {
    console. log('Server Started')
})