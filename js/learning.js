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

function testHoisting(){
    console.log(foo()); // function can be called here even though it appears after

    function foo(){ // --> the declaration is available in the entire scope! even upper before declaring it ^^^
        return 42;
    }
}

(function testIIFE(){
    console.log('Immeadiately Invoked Function Expressions are executed IMMEDIATELY!!!')
})();

function testClosure(){
    function makeAdder(x){
        function add(y){
            return y + x;
        }
        return add;
    }

    var plusOne = makeAdder(1);
    console.log(plusOne(2));
}