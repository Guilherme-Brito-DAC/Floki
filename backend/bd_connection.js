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

function alterar(tabela, data, key){

    let sql = "UPDATE "+ tabela +" SET "+ data +" WHERE "+ key;
    connection.query(sql);
    connection.end();
}

function mostra(tabela, key, campos = false, todos = true, ordem = false){
    let sql;

    (campos) ? sql = "SELECT "+ campos : sql = "SELECT * ";
    sql += "FROM "+ tabela;
    (!todos) ? sql += "LIMIT 1" : "";
    (ordem) ? sql += "ORDEM BY "+ key + " DESC" : " ORDEM BY "+ key +" ASC";

    connection.query(sql);
    connection.end();
}

function excluir(tabela, key){

    let sql = "DELETE FROM "+ tabela +" WHERE "+ key;
    connection.query(sql);
    connection.end();
}