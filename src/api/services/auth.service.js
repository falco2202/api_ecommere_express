import User from "../models/User.js";
import CryptoJS from "crypto-js";

export const AuthService = {
  register: async (newUser) => {
    const user = new User({
      username: newUser.username,
      email: newUser.email,
      password: CryptoJS.AES.encrypt(
        newUser.password, 
        process.env.PASS_SECRET
      ).toString(),
    });

    try {
      const savedUser = await user.save();
      console.log(savedUser)
      return savedUser;
    } catch (error) {
      console.log(error);
    }
  },

  login: async (username, password) => {
    const user = await User.findOne({username: username});
    if(!user) 
      return -1; 

    const hashPass = CryptoJS.AES.decrypt(
      user.password, 
      process.env.PASS_SECRET
    );
    const pass = hashPass.toString(CryptoJS.enc.Utf8);
    if(password !== pass) {
      return -2;
    }
    return user;
  }
} 
