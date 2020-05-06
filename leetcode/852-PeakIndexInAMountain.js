/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let left = 0;
    let right = A.length-1;

    while(left<=right){
        let mid = Math.floor(left + ((right-left)>>2))
        if(A[mid] >A[mid-1] && A[mid]>A[mid+1] ){
            return mid;
        }else if(A[mid+1] > A[mid]){
            left = mid+1;
        }else {
            right = mid-1;
        }
    }
    return 0;
};