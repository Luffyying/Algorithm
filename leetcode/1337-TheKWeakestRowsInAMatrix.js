/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    
};
const kWeakestRows = (mat, k) => {
    const m = mat.length;
    const n = mat[0].length;
    const ret = [];
    for (let i = 0; i < m; ++i) {
      let cur = 0;
      for (let j = 0; j < n; ++j, ++cur) {
        if (mat[i][j] === 0) break;
      }
      ret.push([cur, i]);
    }
    console.log(ret);
    return ret
      .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0])
      .slice(0, k)
      .map(item => item[1]);
  };
  //二分优化
  const kWeakestRows = (mat, k) => {
    const m = mat.length;
    const n = mat[0].length;
    const rows = [];
    const ret = new Uint8Array(k);
  
    for (let i = 0; i < m; ++i) {
      rows.push([search(mat[i], 0, n), i]);
    }
    rows.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    for (let i = 0; i < k; ++i) {
      ret[i] = rows[i][1];
    }
    return ret;
  
    function search(arr, left, right) {
      if (left === right) return left;
      const mid = Math.floor((left + right) / 2);
      return arr[mid] === 0 ? search(arr, left, mid) : search(arr, mid + 1, right);
    }
  };
  