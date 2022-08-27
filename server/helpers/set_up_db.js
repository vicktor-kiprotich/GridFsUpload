const mongoose = require("mongoose");
const Grid = require("gridfs-stream");

module.exports = async () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const connection = mongoose.connection;
  connection
    .once("open", () => {
      console.log("Database connection established  successfully");
      gridfsBucket = new mongoose.mongo.GridFSBucket(connection.db, {
        bucketName: "files",
      });
      gfs = Grid(connection.db, mongoose.mongo);
      gfs.collection("files");
    })
    .on("error", (err) => {
      console.log(err);
    });
};
