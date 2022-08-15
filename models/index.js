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
db.plumType = require("./materials/plumbing/plumTypeModel")(
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

db.plumPipeInfo = require("./materials/plumbing/plumPipeInfoModel")(
  sequelize,
  DataTypes
);

db.plumFittingInfo = require("./materials/plumbing/plumFittingInfoModel")(
  sequelize,
  DataTypes
);

db.plumFitting = require("./materials/plumbing/plumFittingModel")(
  sequelize,
  DataTypes
);

db.plumPipeEndType = require("./materials/plumbing/plumPipeEndTypeModel")(
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
db.plumType.hasMany(db.plumFittingInfo, {
  foreignKey: "plumTypeId",
});
db.plumFittingInfo.belongsTo(db.plumType, {
  foreignKey: "plumTypeId",
});

db.plumFitting.hasMany(db.plumFittingInfo, {
  foreignKey: "plumFittingId",
});
db.plumFittingInfo.belongsTo(db.plumFitting, {
  foreignKey: "plumFittingId",
});

db.plumSize.hasMany(db.plumFittingInfo, { foreignKey: "plumSizeId" });
db.plumFittingInfo.belongsTo(db.plumSize, { foreignKey: "plumSizeId" });

db.plumGrade.hasMany(db.plumFittingInfo, { foreignKey: "plumGradeId" });
db.plumFittingInfo.belongsTo(db.plumGrade, { foreignKey: "plumGradeId" });

db.plumBrand.hasMany(db.plumFittingInfo, { foreignKey: "plumBrandId" });
db.plumFittingInfo.belongsTo(db.plumBrand, { foreignKey: "plumBrandId" });

db.plumFittingInfo.hasMany(db.plumFittingPrice, {
  foreignKey: "plumFittingId",
});
db.plumFittingPrice.belongsTo(db.plumFittingInfo, {
  foreignKey: "plumFittingId",
});

db.plumPriceVersion.hasMany(db.plumFittingPrice, {
  foreignKey: "plumPriceVersionId",
});
db.plumFittingPrice.belongsTo(db.plumPriceVersion, {
  foreignKey: "plumPriceVersionId",
});

//Pipe Relationships
db.plumGrade.hasMany(db.plumPipeInfo, { foreignKey: "plumGradeId" });
db.plumPipeInfo.belongsTo(db.plumGrade, { foreignKey: "plumGradeId" });

db.plumSize.hasMany(db.plumPipeInfo, { foreignKey: "plumSizeId" });
db.plumPipeInfo.belongsTo(db.plumSize, { foreignKey: "plumSizeId" });

db.plumBrand.hasMany(db.plumPipeInfo, { foreignKey: "plumBrandId" });
db.plumPipeInfo.belongsTo(db.plumBrand, { foreignKey: "plumBrandId" });

db.plumType.hasMany(db.plumPipeInfo, { foreignKey: "plumTypeId" });
db.plumPipeInfo.belongsTo(db.plumType, { foreignKey: "plumTypeId" });

db.plumPipeEndType.hasMany(db.plumPipeInfo, {
  foreignKey: "plumPipeEndTypeId",
});
db.plumPipeInfo.belongsTo(db.plumPipeEndType, {
  foreignKey: "plumPipeEndTypeId",
});

db.plumPriceVersion.hasMany(db.plumPipePrice, {
  foreignKey: "plumPriceVersionId",
});
db.plumPipePrice.belongsTo(db.plumPriceVersion, {
  foreignKey: "plumPriceVersionId",
});

db.plumPipeInfo.hasMany(db.plumPipePrice, { foreignKey: "plumPipeInfoId" });
db.plumPipePrice.belongsTo(db.plumPipeInfo, { foreignKey: "plumPipeInfoId" });

//export db object
module.exports = db;
