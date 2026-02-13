// inputManager.js
// Gerencia teclado e mouse

const keys = {};

window.addEventListener('keydown', (e) => { keys[e.code] = true; });
window.addEventListener('keyup', (e) => { keys[e.code] = false; });

export function isKeyDown(keyCode) {
    return !!keys[keyCode];
}

export function getKeys() {
    return keys;
}
