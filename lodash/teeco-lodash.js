var teeco = function(){
  
  function chunk(ary,num){
    var result = []
    var a = []
    for(var i = 0;i < ary.lenth;i++){
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

  function compact(ary){
    var result = []
    for(var i = 0;i < ary.lenth;i++){
     if(ary[i] = true){
        result.push(ary[i])
     }
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
    var result = []
    for(var i = -1;i < ary.length;i++){
        result.push(ary - ary[i])
    }
    return result
  }

  return {
    chunk,
    compact,
    difference,
    drop,
  }
}()
