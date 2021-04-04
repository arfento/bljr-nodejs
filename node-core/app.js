///core module
//file System

const fs = require('fs');

// console.log(fs);

// menuliskan string ke file synchronous

/* try {
    fs.writeFileSync('test.txt', 'Hello world synchronous!');
} catch (error) {
    console.log(error);    
} */

// menuliskan string ke async

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('data/data.txt', 'Hello world asynchronous!', (err) => {
//     // console.log(err);
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

//membaca isi file

/* const data = fs.readFileSync('test.txt');
console.log(data.toString());
 */
//membaca isi file async

/* fs.readFile('data/data.txt', 'utf-8',(err, data) => {
    if (err) throw err;
    console.log(data);
  }); */


  //readline

  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Nama anada :  ', (nama) => {
      rl.question('Masukkan nomor Hp Anda : ', (noHP) =>{
          rl.question('Alamat : ', (alamat) => {

              console.log(`Thank you nama : ${nama}, NoHP : ${noHP}, alamat ${alamat}`);
              rl.close();
          });
      });
  });

