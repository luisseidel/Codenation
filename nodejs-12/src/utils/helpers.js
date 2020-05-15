/**
 * Cria um array com a lista de produtos
 * @param {} productList 
 */
function getCategories(productList) {
    return [... new Set(productList.map((product) => product.category))];
}

/**
 * Retorna qual promoção pela quantidade informada
 * @param {} quantityCategory 
 */
function getPromotion(quantityCategory) {
    const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];
    return promotions[quantityCategory.length -1];
}

/**
 * Retorna o preco dos produtos
 * @param {} shoppingCart 
 * @param {*} promotion 
 */
function getPrices(shoppingCart, promotion) {
    return shoppingCart.map((product) => {
        
        //Descobre o preço normal
        const regularPrice = product.regularPrice.toFixed(2);

        //Caso o produto esteja incluso na promoção, retornamos o preço promocional
        //Também filtramos somente aqueles que não serão undefined
        const [promotionPrice] = product.promotions.map((promotions) => {
            
            if (promotions["looks"].includes(promotion)) {
                return promotions["price"].toFixed(2);
            }

        }).filter(price => price !== undefined);
        
        //Se existir algum valor em promotionPrice calculamos o valor em promoção
        let discountValue = 0;
        if (promotionPrice) {
            discountValue = regularPrice - promotionPrice;
        }

        //Retorna um objeto com os dados necessários
        return {
            regularPrice,
            promotionPrice,
            discountValue
        }
    });
}

/**
 * Retorna informações sobre o produto
 * @param {} shoppingCart 
 */
function getProductNameAndCategory(shoppingCart) {
    // shoppingCart.map((product) => {
    //     return ({product.name, product.category});
    // });
    return shoppingCart.map(({ name, category }) => ({name, category}));
}

/**
 * Calcula o valor de desconto fornecido
 * @param {*} prices 
 */
function calculateDiscountValue(prices) {
    return prices.reduce((sum, item) => sum + Number(item.discountValue), 0);
}

/**
 * Calcula o preço total
 * @param {*} prices 
 */
function calculateTotalPrice(prices) {
    return prices.reduce((sum, item) => {

        if (item.promotionPrice) {
            return sum + Number(item.promotionPrice);
        }
        
        return sum + Number(item.regularPrice);
    }, 0);
}

/**
 * Calcula a porcentagem de desconto concedido
 * @param {*} discountValue 
 * @param {*} totalPrice 
 */
function calculatePercentage(discountValue, totalPrice) {
    return (Number(discountValue.toFixed(2)) / (Number(totalPrice.toFixed(2)) + Number(discountValue.toFixed(2))) * 100).toFixed(2);
}

module.exports = {
    getCategories,
    getPromotion,
    getPrices,
    getProductNameAndCategory,
    calculateDiscountValue,
    calculateTotalPrice,
    calculatePercentage
}