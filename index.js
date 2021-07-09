// norint terminale iskviest si faila;
// rasome node . (be kabuciu su tarpu)

const Sarasas = require('./Sarasas');

const automobiliai = new Sarasas();  //inicijuojame sarasa

automobiliai.prideti('audi');
automobiliai.prideti('volvo');
automobiliai.prideti('bmw');
automobiliai.prideti('nissan');
automobiliai.prideti('ww');
automobiliai.prideti('peugeot');
automobiliai.prideti('range rover');



automobiliai.spausdinti();

automobiliai.redaguoti(10, 'mazda'); // koki automobili esanti sarase norim red ir i koki
automobiliai.redaguoti(-1, 'mazda');
automobiliai.redaguoti(2.5, 'mazda');
automobiliai.redaguoti(3, 'opel');
automobiliai.spausdinti();


//Sarasas:
// ================
// 1. audi
// 2. volvo
// ================































// automobiliai.prideti('audi');
// automobiliai.prideti('volvo');
// automobiliai.spausdinti();

// //terminale reikia isspausdinti visus automobilius tokiu principu:
// // nr. auto-pavadinimas
// // 1. audi
// // 2. volvo

// automobiliai.redaguoti(0, 'mazda');
// automobiliai.spausdinti();
// // 1. mazda
// // 2. volvo

// automobiliai.pasalinti(0);
// automobiliai.spausdinti();
// // 1. volvo