var teeco = function(){
  
  function chunk(ary,num){
    var result = []
    var a = []
    for(var i = 0;i < ary.length;i++){
      a.push(ary[i])
      if(a.length == num){
        result.push(a)
        a=[]
      }
    }
    if(a.length > 0){
      result.push(a)
    }
    return result
  }

  function compact(ary) {
    var result = []
    for (var i = 0; i < ary.length; i++) {
        if (ary[i]) 
        result.push(ary[i])
    }
    return result
}

function difference(array, ...values) {
  let obj = {}
  let res = []
  for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values[i].length; j++) {
          obj[values[i][j]] = i
      }
  }
  for (let i = 0; i < array.length; i++) {
      if (obj[array[i]] == undefined) res.push(array[i])
  }
  return res
}

  function drop(ary, n = 1) {
    return ary.slice(n)
}

  function dropRight(ary, n = 1) {
    var result = []
    for(var i = 0;i < ary.length-n;i++){
        result.push(ary[i])
    }
    return result
  }

  function fill(ary, val, start = 0, end = ary.length) {
    for (let i = start; i < end; i++) {
        ary[i] = val
    }
    return ary
}

function fromPairs(ary) {
  var result = {}
  for (var i = 0; i < ary.length; i++) {
    result[ary[i][0]] = ary[i][1]
  }
  return result
}

function head(ary) {
 return ary[0]
}

function indexOf(ary, val, fromIndex=0){
for(i = 0;i < ary.length;i++){
  if(ary[i] == val)
  return i
}
return -1
}

function initial(ary){
result = []
for(i = 0;i < ary.length-1;i++){
result.push(ary[i])
}
return result
}




function join(ary, sep) {

  var result = '' + ary[0] 

  for (var i = 1; i < ary.length; i++) { 
      result += '' + sep + ary[i] 
  }
  return result
}

function last(ary) {


  return ary[ary.length-1]
}


function lastIndexOf(ary, value, fromIndex=ary.length-1) {
  for (var i = fromIndex; i >= 0; i--) {
      if (ary[i] == value) {
          return i
      }
  }
  return -1
}


function reverse(array){
  var result =[]
  for(var i = array.length-1 ; i>=0 ; i--){
    result.push(array[i])
  }
  return result
}


function sortedIndex(array, value) {
  for(var i = 0 ;i < array.length ;i++){
    if(array[i] < value && array[i+1] >= value){
      return i+1
    }
  }
}


function toArray(val) {
  var result = [];
  for (var i in val) {
      result.push(val[i]);      
  } 

  return result;
}









  return {
    chunk,
    compact,
    difference,
    drop,
    dropRight,
    fill,
    fromPairs,
    head,
    indexOf,
    initial,
    join,
    last,
    lastIndexOf,
    reverse,
    sortedIndex,
    toArray
  }
}()

