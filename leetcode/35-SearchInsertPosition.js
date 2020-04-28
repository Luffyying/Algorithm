/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums,target){
    if(nums.length === 0){
        return 0;
    }
    let left = 0;
    let right = nums.length-1;

    while(left<=right){
        let mid = Math.floor(left + ((right-left)>>2))
        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] < target){
            left = mid+1;
        }else {
            high = mid-1;
        }
    }
    return left;
}