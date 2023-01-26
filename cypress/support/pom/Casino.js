const get = {
    categoryContainer: () => cy.get('div[class^="category-container"]'),
    category: (categoryName) => get.categoryContainer().contains(categoryName).parent().parent().parent(),
    within: {
        cardContainer: (categoryName) => get.category(categoryName).find('div[class^="card-image-container"]'),
        gameImage: (categoryName) => get.within.cardContainer(categoryName).find('img')
    }

}

export default {
    get
}