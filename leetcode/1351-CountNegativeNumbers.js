/**
 * @param {number[][]} grid
 * @return {number}
 */
// but i am fail ,128ms
var countNegatives = function(grid) {
    let count = 0;
    for(let i=0;i<grid.length;i++){
        let item = grid[i];
        // item 是降序排列
        count+=searchCount(item);
    }
    return count;
};
var searchCount = function(arr){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]>=0){
            left = mid+1;
        } else {
            if(mid === 0 || arr[mid-1]>0){
                return arr.length -mid;
            }else {
                right = mid-1;
            }
        }
    }
    return arr[left]<0 ? arr.length-left : 0;
}
// 作为对比 下面是最笨重的方法 56ms 时间复杂度为O(n*n)
var countNegatives = function(grid) {
    let count = 0;
    let l = grid.length;
    for(let i=0;i<l;i++){
        let item = grid[i];
        let length = item.length;
        // item 是降序排列
        for(let j=length-1;j>=0;j--){
            if(item[j]<0){
                count++;
            }else {
                break;
            }
        }
    }
    return count;
};

