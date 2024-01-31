const AbstractManager = require("./AbstractManager");

class HomeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "home" });
  }

  // The C of CRUD - Create operation

  async create(home) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name,numeroOffre,imageToUrl,imageToUrl2,imageToUrl3,imageToUrl4,imageToUrl5,adresse,descriptif,disponibilite ) values (?,?,?,?,?,?,?,?,?,?)`,
      [
        home.name,
        home.numeroOffre,
        home.imageToUrl,
        home.imageToUrl2,
        home.imageToUrl3,
        home.imageToUrl4,
        home.imageToUrl5,
        home.adresse,
        home.descriptif,
        home.disponibilite,
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  // async read(id) {
  //   // Execute the SQL SELECT query to retrieve a specific item by its ID
  //   const [rows] = await this.database.query(
  //     `select home.id, home.name, home.numeroOffre, home.imageToUrl, home.imageToUrl2, sal.home_id, sale.name, sale.numeroOffre, sale.imageToUrl, sale.imageToUrl2, from ${this.table} inner join sale on sale.home_id = ${this.table}.id where ${this.table}.id = ?`,
  //     [id]
  //   );

  //   // Return the first row of the result, which represents the item
  //   return rows[0];
  // }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = HomeManager;
