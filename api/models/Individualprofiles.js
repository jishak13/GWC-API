/**
 * Individualprofiles.js
 *
 * @description :: The Individualprofiles table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'individualprofiles',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    jobProfileChoiceID: {
      type: 'integer',
      required: false,
      index: true,
      size: 11,
      defaultsTo: null,
      model: 'jobprofilechoices'
    },
    userID: {
      type: 'integer',
      required: false,
      index: true,
      size: 11,
      defaultsTo: null,
      model: 'users'
    }
  }
};