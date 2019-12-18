module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["indunilid"] = {
        host: "35.190.147.46",
        port: "3306",
        user: "root",
        password: process.env.Password_sqlindunilid,
        database: "information_schema"
    };
};