function quickSort(arr) {
  sort(arr, 0, arr.length - 1)
  return arr
}

function sort(arr, left, right) {
  if (left >= right) {
    return
  }
  const pivotVal = arr[Math.floor((left + right) / 2)];

  const index = partition(arr, left, right, pivotVal)
  sort(arr, left, index - 1)
  sort(arr, index, right)
}

function partition(arr, left, right, pivot) {
  while (left <= right) {

    while (arr[left] < pivot) {
      left++
    }

    while (arr[right] > pivot) {
      right--
    }

    if (left <= right) {
      const righty = arr[right];
      arr[right] = arr[left];
      arr[left] = righty;
      left++;
      right--;
    }

  }
  return left;
}

export default quickSort