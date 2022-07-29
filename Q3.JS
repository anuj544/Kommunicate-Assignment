
function revnum(num){
    var rev=0;
    while(num)
    {
        var ld = num % 10;
        rev = rev * 10 + ld;
        num= Math.floor(num/10);
    }
    return rev;
}

console.log(revnum(456));