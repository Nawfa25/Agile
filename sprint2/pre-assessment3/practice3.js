// 1
function sayhello(name){
    console.log("hello ",name,"!")
}
sayhello("alice")
// 2
function add(a,b){
    console.log("sum",a+b)
}
add(2,3)
// 3
function mul(a,b){
    console.log("mul",a*b)
}
mul(2,3)
// 4
function mul(a,b){
    console.log("mul",a*b)
}
mul(2,3)
// 5
function div(a,b){
    console.log("div",a/b)
}
div(2,3)
// 6
function fact(n){
    if (n==0) return 1;
    return n*fact(n-1);
}
console.log(fact(5))
// 7
function sqr(n){
    return n*n;
}
console.log(sqr(7))
