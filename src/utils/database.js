import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongoDb is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_ideas",
      useNewUrlParser: true,
    });
    isConnected = true;
    console.log("mongoDb is connected");
  } catch (error) {
    console.log(error);
  }
};
