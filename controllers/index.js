const products = [
    { id: 1, name: "Product1" },
    { id: 2, name: "Product2" },
    { id: 3, name: "Product3" },
];


const index = (req, res) => {
    res.render('index', {
        title: 'My Web Store'
    });
}

const renderList = (req, res, next) => {
    res.render('products', {
        title: 'List of products',
        items: products,
    });
}

const addNewProduct = (req, res, next) => {
    const { newProduct } = req.body;
    products.push(
        {
            id: products.length + 1,
            name: newProduct
        }
    );
    res.redirect('/products')
}

module.exports = {
    index,
    renderList,
    addNewProduct
}