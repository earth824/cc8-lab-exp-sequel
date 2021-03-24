module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    'Department',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      budget: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0
      }
    },
    {
      timestamps: false,
      tableName: 'departments'
    }
  );

  Department.associate = models => {
    Department.hasMany(models.Employee, {
      foreignKey: {
        name: 'departmentId',
        allowNull: false,
        field: 'department_id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });
  };

  return Department;
};
