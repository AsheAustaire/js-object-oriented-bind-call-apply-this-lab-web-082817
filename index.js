function justInvoke(fn){
  return fn.call(this)
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue)
}

function setThisWithApply(fn, thisValue, args){
  return fn.apply(thisValue)
}

function returnNewFunctionOf(functionToBeCopied, thisValue){
  newFunction = functionToBeCopied.bind(thisValue, 'fred')
  return newFunction
  debugger
}
