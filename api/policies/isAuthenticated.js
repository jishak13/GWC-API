var jwt = require('express-jwt');

var authCheck = jwt({
    secret: new Buffer('mBAaJPZS-rWLnO_aRM04lkcZPCEHxIctfy9HUQunw_sgJssaxWC780v8pcAva8S0','base64'),
    audience: '32n5bREOOrOoYvK0N92eW3BNWqbJyymY'
});
module.exports = authCheck;