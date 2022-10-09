let N = [[0,0],[0,1],[0,2],[0,3],
        [1,0],[1,1],[1,2],[1,3],
        [2,0],[2,1],[2,2],[2,3],
        [3,0],[3,1],[3,2],[3,3]];


let newN = [];
 
let elementLength = Math.sqrt(N.length);

newN.length = N.length;

for(let i = 0; i < N.length; i++)
{
    let x= i % elementLength;
    let y = Math.floor(i/elementLength);

    let newX = elementLength - y - 1;

    let newY = x;

    let newPosition = newY * elementLength + newX;

    newN[newPosition] = N[i]

}


for(let i = 0; i < newN.length; i++)
{
    console.log(newN[i]);
}










