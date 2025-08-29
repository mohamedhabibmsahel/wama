const Sequelize = require("sequelize");
const fs = require("fs");
const spawn = require("child_process").spawn;
// const mysqldump = require("mysqldump");
const { deleteFolderRecursive, deleteImages } = require("./src/helper/image");
require("dotenv").config();
var dbConfig = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_DB,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  port: 3306,
};

//Initialize connection to DB
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging: false,
  port: dbConfig.port,
});
// function backup() {
//   //  mysqldump({
//   //    connection: {
//   //      host: process.env.DB_HOST,
//   //      user: process.env.DB_USER,
//   //      password: process.env.DB_PASSWORD,
//   //      database: process.env.DB_DB,
//   //    },
//   //    dumpToFile: `./backup/dump.sql`,
//   //  });
//   const fileName = `backup-${Date.now()}.sql`;
//   const filePath = `./backups/${fileName}`;

//   const mysqldump = spawn("/Applications/xampp/xamppfiles/bin/mysqldump", [
//     `-u${process.env.DB_USER}`,
//     `-p${process.env.DB_PASSWORD}`,
//     `--password=${process.env.DB_PASSWORD}`, // Include password in command
//     `-h${process.env.DB_HOST}`,
//     process.env.DB_DB,
//   ]);

//   const backupStream = fs.createWriteStream(filePath);

//   mysqldump.stdout.pipe(backupStream);

//   mysqldump.on("exit", (code) => {
//     if (code === 0) {
//       console.log(`Backup saved at ${filePath}`);
//     } else {
//       console.error(`Backup failed with code ${code}`);
//     }
//   });

//   backupStream.on("error", (err) => {
//     if (err.code === "ENOENT") {
//       // Create the backups directory if it doesn't exist
//       fs.mkdirSync("./backups", { recursive: true });
//       // Retry creating the backup file
//       backup();
//     } else {
//       console.error(`Error writing backup file: ${err.message}`);
//     }
//   });
// }

async function deleteDatabase() {
  // backup();
  await sequelize.sync({ force: true });
  deleteImages();
}

module.exports = {
  Sequelize,
  sequelize,
  deleteDatabase,
  // backup,
};
