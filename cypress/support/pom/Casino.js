const get = {
    categoryContainer: () => cy.get('div[class^="category-container"]'),
    category: (categoryName) => get.categoryContainer().contains(categoryName).parent().parent().parent(),
    within: {
        cardContainer: (categoryName) => get.category(categoryName).find('div[class^="card-image-container"]'),
        gameImage: (categoryName) => get.within.cardContainer(categoryName).find('img'),
        playButton: (categoryName, index) => get.within.cardContainer(categoryName).find(".thumbnail-overlay.after").eq(index)

    }

}

export default {
    get
}