module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    },
    {
      timestamps: false,
      tableName: 'orders'
    }
  );

  Order.associate = models => {
    Order.hasMany(models.OrderItem, {
      foreignKey: {
        name: 'orderId',
        allowNull: false,
        field: 'order_id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });
    Order.belongsTo(models.Customer, {
      foreignKey: {
        name: 'customerId',
        allowNull: false,
        field: 'customer_id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });
    Order.belongsTo(models.Employee, {
      foreignKey: {
        name: 'employeeId',
        field: 'employee_id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });
  };

  return Order;
};
