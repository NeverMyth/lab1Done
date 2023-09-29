//(d) Write a function that multiply each number under 70 by 2 in the following array.
//Hint: use a .map function


const myArray = [25, 31, 42, 77];

const ages = myArray.map((element)=>{
    if(element<=70){
    return element * 2;
    }
    else
    {
        return element;
    }
});  
console.log(ages);
