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

  function difference(ary,...val){
    var result = []
    var value = []
    for(var i = 0;i < val.length;i++){
     value.push(val[i])
    }
    result.push(ary - value)
   return result
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
  var result = ""
  for (var i = 0; i < ary.length - 1; i++) {
      result += ary[i] + "" + sep
  }
  result += ary[i] + ""
  return result                                                                
  
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
  }
}()

