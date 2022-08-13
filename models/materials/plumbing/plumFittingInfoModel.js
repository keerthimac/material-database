module.exports = (sequelize, DataTypes) => {
  const plumFittingInfo = sequelize.define(
    "plumFittingInfo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      plumFittingInfo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumFittingInfo;
};
