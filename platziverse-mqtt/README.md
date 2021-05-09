# platziverse-mqtt

## `agent/conected`

```js
{
  agent: {
    uuid, // auto generar
      username, // define por configuración
      name, // define por configration
      hostname, // obetener del sistema operativo
      pid; // obetber del proceso
  }
}
```

## `agent\disconected`

```js
{
    agent: {
        uuid,
    }
}
```

## `agent/messa`

```js
{
    agent,
    metrics: [
        {
            type,
            value
        }
    ],
    timesstamp // se crea cuando creamoe el mensaje
}
```
