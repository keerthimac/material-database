module.exports = (sequelize, DataTypes) => {
  const PlumFittingType = sequelize.define(
    "PlumFittingType",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      PlumFittingType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return PlumFittingType;
};
