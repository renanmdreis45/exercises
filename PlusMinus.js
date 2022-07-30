'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
            let i, positive_cont = 0, negative_cont = 0, null_count=0 , n = arr.length, freq_pos , freq_neg, freq_null;
            
        for(i=0; i<n; i++){
            if(arr[i]>0) positive_cont++;
            else if(arr[i]<0) negative_cont++;
            else null_count++; 
        }
    
        freq_pos = Math.round((positive_cont/n)*1000)/1000
        freq_neg = Math.round((negative_cont/n)*1000)/1000;
        freq_null = Math.round((null_count/n)*1000)/1000
        
        console.log(freq_pos.toFixed(6));
        console.log(freq_neg.toFixed(6));
        console.log(freq_null.toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

