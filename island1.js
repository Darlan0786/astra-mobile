// island1.js
// Skeleton da Ilha 1: terreno, NPCs e boss
import { spawnPosition, randomRange } from './helpers.js';
import { models } from './assets.js';
import { createParticleEffect } from './effectManager.js';

export function setupIsland1(scene) {
    // Terreno placeholder
    const geometry = new THREE.PlaneGeometry(50, 50);
    const material = new THREE.MeshStandardMaterial({ color: 0x228B22 });
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI/2;
    terrain.receiveShadow = true;
    scene.add(terrain);

    // NPCs exemplo
    for(let i=0;i<5;i++){
        const pos = spawnPosition({x:0,y:0,z:0}, 20);
        // Aqui futuramente carregar modelos NPCs
        const npc = new THREE.Mesh(
            new THREE.BoxGeometry(1,2,1),
            new THREE.MeshStandardMaterial({ color: 0xff0000 })
        );
        npc.position.set(pos.x, pos.y, pos.z);
        scene.add(npc);
    }

    // Boss placeholder
    const boss = new THREE.Mesh(
        new THREE.BoxGeometry(3,6,3),
        new THREE.MeshStandardMaterial({ color: 0x0000ff })
    );
    boss.position.set(0,3,15);
    scene.add(boss);

    // Partícula de exemplo
    createParticleEffect('./assets/particles/spark.png', {x:0,y:1,z:0}, scene);

    console.log("Ilha 1 carregada!");
}
