// iterates over elements of collection and invokes iteratee for each element 
// the iteratee is invoked with one argument : value 
//arguments : 
//1. the collection to iterate over, 
//2. the function invoked per iteration 

const forEach = (arr,func) => {
    if (func!== undefined){
        for (let i=0;i<arr.length;i++){
            func(arr[i])
        }
    }
}

const callback = value => {
    console.log(value)
}


forEach ([1,2],callback) // return '1' puis '2'
forEach([3,1]) // return nothing 
forEach([],callback) // return nothing 
forEach () // return nothing 