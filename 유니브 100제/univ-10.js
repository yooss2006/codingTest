let n = 6;
let x;
let star = 1;
for (let i = 1; i <= n; i++) {
  x = "";
  for (let j = n - i; j >= 0; j--) {
    x += " ";
  }
  for (let y = 0; y < star; y++) {
    x += "*";
  }
  for (let j = n - i; j >= 0; j--) {
    x += " ";
  }
  star += 2;
  console.log(x);
}
