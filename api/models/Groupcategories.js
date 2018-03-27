/**
 * Groupcategories.js
 *
 * @description :: The Groupcategories table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'groupcategories',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    'Category Description': {
      type: 'string',
      required: true,
      size: 175
    },
    groupID: {
      type: 'string',
      required: true,
      size: 1,
      model: 'groups'
    },
    'Category Name': {
      type: 'string',
      required: true,
      size: 47
    },
    description: {
      type: 'string',
      required: true,
      size: 80
    },
    name: {
      type: 'string',
      required: true,
      size: 40
    }
  }

};