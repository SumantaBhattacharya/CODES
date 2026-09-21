import express from "express";
import Redis from "ioredis";

const app = express();

const redisClient = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

app.use(express.json());

function otpKey(phoneNumber) {
  return `otp:${phoneNumber}`;
}

app.post("/otp", async (req, res) => {
  const { phoneNumber } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000);

  await redisClient.set(otpKey(phoneNumber), otp, "EX", 60); // Set OTP with a TTL of 60 seconds, EXpiry

  return res.status(200).json({ msg: `OTP sent to ${phoneNumber}`, otp }); // In a real application, you would send the OTP via SMS
});

app.post("/otp/verify", async (req, res) => {
    const { phoneNumber, otp } = req.body;

    // getting the otp attached to that phone no.
    const savedOtp = await redisClient.get(otpKey(phoneNumber))

    if (!savedOtp) {
        return res.status(400).json({ msg: `OTP Expired or not found`}); 
    }

    if (savedOtp !== otp) {
        return res.status(400).json({ msg: `Invalid OTP`}); 
    }

    await redisClient.del(otpKey(phoneNumber));

    return res.json({
        success: true,
        message: "OTP verified",
    });
});

app.get("/otp/:phoneNumber/ttl", async (req, res) => {
    const ttl = await redisClient.ttl(otpKey(req.params.phoneNumber));

    return res.json({ttl: ttl})
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
      // middleware
      console.log(`Server running at http://localhost:${port}`);
    });