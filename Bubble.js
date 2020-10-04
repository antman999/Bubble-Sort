//***************BUBBLE SORT*****************
// A sorting algorithm where the largest values bubble up to the top //

//as you move you check first to the next index to see if its larger, if its smaller you swap

// [30,20,59,21,2]

//  ^  ^
// swap the smallest to the left

//[20,30,59,21,2]
//     ^  ^
//stays

//[20,30,59,21,2]
//       ^  ^
//        swap

//[20,30,21,59,2]
//           ^ ^
//           swap

//[20,30,21,2,59]

// ****** do it again till they are all sorted *********

// ****** BEFORE SORTING WE NEED TO SWAP *******

function swap(arr, index1, index2) {
	let temp = arr[index1]; // setting a array equal to the first index of the given arr
	arr[index1] = arr[index2]; // now we are setting that index equal to the value of second index
	arr[index2] = temp; // second index takes the value of first index here
	//##SWAP
}

// good to have a function to swap these numbers because it makes the sorting and looping easier

//************************************************

//************BubbleSort pseudocode*************
// start looping from with a variable called i, the end of the array towards the beginning
// start an inner loop with a variable called j from the beginning until i -1
// if arr[j] is greater than arr[j+1], swap those two values

//********* BAD BUBBLE SORT O(n^2) ************

// function bubbleSort(arr){
//     for(let i =0 ; i < arr.length; i++){
//        for(let j = 0; j< arr.length; j++){
//            if(arr[j]>arr[j+1]){
//               let temp =arr[j]
//               arr[j]= arr[j+1]
//               arr[j+1]=temp
//            }
//        }
//     }
//     return arr
// }

// *********************************************


