var client = require("swagger-client")
var callback = function() {};

var wfClient = new client({
  url: 'https://api.westfield.io/swagger.json?version=1',
  success: function() {
    callback(wfClient.apis.default);
  }
});

module.exports = {
  ready: function(cb) {
    callback = cb;
  }
}