function Node(data){
    this.data = data;
    this.next = null;
}

function insertAtEnd(newNode,head){
    let current = head;

    while(current.next != null){
        current = current.next;
    }
    current.next = newNode;
}

function insertAtIndx(temp,head,target){

    let idx = 0;
    let current = head;
    while(current !=  null && idx != target-1){
        current = current.next;    
        idx++;
    }
    let currentNext = current.next;
    current.next = temp;
    temp.next = currentNext;
}


let head = new Node(50);
const mid = new Node(70);
const tail = new Node(900);


head.next = mid;
mid.next = tail;

// let tailnode = new Node(1744);

let random = new Node('Indore');
let idx = 2;


// insertAtEnd(tailnode,head)
// insertAtIndx(random,head,idx)
