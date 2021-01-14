const express = require("express");
const connectDB = require("./config/db");
const port = 3000 || process.env.PORT;
connectDB()
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));


require("./public/routes/htmlroutes")(app);
require("./public/routes/api-routes")(app);

app.listen(port , function(){
    console.log("Server is running on port"+ port);
})


