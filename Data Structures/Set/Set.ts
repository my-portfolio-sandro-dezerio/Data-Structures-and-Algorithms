class MySet {
    private collection = [];

    public has(element) {
        return (this.collection.indexOf(element) !== -1);
    }

    public values() {
        return this.collection;
    }

    public size() {
        return this.collection.length;
    }

    public add(element) {
        if(!this.has(element)) {
            this.collection.push(element);
            return true;
        }
        return false;
    }

    public remove(element) {
        if(this.has(element)) {
            const index = this.collection.indexOf(element);
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    public union(otherSet) {
        let unionSet = new MySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(e => {
            unionSet.add(e);
        });
        secondSet.forEach(e => {
            unionSet.add(e);
        });
        return unionSet;
    }

    public intersection(otherSet) {
        let intersectionSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(e => {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    public difference(otherSet) {
        let differenceSet = new MySet();
        let firstSet = this.values();
        firstSet.forEach(e => {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    public subset(otherSet) {
        let firstSet = this.values();
        return firstSet.every(value => {
            return otherSet.has(value);
        });
    }
}