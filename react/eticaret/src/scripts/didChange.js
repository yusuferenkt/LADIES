export let cartChanged = false;
export let favChanged = false;

export const didCartChange = () => {
    return cartChanged;
}

export const didFavChange = () => {
    return favChanged;
}

export const setCartChange = (val) => {
    cartChanged = val;
}

export const setFavChange = (val) => {
    favChanged = val;
}