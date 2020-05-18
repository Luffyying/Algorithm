/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    // 返回最低运载能力，也就是求最大值
    let day = 0;
    let left = 0;
    let right = weights.length -1;
    let sum = getSum(weights,left,right);
    while(day<D){
        
    }
    return sum;
};
function getSum(arr,l,r){
    if(r>l) return;
    let sum = 0;
    for(let i=l;i<r;i++){
        sum+=arr[i];
    }
    console.log('sum',sum);
    return sum;
}
var weights = [1,2,3,4,5,6,7,8,9,10], D = 5
shipWithinDays(weights,D);
//      1<=d<=weights.length