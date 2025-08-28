export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work(): string {
    return `Hey, guys! This is ${this.firstName} Are you insterested in TeypScript? Let'sdive into TyepScript`;
  }
}

// let me = new Me();
console.log(Me.firstName);
console.log(Me.work());
