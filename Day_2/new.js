const str=(value)=>{
    for(let i=0; i<=value.length; i++){
        if(value[i]=="n"){
            return true;
        }else{
            return false;
        }
    }
}
module.exports=str