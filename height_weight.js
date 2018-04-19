const network = new brain.NeuralNetwork()
network.train([
  { input: { height: 150, weight: 180 }, output: { adult: 1 } },
  { input: { height: 150, weight: 180 }, output: { adult: 1 } },
  { input: { height: 150, weight: 180 }, output: { adult: 1 } },
  { input: { height: 40, weight: 60 }, output: { adult: 0 } },
  { input: { height: 50, weight: 12 }, output: { adult: 0 } },
  { input: { height: 20, weight: 30 }, output: { adult: 0 } },
])
const testData = {height: 40, weight: 10}
const result = network.run(testData)
console.log(result);