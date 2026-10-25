import mongoose from "mongoose";
const connectdb = async() => {
    try {
        await mongoose.connect(process.env.MomgoDB_URI);
        console.log("mongodb connectef successfully");
    }
    catch (error) {
        console.error('Error: ${error.message}');
    }
}
export default connectdb;