const Sequelize = require('sequelize');

const app = require('../app');

const User = app.define('m_user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    //allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    //allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  isDeleted: Sequelize.TINYINT,
});

User.sync();

module.exports = User;
