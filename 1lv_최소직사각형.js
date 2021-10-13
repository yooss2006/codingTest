function solution(sizes) {
    let 최대값 = 0;
    let 배열에서작은값 = [];
    for(let i =0; i<sizes.length; i++){
        배열에서작은값.push(Math.min.apply(null, sizes[i]));
        for(let j=0; j<2; j++){
            if(sizes[i][j]>최대값){
                최대값 = sizes[i][j];
            }
        }
    }
    let 작은값중큰값 = Math.max.apply(null, 배열에서작은값);
    var answer = 최대값*작은값중큰값;
    return answer;
}
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))