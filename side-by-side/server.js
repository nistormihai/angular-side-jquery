const express = require('express')
const app = express()
const port = 3000

app.get('/', express.static(__dirname + '/static/'));

app.use('/oa', express.static(__dirname + '/oa/'));
app.use('/apex2', express.static(__dirname + '/apex2/dist/apex2'));

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

