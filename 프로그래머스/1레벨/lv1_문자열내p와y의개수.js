let s1 = "oooooo"
let s2= s1.toLowerCase();
let y = 0;
let p = 0;
for(let i=0; i<s2.length; i++){
    if(s2[i]==="y"){
        y++
    }else if(s2[i]==="p"){
        p++
    }
}
if(y===p){
    console.log(true)
}else if(y,p ===0){
    console.log(true)
}else{
    console.log(false)
}