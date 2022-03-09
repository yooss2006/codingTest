function solution(arr) {
    return arr.reduce((acc,v)=>acc+v)/arr.length;
}
console.log(solution([1,2,3,4]))