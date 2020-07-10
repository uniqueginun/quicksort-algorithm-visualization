function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

let sleep = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

function quickSortAlgorithm() {
  return {
    items: [],
    max: 360,
    currentlyCompared: [],
    itemStyle: function (item, index) {
      return `width: 4px; height: ${item}px; background-color: ${
        this.currentlyCompared.includes(index) ? "red" : "#fff"
      }`;
    },
    run() {
      this.quickSort(this.items, 0, this.items.length - 1);
    },
    resetArrayItems() {
      this.items = [];
      for (let i = 0; i < this.max; i++) {
        let random = Math.floor(Math.random() * this.max) + 6;
        while (!this.items.includes(random)) {
          this.items.push(random);
        }
      }
    },
    async quickSort(arr, start, end) {
      if (start >= end) {
        this.currentlyCompared = [];
        return;
      }

      let index = await this.partition(arr, start, end);

      await this.quickSort(arr, start, index - 1);
      await this.quickSort(arr, index + 1, end);
    },
    async partition(arr, start, end) {
      let pivotIndex = start;
      let pivot = arr[end];
      for (let i = start; i < end; i++) {
        if (arr[i] < pivot) {
          await sleep(1);
          swap(arr, i, pivotIndex);
          this.currentlyCompared = [i, pivotIndex];
          pivotIndex++;
        }
      }
      await sleep(1);
      swap(arr, pivotIndex, end);
      this.currentlyCompared = [pivotIndex, end];
      return pivotIndex;
    },
  };
}
