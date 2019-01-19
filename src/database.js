const mongoose = require('mongoose');

mongoose.connect('process.env.URL_DB', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(db => console.log('La base de datos está Online'))
  .catch(e => console.log('Hubo un error en la base de datos'));

module.exports = mongoose;