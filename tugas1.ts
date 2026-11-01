// Ini Tugas

class Enemy {
  health: number;

  constructor(health: number) {
    this.health = health;
  }

  baseHealth(): number {
    return this.health;
  }
}

class Minions extends Enemy {
  constructor(health: number) {
    super(health);
  }

  baseHealth(): number {
    return (this.health += 30);
  }
}

// ===== Turunan dari Minions (mewarisi Enemy -> Minions) =====
class MinionFighter extends Minions {
  baseHealth(): number {
    return super.baseHealth() + 20; // 30 (Minions) + 20
  }
}

class MinionArcher extends Minions {
  baseHealth(): number {
    return super.baseHealth() + 10; // 30 (Minions) + 10
  }
}

class MinionMage extends Minions {
  baseHealth(): number {
    return super.baseHealth() + 5; // 30 (Minions) + 5
  }
}

class SuperMinion extends Minions {
  baseHealth(): number {
    return super.baseHealth() + 50; // 30 (Minions) + 50
  }
}

// ===== Turunan langsung dari Enemy =====
class Lord extends Enemy {
  baseHealth(): number {
    return super.baseHealth() + 200;
  }
}

class Turtle extends Enemy {
  baseHealth(): number {
    return super.baseHealth() + 100;
  }
}

class RedDragon extends Enemy {
  baseHealth(): number {
    return super.baseHealth() + 500;
  }
}

class BlueWolf extends Enemy {
  baseHealth(): number {
    return super.baseHealth() + 80;
  }
}

// ===== Pengujian =====
const minion = new Minions(10);
console.log(minion.baseHealth()); // 40

const enemies: Enemy[] = [
  new MinionFighter(10), // 60
  new MinionArcher(10), // 50
  new MinionMage(10), // 45
  new SuperMinion(10), // 90
  new Lord(100), // 300
  new Turtle(50), // 150
  new RedDragon(300), // 800
  new BlueWolf(40), // 120
];

for (const e of enemies) {
  console.log(`${e.constructor.name}: ${e.baseHealth()}`);
}