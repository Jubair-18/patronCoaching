
import adminModel from '../models/admin.js'
import yearModel from '../models/year.js'

export const admin = async (req, res) => {
    const { name, degree, number } = req.body;
    try {
        const result = await adminModel.create({ name, degree, number });
        res.status(201).json({ result });

    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
  };

  export const year = async (req, res) => {
    const { year, students } = req.body;
  
    try {
        const result = await yearModel.create({ year, students });
        res.status(201).json({ result });

    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
      
      console.log(error);
    }
  };

  export const teacherlist = async (req, res) => {
    const data = await adminModel.find({});

    try {
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  }

  export const yearlist = async (req, res) => {
    const data = await yearModel.find({});
    
    try {
      res.send(data);
    } catch (error) {
      console.log(error);
    }
  }
