// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    do {
        slow = slow.next;
        fast = fast.next.next;
    }while(fast.next && fast.next.next && (slow !== fast) )
    return slow === fast;
}

module.exports = circular;
