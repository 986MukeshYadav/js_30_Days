function outerFunction(){
    let outerVariable = 'I am outside!';

    function innerFunction(){
        return outerVariable ;
    }
    return innerFunction;
}

const innerFunc = outerFunction();
console.log(innerFunc());