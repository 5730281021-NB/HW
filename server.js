const express = require('express')
const app = express()

const config = {
  host: '10.1.1.5',
  user: 'MCAPI51',
  password: 'MCAPI5ONE'
}

const pool = require('node-jt400').pool(config);

app.get('/', async function (req,res) {
  var st = await ("Select * From MBRFLIB/PM100MP WHERE PNID=1")
  let q1 =  await pool.query(st)
  //await res.send('Hello World2 ' + q1)
} )

app.get('/:PNID', async function (req,res) {
  var st = await ("Select * From MBRFLIB/PM100MP WHERE PNID="+req.params.PNID)
  let q1 =  await pool.query(st)
  //await res.send('Hello World2 ' + q1)
} )
  

app.listen(8020, () => {
  console.log('Start server at port 8020.')
})