/**
 * @param {number[]} nums1
 * @param {number} m //初始空间
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// [1,2,3] [2,5,6] [1,3,5] [2,4]  [1,2] [4,5,6] 
var merge = function(nums1, m, nums2, n) {
    // 将nums2合并到nums1,都是有序的
    let i=0,j=0;
    while(j<n){
        // 判断nums1是否遍历完
        if(i === m+j){
            // 直接将nums2后面的一并加入nums1
            for(let k = j;k<n;k++){
                nums1[m+k] = nums2[k];
            }
            return;
        }
        if(nums1[i]<nums2[j]){
           i++; 
        }else {
           // 把nums2[j]放到nums1[i]前面
            for(let k=m+j;k>i;k--){
                nums1[k] = nums1[k-1];
            }
            nums1[i++] = nums2[j++];
        }
    }
};
// 时间复杂度o(n*n)
var merge = function(nums1, m, nums2, n) {
   //将 nums1 的数字全部移动到末尾
   for (let count = 1; count <= m; count++) {
        nums1[m + n - count] = nums1[m - count];
    }
    let i = n; //i 从 n 开始
    let j = 0; 
    let k = 0;
    //遍历 nums2
    while (j < n) {
        //如果 nums1 遍历结束，将 nums2 直接加入
        if (i == m + n) {
            while (j < n) {
                nums1[k++] = nums2[j++];
            }
            return;
        }
        //哪个数小就对应的添加哪个数
        if (nums2[j] < nums1[i]) {
            nums1[k] = nums2[j++];
        } else {
            nums1[k] = nums1[i++];
        }
        k++;
    } 
}