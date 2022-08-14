module.exports = (sequelize, DataTypes) => {
  const plumFittingInfo = sequelize.define(
    "plumFittingInfo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumFittingInfo;
};
