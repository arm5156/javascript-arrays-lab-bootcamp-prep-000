var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name)
  
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}


function appendKitten(name){
  let kitten = [...kittens,name]
  return kitten
}

function prependKitten(name){
  let kitten = [name,...kittens]
  return kitten
}
function removeLastKitten(){
  let kitten = kittens.slice(0,kittens.length -1)
  return kitten
}
function removeFirstKitten(){
  let kitten = kittens.slice(1)
  return kitten
}