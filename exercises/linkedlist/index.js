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
        let size = 0, pointer = this.head;
        while(pointer != null) {
            size++;
            pointer = pointer.next;
        }
        return size;
    }
    
    getFirst() {
        return this.head;
    }
    
    getLast() {
        let pointer = this.head;
        while(pointer.next != null) {
            pointer = pointer.next;
        }
        return pointer;
    }
    
    clear() {
        this.head = null;
    }
    
    removeFirst() {
        this.head = this.head.next;
    }
    
    removeLast() {
        if(this.head) {
            if(!this.head.next) {
                this.head = null;
            } else {
                let pointer = this.head;
                while(pointer.next.next != null) {
                    pointer = pointer.next;
                }
                pointer.next = null;
            }
        }
    }
    
    insertLast(data) {
        let pointer = this.head;
        while(pointer && pointer.next != null) {
            pointer = pointer.next;
        }
        if(pointer) {
            pointer.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }
    
    getAt(i) {
        let j = 0, pointer = this.head;
        while(pointer != null && j < i) {
            j++;
            pointer = pointer.next;
        }
        return pointer;
    }
    
    removeAt(i) {
        if(this.head) {
            let j = 0, pointer = this.head, before = null;
            while(pointer != null && j < i) {
                j++;
                before = pointer;
                pointer = pointer.next;
            }
            if(before) {
                if(pointer) {
                    before.next = pointer.next;
                } else {
                    this.head = null;
                }
            } else {
                this.head = pointer.next;
            }
        }
    }
    
    insertAt(data, i) {
        let j = 0, pointer = this.head, 
        before = null;
        while(pointer != null && j < i) {
            j++;
            before = pointer;
            pointer = pointer.next;
        }
        if(before) {
            before.next = new Node(data, pointer);
        } else {
            this.head = new Node(data, pointer);
        }
    }
    
    forEach(fn) {
        let pointer = this.head;
        while(pointer != null) {
            fn(pointer);
            pointer = pointer.next;
        }
    }
    
    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
