export const generateRandomReferralCode = () => {
  const codeLength = 3;
  const randomDigits = (length) =>
    Math.floor(
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1)) +
        Math.pow(10, length - 1)
    );

  const part1 = randomDigits(codeLength);
  const part2 = randomDigits(codeLength);

  return `${part1}-${part2}`;
};
