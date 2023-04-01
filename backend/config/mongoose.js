const mongoose=require('mongoose');
const db = async () => {
  try {
    const conection = await mongoose
      .connect(
        "mongodb+srv://sriramlibra0:LGuAHGlLw36olHcf@cluster0.w1bazjr.mongodb.net/?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("Mongo db atlas connected");
      });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = db;
