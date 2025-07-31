export const resultToBase64 = (result) => {
    return btoa(result);
}
export const debounce = (delay, callback, e) => {
    let timeoutId;
    return (e) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback(e), delay);
    }
}