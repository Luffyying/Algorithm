/*
    希尔排序  :缩小增量排序  元素按照增量分组后，分别再使用直接插入排序(属于插入排序)
    初始增量：gap= length/2 ->缩小增量后：gap= gap/2 ->.....   gap = 1
    平均时间复杂度：O(nlogn)
*/
// function shell(arr){
//     let l = arr.length
//     let gap = Math.floor(l/2)
//     while(gap>0){
//     // for(let gap=Math.floor(l/2);gap>0;gap/=2){
//         for(let i=gap;i<arr.length;i++){
//             var j =i;
//             let item = arr[j]
//             for(j=i-gap;j>=0&&item<arr[j];j-=gap){
//                 arr[j+gap] = arr[j]
//             }
//             arr[j+gap] = item
//         }
//         gap = Math.floor(gap/2)
//     }
//     return arr
// }
// console.log(shell([8,9,1,7,2,3,5,4,6,0]))
function shell(arr){
    let l = arr.length
    let gap = Math.floor(l/2)
    while(gap>0){
        for(let i=gap;i<arr.length;i++){
            let item = arr[i]
            for(var k= i-gap;k>=0;k-=gap){
                if(arr[k]>item){
                    arr[k+gap] =arr[k]
                }else{
                    break;
                }
            }
            if(k!=i-gap){
                arr[k+gap] = item
            }
        }
        gap = Math.floor(gap/2)
    }
    return arr
}
console.log(shell([8,9,1,7,2,3,5,4,6,0]))
