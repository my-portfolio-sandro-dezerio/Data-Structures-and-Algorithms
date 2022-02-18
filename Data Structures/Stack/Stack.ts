class Stack {
    private count: number;
    private storage: object;

    constructor() {
        this.count = 0;
        this.storage = {};
    }

    private push(value: any): void {
        this.storage[this.count] = value;
        this.count++;
    }

    private pop(): any {
        if(this.count === 0) {
            return null;
        }
        this.count--;
        const result = this.storage[this.count];
        return result;
    }

    private peek(): any {
        return this.storage[this.count - 1];
    }

    private size(): number {
        return this.count;
    }
}