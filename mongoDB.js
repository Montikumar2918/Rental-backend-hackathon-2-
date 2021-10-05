const { MongoClient } = require("mongodb");

//create obj  ; param url to m-client's constructor;
const client = new MongoClient(process.env.url);

module.exports = {
  //initially empty;
  db: null,
  products: null,

  async connectDB() {
    try {
      await client.connect(); //connect the DB
      console.log("DB connected successfully ", process.env.url);

      //select the DB ;

      this.db = client.db(process.env.dbName);
      console.log("DB Selected Successfully", process.env.dbName);

      //Select the Collections;
      this.products = this.db.collection("products");
    } catch (err) {
      console.log("Error in DB connection", err);
    }
  },
};




module.exports = {
  //initially empty;
  db: null,
  products: null,

  async connectDB() {
    try {
      await client.connect(); //connect the DB
      console.log("DB connected successfully ");

      //select the DB ;

      this.db = client.db(process.env.dbName);
      console.log("DB Selected Successfully");

      //Select the Collections;
      this.products = this.db.collection("products");
    } catch (err) {
      console.log("Error in DB connection", err);
    }
  },
};
