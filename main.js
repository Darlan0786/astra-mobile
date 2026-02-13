// main.js
import { textures, models, audio, particles } from './assets.js';
import { setupIsland1 } from './islands/island1.js';
import { player } from './characters/player.js';
import { initHUD } from './hud/hud.js';
import { loadShaders } from './shaders/glowShader.js';

// Scene, Camera, Renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(0,5,10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Stats
const stats = new Stats();
document.body.appendChild(stats.dom);

// Lights
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
hemiLight.position.set(0,20,0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff,1);
dirLight.position.set(10,20,10);
dirLight.castShadow = true;
scene.add(dirLight);

// Shaders
loadShaders(scene);

// HUD
initHUD();

// Player
player.init(scene, camera);

// Island 1
setupIsland1(scene);

// Resize
window.addEventListener('resize', ()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation Loop
const clock = new THREE.Clock();
function animate(){
    requestAnimationFrame(animate);
    const delta = clock.getDelta();

    player.update(delta);
    // Atualizações futuras: islands, bosses, effects
    renderer.render(scene, camera);
    stats.update();
}
animate();
