/*
    一般以数组中的第一个数为基准，一趟排序后，左侧的均比a[0]小，右侧的都比a[0]大,然后递归实现左右两侧
    平均时间复杂度：O(nlogn)
    最坏的时间复杂度：O(n*n)
*/
var arr = [100,3,6,1,12,4,7,90]
function Quick(arr,first,last){
    if(first<last){
        var p = quickSort(arr,first,last);
        console.log('following  p：'+p)
        //递归调用Quick
        Quick(arr,first,p-1);
        Quick(arr,p+1,last);
    }
}
function quickSort(arr,first,last){
    //console.log(arr);
    var i = first;
    var j = last;
    var x = arr[i];
    if(i<j){
        while(i<j){
            while(i<j && x<=arr[j]){
                j--;
            }
            if(i<j){
                arr[i++] = arr[j];
            }
            while(i<j &&x>=arr[i]){
                i++;
            }
            if(i<j){
                arr[j--] = arr[i];
            }	
        }
        arr[i]=x;
        console.log(arr)
        return i;
    }
}
Quick(arr,0,7);
console.log(arr);