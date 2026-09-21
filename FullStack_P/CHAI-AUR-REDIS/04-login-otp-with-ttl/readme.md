# **[***`04 Building a OTP verification with Redis`***](https://youtu.be/MlxmA5_cc_Y?si=4dJSnfPr98RXuAub)**  

[![04 Building a OTP verification with Redis](https://img.youtube.com/vi/MlxmA5_cc_Y/0.jpg)](https://youtu.be/MlxmA5_cc_Y?si=4dJSnfPr98RXuAub)

```bash
npm install express ioredis --registry=https://registry.npmjs.org --verbose --loglevel=verbose --progress=true --timing
```

```js
app.get redisClient.ttl();
```

```bash
curl.exe --% -X POST http://localhost:8000/otp -H "Content-Type: application/json" -d "{\"phoneNumber\":\"Phone-Number\"}"

http://localhost:8000/otp/Phone-Number/ttl 

curl.exe --% -X POST http://localhost:8000/otp/verify -H "Content-Type: application/json" -d "{\"phoneNumber\":\"9957813386\",\"otp\":\"OTP-Num\"}" 
```

- *`Template literals always return strings`*
- *`ioredis automatically converts primitive types like number and boolean to strings`*
  - *`Only objects and arrays require JSON.stringify`*