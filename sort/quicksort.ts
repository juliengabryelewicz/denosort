/**
 * @param {Array<number>} array
 * @param {number} [head=0]
 * @param {number} [tail=array.length - 1]
 * @returns {number}
 */
function partitionArray(array: Array<number>, head: number = 0, tail: number = array.length - 1) {
  const pivot = array[Math.floor((tail + head) / 2)];
  let a = head;
  let b = tail;

  while (a <= b) {

    while (array[a] < pivot) {
      a++;
    }

    while (array[b] > pivot) {
      b--;
    }

    if (a <= b) {
      [array[a], array[b]] = [array[b], array[a]];
      a++;
      b--;
    }

  }

  return a;
}

/**
 * @param {Array<number>} array
 * @param {number} [head=0]
 * @param {number} [tail=array.length - 1]
 * @returns {Array<number>}
 */
export function quickSort(array: Array<number>, head: number = 0, tail: number = array.length - 1): Array<number>  {

  if (array.length > 1) {
    let index = partitionArray(array, head, tail);

    if (head < index - 1) {
      quickSort(array, head, index - 1);
    }

    if (index < tail) {
      quickSort(array, index, tail);
    }
  }

  return array;
}
