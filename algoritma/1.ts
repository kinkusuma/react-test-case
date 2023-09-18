const reverse = (input: string): string => {
  let number = input.match(/\d+/g)?.join("") || "";
  let string = input.match(/[a-zA-Z]+/g)?.join("") || "";
  return string.split("").reverse().join("") + number;
};

console.log(reverse("NEGIE1"));
