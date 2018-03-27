/**
 * Categories.js
 *
 * @description :: The Categories table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'categories',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'string',
      required: true,
      primaryKey: true,
      size: 3
    },
    name: {
      type: 'string',
      required: true,
      size: 47
    },
    description: {
      type: 'string',
      required: true,
      size: 175
    },
    groupID: {
      type: 'string',
      required: true,
      index: true,
      size: 1,
      model: 'groups'
    }
  }
};