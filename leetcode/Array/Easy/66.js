/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 递归
var plusOne = function(digits){
    return myPlus(digits,digits.length -1);
}
var myPlus = function(digits,index) {
    if(index < 0){
        // 处理这种情况[9],[9,9],[9,9,9]
        return [1].concat(digits);
    }
    if(digits[index]<9){
        digits[index]+=1;
        return digits;
    }else{
       digits[index] = 0; 
       // 产生进位 给前一位加一
       return myPlus(digits,index-1);
    }
};
// digits是一个数组也代表一个数字  [1,2,3,4] 1234+1-> 1235  ->[1235]
// [1,6,9] [1,7,0] [9,9,9][1,0,0,0] [9,9,0] [1,9] [2,0]
// 迭代 循环
var plusOne = function(digits){
    let len = digits.length;
    for(let i=len-1;i>=0;i--){
        let item = digits[i];
        if(item<9){
            digits[i]+=1;
            break;
        }
        digits[i] = 0;
    }
    if (digits[0] === 0) {
        return [1].concat(digits);
    }
    return digits;
}