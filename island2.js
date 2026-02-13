// island2.js
// Skeleton da Ilha 2: terreno, NPCs e boss, estilo realista

import { spawnPosition, randomRange } from './helpers.js';
import { models } from './assets.js';
import { createParticleEffect } from './effectManager.js';

export function setupIsland2(scene) {
    // Terreno com cor diferente e relevo
    const geometry = new THREE.PlaneGeometry(60, 60, 20, 20);
    const material = new THREE.MeshStandardMaterial({ color: 0x556B2F });
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI/2;
    terrain.receiveShadow = true;
    scene.add(terrain);

    // NPCs espalhados de forma mais natural
    for(let i=0;i<7;i++){
        const pos = spawnPosition({x:0,y:0,z:0}, 25);
        const npc = new THREE.Mesh(
            new THREE.CylinderGeometry(0.5,0.5,2,16),
            new THREE.MeshStandardMaterial({ color: 0xffa500 })
        );
        npc.position.set(pos.x, pos.y+1, pos.z);
        scene.add(npc);
    }

    // Boss da ilha
    const boss = new THREE.Mesh(
        new THREE.BoxGeometry(4,7,4),
        new THREE.MeshStandardMaterial({ color: 0x8B0000 })
    );
    boss.position.set(0,3.5,20);
    scene.add(boss);

    // Partículas ambiente
    for(let i=0;i<3;i++){
        const pos = spawnPosition({x:0,y:1,z:0}, 10);
        createParticleEffect('./assets/particles/spark.png', pos, scene);
    }

    console.log("Ilha 2 carregada!");
}
