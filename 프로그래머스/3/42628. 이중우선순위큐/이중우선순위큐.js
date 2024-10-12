class Heap {
    constructor () {
        this.heap = [];
    }
    
    getParentIdx(index) {
        return Math.floor((index - 1) / 2)
    }
    getRightChildrenIdx(index) {
        return 2 * index + 2
    }
    getLeftChildrenIdx(index) {
        return 2 * index + 1
    }
    swap(index1, index2) {
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    push(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length - 1)
    }
    heapifyUp(index) {
        let currentIdx = index;
        let parentIdx = this.getParentIdx(currentIdx)
        while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
            this.swap(currentIdx, parentIdx)
            currentIdx = parentIdx
            parentIdx = this.getParentIdx(currentIdx)
        }
    }
    getMaxValue() {
        if (this.heap.length === 0) return null;
        let max = Math.max(...this.heap);
        let index = this.heap.indexOf(max);
        this.swap(index, this.heap.length - 1);
        return this.heap.pop();
    }
    getMinValue() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop()
        const item = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return item;
    }
    heapifyDown(index) {
        let currentIdx = index;
        const len = this.heap.length;
        while(true) {
            let leftIdx = this.getLeftChildrenIdx(currentIdx);
            let rightIdx = this.getRightChildrenIdx(currentIdx);
            let smallestIdx = currentIdx;
            
            if(leftIdx < len && this.heap[leftIdx] < this.heap[smallestIdx]) {
                smallestIdx = leftIdx
            }
            if(rightIdx < len && this.heap[rightIdx] < this.heap[smallestIdx]) {
                smallestIdx = rightIdx
            }
            if(currentIdx === smallestIdx) break;
            
            this.swap(currentIdx, smallestIdx)
            currentIdx = smallestIdx
        }
    }
    result() {
        return this.heap.length === 0 ? [0,0] : [Math.max(...this.heap), Math.min(...this.heap)]
    }
}

function solution(operations) {
    const heap = new Heap()
    operations.forEach(cur => {
        const [type, value] = cur.split(" ")
        if(type === "I") heap.push(parseInt(value))
        if(type === "D" && value === "-1") heap.getMinValue()
        if(type === "D" && value === "1") heap.getMaxValue()
    })
    return heap.result()
}