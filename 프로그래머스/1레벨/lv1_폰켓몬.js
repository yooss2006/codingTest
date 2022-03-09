let 포켓몬 = [3,3,3,2,2,2];
let 기회 = 포켓몬.length/2;
let 포켓몬가방 = [];
for(let i=0; i<포켓몬.length; i++){
    let 있는지여부 = 포켓몬가방.indexOf(포켓몬[i])
    if(있는지여부<0){
        포켓몬가방.push(포켓몬[i])
    }
}
if(포켓몬가방.length>=기회){
    console.log(포켓몬가방, 기회);
}else{
    console.log(포켓몬가방.length)
}
