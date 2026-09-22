import express from "express";
import Redis from "ioredis";

const app = express();

const redisClient = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

app.use(express.json());

const QUEUE_KEY = "queue:emails";

app.post("/emails", async (req, res) => {
  const job = {
    to: req.body.to,
    subject: req.body.subject,
    body: req.body.body,
    createdAt: new Date().toISOString()
  }

  await redisClient.lpush(QUEUE_KEY, JSON.stringify(job));

  res.json({
    queued: true,
    job,
  })

})

app.get("/emails/process-one", async (req, res) => {
  const rawJobs = await redisClient.rpop(QUEUE_KEY);// first-out (right pop)

  if (!rawJobs) {
    return res.json({
      message: "No jobs in the queue",
    })
  }

  // Redis stores data as strings only
  const job = JSON.parse(rawJobs);

  return res.json({
    message: "Email sent",
    job,
  })

})

const port = process.env.PORT || 8000;

app.listen(port, () => {
      // middleware
      console.log(`Server running at http://localhost:${port}`);
    });