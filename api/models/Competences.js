/**
 * Competences.js
 *
 * @description :: The Competences table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'competences',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    competenceLevelID: {
      type: 'integer',
      required: true,
      index: true,
      size: 11,
      model: 'competencelevels'
    },
    categoryid: {
      type: 'string',
      required: true,
      index: true,
      size: 3,
      model: 'categories'
    },
    Level: {
      type: 'integer',
      required: true,
      size: 11
    },
    subLevel: {
      type: 'integer',
      required: true,
      size: 11
    },
    statement: {
      type: 'string',
      required: true,
      size: 158
    },
    details: {
      type: 'string',
      required: true,
      size: 547
    },
    knowledge: {
      type: 'string',
      required: true,
      size: 278
    },
    criteria: {
      type: 'string',
      required: true,
      size: 255
    },
    examples: {
      type: 'string',
      required: true,
      size: 200
    }
  }
};