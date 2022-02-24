let x1 = Number(
  prompt("a nuqtaning x cordinata o'qiga nisbatan qiymatini kiriting")
);
let y1 = Number(
  prompt("a nuqtaning y cordinata o'qiga nisbatan qiymatini kiriting")
);
let x2 = Number(
  prompt("b nuqtaning x cordinata o'qiga nisbatan qiymatini kiriting")
);
let y2 = Number(
  prompt("b nuqtaning y cordinata o'qiga nisbatan qiymatini kiriting")
);
let x3 = Number(
  prompt("c nuqtaning x cordinata o'qiga nisbatan qiymatini kiriting")
);
let y3 = Number(
  prompt("c nuqtaning y cordinata o'qiga nisbatan qiymatini kiriting")
);

let ab = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
let ac = Math.sqrt((x1 - x3) ** 2 + (y1 - y2) ** 2);
let bc = Math.sqrt((x2 - x3) ** 2 + (y2 - y3) ** 2);

if (x1 > 0 && y1 > 0) {
  console.log(
    `a nuqta dekart cordinatalar tekisligining 1-choragida joylashgan`
  );
} else if (x1 > 0 && y1 < 0) {
  console.log(
    `a nuqta dekart cordinatalar tekisligining 2-choragida joylashgan`
  );
} else if (x1 < 0 && y1 > 0) {
  console.log(
    `a nuqta dekart cordinatalar tekisligining 3-choragida joylashgan`
  );
} else if (x1 < 0 && y1 < 0) {
  console.log(
    `a nuqta dekart cordinatalar tekisligining 4-choragida joylashgan`
  );
}
if (x2 > 0 && y2 > 0) {
  console.log(
    `b nuqta dekart cordinatalar tekisligining 1-choragida joylashgan`
  );
} else if (x2 > 0 && y2 < 0) {
  console.log(
    `b nuqta dekart cordinatalar tekisligining 2-choragida joylashgan`
  );
} else if (x2 < 0 && y2 > 0) {
  console.log(
    `b nuqta dekart cordinatalar tekisligining 3-choragida joylashgan`
  );
} else if (x2 < 0 && y2 < 0) {
  console.log(
    `b nuqta dekart cordinatalar tekisligining 4-choragida joylashgan`
  );
}
if (x3 > 0 && y2 > 0) {
  console.log(
    `c nuqta dekart cordinatalar tekisligining 1-choragida joylashgan`
  );
} else if (x3 > 0 && y3 < 0) {
  console.log(
    `c nuqta dekart cordinatalar tekisligining 2-choragida joylashgan`
  );
} else if (x3 < 0 && y3 > 0) {
  console.log(
    `a nuqta dekart cordinatalar tekisligining 3-choragida joylashgan`
  );
} else if (x3 < 0 && x3 < 0) {
  console.log(
    `a nuqta dekart cordinatalar tekisligining 4-choragida joylashgan`
  );
}

alert(`a va b nuqtalar orasidagi masofa: ${ab} 
a va c nuqtalar orasidagi masofa: ${ac}
b va c nuqtalar orasidagi masofa: ${bc}`);
