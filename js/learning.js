function testCoercion(){
    var a = "42";
    var b = Number(a);

    console.log(a);
    console.log(b);

    if (a == b) console.log('"42" == 42');
    if (a === b) console.log('"42" === 42'); else {console.log('"42" === 42 --> false');}
}

function testSubtypes(){
    function foo(){
        return 42;
    }

    foo.bar = "hello";
    console.log(typeof foo);
    console.log(typeof foo());
    console.log(typeof foo.bar);
}