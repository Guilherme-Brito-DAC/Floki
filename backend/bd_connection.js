let mysql  = require('mysql');

let config = {
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'floki_bd'
};
  
let connection = mysql.createConnection(config);


function incluir(tabela, campos, dados){

    let sql = "INSERT INTO "+ tabela +" ("+ campos +") VALUES("+ dados +")";
    connection.query(sql);
    connection.end();
}

function alterar(tabela, campos, dados){

    let sql = "INSERT INTO "+ tabela +" ("+ campos +") VALUES("+ dados +")";
    connection.query(sql);
    connection.end();
}

function mostra(tabela, $key, campos = false, todos = true, ordem = false){

    let sql = "INSERT INTO "+ tabela +" ("+ campos +") ";
    connection.query(sql);
    connection.end();
}

function excluir(key, condicao = false){

    let sql = "INSERT INTO "+ tabela +" ("+ campos +") VALUES("+ dados +")";
    connection.query(sql);
    connection.end();
}