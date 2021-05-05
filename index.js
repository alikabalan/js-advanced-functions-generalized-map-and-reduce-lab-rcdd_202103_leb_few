// Add your functions here

function map(arr, funct) {
  let myArr = []

  for (let i = 0; i < arr.length; i++) {
    let e = arr[i]
    myArr.push(funct(e))
  }

  return myArr;
}

// function reduce(src, cb, starting){
//   let r = (!!starting) ? starting : src[0]
//   let i = (!!starting) ? 0 : 1
//
//   for (; i < src.length; i++) {
//     r = cb(src[i], r)
//   }
//
//   return r;
// }
