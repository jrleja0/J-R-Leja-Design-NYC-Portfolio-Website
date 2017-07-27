const Sequelize = require('sequelize');
const db = require('../db');

const Image = db.define('image', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  path: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
});

module.exports = Image;
