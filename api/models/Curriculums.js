/**
 * Curriculums.js
 *
 * @description :: The Curriculums table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'curriculums',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'string',
      required: true,
      primaryKey: true,
      size: 30
    },
    userID: {
      type: 'integer',
      required: false,
      index: true,
      size: 11,
      defaultsTo: null,
      model: 'users'
    },
    curriculumChoiceID: {
      type: 'integer',
      required: false,
      index: true,
      size: 11,
      defaultsTo: null,
      model: 'competences'
    }
  }
};