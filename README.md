Westfield JS SDK
=========

A simple module which uses swagger to and swagger-js to build an SDK for Westfield APIs

## Installation

```shell
  npm install https://github.com/alecraeside/westfield-js-sdk.git --save
```

## Usage

```js
  var westfield = require("westfield-js-sdk");

  westfield.ready(function(api) {

    api.get_centres({country:"au"}, function(response) {
      console.log("Westfield centres in Australia", response.obj.data);
    });

  })

```

## Release History

* 0.1.0 Initial release
