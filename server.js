// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()
const upload = require('multer')()

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})

app.post("/upload", upload.single("fileToUpload"), (request, response) => {
  console.log(request.file)
  response.status(200).json({filesize: request.file.size})
})

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
