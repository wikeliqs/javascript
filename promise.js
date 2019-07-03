const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

const makeAllCaps = function(arrayOfWords){  
    return new Promise((resolve, reject) => {    
        /*    
        TODO: try to do something asynchronously    
        and resolve or reject according to    
        operation result.    
        */  
        

        var toUpper = function(x){ 
          if(typeof x === "string"){
            return x.toUpperCase();
          }else{
            return x;
          }
         
        };
        array2 = arrayOfWords.map(toUpper);
        resolve(array2)
      
    })
};


const sortTheArray = function(arrayOfWords){  
    return new Promise((resolve, reject) => {    
        /*    
        TODO: try to do something asynchronously    
        and resolve or reject according to    
        operation result.    
        */  
      resolve(arrayOfWords.sort())
      
    })
};


// Call doSomething and receive a Promise as return
let doIt = makeAllCaps(complicatedArray)
doIt.then(sortTheArray)
// Wait for the promise to get resolved...
doIt.then(response => {  
    // Use response
    console.log(response)
})

// ... or to get rejected
doIt.catch(error => console.log(error))

