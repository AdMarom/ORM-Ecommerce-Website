const category = require('./category');
const product = require('./product');
const producttag = require('./producttag');
const tag = require('./tag');

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
    
})