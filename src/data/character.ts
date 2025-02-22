import { Job } from "./job";
import { Weapon } from "./weapon";

export interface Stats {
  str: number;
  agi: number;
  vit: number;
  int: number;
  dex: number;
  luk: number;
}

export interface Traits {
  pow: number;
  sta: number;
  wis: number;
  spl: number;
  con: number;
  crt: number;
}

export interface HPInfo {
  base: number;
  flat: number;
  percent: number;
}

export interface SPInfo {
  base: number;
  flat: number;
  percent: number;
}

export interface ATKModifiers {
  equipATK: number;
  // nao funciona no nova para consumiveis
  consumableATK: number;
  // parecido com consumableATK mas o nova usa esse invés do consumableATK para alguns iten
  bonusStatusATK: number;
  ammoATK: number;
  pseudoBuffATK: number;
  masteryATK: number;
  buffATK: number;
  patk: number;
  crate: number;
}

export interface MATKModifiers {
  matkPercent: number;
  equipMATK: number;
  consumableMATK: number;
  pseudoBuffMATK: number;
  buffMATK: number;
  smatk: number;
}

export interface Modifiers {
  skill: number;
  melee: number;
  ranged: number;
  dmg: number;
  finalDmg: number;
  race: number;
  size: number;
  class: number;
  monster: number;
  targetProperty: number;
  skillProperty: number;
  advancedKatarMastery: number;
  custom: number;
  critical: number;
}

export interface Character {
  baseLevel: number;
  job: Job;
  skill: string;
  crit: boolean;
  ignorePenalty: boolean;
  stats: Stats;
  traits: Traits;
  hp: HPInfo;
  sp: SPInfo;
  weapon: Weapon;
  modifiers: Modifiers;
  shadowWeaponRefine: number;
  ATK: ATKModifiers;
  MATK: MATKModifiers;
  bypass: number;
  traitBypass: number;
  buffs: string[];
  debuffs: string[];
}

export const emptyCharacter: Character = {
  baseLevel: 1,
  job: "Dragon Knight",
  skill: "basic_attack",
  crit: false,
  ignorePenalty: false,
  stats: {
    str: 0,
    agi: 0,
    vit: 0,
    int: 0,
    dex: 0,
    luk: 0,
  },
  traits: {
    pow: 0,
    sta: 0,
    wis: 0,
    spl: 0,
    con: 0,
    crt: 0,
  },
  hp: {
    base: 1,
    flat: 0,
    percent: 0,
  },
  sp: {
    base: 1,
    flat: 0,
    percent: 0,
  },
  weapon: {
    atk: 0,
    matk: 0,
    element: "Neutral",
    level: 1,
    refine: 0,
    grade: "No Grade",
    type: "Bare Hand",
  },
  modifiers: {
    advancedKatarMastery: 0,
    class: 0,
    dmg: 0,
    finalDmg: 0,
    melee: 0,
    ranged: 0,
    monster: 0,
    race: 0,
    size: 0,
    skill: 0,
    targetProperty: 0,
    skillProperty: 0,
    custom: 0,
    critical: 0,
  },
  shadowWeaponRefine: 0,
  ATK: {
    equipATK: 0,
    consumableATK: 0,
    bonusStatusATK: 0,
    ammoATK: 0,
    pseudoBuffATK: 0,
    masteryATK: 0,
    buffATK: 0,
    patk: 0,
    crate: 0,
  },
  MATK: {
    matkPercent: 100,
    equipMATK: 0,
    consumableMATK: 0,
    pseudoBuffMATK: 0,
    buffMATK: 0,
    smatk: 0,
  },
  bypass: 0,
  traitBypass: 0,
  buffs: [],
  debuffs: [],
};