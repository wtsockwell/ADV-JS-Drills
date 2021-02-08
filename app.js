name = "William Taylor Sockwell"
var name;
console.log(name)

setName();
function setName(){
    var name1 = "WTS"
    console.log(name1)
}


console.log("test1")
let avg = average(2,2)
console.log("test2",avg)
function average(a,b){
    console.log("test3")
    var answer = (a+b)/2
    return answer
}


let fruits = ["Durian", "kiwi", "pineapple"]
// let favFruit

function printFruit(){
    let leastFav = fruits[0]
    console.log(fruits[0])
    let favFruit = fruits[1]
    function printFaveFruit(){
        console.log(favFruit)
    }
    printFaveFruit();
}


printFruit();
// console.log(leastFav)
// printFaveFruit();

howdy();
function howdy(){
    console.log("Hello " + name)
}


let guttenTag = function(){
    console.log("Gut Morgen")
}
guttenTag();