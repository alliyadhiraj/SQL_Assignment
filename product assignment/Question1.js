   let numbers = [2, 4, 9, 2, 0, 16, 24];

    let arr = numbers.slice().sort(function(a, b) {
      return a - b;
    });
    
    let smallest = arr[0],                      
        largest  = arr[arr.length - 1];
    
    console.log('Smallest: ' + smallest);
    
    console.log('Largest: ' + largest);