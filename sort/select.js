function select(b){
    var item = null
    //默认b[small]是最小的
    for(var j=0;j<b.length-1;j++){
        small = j
        for(var k=j+1;k<b.length;k++){
            if(b[k]<b[small]){
                small = k
            }
        }
        //上述循环为了找到最小的值的small
        if(small !=j){
            //如果初始化的数据就是最小的了，则不再交换
            item = b[j]
            b[j] = b[small]
            b[small] = item
        }
        
    }
    return b
}
console.log(select([2,4,1,8,0,9,4,3]))
/*
    选择排序:选择排序即是给每个位置选择待排序元素中当前最小的元素
    最好时间复杂度：O(n*n)
    平均时间复杂度：O(n*n)
*/