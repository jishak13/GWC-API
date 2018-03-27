/**
 * Joblevels.js
 *
 * @description :: The Joblevels table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'joblevels',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    title: {
      type: 'string',
      required: true,
      size: 14
    },
    description: {
      type: 'string',
      required: true,
      size: 167
    },
    examples: {
      type: 'string',
      required: true,
      size: 173
    }
  }
};