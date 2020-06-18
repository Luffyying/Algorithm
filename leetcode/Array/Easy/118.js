/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let subArr = [[1]];
    if(numRows === 1){
        return subArr;
    }else if(numRows === 0){
        return [];    
    }else {
        for(let i=1;i<numRows;i++){
            let newArr = [];
            for(let j=0;j<i+1;j++){
                newArr[j] = real(subArr[i-1][j-1])+real(subArr[i-1][j]);
            }
            subArr.push(newArr);
        }
    }
    return subArr;
};
//Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
var real = function(item){
    return item || 0;
}