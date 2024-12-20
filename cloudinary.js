const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "ddzac6hwh",
  api_key: "341626841196319",
  api_secret: "HWcCEjKvVgReXL40groKWlhIZEQ",
});

module.exports = cloudinary;