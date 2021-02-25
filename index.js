
const arr = [1,3,5,4,5,7]
const arr2 = []

function handler(input, output){
    let z = 3
    for ( let i = 0; i <= input.length - 3; i++){
        let a = input.slice(i,z)
        z++
        if(a[0] > a[1] && a[1] < a[2] ){
            output.push(1)
        }
        else if(a[0] < a[1] && a[1] > a[2]){
            output.push(1)
        }
        else{
            output.push(0)
        }
    }
}

handler(arr, arr2)
console.log(arr2);



