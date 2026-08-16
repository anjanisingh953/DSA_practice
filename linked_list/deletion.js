function Node(data){
    this.data = data;
    this.next = null;
}

//Deletion 
function deleteAtStart(head){
    return head.next;
}

function deleteAtEnd(head){
    let current =  head;
    while(current.next.next != null){
        current = current.next;
    }
    current.next = null;
    return head;
}

function deleteAtIndex(temp,target){
    let current = temp;
    let idx = 0
    while(current.next != null && idx != target-1 ){
        current = current.next
        idx++
    }

    current.next = current.next.next;
}

//Node creation
let head = new Node(50);
const mid = new Node(70);
const tail = new Node(900);

//link the  node
head.next = mid;
mid.next = tail;

console.log(head)


// const result = deleteAtStart(head);
// console.log(result)


// const result2 = deleteAtEnd(head)
// console.log(result2)

const result3 = deleteAtIndex(head,1)
console.log(head)