// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini
class Mario { //  ==== CLASS INDUK ====
    // constructor + atribut jadi satu, nilai default sesuai soal
    constructor(
        public HP: number = 1,
        public speed: number = 5,
        public positionX: number = 0,
        public positionY: number = 0,
        public invincible: boolean = false,
        public currentForm: string = 'mario',
    ) {}

    // Jamur: HP + 1, jadi Super Mario
    takeMushroom(): Mario {
        this.HP += 1;
        console.log(`Mario mengambil jamur, HP sekarang ${this.HP}`);
        return new SuperMario(this);
    }

    // Bunga: HP + 1, jadi Fire Mario
    takeFlower(): Mario {
        this.HP += 1;
        console.log(`Mario mengambil bunga, HP sekarang ${this.HP}`);
        return new FireMario(this);
    }

    // Bintang: kebal
    takeStar(): Mario {
        this.invincible = true;
        console.log('Mario mengambil bintang, sekarang kebal!');
        return this;
    }

    // Diserang: HP - 1 dan kembali ke form mario (kalau kebal, tidak berpengaruh)
    getAttacked(): Mario {
        if (this.invincible) {
            console.log('Mario kebal, serangan tidak berpengaruh');
            return this;
        }
        this.HP -= 1;
        console.log(`Mario diserang, HP sekarang ${this.HP}, kembali ke form mario`);
        return new Mario(this.HP, this.speed, this.positionX, this.positionY, this.invincible);
    }

    moveRight(): void {
        this.positionX += this.speed;
        console.log(`Mario ke kanan, positionX = ${this.positionX}`);
    }

    moveLeft(): void {
        this.positionX -= this.speed;
        console.log(`Mario ke kiri, positionX = ${this.positionX}`);
    }

    // form default tidak bisa menembak
    shootFireball(): void {
        console.log(`${this.currentForm} tidak bisa menembak`);
    }

    status(): void {
        console.log(`${this.currentForm} | HP ${this.HP} | X ${this.positionX} | kebal ${this.invincible}`);
    }
}

// ===== CLASS ANAK (inheritance) =====
class SuperMario extends Mario {
    constructor(m: Mario) {
        super(m.HP, m.speed, m.positionX, m.positionY, m.invincible, 'super mario');
    }
}

class FireMario extends Mario {
    constructor(m: Mario) {
        super(m.HP, m.speed, m.positionX, m.positionY, m.invincible, 'fire mario');
    }

    // override (polymorphism): hanya FireMario yang bisa menembak
    shootFireball(): void {
        console.log('Fire Mario menembak bola api!');
    }
}

// ===== OBJECT & TES =====
let mario = new Mario();
mario.status();

mario.moveRight();
mario.moveRight();
mario.moveLeft();
mario.status();

mario = mario.takeMushroom();
mario.takeStar();
mario = mario.getAttacked();
mario.status();