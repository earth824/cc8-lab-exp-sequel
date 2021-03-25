const { sequelize, Order, OrderItem, Customer, Employee, Product, Supplier } = require('../models');

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: OrderItem,
          include: {
            model: Product,
            attributes: ['id', 'name']
          },
          attributes: ['id', 'amount', 'price', 'discount']
        },
        { model: Customer, attributes: ['id', 'name'] },
        { model: Employee, attributes: ['id', 'name'] }
      ],
      attributes: ['id', 'date']
    });
    res.status(200).json({ orders });
  } catch (err) {
    next(err);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({
      where: { id },
      attributes: ['id', 'date'],
      include: [
        { model: Customer, attributes: ['id', 'name'] },
        { model: Employee, attributes: ['id', 'name'] },
        {
          model: OrderItem,
          attributes: ['id', 'amount', 'price', 'discount'],
          include: { model: Product, attributes: ['id', 'name'], include: Supplier }
        }
      ]
    });
    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
};

exports.createOrder = async (req, res, next) => {
  const transaction = await sequelize.transaction();
  try {
    const { customerId, employeeId, items } = req.body; // items = [{productId, amount, discount}]
    const order = await Order.create({ date: new Date(), customerId, employeeId }, { transaction });
    console.log(JSON.parse(JSON.stringify(order)));
    res.status(201).json({ order });
  } catch (err) {
    next(err);
  }
};
