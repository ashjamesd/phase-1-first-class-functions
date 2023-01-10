function receivesAFunction (callback){
    callback();
}

function returnsANamedFunction(){
    aNamedFunction = () => a+b;
    return aNamedFunction
}

function returnsAnAnonymousFunction(){
    return function(){
        c+d
    }
}