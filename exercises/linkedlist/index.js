// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    removeLast() {
        if (!this.head) {
            return;
        } else if (!this.head.next) {
            this.clear();
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    insertLast(record) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(record);
        } else {
            this.head = new Node(record);
        }

    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        return null;
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        } else if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previousNode = this.getAt(index - 1);

        if (!previousNode || !previousNode.next) {
            return null;
        }

        previousNode.next = previousNode.next.next;
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previousNode = this.getAt(index - 1) || this.getLast();

        previousNode.next = new Node(data, previousNode.next);
    }

    forEach(fn) {
        let node = this.head;
        while (node) {
            fn(node);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}


module.exports = { Node, LinkedList };
