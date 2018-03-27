/**
 * GroupcategoriesController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  GetBy: (req,res) => {
    sails.log("The parameter is : " + req.param('id'));
    Groupcategories.query("Select * from GWC.groupcategories where groupcategories.groupid like '" + req.param('id') + "';", [], (err,results) => {
        if(err) {
            res.status(404).send("Query unable to execute, Error:  " + err );
        } else if ( results != undefined) {
            res.status(200).send( results);
        } else {
            res.status(200).send(results);
        }
    })
  }

  //For the next Function
//   ,
//   {


//   }
  //For the next Function
//   ,
//   {


//   }
  //For the next Function
//   ,
//   {


//   }
};