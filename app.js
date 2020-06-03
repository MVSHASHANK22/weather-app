const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
const https=require("https");
app.get("/",function(req,res)
{
  res.sendFile(__dirname + "/index.html");
//  const url="https://api.openweathermap.org/data/2.5/weather?q=London&appid=d9ec8f4a2c87391a91012838edfd4636&units=metric"
//   https.get(url,function(response)
// {
//   console.log(response.statusCode);
//   response.on("data",function(data)
// {
//   const weather=JSON.parse(data);
//   const temp=weather.main.temp;
//   const icon=weather.main.icon;
//   const imgicon="http://openweathermap.org/img/wn/"+icon"+"@2x.png";
//   res.write("<h1>The temperature is " + temp + " degree celsius</h1>");
//   res.write("<img  src=imgicon>")
//   res.send();
// })
// })

});
app.post("/",function(req,res)
{
  var place=req.body.city;
   const url="https://api.openweathermap.org/data/2.5/weather?q=" +place+ "&appid=d9ec8f4a2c87391a91012838edfd4636&units=metric"
    https.get(url,function(response)
  {
    console.log(response.statusCode);
    response.on("data",function(data)
  {
    const weather=JSON.parse(data);
    const temp=weather.main.temp;
    const icon=weather.weather[0].icon;
    const imgicon="http://openweathermap.org/img/wn/"+icon+"@2x.png";
    res.write("<h1>The temperature is " + temp + " degree celsius</h1>");
    res.write("<img  src="+imgicon+">")
    res.send();
  })
  })
})
app.listen(3000,function()
{
  console.log("server started");
});
