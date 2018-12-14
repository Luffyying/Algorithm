/*
    线性表的单链表的数据存储结构

*/




typedef struct LNode {
    int data;
    struct LNode * next;
}LNode,*LinkList

//一般头结点L = LinkList a 

//create a list 头插法

void createList L(LinkList &L,int n){
    //创建头结点
    L = (LinkList)malloc (sizeof(LNode))
    L ->next = NULL
    //依次处理n个节点 输入的节点顺序和生成的节点顺序相反
    for(i =n;i>0;i--){
        p = (LinkList)malloc (sizeof(LNode))
        scanf(&p->data)
        p->next = L->next
        L->next = p
    }
}
//create a list 尾插法
void createList L(LinkList &L,int n){
    L = (LinkList)malloc (sizeof(LNode))
    L ->next = NULL
    for(i =n;i>0;i--){
        p = (LinkList)malloc (sizeof(LNode))
        scanf(&p->data)
        L->next = p
        L = p
    }
}
//如何将两个有序链表合并为一个有序链表
void MergeList(LinkList &La,LinkList &Lb,LinkList &Lc){
    //视为有头结点的链表,生成的链表视为无头结点,且借助于La的链表，不占用额外的空间
    pa = La ->next
    pb = Lb ->next
    Lc = pc = La
    while(pa && pb){
        if(pa->data<=pb.data){
            //采用尾插法
            pc->next = pa
            pc = pa
            pa = pa->next
        }else {
            pc->next = pb
            pc = pb
            pa = pb->next
        }
        //插入剩余数据
        pc->next = pa?pa:pb
        //释放Lb的头结点
        free(Lb)
    }
}
//栈的顺序存储结构
typedef struct {
    SElemType *base,//栈底指针
    SElemType *top,//栈顶指针
}SqStack
void initStack(SqStack &S){
    //构造一个空栈
    S.base = (SElemType *) malloc(sizeof(SElemType)*STACK.INIT.SIZE)
    if(!S.base) 
    exit(OVERFLOW)//存储分配失败
    S.top = S.base
    S.stacksize = STACK.INIT.SIZE
    return OK
}
//返回栈顶的值
void getTop(SqStack S,SElemType &e){
    if(S.base == S.top) return ERROR
    e = *(S.top - 1)
    return Ok
}
void Push(SqStack S,SElemType e){
    if(S.top - S.base>=S.stacksize){
        //栈满，则追加空间
        // S.base = 
        S.top = S.base + S.stacksize

    }
    *S.top++ = e
}

//栈的链式存储
//队列的顺序存储 

//队列的链式存储 
typedef struct QNode{
    QElemType data;
    struct QNode *next;
}QNode,*QueuePtr
typedef struct{
    QueuePtr front
    QueuePtr rear
}LinkQueue
void InitQueue(LinkQueue &Q){
    Q.front = Q.rear = (QueuePtr) malloc(sizeof(QNode))
    if(!Q.front) exit(OVERFLOW)
    Q->front->next = NULL
}
//循环队列 顺序存储结构
typedef struct {
    QElemType *base//初始化的动态分配存储空间
    int front;//头指针
    int rear;//尾指针
}SqQueue
void InitQueue(SqQueue &Q){
    
}













