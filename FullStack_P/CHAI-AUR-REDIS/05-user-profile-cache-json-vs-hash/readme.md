# **[***`05 User profile in Redis JSON vs HASH`***](https://youtu.be/MFnK1PRABDU?si=xZzKANk8WxlB6-wT)** 

[![05 User profile in Redis JSON vs HASH](https://img.youtube.com/vi/MFnK1PRABDU/0.jpg)](https://youtu.be/MFnK1PRABDU?si=xZzKANk8WxlB6-wT)

```bash
npm install express ioredis --registry=https://registry.npmjs.org --verbose --loglevel=verbose --progress=true --timing
```

```bash
curl.exe --% -X POST http://localhost:8000/user/1/json -H "Content-Type: application/json" -d "{\"name\":\"SUMANTA BHATTACHARYA\",\"email\":\"sumanta2004@gmail.com\",\"url\":\"https://github.com/SumantaBhattacharya\"}"  

curl.exe http://localhost:8000/user/1/json 
```

```bash
curl.exe --% -X POST http://localhost:8000/user/1/hash -H "Content-Type: application/json" -d "{\"name\":\"SUMANTA BHATTACHARYA\",\"email\":\"sumanta2004@gmail.com\",\"url\":\"https://github.com/SumantaBhattacharya\"}"  

curl.exe http://localhost:8000/user/1/hash 
```
- > `Set` 
    - *`store single variable`*

- > `hset` 
  - *`store object`*

- > `hgetall` 
  - *`gets the whole object`*

- > `hget` 
- > `hdel`
- > `hexists`

> *`Hashes` cannot store nested objects/arrays.*
- > *`HSET` only stores field→value pairs inside one key*
  - > *`hgetall` returns the object directly, When you `hgetall`, numeric values come back as strings*

<!-- updates gets easier, nums come as strings which is not in case for json, no need to parse the body -->