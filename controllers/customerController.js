const { Customer } = require('../models');

exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json({ customers });
  } catch (err) {
    next(err);
  }
};

exports.getCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findOne({ where: { id } });
    res.status(200).json({ customer });
  } catch (err) {
    next(err);
  }
};

exports.createCustomer = async (req, res, next) => {
  try {
    const { name, address } = req.body;
    const customer = await Customer.create({ name, address });
    res.status(201).json({ customer });
  } catch (err) {
    next(err);
  }
};

exports.updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address } = req.body;
    const [row] = await Customer.update({ name, address }, { where: { id } });
    res.status(200).json({ message: row ? 'update customer success' : 'customer not update' });
  } catch (err) {
    next(err);
  }
};

exports.deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const row = await Customer.destroy({ where: { id } });
    res.status(200).json({ message: row ? 'delete customer success' : '0 customer deleted' });
  } catch (err) {
    next(err);
  }
};
