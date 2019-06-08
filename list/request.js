const db = require('../database/database-connect');

/* <FORMAL> */
const request = {
    /* Thumbnail */
    getAllThumbnail: function (callback) {
        return db.query('SELECT * FROM thumbnail', callback);
    },
    getByIdCategory: function (product_id, callback) {
        return db.query('SELECT * FROM thumbnail WHERE id_product=?', [product_id], callback)
    },
    addThumbnail: function (thumbnail, callback) {
        return db.query('INSERT INTO thumbnail(image,id_product) VALUE(?,?)', [thumbnail.image, thumbnail.id_product], callback)
    },
    // Products
    addProduct: function (add, callback) {
        db.query('INSERT INTO product (name,image,price,content,category) VALUE(?,?,?,?,?)', [add.name, add.image, add.price, add.content, add.category],callback)
    },
    getByCateGory: function (category, callback) {
        return db.query('SELECT * FROM product WHERE category=?', [category], callback)
    },
    getByIdProduct: function (id, callback) {
        return db.query('SELECT * FROM product WHERE id=?', [id], callback)
    },
    getAllProducts: function (callback) {
        return db.query('SELECT * FROM product', callback);
    },
    getIndentityPoolId: function (callback) {
        return db.query('SELECT * FROM setting', callback)
    },
    // Users
    login: function (info,callback) {
        return db.query('SELECT * FROM users WHERE (user_name=? && password=?)',[info.user_name,info.password],callback);
    }
};
module.exports = request