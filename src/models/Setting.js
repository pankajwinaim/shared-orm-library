const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Setting = sequelize.define('Setting', {
  isNotificationEnabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  isNewDashboardEnabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  timezone: {
    type: DataTypes.STRING,
    defaultValue: 'UTC'
  }
});

module.exports = Setting;
