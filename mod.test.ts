import { assertEquals } from "./test_deps.ts";
import { bubbleSort } from "./sort/bubblesort.ts";
import { quickSort } from "./sort/quicksort.ts";

Deno.test("Should return an array sorted correctly by bubbleSort", function test_bubbleSort() {
  const array: Array<number> = bubbleSort([47, 33, 1, 12, 2, 1000, 20, 131, 47, 24, 999, 10000, 49, 50, 30]);
  assertEquals(array, [1, 2, 12, 20, 24, 30, 33, 47, 47, 49, 50, 131, 999, 1000, 10000]);
});

Deno.test("Should return an array sorted correctly by quickSort", function test_quickSort() {
  const array: Array<number> = quickSort([47, 33, 1, 12, 2, 1000, 20, 131, 47, 24, 999, 10000, 49, 50, 30]);
  assertEquals(array, [1, 2, 12, 20, 24, 30, 33, 47, 47, 49, 50, 131, 999, 1000, 10000]);
});

Deno.test("Should return an array sorted correctly by quickSort with left and right", function test_quickSort() {
  const array: Array<number> = quickSort([47, 33, 1, 12, 2, 1000, 20, 131, 47, 24, 999, 10000, 49, 50, 30], 2, 5);
  assertEquals(array, [47, 33, 1, 2, 12, 1000, 20, 131, 47, 24, 999, 10000, 49, 50, 30]);
});
