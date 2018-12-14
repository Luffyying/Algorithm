/*
    关于图
*/
//图的存储结构：邻接矩阵(n*n的方阵) 由两个数组表示，一个数组用来存储图的顶点信息，另一个数组用来存储边的信息
//邻接矩阵的存储结构：
typedef char VertexType//顶点类型应该由用户定义
typedef int EdgeType//边上的权值类型应该由用户定义
typedef MAXVEX 100//最大的顶点数
typedef INFINITY 65535
typedef struct{
    VertexType vexs[MAXVEX];//顶点表
    EdgeType arc[MAXVEX][MAXVEX];//邻接矩阵
    int numVertexes,numEdges//图中当前的顶点数和边数
}MGraph

//建立无向网图的邻接矩阵
void createMGraph(MGraph *G) {

    printf("输入顶点数和边数：\n")
    scanf("%d,%d",&G->numVertexes,&G->numEdges);
    //依次输入顶点
    for(i=0;i<G->numVertexes;i++){
        scanf(G->vexs[i])
    }
    //初始化的矩阵是INFINITY
    for(let i=0;i<G->numVertexes;i++){
        for(let j=0;j<G->numVertexes;j++){
            G->arc[i][j] = INFINITY
        }
    }
    //输入权值(也就是边 numEdges)
    for(k=0;k<G->numEdges;k++){
        printf("输入每条边的上下标和权")
        scanf("%d,%d,%d",&i,&j,&w)
        G->arc[i][j] = w
        G->arc[j][i] = G->arc[i][j]

    }

}
//邻接表的存储结构：也是用一维数组来存储顶点信息，但是要多存放一个指针信息,用来连接一个链表
//对于有向图和无向图来说，意义不同，无向图则表示了该点的边表，有向图则是出边表
//边表就是一个链表
typedef char VertexType//顶点类型应该由用户定义
typedef int EdgeType//边上的权值类型应该由用户定义

typedef struct EdgeNode{
    int adjvex;//顶点下标
    EdgeType weight;//权值
    struct EdgeNode *next
}EdgeNode//边表
typedef struct VertexNode{//顶点表节点
    VertexType data;//顶点信息
    EdgeNode *firstedge;//边表头指针
}VertexNode,AdjList[MAXVEX]
typedef struct {
    AdjList adjList;
    int numVertexes,numEdges
}GraphAdjList

void createALGraph(GraphAdjList *G){
    printf('请输入顶点数和边数')
    scanf("%d,%d",&G->numVertexes,&G->numEdges)
    for(i=0;i<G->numVertexes;i++){
        scanf(&G->adjList[i].data)
        G->adjList[i].firstedge = NULL
    }
    //建立边表
    for(j=0;j<G->numEdges;j++){
        printf('输入边上的顶点序号')
        scanf("%d,&d",&i,&j)
        e = (EdgeNode *)malloc(sizeof(EdgeNode))
        e->adjvex = j
        e->next = G->adjList[i].firstedge;
        G->adjList[i].firstedge = e;
    }
}
//图的遍历
/*
一、邻接矩阵 深度优先搜索
*/
Boolean visited[MAXVEX]
void DFS(MGraph G,int i){
    int j;
    visited[i] = TRUE;
    printf("%c",G.vexs[i])
    for(j=0;j<G.numVertexes;j++){
        if(G.arc[i][j] ==1 && !visited[j]){
            DFS(G,j)
        }
    }

}
// 广搜
// void BFS(MGraph G){
//     int i,j;
//     Queue Q;
//     for(i=0;i<G.numVertexes;i++){
//         visited[i] = FALSE
//         InitQueue(&Q)
//     }
// }


