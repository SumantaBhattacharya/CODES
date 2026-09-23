import {Queue} from 'bullmq';

export const connection = {
        host: "localhost",
        port: 6379
    }

// Queue constructor
export const emailQueue = new Queue("emails", {
    connection
})
