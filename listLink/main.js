//删除线性表中数据域为item的所有节点
// void del(LinkList &l,int item){
//     pa = l->next;
//     while(pa->next){
//         if(pa->next->data ==item){
//            //删除pa的下一个数据
//            pa->next = pa->next->next 
//         }
//         pa = pa->next
//     }
// }
typedef struct{
    int data;
    struct *next;
}LNode,*LinkList
typedef struct {
    int data;
    struct * next;
}LNode,*LinkList
void PurgeItem(LinkList &list)
{
 LinkList p, q = list;
 p = list->next;
 while (p != NULL)
 {
 if (p->data == item) {
 q->next = p->next;
 free(p);
 p = q->next;
 } else {
 q = p;
 p = p->next;
 }
 }
 if (list->data == item)
 {
 q = list;
 list = list->next;
 free(q);
 }
} 

//3. 逆转线性链表
void Reverse(LinkList &list){
    LinkList p = list
    while(p){

    } 

}
void Reverse(LinkList &list)
{
 LinkList p, q, r;
 p = list;
 q = NULL;
 while (p != NULL)
 {
 r = q;
 q = p;
 p = p->next;
 q->next = r;
 }
 list = q;
}
// 4. 复制线性链表（递归）
LinkList Copy(LinkList lista)
{
 LinkList listb;
 if (lista == NULL)
 return NULL;
 else {
 listb = (LinkList)malloc(sizeof(LNode));
 listb->data = lista->data;
 listb->next = Copy(lista->next);
 return listb;
 }
}

//tree

// 5. 建立二叉树（从键盘输入数据，先序遍历递归算法）
BTree CreateBT()
{
 char ch;
 BTree T;
 sacnf("%c", &ch);
 if (ch == ' ')
 return NULL;
 else {
 T = (BTree)malloc(sizeof(BTNode));
 T->data = ch;
 T->lchild = CreateBT();
 T->rchild = CreateBT();
 return T;
 }
} 
BTree CreateBT(){
    char ch
    BTree T;
    scanf("%d",&ch)
    if(ch){
        T = (BTree)malloc(sizeof(BTNode))//分配一个节点空间
        T->data = ch;l
        T->lchild = CreateBT()
        T->rchild = CreateBT()
        return T//返回这棵建好的树
    }
}
// 6. 建立二叉树（从数组获取数据）
BTree CreateBT(int A[], int i, int n)
{
 BTree p;
 if (i > n)
 return NULL;
 else {
 p = (BTree)malloc(sizeof(BTNode));
 p->data = A[i];
 p->lchild = CreateBT(A, 2*i, n);
 p->rchild = CreateBT(A, 2*i+1, n);
 return p;
 }
}
T = CreateBT(A, 1, n);
// --------------------------------------------------------
BTree CreateBT(int A[], int n)
{
 int i;
 BTree *pT;
 // 对应 n 个结点申请可容纳 n 个指针变量的内存空间
 pT = (BTree *)malloc(sizeof(BTree)*n);
 // 若数组中的某个元素不等于零，则申请相应的结点空间并进行赋值
 for (i=1; i <= n; i++)
 {
 if (A[i] != 0) {
 pT[i] = (BTree)malloc(sizeof(BTNode));
 pT[i]->data = A[i];
 } else {
 pT[i] = NULL;
 }
 }
 // 修改结点的指针域的内容，使父结点指向左、右孩子结点
 for (i=1; i <= n; i++)
 {
 if (pT[i] != NULL)
 {
 pT[i]->lchild = pT[2*i];
 pT[i]->rchild = pT[2*i+1];
 }
 }
} 
// 7. 求二叉树的深度（递归算法）
int Depth(BTree T)
{
 int ldepth, rdepth;
 if (T == NULL)
 return 0;
 else {
 ldepth = Depth(T->lchild);
 rdepth = Depth(T->rchild);
 if (ldepth > rdepth)
 return ldepth+1;
 else
 return rdepth+1;
 }
} 
//非递归算法 求二叉树的深度???/
// 算法思想：对二叉树进行遍历，遍历过程中依次记录各个结点所处的层次数以及当前已经访问过的
// 结点所处的最大层次数。每当访问到某个叶子结点时，将该叶子结点所处的层次数与最大层次数进
// 行比较，若前者大于后者，则修改最大层次数为该叶子结点的层次数，否则不作修改。遍历结束时，
// 所记录的最大层次数即为该二叉树的深度。本算法使用的是非递归的中序遍历算法（其它遍历顺序
// 也可以）。
#define MAX_STACK 50
int Depth(BTree T)
{
 BTree STACK1[MAX_STACK], p = T;
 int STACK2[MAX_STACK];
 int curdepth, maxdepth = 0, top = -1;
 if (T != NULL)
 {
 curdepth = 1;
 while (p != NULL || top != -)
 {
 while (p != NULL)
 {
 STACK1[++top] = p;
 STACK2[top] = curdepth;
 p = p->lchild;
 curdepth++;
 }
 p = STACK1[top];
 curdepth = STACK2[top--];
 if (p->lchild == NULL && p->rchild == NULL)
 if (curdepth > maxdepth)
 maxdepth = curdepth;
 p = p->rchild;
 curdepth++;
 }
 }
 return maxdepth;
}

