export default function telephoneValidation(tel){
  const regex = /^\(?\d{2}\)?[-. ]?\d{4,5}[-. ]?\d{4}$/;

  if (regex.test(tel)) {
    return true;
  }

  return false;
}