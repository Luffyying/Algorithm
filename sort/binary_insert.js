/*
    折半插入排序(对直接插入排序的一种优化，插入的时候，采用折半查找的方法来插入)
    时间复杂度：O(n*n)

*/
function insert(arr){
    let l = arr.length
    let low = 0,high =0
    for(let i=1;i<l;i++){
        
        let item = arr[i]//待插入记录
        low =0;
        high = i-1
        while(low<=high){
            let mid = Math.floor((low+high)/2)
            if(arr[mid]>item){
                high = mid-1
            }else{
                low = mid+1
            }
        }
        console.log('high:'+high)
        for(let j= i-1;j>=high;j--){
            arr[j+1] = arr[j]
        }
        arr[high+1] = item
    }
    return arr
}
console.log(insert([2,4,1,8,0,9,4,3]))