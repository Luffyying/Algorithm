/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currSum;  
    for (var i = 0; i < len; i++) {  
        currSum = 0;   
        for (var j = i; j < len; j++) {   
            currSum += arr[j];    
            if (maxSum < currSum) {   
                maxSum = currSum;      
            }   
        }
    } 
    return maxSum;
};
// 求连续的一组数的最大和
// [-2,1,-3,4,-1,2,1,-5,4] 6 [4,-1,2,1] o(n*n)
// 第一层遍历是 最小串的起点，第二层遍历是计算和

// currSum: -2 maxSum: -2
//  动态规划
function maxSubArray(nums){
    var dp = new Array(nums.length);
    dp[0] = nums[0];
    let res = dp[0];
    for(let i=1;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i]);
        res = Math.max(res,dp[i]);
    }
    return res;
}        