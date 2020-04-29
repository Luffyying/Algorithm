/** 
 * @param {number} x
 * @return {number}
*/
// 76ms
function mySqrt(x){
    if(x<0){
        return new Error;
    }
    let low = 0;
    let up = x;
    // 考虑0-1之间的情况
    if(x<1 && x >0){
        low = x;
        up = 1;
    }
    while(low<=up){
        let mid = low+((up-low)>>2);
        if(mid * mid <x){
            low = mid +1;
        }else if(mid * mid === x){
            return mid;
        }else {
            up = mid -1;
        }
    }
    return low-1;
}
// 8的平方根是2
// 暴力解法 100ms
function mySqrt2(x){
    if(x<=1) return x;
    for(let i=1;i<=x;i++){
        let res = i*i;
        if(res === x){
            return i
        }else if(res > x){
            return i-1;
            break;
        }
    }
    return -1;
}