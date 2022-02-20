class HashTable {
    private storage;
    private storageLimit: number;

    constructor() {
        this.storage = [];
        this.storageLimit = 4;
    }

    private hash(string, max) {
        let hash = 0;
        for (let index = 0; index < string.length; index++) {
            hash += string.charCodeAt(index);
        }
        return hash % max;
    }

    public add(key, value) {
        let index = this.hash(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        } else {
            let inserted = false;
            for (let index = 0; index < this.storage[index].length; index++) {
                if (this.storage[index][index][0] === key) {
                    this.storage[index][index][1] = value;
                    inserted = true;
                }
            }
            if (!inserted) {
                this.storage[index].push([key, value]);
            }
        }
    }

    public remove(key) {
        let index = this.hash(key, this.storageLimit);
        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        } else {
            for (let i = 0; i < this.storage[index]; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }
    }
}