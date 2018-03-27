/**
 * Competencelevels.js
 *
 * @description :: The Competencelevels table
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  tableName: 'competencelevels',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    ID: {
      type: 'integer',
      required: true,
      primaryKey: true,
      size: 11
    },
    categoryID: {
      type: 'string',
      required: true,
      index: true,
      size: 3,
      model: 'categories'
    },
    level: {
      type: 'string',
      required: true,
      size: 1
    },
    levelCompetence: {
      type: 'string',
      required: true,
      size: 200
    },
    generalKnowledge: {
      type: 'string',
      required: true,
      size: 400
    },
    associatedCompetences: {
      type: 'string',
      required: true,
      size: 90
    },
    priorCompetences: {
      type: 'string',
      required: true,
      size: 35
    }
  }
};