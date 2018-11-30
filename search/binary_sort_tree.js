/*
    二叉排序树的查找 递归实现
    
*/

// 二叉排序树通常以二叉链表结点结构
typedef struct BiTNode{
    int data;//结点数据
    struct BiTNode *l,*r;//左右孩子指针
}BiTNode,*BiTree
//查找
Status Search(BiTree T,int key,BiTree f,BiTree *p){
    if(!T){
        *p = T
        return FALSE;
    }else if(key ==T->data){
        *p = T;
        return TRUE
    }else if(key<T->data){
        return Search(T->l,key,T,p)
    } else {
        return Search(T->r,key,T,p)
    }

}
//插入 利用查找函数，将关键字放在树中合适的位置
//仅当当前二叉树中不存在key的时候，才可以插入,且新插入的节点一定是叶子节点，并且一定是查找不成功时查找
//路径最后一个节点的左孩子或者右孩子
Status insert(BiTree *T,int key){
    BiTree p,s;
    if(!Search(*T,key,Null,&p)){
        s = (BiTree)malloc(sizeof(BiTNode))
        s->data = key
        s->l = s->r = NULL
        if(!p){
            *T = p
        }else if(key < p->data){
            p->l = s
        } else {
            p->r = s
        }
    }else{
        return FALSE
    }
}

//删除
/*删除后，仍然要保持原来的二叉树特性,分多种情况讨论
假如要删除的结点为*p(p为指向结点的指针)，*p的父节点为*f，不失一般性，假设*p为*f的左孩子结点：
1)若为叶子节点，直接删除不影响 
2)若P只有左子树或者只有又子树，则只要令PL或PR直接成为*f的左子树即可。（包含第一种情况）
3） 若*p既有左子树又有右子树
找到该节点的右子树中的最左孩子
与待删除的节点进行交换

*/
function del(BiTree *T){
    if(!(*T->l) && !(*T->r)){
        // *T = NULL
    } else if(!(*T)->lchild){
        // *T = (*T)->rchild;
    }
}


// 孩子兄弟表示法
typedef struct CSNode{
    int data;
    struct CSNode *firstchild,*rightsib;
}CSNode,*CSTree

















function BinaryTree (arr) {
    if (Object.prototype.toString.call(arr).slice(8, -1) !== 'Array') {
        throw new TypeError('只接受一个数组作为参数')
    }
    this.root = null; //根节点
    this.arr = arr || []; //接受传入的参数-数组
    
    
    //初始化每个树节点
    var TreeNode = function (key) {
        this.key = key; //当前节点的值
        this.left = null; //左子树
        this.right = null; //右子树
    }
    
    //构建二叉树
    this.init = function () {
        if (!this.arr) {
            console.warn('请选择一个数组参数');
        }
        for (var i = 0, len = this.arr.length; i < len; i++) {
            this.insert(this.arr[i])
        }
    }

    //插入节点
    this.insert = function (key) {
        var newNode = new TreeNode(key) //当前需要插入的节点
        if (this.root === null) { //根节点不存在值时, 插入节点到根节点
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }
    this.insertNode = function (rootNode, newNode) {
        if (rootNode.key > newNode.key) { // 当前节点的key小于父节点时, 当前节点应该插入左子树
            if (rootNode.left === null) { //如果左子树不存在节点时, 把当前节点放进去
                rootNode.left = newNode;
                return;
            }
            this.insertNode(rootNode.left, newNode) //左子树存在节点, 再次递归与该左节点进行比较

        }else{ // 当前节点的key大于或等于父节点时, 当前节点应该插入右子树
            if (rootNode.right === null) { //如果右子树不存在节点时, 把当前节点放进去
                rootNode.right = newNode;
                return;
            }
            this.insertNode(rootNode.right, newNode) //右子树存在节点, 再次递归与该右节点进行比较
        }
    }
}       

var arr = [8, 13,3,7,19,21,15];
        var tree = new BinaryTree(arr);
        tree.init();
        console.log(tree)