LGraph* create_lgraph()
{
    char c1, c2;
    int v, e;
    int i, p1, p2;
    ENode *node1, *node2;
    LGraph* pG;

    // 输入"顶点数"和"边数"
    printf("input vertex number: ");
    scanf("%d", &v);
    printf("input edge number: ");
    scanf("%d", &e);
    if ( v < 1 || e < 1 || (e > (v * (v-1))))
    {
        printf("input error: invalid parameters!\n");
        return NULL;
    }

    if ((pG=(LGraph*)malloc(sizeof(LGraph))) == NULL )
        return NULL;
    memset(pG, 0, sizeof(LGraph));

    // 初始化"顶点数"和"边数"
    pG->vexnum = v;
    pG->edgnum = e;
    // 初始化"邻接表"的顶点
    for(i=0; i<pG->vexnum; i++)
    {
        printf("vertex(%d): ", i);
        pG->vexs[i].data = read_char();
        pG->vexs[i].first_edge = NULL;
    }

    // 初始化"邻接表"的边
    for(i=0; i<pG->edgnum; i++)
    {
        //循环每一条边，读取边的起始节点和结束节点
        printf()
        // 读取边的起始顶点和结束顶点
        printf("edge(%d): ", i);
        c1 = read_char();
        c2 = read_char();

        p1 = get_position(*pG, c1);
        p2 = get_position(*pG, c2);
        // 初始化node1
        node1 = (ENode*)malloc(sizeof(ENode));
        node1->ivex             = p2;
        // 将node1链接到"p1所在链表的末尾"
        if(pG->vexs[p1].first_edge == NULL)
          pG->vexs[p1].first_edge = node1;
        else
            link_last(pG->vexs[p1].first_edge, node1);
    }

    return pG;
}
//返回ch在矩阵中的位置
static int get_position(LGraph g,char ch){
    int i;


}
print_graph(LGraph G){
    ENode *node
}
//用户手动输入（用已知数据）
//图的搜索算法
//DFS BFS

//深搜都是用的栈，广搜用的都是队列(未被访问的点存放的位置)
/**
 图的遍历：从图中的某一个顶点触发遍历图中其余的节点，每个节点仅仅被访问一次 ，和树不同的是，树仅仅有一个顶点和图很可能在遍历的时候
 又回到自己造成回环，所以要设置一个visited[n]数组，n表示顶点的个数，是否被访问过，初值为0，
 */
void DFS(Graph *G){
    int n = G->pointNums
    int visited[n] = 0
}
//以邻接表为结构的图
private void DFS(int i, boolean[] visited) {
    //对于每一个点，顺着
    visited[i] = true;
    System.out.printf("%c ", mVexs[i].data);
    ENode node = mVexs[i].firstEdge;
    while (node != null) {
        if (!visited[node.ivex])
            DFS(node.ivex, visited);
        node = node.nextEdge;
    }
}

public void DFSTravel() {
    boolean[] visited = new boolean[mVexs.length];       // 顶点访问标记

    // 初始化所有顶点都没有被访问
    for (int i = 0; i < mVexs.length; i++)
        visited[i] = false;

    System.out.printf("DFS: ");
    for (int i = 0; i < mVexs.length; i++) {
        if (!visited[i])
            DFS(i, visited);
    }
    System.out.printf("\n");
}


// ？？？疑问

public void BFSTravel() {
    int head = 0;
    int rear = 0;
    int[] queue = new int[mVexs.length];            // 辅组队列
    boolean[] visited = new boolean[mVexs.length];  // 顶点访问标记

    for (int i = 0; i < mVexs.length; i++)
        visited[i] = false;

    System.out.printf("BFS: ");
    for (int i = 0; i < mVexs.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            System.out.printf("%c ", mVexs[i].data);
            queue[rear++] = i;  // 入队列
        }

        while (head != rear) { //当队列不空
            int j = queue[head++];  // 出队列
            ENode node = mVexs[j].firstEdge;
            while (node != null) {
                int k = node.ivex;
                if (!visited[k])
                {
                    visited[k] = true;
                    System.out.printf("%c ", mVexs[k].data);
                    queue[rear++] = k;
                }
                node = node.nextEdge;
            }
        }
    }
    System.out.printf("\n");
}

//拓扑排序是指，将一个有向无环图进行排序进而得到一个有序的线性序列
//最短路径
































