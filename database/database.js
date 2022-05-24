const knex = require('knex')({
    client : 'mysql2',
    connection:{
        host:'localhost',
        user:'root',
        password :'Mysqlsam008',
        database : 'doggygogo'
    }
});

module.exports = knex;