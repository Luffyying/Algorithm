/** 
 * @param {number[]} numbers
 * @param {target} target
 * @return {number[]}
*/
function twoSum(numbers,target){
    if(numbers.length===0){
        return []
    }
    let left = 0;
    let right = numbers.length -1;
    let mid = left + ((right-left)>>2)
    while(mid >= target){
        right = mid-1;
        mid = left + ((right-left)>>2)
    }
    // 遍历left-right
    for(let i=left;i<=right;i++){
        let item = numbers[i]
        for(let j=i+1;j<=right;j++){
            if(item+numbers[j] === target){
                return [i+1,j+1];
                break;
            }
        }
    }
}
function twoSum2(numbers,target){
    let left = 0;
    let right = numbers.length -1;
    while(left<right){
        const sum = numbers[left]+numbers[right];
        if(sum === target){
            return [left+1,right+1];
        }else if(sum > target){
            right--;
        }else {
            left++;
        }
    }
    return [];
}
