function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested")
}

function deepestChild(){
  var parent = document.getElementById('grand-node')
  /*while(parent.children.length > 0){
    parent = parent.children[0]
  }*/
  var deepest = recursiveDeepestChild(parent,0)
  return deepest[0]
  //return parent
}

function recursiveDeepestChild(node,level){
  if(node.children.length===0){
    return [node,level]
  } else {
    var deepest = [node,0]
    var children = node.children
    for(var i=0;i<children.length;i++){
      var current = recursiveDeepestChild(node.children[i],level+1)
      if (current[1] < deepest[1]){
        deepest = current
      }
    }
    return deepest
  }
}

function increaseRankBy(n){
  var lis = document.getElementsByClassName("ranked-list")

  for(var i=0; i<lis.length;i++){
    lis[i].innerHTML = (parseInt(lis[i].innerHTML)+n).toString()
  }
}