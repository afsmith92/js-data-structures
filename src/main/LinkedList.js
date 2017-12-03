class LinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    /**
     * Adds a new node to the end of the LinkedList
     * @param {*} data - the data to be stored in the new node
     * @returns {undefined} undefined
     **/
    add(data) {
        if (data === undefined) {
            return false;
        }

        const node = {
            data,
            next: null
        };

        if (!this.first) {
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }

        return true;
    }

    /**
     * removes the node with the provided data from the LinkedList
     * @param {*} data - node key of the node to be removed
     * @returns {Boolean} success - returns false if not found otherwise true
     **/
    remove(data) {
        let node = this.first;

        if (!node) {
            return false;
        }

        if (node.data === data) {
            this.first = node.next;
            if (!node.next) {
                this.last = null;
            }

            return true;
        }

        while (node.next && node.next.data !== data) {
            node = node.next;
        }

        if (!node.next) {
            return false;
        }

        node.next = node.next.next;

        if (!node.next) {
            this.last = node;
        }

        return true;
    }

    /**
     * returns an array of keys
     * @returns {Array} keys
     */
    toArray() {
        const arr = [];
        let node = this.first;

        while(node) {
            arr.push(node.data);
            node = node.next;
        }

        return arr;
    }

    /**
     * reverses the LinkedList
     * @returns {undefined} undefined
     **/
    reverse() {
        if (!this.first || this.first === this.last) {
            return;
        }

        const newLast = this.first;
        let node = this.first.next;
        newLast.next = null;
        let newFirst = newLast;

        while(node) {
            this.first = node.next;
            node.next = newFirst;
            newFirst = node;
            node = this.first;
        }

        this.first = newFirst;
        this.last = newLast;
    }
}

module.exports = LinkedList;
