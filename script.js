const arry1 = [1, 2, 3];
const arry2 = [4, 5, 6];
const arrayjuntas = [...arry1, ...arry2];

const a1 = document.getElementById("array1");
const a2 = document.getElementById("array2");
const res = document.getElementById("result");

function soma() {
  return arrayjuntas;
}

function SpreadArray() {
  a1.innerHTML = "Primeiro array: " + arry1;
  a2.innerHTML = "Segundo array: " + arry2;

  res.innerHTML = "Soma dos arrays: " + soma(...arry1, ...arry2);
}

const obj = { a: 1, b: 2 };
const updatedObj = { ...obj, b: 3 };

function spreadatualizarobj() {
  res.innerHTML = "Objeto após a atualização: " + JSON.stringify(updatedObj);
  a1.innerHTML = "Objeto original: " + JSON.stringify(obj);
  a2.innerHTML = "";
}
