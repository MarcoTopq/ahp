const Sequelize = require('sequelize');
const db = require('../bin/index');

const Kost = db.define('m_kost', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    unique: true,
    //allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    // unique: true,
    //allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    //allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    //allowNull: false
  },
  distance:{
    type: Sequelize.INTEGER,
    //allowNull: false
  },
  facilities:{
    type: Sequelize.INTEGER,
    //allowNull: false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE,
  isDeleted: Sequelize.TINYINT,
});

Kost.sync();

module.exports = Kost;