// 6. 堆排序
void HeapSort(int A[], int n)
{
 int i, temp;
 // 建立大顶堆
 for (i = n/2; i >= 1; i--)
    HeapAdjust(A,i,n);
 for (i = n-1; i >= 1; i--)
 {
 temp = A[1];
 A[1] = A[i+1];
 A[i+1] = temp;
 // 将 A[1..i] 重新调整为大顶堆
 HeapAdjust(A,1,i);
 }
}
void HeapAdjust(int A[], int low, int high)
{
 int i, temp;
 temp = A[low];
 for (i=2*low; i <= high; i=i*2)
 {
 // 令 i 为关键字较大的记录的下标
 if (i < high && A[i] < A[i+1])
 i++;
 if (temp >= A[i])
 break;
 else {
 A[low] = A[i];
 low = i;
 }
 }
 A[low] = temp; // 插入
}
 //查找
 //顺序查找的递归算法
 int search(int A[],int n,int key,int i){
    if(i>=n)
    return -1;
    if(A[i] ==key){
        return i
    }else{
        return search(A,n,key,i+1)
    }
 }
 pos = search(A,n,key,0)

 //折半查找
 void binarySearch(int array[],int n ,int value){
    // 
    let left = 0
    let right = n-1
    while(left <=right){
        int middle = (left +right)/2
        if(){

        }else {

        }
    }

 }
 //删除二叉树中以某个节点为根节点的子树
 /*
 先序遍历找到符合条件的节点，然后删除
 */
 #define MAX_STACK 50
 BTree DeleteSubtree(BTree & T,int item){
  BTree STACK[MAX_STACK],q,p=T
 }



//  1. 二叉树的先序遍历（非递归算法）根,左,右
// 算法思想：若 p 所指结点不为空，则访问该结点，然后将该结点的地址入栈，然后再将 p 指向其左孩
// 子结点；若 p 所指向的结点为空，则从堆栈中退出栈顶元素（某个结点的地址），将 p 指向其右孩子
// 结点。重复上述过程，直到 p = NULL 且堆栈为空，遍历结束。

//若p所指的节点不为空，则访问该节点，然后将该节点的地址入栈，然后再将p指向其左孩子节点，若 p指向的节点为空，则出栈，将p指向其右孩子
//重复上面的操作，知道栈为空
#define MAX_STACK 50
void preorder(BTree T){
    //遍历树使用的栈，类型也是树的
    BTree stack[MAX_STACK],p = T
    int top = -1;
    while(p || top!=-1){
        while(p){
            visit(p)//访问p节点
            STACK[++top] = p
            p = p->lchild
    
        }
        p = STACK[top--]
        p = p->rchild
    }
} 

//
// 2. 二叉树的中序遍历（非递归算法） 左，根 ，右
// 算法思想：若 p 所指结点不为空，则将该结点的地址 p 入栈，然后再将 p 指向其左孩子结点；若 p 所
// 指向的结点为空，则从堆栈中退出栈顶元素（某个结点的地址）送 p，并访问该结点，然后再将 p 指
// 向该结点的右孩子结点。重复上述过程，直到 p = NULL 且堆栈为空，遍历结束。

//若p不空，p=p->lchild,则一直入栈，直到p为空,出栈，访问该节点，然后，p = p->rchild,知道栈空为止




#define MAX_STACK 50
void inorder(BTree T){
    BTree STACK[MAX_STACK], p = T;
    int top = -1;
    while (p || top != -1);
    {
        while (p != NULL)
        {   
            STACKP[++top] = p
            p = p->lchild
        }
        p = STACK[top--]
        visit(p)
        p=p->rchild
    }
}
//后序遍历二叉树 （非递归） 左 右 根

