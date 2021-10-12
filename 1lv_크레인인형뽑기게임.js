function solution(board, moves) {
    let 잡은인형 = [];
    var answer = 0;
    moves.forEach(function(mdata){
        for(let i=0; i<board.length; i++){
            if(board[i][mdata-1]>0){
                잡은인형.push(board[i][mdata-1]);
                board[i][mdata-1]=0;
                break;
              }
        }
    })
    let i =0;
    while(i<잡은인형.length){
        if(잡은인형[i]==잡은인형[i+1]){
            answer+=2;
            잡은인형.splice(i, 2);
            i=0; 
        }else{
            i++
        }  
    }
     return answer;
}
console.log(
    solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], 
    [1,5,3,5,1,2,1,4]));