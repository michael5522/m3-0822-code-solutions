
function graduate(credential) {
  return function wtfbbq(fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
console.log(medicalSchool);
const lawSchool = graduate('Esq.');
// eslint-disable-next-line no-console
console.log(medicalSchool('Michael Chang'));
// eslint-disable-next-line no-console
console.log(lawSchool('Michael Chang'));
