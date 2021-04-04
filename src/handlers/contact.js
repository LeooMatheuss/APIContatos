const contact = require('../models/contact');
const ContactModel = require('../models/contact');

const transformer = contact => ({
  type: 'contacts',
  id: contact.id,
  attributes: {
    name: contact.name,
    email: contact.email,
  },
  links: {
    self: `/contacts/${contact.id}`
  }
});

const getAll = async (request, h) => {
  const contacts = await ContactModel.find({});
  return { data: contacts.map(transformer) };
};

const find = async (req) => {
  const contact = await ContactModel.findById(req.params.id);
  return { data: transformer(contact) };
};
const save = async (req, h) => {
  const { name, email } = req.payload;
  const contact = new ContactModel;
  contact.name = name;
  contact.email = email;

  await contact.save();
  return h.response(transformer(contact)).code(201);
};

const update = async (req) => {
  const { id } = req.params;
  const { payload } = req;

  await ContactModel.updateOne({
    _id: id
  }, {
    $set: payload
  });
}

const remove = async (req, h) => {
  await ContactModel.findOneAndDelete({ _id: req.params.id });
  return h.response().code(204);
}
module.exports = {
  getAll,
  save,
  remove,
  find,
  update
};