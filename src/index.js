var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:"storestock"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("connected!");

});

