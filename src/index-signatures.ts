export {};

interface Profile {
  name: string;
  unberTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: 'Ham',
  unberTwenty: false,
};

// How to write index signatures
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'Ham';
profile.age = 43;

console.log(profile);
