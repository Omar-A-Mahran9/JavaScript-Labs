let myNumbers = [20,50,10,60];
 let calc =(one, two, ...nums)=> one + two +nums[0];

console.log(calc( 10 , myNumbers [0], myNumbers[1]));