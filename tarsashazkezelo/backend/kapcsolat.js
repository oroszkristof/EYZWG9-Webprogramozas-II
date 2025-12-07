const mysql = require('mysql2');

const kapcsolat = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",            
  database: "webprogramozas",
  charset: "utf8mb4"
});

kapcsolat.connect(err => {
  if (err) {
    console.error("Nem sikerült kapcsolódni a MariaDB-hez:", err);
    return;
  }
  console.log("Sikeres csatlakozás a MariaDB adatbázishoz!");
});

module.exports = kapcsolat;


