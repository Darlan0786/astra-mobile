// audioManager.js
// Gerencia música e efeitos sonoros

const audioLoader = new THREE.AudioLoader();
const listener = new THREE.AudioListener();
const sounds = {};

export function initAudio(camera) {
    camera.add(listener);
}

export function loadSound(name, path, loop = false, volume = 1) {
    const sound = new THREE.Audio(listener);
    audioLoader.load(path, (buffer) => {
        sound.setBuffer(buffer);
        sound.setLoop(loop);
        sound.setVolume(volume);
    });
    sounds[name] = sound;
}

export function playSound(name) {
    if (sounds[name]) sounds[name].play();
}

export function stopSound(name) {
    if (sounds[name]) sounds[name].stop();
}
