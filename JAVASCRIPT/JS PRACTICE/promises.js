let promise1 = new Promise((resolve, reject)=>{
    let percentage = 85;
    let rahisPercentage = 88;
    if(percentage == rahisPercentage){
        resolve("Yes it is fillfilled");
    }else{
        reject("It is rejected")
    }
})
promise1.then((res) => console.log(res)).catch((err) => console.log(err));