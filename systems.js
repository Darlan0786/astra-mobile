const Systems = {

  // =========================
  // PLAYER / ROSTER
  // =========================

  roster: [
    { name: "Nyx", atk: 120, hp: 900 },
    { name: "Kaelith", atk: 150, hp: 800 },
    { name: "Seraphine", atk: 100, hp: 1000 }
  ],

  activeIndex: 0,

  player: {
    level: 1,
    xp: 0,
    xpNext: 100,
    hp: 1000,
    maxHp: 1000,
    energy: 100,
    maxEnergy: 100,
    coins: 500,
    crystals: 1600
  },

  get activeChar() {
    return this.roster[this.activeIndex];
  },

  swapNext() {
    this.activeIndex = (this.activeIndex + 1) % this.roster.length;
  },

  // =========================
  // COMBAT SYSTEM
  // =========================

  enemies: [],

  spawnEnemy() {
    this.enemies.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      hp: 200 + this.world.tier * 50
    });
  },

  damageEnemy(enemy, amount) {
    enemy.hp -= amount;
    if (enemy.hp <= 0) {
      this.player.xp += 20;
      this.player.coins += 10;
      this.checkLevelUp();
      this.enemies.splice(this.enemies.indexOf(enemy), 1);
    }
  },

  checkLevelUp() {
    if (this.player.xp >= this.player.xpNext) {
      this.player.level++;
      this.player.xp = 0;
      this.player.xpNext += 50;
      this.player.maxHp += 100;
      this.player.hp = this.player.maxHp;
    }
  },

  // =========================
  // WORLD SYSTEM
  // =========================

  world: {
    zone: "Avenida Neon",
    tier: 1
  },

  travel(zone, tier) {
    this.world.zone = zone;
    this.world.tier = tier;
    this.enemies = [];
  },

  // =========================
  // BASE SYSTEM
  // =========================

  base: {
    reactor: 1,
    factory: 1
  },

  upgradeReactor() {
    if (this.player.coins >= 200) {
      this.player.coins -= 200;
      this.base.reactor++;
      this.player.maxEnergy += 20;
    }
  },

  upgradeFactory() {
    if (this.player.coins >= 200) {
      this.player.coins -= 200;
      this.base.factory++;
    }
  },

  // =========================
  // BANNER
  // =========================

  banner: {
    pity: 0
  },

  rollBanner() {
    if (this.player.crystals < 160) return;

    this.player.crystals -= 160;
    this.banner.pity++;

    let roll = Math.random();

    if (this.banner.pity >= 80 || roll < 0.016) {
      alert("★★★★★ Personagem Limitado!");
      this.banner.pity = 0;
    } else if (roll < 0.12) {
      alert("★★★★ Personagem!");
    } else {
      alert("3★ Arma");
    }
  },

  updateUI() {
    document.getElementById("hp").innerText =
      this.player.hp + "/" + this.player.maxHp;
    document.getElementById("energy").innerText =
      this.player.energy + "/" + this.player.maxEnergy;
    document.getElementById("coins").innerText = this.player.coins;
    document.getElementById("crystals").innerText = this.player.crystals;
  }

};
