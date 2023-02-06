function condense (numbers) {
    
   while (numbers.length > 1) {
    let condensed = Array(numbers.length - 1); 
    let size = numbers.length - 1; 

    for (let i = 0; i < size; i++) {
        condensed[i] = numbers[i] + numbers[i + 1];

    }

    numbers = condensed
   }
    console.log(numbers[0])
}

condense([2, 10, 3])