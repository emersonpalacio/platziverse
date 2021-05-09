# Platzivert-db

## Ussage

```js
const setupDatabase = require("Platzivert-db");

setupDatabase(config)
  .then((db) => {
    const { Agent, Metric } = db;
    const Agent = db.Agent;
    const Metric = db.Metric;
  })
  .catch((err) => console.error(err));
```

# Platzivert
