export {};

class Mahotukai {}
class Souryo {}

class Taro extends Mahotukai {}

interface Kenja {
  ionazum(): void;
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazum(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazum();
jiro.kougeki();
