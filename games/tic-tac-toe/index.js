const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8]
]
match = 0;
flag = false;
s = [3,4,5];

for (arr of winningCombination)
{
    console.log(arr);

    if (s.includes(arr[0]) && s.includes(arr[1]) && s.includes(arr[2]))
    {
        console.log("Match");
        break;
    }


}
