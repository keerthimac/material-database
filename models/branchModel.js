module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define(
    "branch",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      branchCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      branchLocation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return Branch;
};
