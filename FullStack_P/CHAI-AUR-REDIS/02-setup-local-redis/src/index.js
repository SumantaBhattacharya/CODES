import express from "express";
import Redis from "ioredis";
import mongoose from "mongoose";

const app = express();

const redisClient = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

app.get("/redis", async (req, res) => {
    const reply = await redisClient.ping();
    res.json({ redis: `${reply}` });
});

app.get("/mongo", async (req, res) => {

    try {

        const url = process.env.MONGO_URL || "mongodb://localhost:27017/redis";

        if (mongoose.connection.readyState === 0) {
            const connectionInstance = await mongoose.connect(url);
        }
    
        res.json({
            mongo: `MongoDB connected! DB HOST: ${mongoose.connection.host}`,
            dbName: `Connected to DB: ${mongoose.connection.name}`,
        });
        
    }catch(err){
        console.log("DB Connection Failed", err.message);
        res.status(500).json({ err: err.message });
        // process.exit(1);
    }
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
      // middleware
      console.log(`Server running at http://localhost:${port}`);
    });