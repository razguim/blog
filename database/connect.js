import mongoose from 'mongoose';

const connect = () => {
    const url = "mongodb+srv://razguimakram:ProjectOneOne3aca@firstproject.ay8of1g.mongodb.net/Blog"
  try {
    mongoose.connect(url);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log(error);
    console.log("Could not connect database!");
  }
};

export default connect