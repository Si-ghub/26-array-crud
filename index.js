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

// koki automobili esanti sarase norim red ir i ka pakeisti

automobiliai.redaguoti(3, 'opel');

automobiliai.pasalinti(1);
automobiliai.pasalinti(2);
automobiliai.pasalinti(3);


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