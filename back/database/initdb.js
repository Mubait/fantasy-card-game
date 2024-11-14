const Sequelize = require("sequelize");
const conf = require('./config')

const sequelize = new Sequelize("fantasycardgame", "root", "3572", {
  dialect: conf.dialect,
  host: conf.host,
  define: {
      timestamps: false
  }
});

sequelize.sync().then(result=>{}).catch(err=> console.log(err));

module.exports = {
  Sequelize,
  sequelize
}