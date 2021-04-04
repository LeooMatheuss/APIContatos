const contactHandler = require('./handlers/contact');

module.exports = [
  {
    method: 'GET',
    path: '/contact',
    handler: contactHandler.getAll
  },
  {
    method: 'GET',
    path: '/contact/{id}',
    handler: contactHandler.find
  },

  {
    method: 'PUT',
    path: '/contact/{id}',
    handler: contactHandler.update
  },


  {
    method: 'POST',
    path: '/contact',
    handler: contactHandler.save
  },

  {
    method: 'DELETE',
    path: '/contact/{id}',
    handler: contactHandler.remove,
    options: {
      cors: true
    }
  }
]