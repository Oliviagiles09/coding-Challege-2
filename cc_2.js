// Task 1
let products = ["Blush", "Broner", "Mascara", "Eye Shadow", "Powder"];

products.push("Highlighter");

consol.log(products);

products.pop()

consol.log("Updated products:", products);

// Task 2 
let scores = [100, 95, 90, 80, 85];
scores[1] = 85;

let total = scores.reduce((a, b) => a + b, 0);
let average = total / scores.length;

consol.log("Updated Scores:", scores);
consol.log(total);
consol.log("Average Scores:", average);

// Task 3 
let employee = {
  name: "Natalie Roberts",
  age: 21,
  department:"Sales",
  isActive: true
};

consol.log(employee);

employee.department = "HR";
employee.position = "Manager";

consol.log("Update employee object:", employee);

// Task 4 
let customers = [
  { name: "Natalie", email: "Natalie@gmail.com", purchaseAmount: 200},
  { name: "Emma", email: "Emma@gmail.com", purchaseAmount: 150},
  { name: "Ariella", email: "Ariella@gmail.com", purchaseAmount: 100},
  ];

customers.push({ name: "Hailey", email: "Hailey@gmail.com", purchaseAmount: 145});

log("Customer list:", customers);
