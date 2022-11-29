const app = require("express")()
const fs = require("fs")
const port = 3000

app.engine("routes", (filePath, options, callback) => {
   fs.readFile(filePath, (err, content) => {
      if (err) return callback(err)
      const rendered = content
         .toString()
         .replace("#title#", "<title>" + options.title + "</title>")
         .replace("#message#", "<h1>" + options.message + "</h1>")
         .replace("#content#", "<div>" + options.content + "</div>")
      return callback(null, rendered)
   })
})
app.set('views', './views') 
app.set('view engine', 'routes')


app.get('/1', (req, res) => {
   res.render("template", {title: "hi", message: "wat it do", content: "1"})
})
app.get('/2', (req, res) => {
   res.render("template", {title: "hey", message: "lskdjflksdaj", content: "22"})
})
app.get('/3', (req, res) => {
   res.render("template", {title: "hello", message: "how you doin", content: "333"})
})
app.get('/4', (req, res) => {
   res.render("template", {title: "hola", message: "what you doing ", content: "4444"})
})
app.get('/5', (req, res) => {
   res.render("template", {title: "aloha", message: "why you do dat", content: "55555"})
})

app.get('/6', (req, res) => {
   res.render("template2", {title: "sup", message: "wasup", content: "666666"})
})
app.get('/7', (req, res) => {
   res.render("template2", {title: "yo", message: "why?", content: "7777777"})
})
app.get('/8', (req, res) => {
   res.render("template2", {title: "howdy", message: "Howdy hey!!", content: "88888888"})
})
app.get('/9', (req, res) => {
   res.render("template2", {title: "howdy hey", message: "no", content: "99999999"})
})
app.get('/10', (req, res) => {
   res.render("template2", {title: "wassup", message: "hi there", content: "0000000000"})
})


app.listen(port, () => {
   console.log("listening");
})