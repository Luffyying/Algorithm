/*
    堆排序：
    堆：首先每一个堆都是一个完全二叉树
    时间复杂度：O(nlogn)
    堆的定义中有插入节点和删除根节点的操作，这两个操作都要保持堆的特性
*/
void insert(int new, int heap[]) 
{
    int childIdx, parentIdx;
    heap[0] = heap[0] + 1;
    heap[heap[0]] = new;
    
    /* recover heap property */
    percolate_up(heap);
}

static void percolate_up(int heap[]) {
    int lightIdx, parentIdx;
    lightIdx  = heap[0];
    parentIdx = lightIdx/2;
    /* lightIdx is root? && swap? */
    while((parentIdx > 0) && (heap[lightIdx] < heap[parentIdx])) {
        /* swap */
        swap(heap + lightIdx, heap + parentIdx); 
        lightIdx  = parentIdx;
        parentIdx = lightIdx/2;
    }
}


int delete_min(int heap[]) 
{
    int min;
    if (heap[0] < 1) {
        /* delete element from an empty heap */
        printf("Error: delete_min from an empty heap.");
        exit(1);
    }

    /* delete root 
       move the last leaf to the root */
    min = heap[1];
    swap(heap + 1, heap + heap[0]);
    heap[0] -= 1;

    /* recover heap property */
    percolate_down(heap);
 
    return min;
}

static void percolate_down(int heap[]) {
    int heavyIdx;
    int childIdx1, childIdx2, minIdx;
    int sign; /* state variable, 1: swap; 0: no swap */

    heavyIdx = 1;
    do {
        sign     = 0;
        childIdx1 = heavyIdx*2;
        childIdx2 = childIdx1 + 1;
        if (childIdx1 > heap[0]) {
            /* both children are null */
            break; 
        }
        else if (childIdx2 > heap[0]) {
            /* right children is null */
            minIdx = childIdx1;
        }
        else {
            minIdx = (heap[childIdx1] < heap[childIdx2]) ?
                          childIdx1 : childIdx2;
        }

        if (heap[heavyIdx] > heap[minIdx]) {
            /* swap with child */
            swap(heap + heavyIdx, heap + minIdx);
            heavyIdx = minIdx;
            sign = 1;
        }
    } while(sign == 1);
}

/*
    堆的说明：
    二叉堆一般是通过数组来实现的，下面都是以索引0来描述的
    （
        如果第一个节点的索引为0,则
        左孩子：2*i+1
        右孩子：2*i+2
        父亲：floor((i-1)/2)
        如果第一个节点的索引为1,则：
        左孩子：2*i
        右孩子：2*i+1
        父亲：floor(i/2)
    ）
    关于堆的插入：每次插入都是push(node)到数组,然更新树已恢复堆的次序,从这个新节点到根节点必然
    有一个有序的数列，利用直接插入排序的方法，将新的节点插入即可。

    关于堆的移除：
    为了便于重建堆，实际的操作是将最后一个数据的值赋给已经删除的节点，然后再进行一次从上向下的调整（调整的时候，和最大的交换）
    关于堆的排序：arr表示一个建好的堆
    while(arr.length>0){
        //每次都去第0个元素，则为当前最大的
        console.log(arr[0])
        //删除最大的（堆的删除
        delete(arr[0])
    }

    从大根堆总删除一个元素，将最后一个元素放置在已删除的节点位置，然后再调整？
*/