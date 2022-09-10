const mongoose = require("mongoose");
module.exports = async (req, res) => {
  if (!req.file)
    return res.status(400).send({
      key: "file",
      message: " Pleases upload a file!",
    });

  const { path, originalname, mimetype, encoding, size } = req.file;
  if (!path) {
    return res.status(400).send({
      key: "file",
      message: "File not found!",
    });
  }
  //check if image exists
  const image = await mongoose.model("Asset").findOne({ name: originalname });
  if (image) {
    return res.status(400).send({
      key: "file",
      message: "File already exists!",
    });
  }
  const img = require("fs").readFileSync(path);
  const encode_img = img.toString("base64");
  const finalImg = {
    mimetype: mimetype,
    content: new Buffer.from(encode_img, "base64"),
    encoding: encoding,
    size: size,
    name: originalname,
    type: mimetype,
    source: path,
  };

  const asset = await mongoose.model("Asset").create(finalImg);
  return res.status(200).send({
    key: "file",
    message: "File uploaded successfully!",
  });
};
