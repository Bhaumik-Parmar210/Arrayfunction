function runProgram(){

    // Dummy Array
    let numbers = [4, 8, 2, 11, 6, 7, 10];

    console.log("Array:", numbers);

    // Maximum Number
    function findMax(arr){
        return Math.max(...arr);
    }

    // Sum Of Elements
    const sumArray = (arr) => {
        let sum = 0;

        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }

        return sum;
    }

    // Count Odd Numbers
    let countOdd = function(arr){

        let count = 0;

        for(let i = 0; i < arr.length; i++){

            if(arr[i] % 2 !== 0){
                count++;
            }

        }

        return count;
    }

    console.log("Maximum Number:", findMax(numbers));

    console.log("Sum Of Elements:", sumArray(numbers));

    console.log("Count Of Odd Numbers:", countOdd(numbers));

}