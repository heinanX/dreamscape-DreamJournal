import mongoose from "mongoose";
import { app } from "./app";

async function connect() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect("mongodb://127.0.0.1:27017/dreamscapeBW");
    mongoose.connection.on("error", () => {
      console.log("error");
    });
    mongoose.connection.once("error", () => {
      console.log("server connected");
    });
    console.log('connected to mongoDB');
    
  } catch (error) {
    console.log(error);
  }
}

connect();

app.listen(3000, () => console.log("server is up"));
