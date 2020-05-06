/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let right = letters.length-1;

    while(left<=right){
        let mid = Math.floor(left + ((right-left)>>2))
        if(letters[mid] >= target){
            if(mid===0 || letters[mid-1]<target){
                return letters[mid];
            }else {
                right = mid-1;
            }
        }else{
            left = mid+1;
        }
    }
    return -1;
};
// 如上是变体：查找第一个大于等于给定值的元素
// class Solution {
//     public char nextGreatestLetter(char[] letters, char target) {
//         int low = 0;
//         int high = letters.length - 1;
//         int mid = 0;
//         while(low < high){
//             mid = low + (high - low) / 2;
//             if(letters[mid] > target) high = mid;
//             else low = mid + 1;
//         }
//         return low == letters.length - 1 && letters[low] <= target ? letters[0] : letters[low];
//     }
// }
