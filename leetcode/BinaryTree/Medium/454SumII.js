/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
// 724ms so long
var fourSumCount = function(A, B, C, D) {
    let count = 0;
    //四层遍历时间复杂度太高
    // 先计算A,B
    let obj1 = {};
    for(let i=0;i<A.length;i++){
        let item = A[i];
        for(let j=0;j<B.length;j++){
            let val = item+B[j];
            obj1[val]!==undefined ? (obj1[val]++) : obj1[val] = 1;
        }
    }
    console.log(obj1);
    let obj2 = {};
    for(let i=0;i<C.length;i++){
        let item = C[i];
        for(let j=0;j<D.length;j++){
            let val = item+D[j];
            let s = 0 - val;
            if(obj1[s]){
                count +=obj1[s];
            }
        }
    }
    return count;
};
//如何用binary search
// 没有说排序，可以人为的排序
// [0,-1,-2,-2,]
var fourSumCount2 = function(A, B, C, D) {
    let count = 0;
    let arr = [];
    let arr2 = [];
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A.length;j++){
            arr.push(A[i]+B[j]);
            arr2.push(C[i]+D[j]);
        }
    }
    console.log(arr);
    console.log(arr2);
    for(let k=0;k<arr.length;k++){
        // console.log(arr[k]);
        count += search(-arr[k],arr2)
        // console.log('count:'+count);
    }
    return count;
}
// [ -2, 0, -2, 0 ]
// [ 0, -2, 2, 0 ]
function search(item,arr){
   let l = 0;
   let arr2 = arr.sort();
   let r = arr2.length -1; 
   while(l<=r){
    let m = Math.floor(l+((r-l)>>2));
    if(arr2[m]>item){
        r = m-1;
    }else if(arr2[m] === item){
        console.log('-----');
        // 注意这里可能有重复的数据，但此处只找了一个符合条件的
        console.log(arr2[m]);
        return 1;
    }else {
        l = m+1;
    }
   }
   return 0;
}
