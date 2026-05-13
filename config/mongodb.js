const mongoose = require("mongoose");

const connectDatabase = async () => {

    try {

        const connection = await mongoose.connect(process.env.MONGODB_URI, {

            autoIndex: false,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000

        });

        console.log(`MongoDB Connected: ${connection.connection.host}`);

    } catch (error) {

        console.error("MongoDB Connection Error:", error.message);

        process.exit(1);

    }

};

module.exports = connectDatabase;
