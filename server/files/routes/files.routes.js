const helpers = require("../../helpers");
const filesController = require("../logic");

module.exports = (app) => {
  app.post(
    "/app/v1/files/upload",
    helpers.upload.single("file"),
    filesController.upload
  );
  app.get("/app/v1/files", filesController.getAll);
  app.get("/app/v1/file/:", filesController.getById);
  app.get("/app/v1/file/download", filesController.download);
};
