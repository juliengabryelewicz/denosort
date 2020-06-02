/**
 * @param {Array<number>} array
 * @returns {Array<number>}
 */
export function bubbleSort(array: Array<number>): Array<number> {

    for(let a = 0; a < array.length; a++) {
        for(let b = 0; b < array.length - 1; b++) {
            if(array[b] > array[b + 1]) {
                let index = array[b];
                array[b] = array[b + 1];
                array[b + 1] = index;
            }
        }
    }

    return array;
}