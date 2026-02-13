// characters_female.js – 20 personagens femininos únicos
export const charactersFemale = [
  // 6★ – 8 personagens
  {
    name: "Aurelia",
    star: 6,
    baseHP: 1200,
    baseAttack: 280,
    baseDefense: 150,
    equippedWeapon: "Celestial Edge",
    skillMultiplier: 1.25,
    ultimateMultiplier: 1.40,
    personality: "Determined and noble",
    animations: { idle: "aureliaIdle()", walk: "aureliaWalk()", attack: "aureliaAttack()", skill: "aureliaSkill()", ultimate: "aureliaUltimate()", gestures: "aureliaGesture()" },
    appearance: { hair: "longSilver", eyes: "violet", outfit: "flowingArmorCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.22, ultimateMultiplier: 1.38 } }
  },
  {
    name: "Selene",
    star: 6,
    baseHP: 1180,
    baseAttack: 285,
    baseDefense: 148,
    equippedWeapon: "Luminous Fang",
    personality: "Calm strategist",
    animations: { idle: "seleneIdle()", walk: "seleneWalk()", attack: "seleneAttack()", skill: "seleneSkill()", ultimate: "seleneUltimate()", gestures: "seleneGesture()" },
    appearance: { hair: "longBlue", eyes: "silver", outfit: "shadowCloakCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.23, ultimateMultiplier: 1.36 } }
  },
  {
    name: "Lyra",
    star: 6,
    baseHP: 1190,
    baseAttack: 278,
    baseDefense: 152,
    equippedWeapon: "Starlight Crescent",
    personality: "Playful and agile",
    animations: { idle: "lyraIdle()", walk: "lyraWalk()", attack: "lyraAttack()", skill: "lyraSkill()", ultimate: "lyraUltimate()", gestures: "lyraGesture()" },
    appearance: { hair: "pinkTwinTail", eyes: "emerald", outfit: "battleDressCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.21, ultimateMultiplier: 1.37 } }
  },
  {
    name: "Elysia",
    star: 6,
    baseHP: 1220,
    baseAttack: 275,
    baseDefense: 155,
    equippedWeapon: "Solar Lance",
    personality: "Bold and brave",
    animations: { idle: "elysiaIdle()", walk: "elysiaWalk()", attack: "elysiaAttack()", skill: "elysiaSkill()", ultimate: "elysiaUltimate()", gestures: "elysiaGesture()" },
    appearance: { hair: "fieryRed", eyes: "golden", outfit: "luminousArmorCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.22, ultimateMultiplier: 1.39 } }
  },
  {
    name: "Seraphine",
    star: 6,
    baseHP: 1185,
    baseAttack: 282,
    baseDefense: 149,
    equippedWeapon: "Arcane Bow",
    personality: "Mystical and serene",
    animations: { idle: "seraphineIdle()", walk: "seraphineWalk()", attack: "seraphineAttack()", skill: "seraphineSkill()", ultimate: "seraphineUltimate()", gestures: "seraphineGesture()" },
    appearance: { hair: "whiteFlow", eyes: "blue", outfit: "mysticRobeCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.23, ultimateMultiplier: 1.36 } }
  },
  {
    name: "Nyx",
    star: 6,
    baseHP: 1195,
    baseAttack: 279,
    baseDefense: 151,
    equippedWeapon: "Shadow Dagger",
    personality: "Stealthy and cunning",
    animations: { idle: "nyxIdle()", walk: "nyxWalk()", attack: "nyxAttack()", skill: "nyxSkill()", ultimate: "nyxUltimate()", gestures: "nyxGesture()" },
    appearance: { hair: "blackShort", eyes: "red", outfit: "stealthSuitCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.21, ultimateMultiplier: 1.37 } }
  },
  {
    name: "Aurora",
    star: 6,
    baseHP: 1210,
    baseAttack: 281,
    baseDefense: 153,
    equippedWeapon: "Frost Blade",
    personality: "Elegant and precise",
    animations: { idle: "auroraIdle()", walk: "auroraWalk()", attack: "auroraAttack()", skill: "auroraSkill()", ultimate: "auroraUltimate()", gestures: "auroraGesture()" },
    appearance: { hair: "silverLong", eyes: "iceBlue", outfit: "frostArmorCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.22, ultimateMultiplier: 1.38 } }
  },
  {
    name: "Vespera",
    star: 6,
    baseHP: 1205,
    baseAttack: 283,
    baseDefense: 150,
    equippedWeapon: "Nightfall Staff",
    personality: "Mysterious and charming",
    animations: { idle: "vesperaIdle()", walk: "vesperaWalk()", attack: "vesperaAttack()", skill: "vesperaSkill()", ultimate: "vesperaUltimate()", gestures: "vesperaGesture()" },
    appearance: { hair: "purpleLong", eyes: "amber", outfit: "darkMageCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.23, ultimateMultiplier: 1.36 } }
  },

  // 5★ – 7 personagens
  {
    name: "Celestia",
    star: 5,
    baseHP: 980,
    baseAttack: 230,
    baseDefense: 130,
    equippedWeapon: "Radiant Spear",
    personality: "Cheerful and daring",
    animations: { idle: "celestiaIdle()", walk: "celestiaWalk()", attack: "celestiaAttack()", skill: "celestiaSkill()", ultimate: "celestiaUltimate()", gestures: "celestiaGesture()" },
    appearance: { hair: "goldenLong", eyes: "blue", outfit: "lightArmorCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.18, ultimateMultiplier: 1.28 } }
  },
  {
    name: "Lyanna",
    star: 5,
    baseHP: 970,
    baseAttack: 225,
    baseDefense: 128,
    equippedWeapon: "Wind Cutter",
    personality: "Agile and witty",
    animations: { idle: "lyannaIdle()", walk: "lyannaWalk()", attack: "lyannaAttack()", skill: "lyannaSkill()", ultimate: "lyannaUltimate()", gestures: "lyannaGesture()" },
    appearance: { hair: "whiteBob", eyes: "green", outfit: "rogueArmorCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.17, ultimateMultiplier: 1.27 } }
  },
  {
    name: "Marielle",
    star: 5,
    baseHP: 960,
    baseAttack: 228,
    baseDefense: 127,
    equippedWeapon: "Thunder Rod",
    personality: "Energetic and bold",
    animations: { idle: "marielleIdle()", walk: "marielleWalk()", attack: "marielleAttack()", skill: "marielleSkill()", ultimate: "marielleUltimate()", gestures: "marielleGesture()" },
    appearance: { hair: "orangeLong", eyes: "brown", outfit: "lightMageCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.18, ultimateMultiplier: 1.28 } }
  },
  {
    name: "Sylphie",
    star: 5,
    baseHP: 955,
    baseAttack: 227,
    baseDefense: 126,
    equippedWeapon: "Gale Twinblade",
    personality: "Graceful and serene",
    animations: { idle: "sylphieIdle()", walk: "sylphieWalk()", attack: "sylphieAttack()", skill: "sylphieSkill()", ultimate: "sylphieUltimate()", gestures: "sylphieGesture()" },
    appearance: { hair: "blueLong", eyes: "skyBlue", outfit: "windArmorCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.17, ultimateMultiplier: 1.27 } }
  },
  {
    name: "Elara",
    star: 5,
    baseHP: 950,
    baseAttack: 225,
    baseDefense: 125,
    equippedWeapon: "Blazing Bow",
    personality: "Fierce and determined",
    animations: { idle: "elaraIdle()", walk: "elaraWalk()", attack: "elaraAttack()", skill: "elaraSkill()", ultimate: "elaraUltimate()", gestures: "elaraGesture()" },
    appearance: { hair: "redLong", eyes: "orange", outfit: "fireRangerCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.18, ultimateMultiplier: 1.28 } }
  },
  {
    name: "Isolde",
    star: 5,
    baseHP: 945,
    baseAttack: 224,
    baseDefense: 124,
    equippedWeapon: "Moonlight Staff",
    personality: "Calm and wise",
    animations: { idle: "isoldeIdle()", walk: "isoldeWalk()", attack: "isoldeAttack()", skill: "isoldeSkill()", ultimate: "isoldeUltimate()", gestures: "isoldeGesture()" },
    appearance: { hair: "silverShort", eyes: "purple", outfit: "moonMageCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.17, ultimateMultiplier: 1.27 } }
  },

  // 4★ – 5 personagens
  {
    name: "Fiora",
    star: 4,
    baseHP: 850,
    baseAttack: 200,
    baseDefense: 110,
    equippedWeapon: "Iron Saber",
    personality: "Brave and lively",
    animations: { idle: "fioraIdle()", walk: "fioraWalk()", attack: "fioraAttack()", skill: "fioraSkill()", ultimate: "fioraUltimate()", gestures: "fioraGesture()" },
    appearance: { hair: "blondePonytail", eyes: "green", outfit: "armorLightCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.12, ultimateMultiplier: 1.18 } }
  },
  {
    name: "Nerina",
    star: 4,
    baseHP: 840,
    baseAttack: 198,
    baseDefense: 108,
    equippedWeapon: "Crystal Dagger",
    personality: "Cheerful and curious",
    animations: { idle: "nerinaIdle()", walk: "nerinaWalk()", attack: "nerinaAttack()", skill: "nerinaSkill()", ultimate: "nerinaUltimate()", gestures: "nerinaGesture()" },
    appearance: { hair: "aquaLong", eyes: "blue", outfit: "rogueArmorLightCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.12, ultimateMultiplier: 1.18 } }
  },
  {
    name: "Coralia",
    star: 4,
    baseHP: 835,
    baseAttack: 195,
    baseDefense: 107,
    equippedWeapon: "Seabreeze Bow",
    personality: "Gentle and kind",
    animations: { idle: "coraliaIdle()", walk: "coraliaWalk()", attack: "coraliaAttack()", skill: "coraliaSkill()", ultimate: "coraliaUltimate()", gestures: "coraliaGesture()" },
    appearance: { hair: "cyanBraids", eyes: "teal", outfit: "seaRangerCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.11, ultimateMultiplier: 1.17 } }
  },
  {
    name: "Lysette",
    star: 4,
    baseHP: 830,
    baseAttack: 193,
    baseDefense: 106,
    equippedWeapon: "Blazing Sword",
    personality: "Energetic and playful",
    animations: { idle: "lysetteIdle()", walk: "lysetteWalk()", attack: "lysetteAttack()", skill: "lysetteSkill()", ultimate: "lysetteUltimate()", gestures: "lysetteGesture()" },
    appearance: { hair: "redBraids", eyes: "amber", outfit: "fireArmorCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.11, ultimateMultiplier: 1.17 } }
  },
  {
    name: "Thalina",
    star: 4,
    baseHP: 825,
    baseAttack: 192,
    baseDefense: 105,
    equippedWeapon: "Wind Staff",
    personality: "Calm and clever",
    animations: { idle: "thalinaIdle()", walk: "thalinaWalk()", attack: "thalinaAttack()", skill: "thalinaSkill()", ultimate: "thalinaUltimate()", gestures: "thalinaGesture()" },
    appearance: { hair: "whiteLong", eyes: "skyBlue", outfit: "windMageCinematic", style: "anime3D_superior" },
    buffs: { weaponBonus: { skillMultiplier: 1.11, ultimateMultiplier: 1.17 } }
  }
];

// Skeleton das animações para todos os personagens
function aureliaIdle(){} function aureliaWalk(){} function aureliaAttack(){} function aureliaSkill(){} function aureliaUltimate(){} function aureliaGesture(){}
function seleneIdle(){} function seleneWalk(){} function seleneAttack(){} function seleneSkill(){} function seleneUltimate(){} function seleneGesture(){}
function lyraIdle(){} function lyraWalk(){} function lyraAttack(){} function lyraSkill(){} function lyraUltimate(){} function lyraGesture(){}
// ... continue para todos os 20 personagens
