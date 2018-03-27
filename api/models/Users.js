/**
 * Users.js
 *
 * @description :: The Users table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'users',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    fName: {
      type: 'string',
      required: true,
      size: 7
    },
    lName: {
      type: 'string',
      required: true,
      size: 10
    },
    gender: {
      type: 'string',
      required: true,
      size: 6
    },
    qualification: {
      type: 'string',
      required: true,
      size: 13
    },
    jobTitle: {
      type: 'string',
      required: true,
      size: 15
    },
    employer: {
      type: 'string',
      required: true,
      size: 23
    },
    placeOfWork: {
      type: 'string',
      required: true,
      size: 22
    },
    descriptionOfDuties: {
      type: 'string',
      required: false,
      size: 88,
      defaultsTo: null
    },
    userName: {
      type: 'string',
      required: true,
      size: 11
    },
    userPassword: {
      type: 'string',
      required: true,
      size: 8
    },
    dob: {
      type: 'string',
      required: true,
      size: 6
    },
    manager: {
      type: 'integer',
      required: true,
      index: true,
      size: 11,
      model: 'users'
    },
    type: {
      type: 'string',
      required: true,
      size: 1
    }
  },

  
};