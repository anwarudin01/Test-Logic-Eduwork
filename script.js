// 1.
// Buatlah fungsi sebagai berikut :
// 	Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
// 	Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)

// jawaban Soal Nomor 1
function faktorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return faktorial(n - 1) * n;
  }
}
console.log(faktorial(4));

// --------------------------------------------------------

// 2.
// Buatlah fungsi untuk reverse sebuah string
// Apabila input = “abcde”, maka outputnya = “edcba”
// Dilarang menggunakan function reverse, buatlah logika sendiri

// Jawaban Soal Nomor 2
function reverse(balik) {
  putar = balik.split('').reverse().join('');
  return console.log(putar);
}

reverse('aku anak sehat');

// --------------------------------------------------------

// 3.
// Buatlah fungsi untuk menampilkan jumlah digit angka tergantung dimana posisi atau tempat dari angka dalam sebuah string “9.86-A5.321”!
// Contoh: printDigitValue(‘9.86-A5.321’);
// Hasil :
// 9865321
// 9000000
// 800000
// 60000
// 5000
// 300
// 20
// 1

// Jawaban Soal Nomor 3
function printDigitValue(nilai) {
  nilai = nilai.replace(/\D/g, '');
  console.log(nilai);
  let zero = '0';
  for (let i = 0; i < nilai.length; i++) {
    nilai1 = nilai.charAt(i) + zero.repeat(nilai.length - i - 1);
    console.log(nilai1);
  }
}

printDigitValue('9.86-A5.321');

// --------------------------------------------------------

// 4.
// Ketik kode untuk swap 2 integer variables tanpa VARIABLE TAMBAHAN
// Contoh : let a = 3, let b = 7 => hasilnya a = 7, b = 3

// Jawaban Soal Nomor 4
function test() {
  var a = 3;
  var b = 7;
  console.log('a awal = ', a);
  console.log('b awal = ', b);

  //coding
  // cari cara agar nilai a menjadi nilai b
  // dan nilai b menjadi nilai a
  // tanpa menambah variabel baru

  a -= b; // a = a - b | a = 3 - 7 = -4
  b += a; // b = b + a | b = 7 + -4 = 3
  a = b - a; // a = 3 - -4 = 7

  console.log('a hasil = ', a);
  console.log('b hasil = ', b);
}

test();

// --------------------------------------------------------

// 5.
// Buatlah fungsi sebagai berikut :
// int : 4, maka outputnya adalah : empat
// int : 20, maka outputnya adalah : dua puluh
// int : 39, maka outputnya adalah : tiga puluh sembilan
// int : 104, maka outputnya adalah : silahkan masukkan bilangan 1-100

function terbilang(x) {
  var ambil = new Array('', 'SATU', 'DUA', 'TIGA', 'EMPAT', 'LIMA', 'ENAM', 'TUJUH', 'DELAPAN', 'SEMBILAN', 'SEPULUH', 'SEBELAS');
  if (parseFloat(x) < 12) {
    x = Math.floor(x);
    return ' ' + ambil[x];
  } else if (parseFloat(x) < 20) {
    return terbilang(parseFloat(x) - 10) + ' BELAS';
  } else if (parseFloat(x) < 100) {
    return terbilang(parseFloat(x) / 10) + ' PULUH' + terbilang(parseFloat(x) % 10);
  } else if (parseFloat(x) === 100) {
    return 'SERATUS';
  } else if (parseFloat(x) > 100) {
    return 'silahkan masukkan bilangan 1-100';
  }
}
console.log(terbilang(10));
// --------------------------------------------------------

// 6.
// Apabila terdapat sebuah data :
// array data =  [1,4,7,9,12],
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput [4,7,9,12]

// Jawaban Soal Nomor 6
function cariData(array) {
  let low = 2;
  let hight = 15;
  let hasil = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= low && array[i] <= hight) {
      hasil.push(array[i]);
    }
  }
  return hasil;
}

console.log(cariData([1, 4, 7, 9, 12]));

// --------------------------------------------------------

// 7.
// Dari soal nomor 6, buatlah juga untuk menghasilkan output total ada berapa angka yg termasuk dari bagian low dan high
// array data =  [1,4,7,9,12],
// int low = 2,
// int high = 15,
// maka akan menghasilkan ouput = 4

// Jawaban Soal Nomor 7
function cariData(array) {
  let low = 2;
  let hight = 15;
  let hasil = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= low && array[i] <= hight) {
      hasil.push(array[i]);
    }
  }
  return hasil.length;
}

console.log(cariData([1, 4, 7, 9, 12, 13]));

// --------------------------------------------------------

// 8.
// Apabila terdapat int = 15, maka akan mencetak output berikut :
// 1
// 2
// Edu
// 4
// Work
// Edu
// 7
// 8
// Edu
// Work
// 11
// Edu
// 13
// 14
// EduWork

// keterangan : string edu untuk kelipatan 3, string work untuk kelipatan 5, string eduwork untuk kelipatan 3 dan 5

// Jawaban Soal Nomor 8

for (let i = 1; i <= 15; i++) {
  if (i % 15 == 0) {
    console.log('EduWork');
  } else if (i % 3 == 0) {
    console.log('Edu');
  } else if (i % 5 == 0) {
    console.log('Work');
  } else {
    console.log(i);
  }
}

// --------------------------------------------------------

// 9.
// Buatlah fungsi untuk menentukan bilangan terkecil dan terbesar dari sebuah array
// Contoh : array [4,2,6,88,3,11]
// Maka outputnya adalah low : 2, high : 88
// dilarang menggunakan built in function

// Jawaban Soal Nomor 10
function minMax(arr) {
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  return `Min = ${min} & Max = ${max}`;
}
let angka = [4, 2, 6, 88, 3, 11];
console.log(minMax(angka));

// --------------------------------------------------------

// 10.
// Buatlah fungsi untuk mengecek tahun kabisat
// input : 2021
// output : 2021 bukan tahun kabisat

// input : 2024
// output : 2024 adalah tahun kabisat

// Jawaban Soal Nomor 10
const cekKabisat = (tahun) => {
  if (tahun % 4 === 0) {
    return console.log(`${tahun} adalah tahun kabisat`);
  } else {
    return console.log(`${tahun} bukan tahun kabisat`);
  }
};

cekKabisat(2022);
