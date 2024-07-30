const hobbies = ["Sports", "Cooking"];
const user = {
  name: "Max",
  age: 34
};

const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies, ...newHobbies];

const extendedUser = {
  isAdmin: true,
  ...user
};