const express = require('express')
const app = express()
const bodyparser = require('body-parser') 
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/latihan',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
  console.log('berhasil connect ke database')
}).catch((e) =>{
  console.log(e)
  console.log('gagal connect ke database')
})

app.use(bodyparser.json({
    extends: true,
    limit: '20mb' 
}))

app.use(bodyparser.urlencoded({
    extends: true,
    limit: '20mb'
}))

app.get('/', (req, res) => {
  res.send('<h1>tuhan yang terbaik</h1>')
})
//req param
app.get('/daerah/:namadaerah/:id', (req, res) => {
    const namadaerah = req.params.namadaerah
    const iddaerah = req.params.id
  res.send('Anda Di : ' + namadaerah + ' Id Daerah : ' + iddaerah)  
})
 //req buddy
//app.post('/register', (req, res) =>{
//res.json(req.body)
//console.log(req.body)
//})
//const useRoutes = require('.')
app.use('/user/', require('./routes/User'))
app.use('/user/', require('./routes/kegiatan'))


app.listen(3000, () => {
    console.log('server Startet')
})
