//递归
function recruBinary(i,j,arr,key) {
    let mid = Math.floor((i+j)/2)
    if(i<=j){
        if(arr[mid] ==key){
            return mid
        }else{
            if(arr[mid] < key){
                return recruBinary(mid+1,j,arr,key)
            }else{
                return recruBinary(i,mid-1,arr,key)
            }
        }
    }else{
        return -1
    }
    
    
}
console.log(recruBinary(0,7,[1,3,6,12,45,78,90],78))

//非递归
function nonRecruBinary(arr,key){
    let low = 0
    let high = arr.length-1
    while(low<=high){
        var mid = Math.floor((low+high)/2)
        if(arr[mid] > key) {
            higt = mid -1
        } else if(arr[mid] < key) {
            low = mid +1
        } else {
            return mid
        }
    }
    return -1
}
console.log(nonRecruBinary([1,3,6,12,45,78,90],99))

/*
前提：元素有序,采用顺序存储结构
每次查找都会去掉一半的不合适元素,所以对于n个元素的情况：
n/2
n/4
...
n/(2^m) =1 
(可以理解为二叉排序树的深度)
O(n) = log2(n)

*/