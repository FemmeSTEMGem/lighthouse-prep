const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 10
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 25
  }
]

const metric = 'plumpness'

const judgeVegetable = function (vegetables, metric) {
  let metricMeasure = 0
  let submitter = ''
  for (let i = 0; i < vegetables.length; i++) {
    if (metricMeasure < vegetables[i][metric]) {
      metricMeasure = vegetables[i][metric]
      submitter = vegetables[i].submitter
    }
  }
  return submitter
}

console.log(judgeVegetable(vegetables, metric));


/*
let metricComparisonArray = [];
if (metric == "redness") {
  for (let i = 0; i < vegetables.length; i++) {
    metricComparisonArray.push(vegetables[i].redness)
  }
}
if (metric == 'plumpness') {
  for (let i = 0; i < vegetables.length; i++) {
    metricComparisonArray.push(vegetables[i].plumpness)
  }
}
metricComparisonArray.sort((a, b) => a - b).reverse()
let winner = metricComparisonArray[0]
if (metric == 'redness') {
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i].redness == winner) {
      return vegetables[i].submitter
    }
  }
}
if (metric == 'plumpness') {
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i].plumpness == winner) {
      return vegetables[i].submitter
    }
  }
}
*/