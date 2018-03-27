/**
 * Jobprofilechoices.js
 *
 * @description :: The Jobprofilechoices table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'jobprofilechoices',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    competenceId: {
      type: 'string',
      required: true,
      size: 3
    },
    jobLevelID: {
      type: 'integer',
      required: true,
      size: 11,
      model: 'joblevels'
    },
    choice: {
      type: 'string',
      required: true,
      size: 244
    }
  }
};