// setup for conect mongoose to mongodb
import mongoose from "mongoose";

const databaseURL = "mongodb+srv://matheussouzaribeiro:wdSneFAcWlYBjUoU@cluster0.nawsmmd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL || databaseURL);
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed");
        console.log(error);
    }
};

export const close = async () => {
    await mongoose.connection.close();
};

export default mongoose;
