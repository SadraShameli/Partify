export const ProductStorageKeys = {
    addedToBag: 'addedToBagProducts',
    wishListedProducts: 'wishListedProducts',
};

export const ValidationPatterns = {
    charSpace: /^[A-Za-z ]+$/,
    charNumSpace: /^[A-Za-z0-9 ]+$/,
    email: /^[a-z0-9!'#$%&*+\/=?^_`{|}~-]+(?:\.[a-z0-9!'#$%&*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-zA-Z]{2,}$/i,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    phone: /^\d+$/,
};
