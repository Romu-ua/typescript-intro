export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('ham-san');
console.log(me);
const me_osaka = new Japanese.Osaka.Person('ham-yan');
console.log(me_osaka);
const micheal = new English.Person('Michael', 'Jaseph', 'Jackson');
console.log(micheal);
