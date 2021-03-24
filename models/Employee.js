module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    'Employee',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: DataTypes.STRING,
      salary: DataTypes.DECIMAL(10, 2)
    },
    {
      timestamps: false,
      tableName: 'employees'
    }
  );

  Employee.associate = models => {
    Employee.hasMany(models.Order, {
      foreignKey: {
        name: 'employeeId',
        field: 'employee_id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });
    Employee.belongsTo(models.Department, {
      foreignKey: {
        name: 'departmentId',
        allowNull: false,
        field: 'department_id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });
  };

  return Employee;
};
