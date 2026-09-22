# **[***`06 Email queue with redis lists`***](https://youtu.be/r005ciJ55DY?si=bgZLB6ouKbFVFY6N)**  
[![06 Email queue with redis lists](https://img.youtube.com/vi/r005ciJ55DY/0.jpg)](https://youtu.be/r005ciJ55DY?si=bgZLB6ouKbFVFY6N)


```bash
npm install express ioredis --registry=https://registry.npmjs.org --verbose --loglevel=verbose --progress=true --timing
```

```bash
curl.exe --% -X POST http://localhost:8000/emails -H "Content-Type: application/json" -d "{\"to\":\"sumanta2004@gmail.com\",\"subject\":\"Introduction\",\"body\":\"Responsible and Motivated Computer Application Student, Proficient in Java HTML CSS JavaScript\"}"

docker exec -it redis cat /data/appendonlydir/appendonly.aof.1.incr.aof

curl.exe --% -X POST http://localhost:8000/emails -H "Content-Type: application/json" -d "{\"to\":\"sumanta2004@gmail.com\",\"subject\":\"Achievements\",\"body\":\"Certified in Core Java by IISER, Certified in Full Stack Web Development by Apna College, Certified in Industrial Training Program in Full Stack Web Development by Euphoria GenX\"}"

```

```bash
docker exec -it redis redis-cli LRANGE queue:emails 0 -1 # read the whole queue, newest first.

docker exec -it redis redis-cli LINDEX queue:emails 0 # read the latest one
docker exec -it redis redis-cli LINDEX queue:emails -1  # read the oldest one
docker exec -it redis redis-cli TYPE queue:emails # to check the type like lists

docker exec redis redis-cli OBJECT ENCODING queue:emails # Encoding

docker exec -it redis redis-cli DEL queue:emails # delete permanently
```

> *Redis queue is basically left push and right pop*