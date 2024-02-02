const AbstractManager = require("./AbstractManager");

class HomeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "home" });
  }

  // The C of CRUD - Create operation

  // async create(home) {
  //   // Execute the SQL INSERT query to add a new item to the "item" table
  //   const [result] = await this.database.query(
  //     `insert into ${this.table} (name,numeroOffre,imageToUrl,imageToUrl2,imageToUrl3,imageToUrl4,imageToUrl5,adresse,descriptif,descriptif2,descriptif3,disponibilite, id_city ) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
  //     [
  //       home.name,
  //       home.numeroOffre,
  //       home.imageToUrl,
  //       home.imageToUrl2,
  //       home.imageToUrl3,
  //       home.imageToUrl4,
  //       home.imageToUrl5,
  //       home.adresse,
  //       home.descriptif,
  //       home.descriptif2,
  //       home.descriptif3,
  //       home.disponibilite,
  //       home.city,
  //     ]
  //   );

  //   // Return the ID of the newly inserted item
  //   return result.insertId;
  // }
  async create(home) {
    // Vérifiez si la ville existe dans la table city
    const [cityResult] = await this.database.query(
      "SELECT id FROM city WHERE city = ?",
      [home.city]
    );

    let cityId;

    if (cityResult.length > 0) {
      cityId = cityResult[0].id;
    } else {
      throw new Error("La ville spécifiée n'existe pas dans la table city");
    }

    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, numeroOffre, imageToUrl, imageToUrl2, imageToUrl3, imageToUrl4, imageToUrl5, adresse, descriptif, descriptif2, descriptif3, disponibilite, id_city) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
        home.descriptif2,
        home.descriptif3,
        home.disponibilite,
        cityId, // Utilisez l'ID de la ville
      ]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  //  The Rs of CRUD - Read operations

  async read(id) {
    //   // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select home.id, home.name, home.numeroOffre,home.adresse, home.descriptif, home.descriptif2, home.descriptif3,home.imageToUrl, home.imageToUrl2,home.imageToUrl3, home.imageToUrl4, home.imageToUrl5,home.id_city, city.city from ${this.table} inner join city on city.id = ${this.table}.id_city WHERE ${this.table}.id = ?`,
      [id]
      // `select home.id, home.name, home.numeroOffre,home.adresse,home.disponibilite, home.descriptif, home.descriptif2, home.descriptif3,home.imageToUrl, home.imageToUrl2, home.imageToUrl3, home.imageToUrl4, home.imageToUrl5 from ${this.table} where id = ?`,
      // [id]
    );

    //   // Return the first row of the result, which represents the item

    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(id, homes) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    // const [result] = await this.database.query(
    //   `UPDATE ${this.table} set ? WHERE id = ?`,
    //   [homes, id]
    // );
    const [result] = await this.database.query(
      `UPDATE ${this.table}
       INNER JOIN city ON city.id = ${this.table}.id_city
       SET ${this.table}.name = ?, ${this.table}.numeroOffre = ?, ${this.table}.adresse = ?, ${this.table}.descriptif = ?, ${this.table}.descriptif2 = ?, ${this.table}.descriptif3 = ?,
           ${this.table}.imageToUrl = ?, ${this.table}.imageToUrl2 = ?, ${this.table}.imageToUrl3 = ?, ${this.table}.imageToUrl4 = ?, ${this.table}.imageToUrl5 = ?,
           ${this.table}.id_city = ?
       WHERE ${this.table}.id = ?`,
      [
        homes.name,
        homes.numeroOffre,
        homes.adresse,
        homes.descriptif,
        homes.descriptif2,
        homes.descriptif3,
        homes.imageToUrl,
        homes.imageToUrl2,
        homes.imageToUrl3,
        homes.imageToUrl4,
        homes.imageToUrl5,
        homes.id_city,
        id,
      ]
    );

    // Return the first row of the result, which represents the item
    return result;
  }

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the user
    return result;
  }
}

module.exports = HomeManager;
