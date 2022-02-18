class PriorityQueue {
    private collection: Array<any>;
    
    constructor() {
        this.collection = [];
    }

    public print() {
        return this.collection;
    }

    public enqueue(element: any): void {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let index = 0; index < this.collection.length; index++) {
                if(element[1] < this.collection[index][1]) {
                    this.collection.splice(index, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    }

    public dequeue() {
        return this.collection.shift();
    }

    public front() {
        return this.collection[0];
    }

    public isEmpty() {
        return this.collection.length === 0;
    }

    public size() {
        return this.collection.length;
    }
}

/**
 * Example:
 * const pQ = new PriorityQueue();
 * pQ.enqueue([ "Chair" , 3]);
 * pQ.enqueue([ "Table" , 1]);
 * pQ.enqueue([ "Cat" , 2]);
 * pQ.enqueue([ "Dog" , 4]);
 * pQ.print();
 */