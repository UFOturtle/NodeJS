function x()
{
    let a = 10;
    return function()
    {
        a++;
        console.log(a);
    }
}

var a = x();

a();

x();