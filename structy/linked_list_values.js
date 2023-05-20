const linkedListValues = (head) => {
    let values = [];
    while (head !== null) {
        values.push(head.val)
        head = head.next
    }
    return values
}

