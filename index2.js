const initial = []
let n = 3
const workAround1 =[]
const workAround2 =[]

const input = [
    [ 1, 2, 3, 2, 7 ],
    [ 4, 5, 6, 8, 1 ],
    [ 7, 8, 9, 4, 5 ],
    ];

function handler(matrix){
        
    for( let i = 0  ; i <= matrix[0].length - 3; i++){
        let a = initial.concat(matrix[0].slice(i,n), matrix[1].slice(i,n), matrix[2].slice(i,n) )
        n++
        for (let i = 1 ;i <= 9 ;i++ ){      
            if(a.includes(i, 0)){
                workAround1.push(1)
            }else{
                workAround1.push(0)
            }      
        }   
        if(workAround1.includes(0,0)){            
            workAround2.push(false)
        }else{
            workAround2.push(true)
        }
        console.log(workAround2);
        workAround1.splice(0, workAround1.length)       
    }
}
handler(input)


