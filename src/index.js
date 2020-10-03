
exports.min = function min(array) {
  if ((array || []).length === 0) {
    return 0
  }
  else {
    let minElement = array[0];
    for (let i = 0; i < array.length; i++) {
      if (minElement > array[i]) {
        minElement = array[i];
      }
    }
    return minElement;
  }
}

exports.max = function max(array) {
  if ((array || []).length === 0) {
    return 0
  }
  else {
    let maxElement = array[0];
    for (let i = 0; i < array.length; i++) {
      if (maxElement < array[i]) {
        maxElement = array[i];
      }
    }
    return maxElement;
  }
}

exports.avg = function avg(array) {
  if ((array || []).length === 0) {
    return 0
  }
  else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum = sum + array[i];
    }
    return sum / array.length;
  }
}
