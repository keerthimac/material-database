module.exports = (sequelize, DataTypes) => {
  const plumPipeInfo = sequelize.define(
    "plumPipeInfo",
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
  return plumPipeInfo;
};
