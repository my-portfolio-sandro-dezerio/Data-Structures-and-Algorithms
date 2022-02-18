class Queue {
    private collection: Array<any>;
    
    constructor() {
        this.collection = [];
    }

    public print() {
        return this.collection;
    }

    public enqueue(element: any): void {
        this.collection.push(element);
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