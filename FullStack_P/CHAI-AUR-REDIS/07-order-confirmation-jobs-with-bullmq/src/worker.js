// Consumer

import { Worker } from "bullmq";

import { connection } from "./queue.js";

const emailWorker = new Worker("emails",
    async (job) => {
        console.log("Processing job", job.id, job.name, job.data);
        (await new Promise((resolve) => {
            setTimeout(() => {
            resolve()
        }, 1000)}));
        console.log("Finished job processing", job.id, job.name, job.data);
    },
    {
        connection
    }
)

emailWorker.on("completed", (job) => {
    console.log("Job completed", job.id, job.name, job.data);
});

emailWorker.on("failed", (job, err) => {
    console.log(`Job ${job.id}, ${job.name}, ${job.data} failed: with error ${err.message}`);
});

console.log("Worker listening on queue: emails");