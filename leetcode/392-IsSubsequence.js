/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 是否是子序列
var isSubsequence = function(s, t) {
    let isSub = true;
    let sub_str_length = s.length;
    let str_length = t.length;
    let count = 0;
    if(sub_str_length === 0)
        return true;
    for(let i=0;i<str_length;i++){
        if(t[i] === s[count]){
            count++;
        }
    }
    return count === sub_str_length;
};
// more faster
function isSubsequence2(s,t){
    let sPointer = 0;
    let tPointer = 0;
    while(sPointer<s.length && tPointer<t.length){
        if(sPointer === tPointer){
            sPointer++;
            tPointer++;
        }else{
            tPointer++;
        }
    }
    return sPointer === s.length;
}
