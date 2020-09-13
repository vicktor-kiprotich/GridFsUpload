const express=require('express')
const app=express();
const port = process.env.PORT || 5000;

app.get("/", (req,res) => {
  res.send('Hello world')
});
app.post('/update',(res,req)=>{
    res.send('An update request')
});
app.put('/put',(res,req)=>{
    res.send('Got a put request')
});
app.delete('/delete',(res,req)=>{
    res.send('got a delete message')
})

app.listen(port, () =>{console.log( `Server running on port ${port} 🔥`)});