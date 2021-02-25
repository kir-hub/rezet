const initial = [
    ["Hello", "world"],
    ["Brad", "came", "to", "dinner", "with", "us"],
    ["He", "loves", "tacos"]
    ];

const limit = 16//forEach
const formatCond = ["LEFT", "RIGHT", "LEFT"]
const result = ["**"]


publish = function(array, condition){

    let chars = 0
    
    
    for(let i = 0; i< initial.length ; i++){
        let space = ''
        
        for(let j = 0  ; j< initial[i].length ; j++){
            
            chars = chars + initial[i][j].length 
            
            
        }
        
        chars = chars + (initial[i].length - 1)
        
        for(let i = 0; i < limit-chars; i++){
            const space2 = ' '
            space = space + space2
    

        }

        if(chars <= limit && condition[i] === "LEFT"){

            result.push(`${initial[i].join(' ')+space}*`)
            

        }else if(chars > limit && condition[i] === "RIGHT"){

            for(let j = 0; j<= initial[1].length - 3 ; j++){
                
                const space2 = ' '
                space = space + space2

            }
            result.push(`${space + initial[1][0] +' ' +initial[1][1] +' '+ initial[1][2]}*`)
    space  = ''
            for(let j = 4; j< initial[1].length ; j++){
                
                
                const space2 = ' '
                space = space + space2
                
            }
            result.push(`${space + initial[1][3] +' ' + initial[1][4] +' ' + initial[1][5]}*`)
            
        }
        
        chars = 0
    }
    result.push("*")
}
publish(initial, formatCond)
console.log(result);

















// format = function(array){
//     let quantity = 0

//     for(elem of array){
//         for(let i = 0 ;i <array.length ;i++){
            
//         }


//     }

// }
















// let w = 0

// for (let i = 0; i <= initial.length ;i++ ){
    
//     for(let i = 0; i <= initial.length ;i++){
//         let q = initial[i].length
//         w = w + q
//     }

//     w = 0
// }