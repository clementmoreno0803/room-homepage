export default {

    // Response to GET request for image grid
    listingItem(state, data) {
        return state.itemListing = data;
    },
    // Update counter on a specific page depending on its Id
    updateCounter(state, payload) {
        state.counters[payload.id] = payload.value
    },
    // Update cart array depending on page item and number of article
    // we would add to cart
    addToCart(state, payload) {
        const title = state.itemListing[payload]
        const qty = state.counters[payload]
        state.cart.push([title, qty])
    },
    // Remove specific article from cart depending on it's Id
    removeFromCart(state, payload) {
        const index = state.cart.find(item => item.id === payload);
        if (index !== -1) {
            state.cart.splice(index, 1);
        }
    }
}