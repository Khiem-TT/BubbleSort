export class BubbleSort {
    static list: number[] = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
    static bubbleSort(list: number[]) {
        for (let i = 1; i < list.length; i++) {
            for (let j = 0; j < list.length - i; j++) {
                if (list[j] > list[j + 1]) [list[j], list[j + 1]] = [list[j + 1], list[j]];
            }
        }
    }
}