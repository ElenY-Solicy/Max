const arr = [44, 30, 24, 32, 35, 30, 40, 38, 15];

function ArrayChallenge(arr) {
  let profit = arr[1] - arr[0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (profit < arr[j] - arr[i]) profit = arr[j] - arr[i];
    }
  }
  return profit > 0 ? profit : -1;
}

ArrayChallenge(arr);

function maxProfit(arr) {
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (profit < arr[j] - arr[i]) {
        profit = arr[j] - arr[i];
      }
    }
  }
  return profit > 0 ? profit : -1;
}

maxProfit(arr);

