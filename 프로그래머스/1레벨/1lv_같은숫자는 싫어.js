function solution(arr){
    return arr.filter((data, i)=>{ if(data!==arr[i+1]){return data>-1}})  
}

console.log(solution([1,1,3,3,0,1,1]));