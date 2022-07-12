const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  timezone: "+05:30",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `connection successful // connected to "${sequelize.config.database}" database`
        .cyan.underline
    );
  } catch (error) {
    console.log(`Error:${error.message}`.red.underline.bold);
  }
};

// initiate db object
const db = {};

//add sequelize instance to db object
db.sequelize = sequelize;

// making user model to db object
db.material = require("./materialModel")(sequelize, DataTypes);
db.bank = require("./banksModel")(sequelize, DataTypes);
db.branch = require("./branchModel")(sequelize, DataTypes);

//sync tables
const syncTables = async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log("table sync successful".cyan.underline);
  } catch (error) {
    console.log(`Error:${error.message}`.red.underline.bold);
  }
};

connectDB();
syncTables(); // optional -  When create new table

//define Relationships
//one to many relationship between banks and branches

db.bank.hasMany(db.branch, { foreignKey: "bankCode" });
db.branch.belongsTo(db.bank, { foreignKey: "bankCode" });

//export db object
module.exports = db;
