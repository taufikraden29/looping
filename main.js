/*
Looping
**/
// For
// for (let z = 1; z <= 5; z++) {
//   console.log("Data Looping z  ", z);
// }

// Do While
// let x = 1;
// while (x <= 5) {
//   console.log("data x ke - ", x);
//   x++;
// }

// While
// let y = 1;
// do {
//   console.log("data y ke - ", y);
//   y++;
// } while (y <= 5);

const x = [3, 5, 12];
let total = 0;

for (let i = 0; i < x.length; i++) {
  total += x[i];
  console.log(total);
}
