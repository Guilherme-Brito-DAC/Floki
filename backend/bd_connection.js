let mysql  = require('mysql');

let config = {
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'floki_bd'
};
  
let connection = mysql.createConnection(config);

exports.incluir = (tabela, campos, dados) => {
    let sql = "INSERT INTO "+ tabela +" ("+ campos +") VALUES("+ dados +")";
    connection.query(sql, function (err, result, fields) {
        console.log(JSON.stringify(result));
     });
    connection.end();
}
 
exports.alterar = (tabela, campos, dados, key) => {
    let sql = "UPDATE "+ tabela + "SET ";
    for(var i = 0; i < campos.length; i++){
        sql += campos[i] +" = "+ dados[i]; 
    }
    sql += " WHERE "+ key;

    connection.query(sql, function (err, result, fields) {
        console.log(JSON.stringify(result));
    });
    connection.end();
}
 
exports.mostra = (tabela, key, campos = false, todos = true, ordem = false) => {
    let sql;
    (campos) ? sql = "SELECT "+ campos : sql = "SELECT * ";
    sql += "FROM "+ tabela;
    (!todos) ? sql += "LIMIT 1" : "";
    (ordem) ? sql += "ORDEM BY "+ key + " DESC" : " ORDEM BY "+ key +" ASC";

    connection.query(sql, function (err, result, fields) {
       console.log(JSON.stringify(result));
    });
    
    connection.end();
}

exports.excluir = (tabela, key) => {

    let sql = "DELETE FROM "+ tabela +" WHERE "+ key;
    connection.query(sql, function (err, result, fields) {
        console.log(JSON.stringify(result));
    });
    connection.end();
}
 
exports.retornoConexao = () => {
    console.log("A Conexão com Banco de Dados foi efetuada com Sucesso!");
}