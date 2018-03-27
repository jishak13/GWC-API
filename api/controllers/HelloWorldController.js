/**
 * HelloWorldController
 *
 * @description :: Server-side logic for managing Helloworlds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controller
 */

module.exports = {
    
    hello : function(req,res) {
        res.status(200).send("Hey There");
    },

   
    
};

