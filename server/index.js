const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const crypto=require('crypto')
const port = process.env.PORT || 5000;
const multer=require('multer')
const mongoose=require('mongoose')
 const MongoDBURI='mongodb+srv://Vick001:skosvi001@cluster0.xll3x.gcp.mongodb.net/GridFS?retryWrites=true&w=majority'
 const GridFsStorage=require('multer-gridfs-storage')
 const Grid=require('gridfs-stream')
const methodOverride=require('method-override')

 app.use(bodyParser.json())
 app.use(methodOverride('_method'))
app.set('view engine' ,'ejs')
//create aan instance of mongodb
const con=mongoose.createConnection(MongoDBURI,{useNewUrlParser:true,useUnifiedTopology:true})
con.once('open',()=>{
    const gfs=Grid(con.db, mongoose.mongo);
    gfs.collection('uploads')
})
//cfeate a storage engine
const storage = new GridFsStorage({
    url: MongoDBURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });
app.post("/uploads",upload.single('file'), (req, res) => {
  res.json({file:req.file})
});
mongoose.connect(MongoDBURI,{useNewUrlParser:true,useUnifiedTopology:true})

app.listen(port, () =>{console.log( `Server running on port ${port} 🔥`)});