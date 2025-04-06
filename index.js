

try{
     const man = area(7,0);{
        if(man==Infinity){
         throw new Error('zero error');
        }
        console.log(man)
     }
}catch(error){
     
        console.log(error.message);
     }
finally{
    console.log("subam");
}
function area(name,dept){
    return name/dept;
}
