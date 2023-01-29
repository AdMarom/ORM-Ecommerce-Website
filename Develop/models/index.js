// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)



//Category can have many products
category.hasMany(product, {

})

//Product belongs to only one category
product.belongsto(category, {

})

//Product belongs to many tag models
product.belongsto(tag, {

})

//tag belongs to many product models
tag.belongsto(product, {
    
});


module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };