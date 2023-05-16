var oUl = document.getElementById('dragContainer')
 
 let source = null;

  oUl.ondragstart = function(event) {
    //改变鼠标拖动时候的符号，必须先在dragOver中设置禁止浏览器默认事件后才能生效
    event.dataTransfer.effectAllowed = "move"
    source = event.target;
    // make it half transparent



  }

  oUl.ondragover = function(event) {
    event.preventDefault();
    
  }

  oUl.ondragenter = function(event) {
    clear()
    //进入了哪个节点。这里保存下在鼠标放开的时候用
    dropNode = event.target;
    event.target.classList.add("dragging");
  }

  oUl.ondrop = function(event) {
    clear()
    var cloneNode =  source.cloneNode(true)   
    //插入复制的节点 ，删除老的节点
    oUl.insertBefore(cloneNode,dropNode)
    dropNode.remove()

    //替换节点位置，将drop的节点替换到拖动的节点处
    oUl.insertBefore(dropNode,source)    
    source.remove()
  }



  function clear() {
    document.querySelectorAll(".dragging").forEach(function(node){
        node.classList.remove("dragging")
    })
  }