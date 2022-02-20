class Item {
    public element: any;
    public next: Item;

    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    private length: number;
    private head;

    public size(): number {
        return this.length;
    }

    public getHead() {
        return this.head;
    }

    public add(element) {
        const item = new Item(element);
        if (this.head == null) {
            this.head = item;
        } else {
            let currentItem = this.head;
            while (currentItem.next) {
                currentItem = currentItem.next;
            }
            currentItem.next = item;
        }
        this.length++;
    }

    public remove(element) {
        let currentItem = this.head;
        let previousItem;
        if (currentItem.element === element) {
            this.head = currentItem.next;
        } else {
            while (currentItem.element !== element) {
                previousItem = currentItem;
                currentItem = currentItem.next;
            }
            previousItem.next = currentItem.next;
        }
        this.length--;
    }

    public isEmpty() {
        return this.length === 0;
    }

    public indexOf(element) {
        let currentItem = this.head;
        let index = -1;
        while (currentItem) {
            index++;
            if (currentItem.element === element) {
                return index;
            }
            currentItem = currentItem.next;
        }
        return -1;
    }

    public elementAt(index) {
        let currentItem = this.head;
        let count = 0;
        while (count < index) {
            count++;
            currentItem = currentItem.next;
        }
        return currentItem.element;
    }

    public addAt(index, element) {
        let item = new Item(element);
        let currentItem = this.head;
        let previousItem;
        let currentIndex = 0;
        if (index > this.length) {
            return false;
        }
        if (index === 0) {
            item.next = currentItem;
            this.head = item;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousItem = currentItem;
                currentItem = currentItem.next;
            }
        }
        this.length++;
    }

    public removeAt(index) {
        let currentItem = this.head;
        let previousItem;
        let currentIndex = 0;
        if (index < 0 || index >= this.length) {
            return null;
        }
        if (index === 0) {
            this.head = currentItem.next;
        } else {
            while ( currentIndex < index) {
                currentIndex++;
                previousItem = currentItem;
                currentItem = currentItem.next;
            }
            previousItem.next = currentItem.next;
        }
        this.length--;
        return currentItem.element;
    }
}