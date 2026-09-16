# **[***`03 Site banner APIs with Redis`***](https://youtu.be/kYeDJhA4XIw?si=KF9IWV0cKGrcbUKE)**  
[![03 Site banner APIs with Redis](https://img.youtube.com/vi/kYeDJhA4XIw/0.jpg)](https://youtu.be/kYeDJhA4XIw?si=KF9IWV0cKGrcbUKE)

---

```bash
npm install express ioredis --registry=https://registry.npmjs.org --verbose --loglevel=verbose --progress=true --timing
```

```bash
curl.exe --% -X POST http://localhost:8000/banner -H "Content-Type: application/json" -d "{\"message\":\"Wellcome to Redix Tutorial\"}"
```

```js
app.post redisClient.set(KEY, req.body.message)
app.get redisClient.get(KEY);
app.delete redisClient.del(KEY);
app.get redisClient.exists(KEY);
```

- > `Set` 
    - *`store single variable`*
