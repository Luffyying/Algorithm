/*
    中序遍历非递归算法
    栈的思想
    遍历二叉树的时间复杂度为O(n)
   
*/
// Status traverse(BiTree T,visit){
//     InitStack(S)
//     Push(S,T)//根节点入栈
//     //栈顶不空
//     while(!StackEmpty(S)){
//         //向左走到尽头
//         while(GetTop(S,p) && p){
//             Push(S,p->lchild)
//         }
//         Pop(S,p)
//         if(!StackEmpty(S)){
//             Pop(S,p)
//             if(!visit(p->data)){
//                 return ERROR
//             }
//         }
//         Push()
//     }
// }