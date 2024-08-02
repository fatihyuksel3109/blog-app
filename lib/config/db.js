import mongoose from 'mongoose';

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://ecommerce:ecommerce123@cluster0.t3knnoz.mongodb.net/blog-app')
    
    console.log('DB connected');
}