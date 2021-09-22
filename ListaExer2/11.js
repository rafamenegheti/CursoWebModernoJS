array = [,323, "!fdf", 24334, 93489348]

function doido(array){
    newArray = [].concat(array[0], array[array.length - 1]) 
    return newArray
}

console.log(doido(array))