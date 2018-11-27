/*
   二路归并排序 （归并思想 递归深度为logn）

*/
function merge_sort(arr){
    if(arr.length < 2){
      return arr;
    }
    var middle = parseInt(arr.length/2);
    var left = arr.slice(0,middle);//[1, 9, 3, 5]
    var right = arr.slice(middle);//[2, 7, 8, 6]
    
    return merge(merge_sort(left),merge_sort(right));
  }
  
  function merge(left,right){
    var result = [];
    var i = 0, j = 0;
    while(i < left.length && j < right.length){
      if(left[i] > right[j]){
        result.push(right[j++]);
      }
      else{
        result.push(left[i++]);
      }
    }
    while(i < left.length){
      result.push(left[i++]);
    }
    while(j < right.length){
      result.push(right[j++]);
    }
    
    return result;
  }
  [1,2,7]
  var arr = [1, 9, 3, 5, 2, 7, 8, 6];
  var result = merge_sort(arr);
  console.log(result);  
  /*
    时间复杂度：O(n * logn)
    每一趟 时间复杂度为o(n) 共需要logn趟
  */
  
