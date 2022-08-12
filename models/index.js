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
db.material = require("./materials/materialModel")(sequelize, DataTypes);
db.bank = require("./banks/banksModel")(sequelize, DataTypes);
db.branch = require("./banks/branchModel")(sequelize, DataTypes);

//Plumbing
db.plumSize = require("./materials/plumbing/plumSizeModel")(
  sequelize,
  DataTypes
);
db.plumGrade = require("./materials/plumbing/plumGradeModel")(
  sequelize,
  DataTypes
);
db.plumPipePrice = require("./materials/plumbing/plumPipePriceModel")(
  sequelize,
  DataTypes
);
db.plumFittingType = require("./materials/plumbing/plumFittingTypeModel")(
  sequelize,
  DataTypes
);
db.plumFitting = require("./materials/plumbing/plumFittingModel")(
  sequelize,
  DataTypes
);
db.plumFittingPrice = require("./materials/plumbing/plumFittingPriceModel")(
  sequelize,
  DataTypes
);
db.plumPriceVersion = require("./materials/plumbing/plumPriceVersionModel")(
  sequelize,
  DataTypes
);

db.plumBrand = require("./materials/plumbing/plumBrandModel")(
  sequelize,
  DataTypes
);

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

//define Relationships

//fitting Relationships
db.plumFittingType.hasMany(db.plumFitting, { foreignKey: "plumFittingTypeId" });
db.plumFitting.belongsTo(db.plumFittingType, {
  foreignKey: "plumFittingTypeId",
});

db.plumFitting.hasMany(db.plumFittingPrice, {
  foreignKey: "plumFittingId",
});
db.plumFittingPrice.belongsTo(db.plumFitting, {
  foreignKey: "plumFittingId",
});

db.plumSize.hasMany(db.plumFittingPrice, { foreignKey: "plumSizeId" });
db.plumFittingPrice.belongsTo(db.plumSize, { foreignKey: "plumSizeId" });

db.plumPriceVersion.hasMany(db.plumFittingPrice, {
  foreignKey: "plumPriceVersionId",
});
db.plumFittingPrice.belongsTo(db.plumPriceVersion, {
  foreignKey: "plumPriceVersionId",
});

db.plumBrand.hasMany(db.plumFittingPrice, { foreignKey: "plumBrandId" });
db.plumFittingPrice.belongsTo(db.plumBrand, { foreignKey: "plumBrandId" });

//Pipe Relationships
db.plumGrade.hasMany(db.plumPipePrice, { foreignKey: "plumGradeId" });
db.plumPipePrice.belongsTo(db.plumGrade, { foreignKey: "plumGradeId" });

db.plumPriceVersion.hasMany(db.plumPipePrice, {
  foreignKey: "plumPriceVersionId",
});
db.plumPipePrice.belongsTo(db.plumPriceVersion, {
  foreignKey: "plumPriceVersionId",
});

db.plumSize.hasMany(db.plumPipePrice, { foreignKey: "plumSizeId" });
db.plumPipePrice.belongsTo(db.plumSize, { foreignKey: "plumSizeId" });

db.plumBrand.hasMany(db.plumPipePrice, { foreignKey: "plumBrandId" });
db.plumPipePrice.belongsTo(db.plumBrand, { foreignKey: "plumBrandId" });

//export db object
module.exports = db;
