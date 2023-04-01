const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
  phone: {
    type: Number,
    default: 123456789,
  },
  school: {
    type: String,
    default: "some school",
  },
  address: {
    type: String,
    defult: "xyz street, y city, z conutnry",
  },
});

const Info = mongoose.model("Info", InfoSchema);
module.exports = Info;
