module.exports = (sequelize, DataTypes) => {
  const plumPipeInfo = sequelize.define(
    "plumPipeInfo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      plumPipeLengthMetric: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      plumPipeLengthImperial: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: false,
      timestamps: false,
    }
  );
  return plumPipeInfo;
};
