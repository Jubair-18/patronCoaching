import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/users.js";

const secret = 'cencelCulture';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id, isAdmin }, secret, { expiresIn: "365d" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, isAdmin, fname, lname, phoneNumber, address , classB } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const isAdmin = false;

    const result = await UserModal.create({ email, password: hashedPassword, isAdmin, fname, lname ,phoneNumber, address, classB });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "365d" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const admin = async (req, res) => {
  const email = 'patroncoaching2015@gmail.com'

  try {
    const oldUser = await UserModal.findOne({ email });

    res.send(oldUser);
    // console.log(data) 
  } catch (error) {
    console.log(error)
  }
}

export const userInfo = async (req,res) => {
  const data = await UserModal.find({})
  try {
    res.send(data)
  } catch (error) {
    console.log(error)
  }
}