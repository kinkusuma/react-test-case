const countWords = (input: string[], query: string[]): number[] => {
  let result: number[] = [];
  for (const word of query) {
    result.push(input.filter((item) => item === word).length);
  }
  return result;
};

console.log(countWords(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]));
