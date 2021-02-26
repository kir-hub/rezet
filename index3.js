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
    
    
    for(let i = 0; i< array.length ; i++){
        let space = ''
        
        for(let j = 0  ; j< array[i].length ; j++){
            
            chars = chars + array[i][j].length 
            
            
        }
        
        chars = chars + (array[i].length - 1)
        
        for(let i = 0; i < limit-chars; i++){
            const space2 = ' '
            space = space + space2
    

        }

        if(chars <= limit && condition[i] === "LEFT"){

            result.push(`${array[i].join(' ')+space}*`)
            

        }else if(chars > limit && condition[i] === "RIGHT"){

            for(let j = 0; j<= array[1].length - 3 ; j++){
                
                const space2 = ' '
                space = space + space2

            }
            result.push(`${space + array[1][0] +' ' +array[1][1] +' '+ array[1][2]}*`)
    space  = ''
            for(let j = 4; j< array[1].length ; j++){
                
                
                const space2 = ' '
                space = space + space2
                
            }
            result.push(`${space + array[1][3] +' ' + array[1][4] +' ' + array[1][5]}*`)
            
        }
        
        chars = 0
    }
    result.push("*")
}
publish(initial, formatCond)
console.log(result);








