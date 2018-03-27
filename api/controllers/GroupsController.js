/**
 * GroupsController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    
 
    AddGroup: (req,res) => {
    sails.log("The id is : " + req.param('id'));
    sails.log("The id is : " + req.param('name'));
    sails.log("The id is : " + req.param('description'));
    Groupcategories.query("Insert Into Groups(ID,Name,Description) Values( '" +req.param('id') + "', '"+req.param('name') + "', '"+req.param('description') +"');", [], (err,results) => {
        if(err) {
            res.status(404).send("Query unable to execute, Error:  " + err );
        } else if ( results != undefined) {
            res.status(200).send( results);
        } else {
            res.status(200).send(results);
        }
    })
    }

};