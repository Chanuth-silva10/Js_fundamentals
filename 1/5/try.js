const students = [
  { name: "Chamara", age: 22 },
  { name: "Kasun", age: 25 },
  { name: "Saman", age: 32 },
  { name: "Prasad", age: 28 },
  { name: "Sarath", age: 45 },
];

const sortedStd = students.sort((std1, std2) => {
  return std1.age - std2.age;
});

console.log(sortedStd);