function Node(data){
    this.data = data;
    this.next = null;
}


let head = new Node(50);
const mid = new Node(70);
const tail = new Node(900);
head.next = mid;
mid.next = tail;

function traversal(head){
    let current = head;

    while(current != null){
        console.log('data >>',current.data);
        current = current.next;
    }

}

// traversal(head)    
