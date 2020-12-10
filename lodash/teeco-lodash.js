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

  return {
    chunk,
    compact,
    difference,
    drop,
  }
}()

