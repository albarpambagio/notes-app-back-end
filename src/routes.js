const addNoteHandler = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: (_,h) => addNoteHandler,
  },
];

module.exports = routes;
