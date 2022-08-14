module.exports = (sequelize, DataTypes) => {
  const PlumType = sequelize.define(
    "PlumType",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      PlumType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return PlumType;
};
