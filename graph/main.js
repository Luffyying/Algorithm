//邻接表就是多个链表的结合,,顶点数就是
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























