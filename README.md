To interpolate your variables, just add the **$** marks to the original string and pass each value as a parameter:

```js
var i = require('ipol8');
var name = 'Porta8080';
i('Hello, $',name);
```

Alternatively, you can pass the values as an array to programatically make interpolations.

```js
i('Hello, $ $',['John','Doe']);
```
