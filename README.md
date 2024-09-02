```
Nest JS
Node v20.16.0 --lts
```

## Request Limit
### 관련 Error code
 - 429 TOO_MANY_REQUESTS

app.module.ts
```
ThrottlerModule.forRoot([
  {
    name: 'short',
    ttl: 1000,
    limit: 100,
  },
  {
    name: 'medium',
    ttl: 10000,
    limit: 500,
  },
  {
    name: 'long',
    ttl: 60000,
    limit: 3000,
  },
]),
```
```
{
  provide: APP_GUARD,
  useClass: ThrottlerGuard,
},
```
