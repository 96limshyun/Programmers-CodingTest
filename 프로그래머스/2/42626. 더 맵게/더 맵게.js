class Heap {
    constructor() {
        this.heap = [];
    }

    getParentIdx(index) {
        return Math.floor((index - 1) / 2)
    }

    getLeftChildren(index) {
        return 2 * index + 1
    }

    getRightChildren(index) {
        return 2 * index + 2
    }

    swap(index1, index2) {
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    
    push(value) {
        this.heap.push(value)
        this.heapifyUp(this.heap.length -1)
    }

    heapifyUp(index) {
        let currentIdx = index
        let parentIdx = this.getParentIdx(currentIdx)

        while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
            this.swap(currentIdx, parentIdx)

            currentIdx = parentIdx
            parentIdx = this.getParentIdx(currentIdx)
        }
    }

    delete() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop()

        const item = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
        return item
    }

    heapifyDown(index) {
        let currentIdx = index;
        let leftChildrenIdx = this.getLeftChildren(currentIdx)
        let rightChildrenIdx = this.getRightChildren(currentIdx)
        let smallestIndex = currentIdx

        const len = this.heap.length
        
        if(leftChildrenIdx < len && this.heap[smallestIndex] > this.heap[leftChildrenIdx]) {
            smallestIndex = leftChildrenIdx
        }

        if(rightChildrenIdx < len && this.heap[smallestIndex] > this.heap[rightChildrenIdx]) {
            smallestIndex = rightChildrenIdx
        }

        if(currentIdx !== smallestIndex) {
            this.swap(currentIdx, smallestIndex)
            this.heapifyDown(smallestIndex)
        }
        
    }

    peek() {
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }
    
}

function solution(scoville, K) {
    const heap = new Heap()
    let mixCount = 0;
    
    scoville.forEach(cs => {
        heap.push(cs)
    })
    
    while(heap.size() >= 2 && heap.peek() < K) {
        const firstMin = heap.delete()
        const secondMin = heap.delete()
        
        const mixMin = firstMin + secondMin * 2
        heap.push(mixMin)
        mixCount++
    }
    
    return heap.peek() >= K ? mixCount : -1
}