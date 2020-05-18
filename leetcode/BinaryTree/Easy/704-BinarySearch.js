/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(nums.length === 0){
        return -1;
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
            right = mid-1;
        }
    }
    return -1;
};
//查找第一个值等于给定值的元素
var search = function(nums, target) {
    if(nums.length === 0){
        return -1;
    }
    let left = 0;
    let right = nums.length-1;

    while(left<=right){
        let mid = Math.floor(left + ((right-left)>>2))
        if(nums[mid] === target){
            if(mid === 0 || nums[mid-1] !== target){
                return mid;
            }else {
                right = mid+1;
            }
        }else if(nums[mid] < target){
            left = mid+1;
        }else {
            right = mid-1;
        }
    }
    return -1;
};
//查找最后一个值等于给定值的元素
var search = function(nums, target) {
    if(nums.length === 0){
        return -1;
    }
    let left = 0;
    let right = nums.length-1;

    while(left<=right){
        let mid = Math.floor(left + ((right-left)>>2))
        if(nums[mid] === target){
            if(mid === nums.length-1 || nums[mid+1] !== target){
                return mid;
            }else {
                right = mid+1;
            }
        }else if(nums[mid] < target){
            left = mid+1;
        }else {
            right = mid-1;
        }
    }
    return -1;
};
//查找第一个大于等于给定值的元素
var search = function(nums, target) {
    if(nums.length === 0){
        return -1;
    }
    let left = 0;
    let right = nums.length-1;
    while(left<=right){
        let mid = Math.floor(left + ((right-left)>>2))
        if(nums[mid] >= target){
            if(mid === 0 || nums[mid-1]<target){
                return mid;
            }else {
                right = mid-1;
            }
        }else {
            left = mid+1;
        }
    }
    return -1;
};
var search = function(nums,target,left,right){
    if(nums.length === 0){
        return -1;
    }
    let mid = Math.floor(left + ((right-left)>>2));
    if(nums[mid] === target){
        return mid;
    }else if(nums[mid] < target){
        // left = mid+1;
        search(nums,target,mid+1,right);
    }else {
        // right = mid-1;
        search(nums,target,left,mid-1)
    }   
}
