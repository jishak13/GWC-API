/**
 * Curriculumchoices.js
 *
 * @description :: The Curriculumchoices table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'curriculumchoices',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    categoryid: {
      type: 'string',
      required: true,
      index: true,
      size: 3,
      model: 'categories'
    },
    jobLevelID: {
      type: 'integer',
      required: true,
      index: true,
      size: 11,
      model: 'joblevels'
    },
    curriculumChoice: {
      type: 'string',
      required: true,
      size: 252
    }
  }
};