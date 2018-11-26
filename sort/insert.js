
function insert(arr){
    for(let i=1,l= arr.length;i<l;i++) {
        let item = arr[i]
        for(var k=i-1;k>=0;k--){
            if(arr[k]>item){
                arr[k+1] = arr[k]
            }else{
                break;
            }
        }
        if(i-1!=k){
            arr[k+1] = item
        }
    }
    return arr
}
// console.log(insert([2,4,1,8,0,9,4,3]))
console.log(insert([0,1,2,3,4,5]))

/*
    插入排序
    每次将item插入到已经排好序的序列中,首先默认有序序列为a[0]
    时间复杂度：{
        1:最好的情况：有序  O(n)
        2.平均：O(n*n)
    } 
*/