#define MAX_STACK 50
void inorder(BTree T){
    BTree STACK[MAX_STACK], p = T;
    int top = -1;
    while (p || top != -1);
    {
        while (p != NULL)
        {   
            STACKP[++top] = p
            p = p->lchild
        }
        p = STACK[top--]
        visit(p)
        p=p->rchild
    }
}



// 3. 二叉树的后序遍历（非递归算法） 左 右 根
// 算法思想：当 p 指向某一结点时，不能马上对它进行访问，而要先访问它的左子树，因而要将此结点
// 的地址入栈；当其左子树访问完毕后，再次搜索到该结点时（该结点地址通过退栈得到），还不能对
// 它进行访问，还需要先访问它的右子树，所以，再一次将该结点的地址入栈。只有当该结点的右子
// 树访问完毕后回到该结点时，才能访问该结点。为了标明某结点是否可以访问，引入一个标志变量
// flag，当 flag = 0 时表示该结点暂不访问，flag = 1 时表示该结点可以访问。flag 的值随同该结点的地
// 址一起入栈和出栈。因此，算法中设置了两个堆栈，其中 STACK1 存放结点的地址，STACK2 存放
// 标志变量 flag，两个堆栈使用同一栈顶指针 top，且 top 的初始值为 −1。




#define MAX_STACK 50
void postorder(BTree T){
    BTree STACK1[MAX_STACK],P = T
    int STACK[MAX_STACK],flag ,top = -1
    while(p || top != -1){
        while(p){
            p = STACK[++top]
            STACK2[top] = 0
            p= p->lchild
        }
       
        p= STACK1[top--]
        flag = STACK2[top--]
        if(flag ==0){

        }else{

        }
    }
}
#define MAX_STACK 50
void PostOrderTraverse(BTree T)
{
 BTree STACK1[MAX_STACK], p = T;
 int STACK2[MAX_STACK], flag, top = -1;
 while (p != NULL || top != -1)
 {
 while (p != NULL) {
 STACK1[++top] = p;
 STACK2[top] = 0;
 p = p->lchild;
 }
 p = STACK1[top];
 flag = STACK2[top--];
 if (flag == 0) {
 STACK1[++top] = p;
 STACK2[top] = 1;
 p = p->rchild;
 } else {
 VISIT(p);
 p = NULL;
 }
 }
} 


// 4. 二叉树的按层次遍历
// 算法思想：设置一个队列，首先将根结点（的地址）入队列，然后依次从队列中退出一个元素，每
// 退出一个元素，先访问该元素所指的结点，然后依次将该结点的左孩子结点（若存在的话）和右孩
// 子结点（若存在的话）入队列。如此重复下去，直到队列为空。

//按层次遍历
//设置一个队列，首先将根节点入队，然后依次从队列中退出一个元素，没退出一个元素，先访问该元素所指向的节点，然后
//依次将该节点的孩子入栈，如此重复下去，知道队列为空
#define MAX_QUEUE 50
void layerOrder(BTree T){
    BTree QUEUE[MAX_QUEUE],p
    int front ,rear;//队列的队首和队尾
    if(T){
        QUEUE[0] = T//首先将头入队
        front =-1
        rear = 0
        while(front<rear){
            p = QUEUE[++front]
            visit(p)
            //将所有的孩子入队
            if(p->lchild){
                QUEUE[++rear]
            }
            if(p->rchild){
                QUEUE[++rear]
            }
        }
    }
}
#define MAX_QUEUE 50
void LayeredOrderTraverse(BTree T)
{
 BTree QUEUE[MAX_QUEUE], p;
 int front, rear;
 if (T != NULL)
 {
 QUEUE[0] = T;
 front = -1;
 rear = 0;
 while (front < rear)
 {
 p = QUEUE[++front];
 VISIT(P);
 if (p->lchild != NULL)
 QUEUE[++rear] = p->lchild;
 if (p->rchild != NULL)
 QUEUE[++rear] = p->rchild;
 }
 }
}

//一波二叉树的递归算法
//先序遍历
void preorder(BTree T){
    if(!T){
        return 
    }
    visit(T)
    preorder(T->rchild)
    preorder(T->lchild)
}
//中序遍历
void centerOrder(BTree T){
    if(T){
        centerOrder(T->lchild)
        visit(T)
        centerOrder(T->rchild)
    }
}
//后序遍历
void postOrder(BTree T){
    if(T){
        postOrder(T->lchild)
        postOrder(T->rchild)
        visit(T)
    }
}

//图的相关算法
//