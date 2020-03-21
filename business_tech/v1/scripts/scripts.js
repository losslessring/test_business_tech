
arr = [5,2,4,6,1,3,2,6]

function merge4(a,start, mid, end){
  arr = []
  for(let i = start; i < end; i++){
    arr.push(a[i])
  }
  return arr
}

function merge(arrays){
  let a = []
  for (array of arrays){
    for (let i = 0; i < array.length; i++){
      a.push(array[i])
    }
  }
  return a
}

function sortRange(a ,start, end){

  if (start < end){
    const mid = Math.floor((start + end) / 2)
    
    //return [].concat((a.slice(start, mid)).sort(), (a.slice(mid, end)).sort())
    const a1 = (a.slice(start, mid)).sort()
    const a2 = (a.slice(mid, end)).sort()

    return merge([a1, a2])
    //return merge(a, start, mid, end)

  }
}

console.log(sortRange(arr, 0, arr.length))