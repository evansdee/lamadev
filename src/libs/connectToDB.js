import mongoose from "mongoose";

const connection = {};
export async function connectToDb() {
  try {
    if (!process.env.MONGO) {
        throw new Error("MONGO environment variable is missing");
      }
    if (connection.isConnected) {
      console.log("usoing existing connection");

      return;
    }
    const db = await mongoose.connect(process.env.MONGO);

    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to db");
  }
}
