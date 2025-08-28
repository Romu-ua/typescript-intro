export {};

type Week = '日' | '月' | '火' | '水' | '木' | '金' | '土';
let dayOfTheWeek: Week = '日';
dayOfTheWeek = '月';
// dayOfTheWeek = '32';

type Month = 1 | 2 | 3 | 4;
let month: Month = 1;
// month = 23;

// 1 ~ 31を範囲指定して型にしたいのだが、これは少しめんどくさい

// falseが設定できないがどこで使うの？
let TRUE: true = true;
