// 1
let FirstName="intercity";
let firstName="intercity";
console.log(FirstName)
console.log(firstName)
// 2
const fruit="grape";
//fruit="banana";
console.log(fruit)
// 3
const fruits=["apple","orange","banana"];
fruits.push["mango"]
fruits.pop["orange"]
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits.length)
// 4
let a=2;
let b=5;
let sum=a+b;
console.log(sum)
// 5
let radi=7;
let area=Math.PI*radi*radi;
console.log("the area of circle "+ radi + " is "+area)
// 6
let length=8;
let width=2;
let area1=length*width;
console.log("the area of rectangle:"+ area1)
// 7
let base=8;
let height=2;
let area2=base*height/2;
console.log("the area of triangle:"+ area2+ " is "+area)
// 8
let x=5;
let y=8;
let add=x+y;
let sub=x-y;
let mul=x*y;
let div=x/y;
console.log(add)
console.log(sub)
console.log(mul)
console.log(div)
// 9
let num1=10;
num1  += 9;
console.log(num1)
let num2=10;
num2  -= 9;
console.log(num2)
let num3=10;
num3  = 9;
console.log(num3)
let num4=10;
num4  /= 9;
console.log(num4)
// 10
let z=7;
console.log(z++)
console.log(z)
let v=5;
console.log(--v)
// 11
let c=5;
let d=4;
console.log(c==d)
console.log(c!=d)
console.log(c!==d)
console.log(c===d)
console.log(c>d)
console.log(c<d)
console.log(c>=d)
console.log(c<=d)
// 12
let e=true;
let f=false;
console.log(e&&f)
console.log(e||f)
console.log(!f)
// 13
let i=4;
let j=2;
[i,j]=[j,i];
console.log(i,j)
// 14
function average(...nums) {
return nums.reduce((sum, num) => sum + num, 0) / nums.length;
}
console.log(average(10,5,40));
// 15
let m=5;
let n=10;
let p=3;
let q=2;
r=m+n;
t=r+p;
l=t/q;
console.log(r)
console.log(t)
console.log(l)
// 16
let sum1=0;
let marks=[50,70,80,90,80];
for (let i=0;i<marks.length;i++){
 sum= sum+marks[i];
}
let avg=sum/marks.length;
console.log(sum)
console.log(avg)






















 
