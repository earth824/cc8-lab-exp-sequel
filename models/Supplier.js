module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define(
    'Supplier',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'phone_number'
      }
    },
    {
      timestamps: false,
      tableName: 'suppliers'
    }
  );

  Supplier.associate = models => {
    Supplier.hasMany(models.Product, {
      foreignKey: {
        name: 'supplierId',
        allowNull: false,
        field: 'supplier_id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT'
    });
  };

  return Supplier;
};
