

let brr = []
export const choose = (arr) => {
    arr.map((value,index)=>{
        
        brr.push(value)
        if(arr[index].end !== arr[index].start){
            arr.slice(0,index+1)
        }
    })
}