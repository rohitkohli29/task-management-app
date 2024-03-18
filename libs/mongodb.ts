import mongoose from 'mongoose'
const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
    throw new Error("MONGODB_URI must be defined");
}
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/taskmanagementdb');
        console.log('Mongodb is connected !');
    } catch (err: any) {
        console.log(err);
    }
}