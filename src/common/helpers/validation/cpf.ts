import { numbersOnly } from './numbers';
import { isSequence } from './string';

export const CPF_LENGTH = 11;

const validateDigit = (cpfNumbers: number[], position: number) => {
  const validDigits = cpfNumbers.slice(0, CPF_LENGTH - position);

  const positionToLength = position - 1;
  const digitsSum = validDigits.reduce(
    (acc, current, index) =>
      acc + current * (CPF_LENGTH - positionToLength - index),
    0
  );
  const currentDigitValidator = digitsSum % CPF_LENGTH;
  const digitValidator =
    currentDigitValidator < 2 ? 0 : CPF_LENGTH - currentDigitValidator;

  const expectedDigitValidator = cpfNumbers[CPF_LENGTH - position];

  return digitValidator === expectedDigitValidator;
};

export const isCPF = (cpf: string | undefined) => {
  const cpfNumbers = numbersOnly(cpf).split('').map(Number);

  if (cpfNumbers.length !== CPF_LENGTH) return false;
  if (isSequence(cpfNumbers)) return false;

  return validateDigit(cpfNumbers, 2) && validateDigit(cpfNumbers, 1);
};

export const isEmptyOrCpf = (cpf: string | undefined) =>
  cpf ? isCPF(cpf) : true;

export const cpfPartialValid = (cpf: string | undefined) => {
  const cpfNumbers = numbersOnly(cpf).split('').map(Number);

  if (cpfNumbers.length > 4 && isSequence(cpfNumbers)) return false;
  if (cpfNumbers.length < CPF_LENGTH) return true;
  if (cpfNumbers.length === CPF_LENGTH - 2) return validateDigit(cpfNumbers, 2);

  return validateDigit(cpfNumbers, 1);
};
