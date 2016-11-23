To interpolate your variables into one string, just add the **$** marks to the original string and pass each value as a parameter:

```js
var i = require('ipol8');
var name = 'Porta8080';
var output = i('Hello, $ and welcome to $!',name,'Ipol8');
```

You can pass any number of parameters.

Alternatively, you can pass the values as an array to programatically make interpolations.

```js
i('Hello, $ $',['John','Doe']);
```
