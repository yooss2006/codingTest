function solution(answers) {
    let one = {방식 : [1,2,3,4,5], 점수:0};
    let two = {방식 : [2,1,2,3,2,4,2,5], 점수 : 0};
    let three = {방식 : [3,3,1,1,2,2,4,4,5,5], 점수 : 0};

    answers.forEach(function(data, i){
        if(data == one.방식[i%one.방식.length]){
            one.점수++
        }if(data === two.방식[i%two.방식.length]){
            two.점수++
        }if(data === three.방식[i%three.방식.length]){
            three.점수++
        }})
    var answer_sort = [one.점수,two.점수,three.점수]
    answer_sort.sort(function(a,b){
        return b-a;
    })
    let answer = [];
    if(one.점수===answer_sort[0]){
        answer.push(1);
    }if(two.점수===answer_sort[0]){
        answer.push(2);
    }if(three.점수===answer_sort[0]){
        answer.push(3);
    }
    return answer;
}
console.log(solution([1]))