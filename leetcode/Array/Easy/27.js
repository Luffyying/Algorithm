/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let index = 0;
    for(let i=0;i<nums.length;i++){
        let item = nums[i];
        if(item !== val){
            nums[index++] = item;
        }
    }
    console.log(nums);
    return index;
};
// 去掉一个数组中包含val的，返回之后的数组长度 保证顺序不变 
// [0,1,2,2,3,0,4,2]  2