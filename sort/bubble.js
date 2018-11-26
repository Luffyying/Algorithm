
function bubble(arr){
    for(let i=arr.length-1;i>0;i--){
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let item = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = item
            }
        }
    }
    return arr
}
// console.log(bubble([2,4,1,8,0,9,4,3]))
/*
    经典的冒泡排序
    最佳时间复杂度：O(n) （在原本就有序的序列中）
    平均时间复杂度：O(n*n)
*/

// 改进后的代码01
// function bubble(arr){
//     for(let i=arr.length-1;i>0;i--){
//         let dids = false
//         for(let j=0;j<i;j++){
//             if(arr[j]>arr[j+1]){
//                 let item = arr[j+1]
//                 arr[j+1] = arr[j]
//                 arr[j] = item
//                 dids = true
//             }
//         }
//         if(!dids){
//             return 
//         }
//     }
// }
// console.log(bubble([2,4,1,8,0,9,4,3]))