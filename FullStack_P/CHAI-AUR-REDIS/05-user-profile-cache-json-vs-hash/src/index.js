import express from "express";
import Redis from "ioredis";

const app = express();

const redisClient = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

app.use(express.json());

app.post("/user/:id/json" , async (req, res) => {
    await redisClient.set(`user:${req.params.id}:json`, JSON.stringify(req.body)); 
    return res.status(200).json({ 
        savedAs: "json",
        author: req.body
    });
})

app.get("/user/:id/json" , async (req, res) => {
    const userData = await redisClient.get(`user:${req.params.id}:json`);
    return res.status(200).json({ user: userData ? JSON.parse(userData) : null});
})

app.post("/user/:id/hash" , async (req, res) => {
    await redisClient.hset(`user:${req.params.id}:hash`, req.body);
    return res.status(200).json({
        savedAs: "hash",
        author: req.body
    });
})

// HSET only stores field→value pairs inside one key
// hgetall returns the object directly, When you hgetall, numeric values come back as strings
app.get("/user/:id/hash" , async (req, res) => {
    const userData = await redisClient.hgetall(`user:${req.params.id}:hash`);
    return res.status(200).json({ user: userData ? userData : null});
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
      // middleware
      console.log(`Server running at http://localhost:${port}`);
    });