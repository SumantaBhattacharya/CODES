import express from "express";
import { emailQueue } from "./queue.js";

const app = express();
app.use(express.json());

app.post("/welcome-email", async (req, res) => {
    const job = await emailQueue.add("send-email", {
        to: req.body.to,
        subject: req.body.subject,
        body: req.body.body,
        createdAt: new Date().toISOString()
    },{
       attempts: 3,
       backoff: {
          type: "exponential",
          delay: 1000
       }
    });

    res.json({
        queued: true,
        msg: "Job added to the emailQueue",
        jobId: job.id,
        name: job.name,
        data: job.data
    })

});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    // middleware
    console.log(`Server running at http://localhost:${port}`);
});