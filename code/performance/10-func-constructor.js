var fun1 = function() {
    this.foo = function() {
        console.log(111)
    }
}

let f1 = new fun1()

var fn2 = function() {}
fn2.prototype.foo = function() {
    console.log(111)
}

let f2 = new fn2()