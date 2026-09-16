# **`Redis` - in-memory DB**

## **Used in**
- *`Cache`*
- *`Session Store`*
- *`OTP Store`*
- *`Rate Limiting`*
- *`JOB Queue`*

```yml
services:
    redis:
        image: redis:7-alpine
        container_name: redis
        ports:
            - "6379:6379"
        command: ["redis-server", "--appendonly", "yes"]
        volumes: 
            - redis-data:/data

    mongo:
        image: mongo:7
        container_name: mongo
        ports:
            - "27017-27017"
        environment: 
            MONGO_INITDB_DATABASE: redis
        volumes:
            - mongo-data:/data/db

volumes:
    redis-data:
    mongo-data:
```

```bash
docker compose up  
docker ps
docker compose ls   
docker network ls   
docker volume ls 
docker network ls | findstr chai-aur-redis
docker exec -it mongo mongo --eval "db.runCommand({ ping: 1 })"  
docker exec -it redis redis-cli ping   
docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Ports}}"  
docker system df 
docker info | findstr /i "Docker Root Dir"  
```

### **Notes**
- `Mongoose` 
  - *is an Object Data Modeling (ODM) library*


```js
app.post redisClient.set(KEY, req.body.message)
app.get redisClient.get(KEY);
app.delete redisClient.del(KEY);
app.get redisClient.exists(KEY);
app.get redisClient.ttl();
```

- > `Set` 
    - *`store single variable`*

- > `hset` 
  - *`store object`*

- > `hgetall` 
  - *`gets the whole object`*