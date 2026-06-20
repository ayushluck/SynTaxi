export class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

export class RandomListNode {
    constructor(val = 0, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

export function arrayToList(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    const dummy = new ListNode(0);
    let cur = dummy;
    for (const v of arr) {
        cur.next = new ListNode(v);
        cur = cur.next;
    }
    return dummy.next;
}

export function arrayToListWithCycle(arr, pos = -1) {
    const head = arrayToList(arr);
    if (!head || pos < 0 || pos >= arr.length) return head;
    let tail = head;
    let idx = 0;
    let target = null;
    while (tail) {
        if (idx === pos) target = tail;
        if (!tail.next) break;
        tail = tail.next;
        idx++;
    }
    tail.next = target;
    return head;
}

export function listToArray(head, limit = 1000) {
    const res = [];
    let cur = head;
    let i = 0;
    while (cur && i < limit) {
        res.push(cur.val);
        cur = cur.next;
        i++;
    }
    return res;
}

export function arrayToRandomList(entries) {
    if (!Array.isArray(entries) || entries.length === 0) return null;

    const nodes = entries.map(([val]) => new RandomListNode(val));

    nodes.forEach((node, index) => {
        node.next = nodes[index + 1] ?? null;
        const randomIndex = entries[index][1];
        node.random = Number.isInteger(randomIndex) ? (nodes[randomIndex] ?? null) : null;
    });

    return nodes[0];
}
