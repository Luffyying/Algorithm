/*回溯问题 （应用在深度优先搜索,正则表达式匹配等）
其核心思想有点像枚举搜索*/
//八皇后问题：划分为8个阶段，依次将8个棋子放在第一行、第二行、、、不断尝试可行方案
//打印出解决的方案
function printQueens(list){
    console.log(list)
}
var arr = Array(8)//索引代表行数，内容代表列数
function calculate(row){
    if(row === 8){
        printQueens(arr)  
        return  
    }
    //有八种可能
    for(let col=0;col<8;col++){
        if(isOk(row,col)){
            //满足当下
            arr[row] = col
            calculate(row+1)
        }
    }
}
//判断是否合法
function isOk(row,col){
    var leftup = col-1
    var rightup= col+1
    for(let i=row-1;i>=0;i--){
        //1.首先行自然是不同的，此处不必考虑
        //2.列是否相同
        if(arr[i] === col)return false
        //3.对角线是否相同
        //左上对角线
        if(leftup>=0){
            if(arr[i] === leftup)return false
        }
        //右上对角线
        if(rightup<8){
            if(arr[i] === rightup)return false
        }
        --leftup
        ++rightup
    }
    return true
}
//首先在第一行放第一个棋子,
calculate(0)