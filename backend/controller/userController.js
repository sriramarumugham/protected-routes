const User = require("../model/User");
const generateToken = require("../config/generateJWT");
const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      console.log("nothing sent");
      res.status(400);
      throw new Error("Please Enter all the fields");
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error(" User exist please login");
    } else {
      const user = await User.create({ name, email, password });
      console.log(user);
      let token = user._id;
      if (user) {
        // return res.status(201).json({
        //   _id: user.id,
        //   name: user.name,
        //   email: user.email,
        //   token: generateToken(user._id),
        // });
        return res
          .status(200)
          .cookie("token", token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
          })
          .json({ success: true, user, token });
      } else {
        return res.status(400).json({ message: "please login" });
        // throw new Error("Failed to Creat the user");
      }
    }
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (user && user.password == password) {
    let token = user._id;
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email/password");
  }
};

const getHomePage = async (req, res) => {
  console.log(req.user);
  res.send("home page with logout button");
};
const userInfo = async (req, res) => {
  try {
    let token= req.body;
    // token = JSON.parse(token);
    console.log(token);
    const user = await User.findById({ token });
    console.log(user);
    res.send(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: token,
    });
    // res.status(200).json({"data":"user"});
  } catch (err) {
    console.log(err);
    return res.status(400);
  }
};
module.exports = { registerUser, authUser, getHomePage, userInfo };
