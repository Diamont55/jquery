function longitud(sol){
    
    return sol.length
}


console.log(longitud("")) //=> 0

longitud("HOLA") //=> 4

longitud("you rock") //=> 8 (contando el espacio)

function isAlive(name,point){
    if (name=="ikk" && point>30){
      return true
    }else if (name=="gut" && point>10){
        return true
    } else{
        return false
    }
    }

isAlive("ikk", 50) //=> true

isAlive("gut", 50) //=> true

isAlive("ikk", 20) //=> false

isAlive("gut", 5) //=> false

isAlive("trek", 50) //=> false

function fizzbuzz(num){
    if (num % 3 === 0){
        return "fizz"
    }else if (num % 5 === 0){
        return "buzz"
    }else if(num % 3 === 0 && num % 5 === 0){
        return "fizzbuzz"
    }else{
        return (num)
    }
}