/**
 * Groups.js
 *
 * @description :: The Groups table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'groups',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'string',
      required: true,
      primaryKey: true,
      size: 1
    },
    name: {
      type: 'string',
      required: true,
      size: 40
    },
    description: {
      type: 'string',
      required: true,
      size: 80
    }
  }
};