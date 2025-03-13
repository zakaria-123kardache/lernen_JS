let arr = [1, 2, 3, 5, 6, 7];

let missing = null; 

for (let i = 0; i < arr.length; i++)
{
    if(arr[i]+1 !== arr[i + 1] ){


        console.log("miising nmbr",arr[i]+1);
        missing = arr[i] + 1; 
        break;
    }if(missing === null) {
        console.log("all number define in arr");
    }
}