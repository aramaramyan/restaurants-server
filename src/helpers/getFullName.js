const names = [
  "Aram", "Arman", "Albert", "Ani", "Amalia", "Armen", "Anahit",
  "Bako", "Carine", "Chinar", "Gayane", "Gurgen", "Garnik", "Gaspar",
  "Hakob", "Hasmik", "Hayk", "Hayarpi", "Knar", "Karen", "Lara", "Levon",
  "Laura", "Meruj", "Mariam", "Meri", "Mayis", "Nver", "Narek", "Nane",
  "Narine", "Paruyr", "Rafael", "Robert", "Roza", "Samvel", "Satenik", "Suren",
  "Taron", "Tatev", "Tigran", "Vardan", "Vahe", "Vard",
];
const surnames = [
  "Aramyan", "Abrahamyan", "Aleksanyan",
  "Babayan", "Baghdasaryan", "Badalyan",
  "Danielyan", "Darbinyan", "Davtyan",
  "Gasparyan", "Gevorgyan", "Gabrielyan",
  "Hovhannisyan", "Hakobyan", "Harutyunyan",
  "Karapetyan", "Kirakosyan", "Kocharyan",
  "Mirzoyan", "Mkhitaryan", "Mkrtchyan",
  "Nazaryan", "Nersisyan", "Ohanyan",
  "Petrosyan", "Poghosyan", "Safaryan",
  "Sahakyan", "Samvelyan", "Sargsyan",
  "Tonoyan", "Torosyan", "Tovmasyan",
  "Vardanyan", "Voskanyan", "Yesayan",
];

function getRandomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
}

function getFullName() {
  const name = names[getRandomNumber(names.length)];
  const surname = surnames[getRandomNumber(surnames.length)];

  return `${name} ${surname}`;
}

module.exports = getFullName;