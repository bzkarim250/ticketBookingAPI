import mongoose from "mongoose";
import config from "../helpers/configEnv";

mongoose.set("strictQuery", false);

const dbConnect = async () => {
  try {
    await mongoose.connect(config.MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true});
    console.log("Database Connected!");
  } catch (error) {
    console.log("error",error.message);
  }
};

export default dbConnect;