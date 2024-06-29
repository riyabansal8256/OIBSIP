import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => { 
    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.tausk47.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully");
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    });

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database', error.message);
    });
};

export default Connection;
