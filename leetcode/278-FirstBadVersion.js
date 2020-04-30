/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;
        let right = n;
        while(left<=right){
            let mid = Math.floor(left+((right-left)>>2));
            if(!isBadVersion(mid)){
                left = mid+1;
            }else{
                if(mid === 1 || !isBadVersion(mid-1)){
                    return mid;
                }else {
                    right = mid -1;
                }
            }
        }
        return left;
    };
};
// 二分查找的四种非常规形式之一：包含重复元素的数组中查找第一个匹配的值