//LeaderElements : everything in the right hand side should be smaller
const arr = [10,22,12,3,0,6]

function leaderElement(arr){
  let n = arr.length;
  let temp_arr = [];
  let leader = -1;

  for(let i =n-1; i>=0; i--){
        if(arr[i]>leader){
            temp_arr.push(arr[i])
        }

        leader = Math.max(leader,arr[i]);
  }

  return temp_arr;

}

const result = leaderElement(arr);
console.log('result >>>>',result);