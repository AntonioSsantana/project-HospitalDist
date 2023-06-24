export default function emailValidation(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    return true;
  }

  return false;
}