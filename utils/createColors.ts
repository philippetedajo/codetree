const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const groupA = alphabet.slice(0, 5);
const groupB = alphabet.slice(5, 10);
const groupC = alphabet.slice(10, 15);
const groupD = alphabet.slice(15, 20);
const groupE = alphabet.slice(20, alphabet.length);

interface CreateColors {
  value?: string;
}

export const createColors = ({ value }: CreateColors): string => {
  const chart = value?.trim().charAt(0).toLowerCase() ?? "";

  if (groupA.includes(chart)) return "#0ea5e9";
  if (groupB.includes(chart)) return "#d946ef";
  if (groupC.includes(chart)) return "#14b8a6";
  if (groupD.includes(chart)) return "#ec4899";
  if (groupE.includes(chart)) return "#eab308";

  return "#10b981";
};
