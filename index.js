const express = require("express")
const bodyParser = require("body-parser")

const config = require("./config.json")

const app = express()

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

const homeController = require("./controllers/homeController")
app.get("/", homeController.get)

app.listen(config.port, () => {
    console.log(`App is running on ${config.port}`)
})