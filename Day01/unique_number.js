let arr = [1, 3, 1, 6, 3];
let uniqueNumber = false;

for (let i = 0; i < arr.length; i++) 
    {
        let isUnique = true;
    for (let j = 0; j< arr.length; j++)
    {
        if (i != j && arr[i] === arr[j]) 
        {
            isUnique = false;
            break;
        }
    }
    if(isUnique)
        {
            uniqueNumber = arr[i];
            console.log('unique number estt', uniqueNumber);
            
        }

}