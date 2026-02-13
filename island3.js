// island3.js
// Skeleton da Ilha 3: estilo realista com relevo e NPCs variados

import { spawnPosition } from './helpers.js';
import { createParticleEffect } from './effectManager.js';

export function setupIsland3(scene) {
    // Terreno rochoso
    const geometry = new THREE.PlaneGeometry(70, 70, 30, 30);
    const material = new THREE.MeshStandardMaterial({ color: 0x708090 });
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI/2;
    terrain.receiveShadow = true;
    scene.add(terrain);

    // NPCs espalhados
    for(let i=0;i<6;i++){
        const pos = spawnPosition({x:0,y:0,z:0}, 30);
        const npc = new THREE.Mesh(
            new THREE.CylinderGeometry(0.4,0.4,1.8,12),
            new THREE.MeshStandardMaterial({ color: 0x00ff00 })
        );
        npc.position.set(pos.x, pos.y+0.9, pos.z);
        scene.add(npc);
    }

    // Boss
    const boss = new THREE.Mesh(
        new THREE.BoxGeometry(5,8,5),
        new THREE.MeshStandardMaterial({ color: 0x4B0082 })
    );
    boss.position.set(0,4,25);
    scene.add(boss);

    // Partículas
    for(let i=0;i<4;i++){
        const pos = spawnPosition({x:0,y:1,z:0}, 12);
        createParticleEffect('./assets/particles/fire.png', pos, scene);
    }

    console.log("Ilha 3 carregada!");
}
