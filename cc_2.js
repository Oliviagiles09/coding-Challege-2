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
