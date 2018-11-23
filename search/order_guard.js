function orderSearch(arr,l,key){
    arr[0] = key
    for(var i= l;arr[i]!= key;i--){

    }
    return i
    
}
console.log(orderSearch([0,2,3,4,9,1,5,8,6],8,1))
/*
带哨兵的顺序查找
引入的目的： 在进行循环比较的时候，不必单独判断数组是否越界
o(n) = n
*/