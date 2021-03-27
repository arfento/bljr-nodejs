console.log("Hello World");
//arrow function
const cetakSesuatu = (nama) =>
`Halo, Cetak ${nama}`;

console.log(cetakSesuatu("NTahlah"));

const PI = 3.14;


const mahasiswa = {
    nama: 'Lakdar Arfento',
    umur: 22,
    //notasi ES6
    cetakMhs (){
        return `halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    },
};


class Orang {
    constructor(){
        console.log('objec orang telah dibuat!!');
    }
}


// Membuat Local Module

/* ///deklarasi 1 1
module.exports.cetakSesuatu = cetakSesuatu;  //untuk memberikan akses ke fungsi jika dipanggil menggunakan require
module.exports.PI           = PI;
module.exports.mahasiswa    = mahasiswa;
module.exports.Orang        = Orang; */

/* //deklarasi 2 menggunakan objec
module.exports = {
    //properti : value
    cetakSesuatu: cetakSesuatu,
    PI : PI,
    mahasiswa : mahasiswa,
    Orang: Orang,
};
 */

// dekrasi 3 menggunakan NOTASI ES6
module.exports = { cetakSesuatu, PI, mahasiswa, Orang };