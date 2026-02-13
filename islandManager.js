// islandManager.js
// Carrega ilhas dinamicamente
import { setupIsland1 } from './island1.js';
import { setupIsland2 } from './island2.js';
import { setupIsland3 } from './island3.js';
import { setupIsland4 } from './island4.js';
import { setupIsland5 } from './island5.js';

const islands = [setupIsland1, setupIsland2, setupIsland3, setupIsland4, setupIsland5];

export function loadIsland(islandId, scene) {
    if(islandId < 1 || islandId > islands.length) return;
    islands[islandId-1](scene);
}
