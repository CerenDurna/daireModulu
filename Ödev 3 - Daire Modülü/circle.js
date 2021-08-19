
const number=5;


function showCircleArea(number) {
 var area = (3.14* (number **2))
 console.log("radius: "+number+", circle area: "+area)
}
showCircleArea(number);

function showCircleCircumference(number) {
    var circumference = (2*3.14*number)
    console.log("radius: "+number+", circle circumference: "+circumference)
   }
   showCircleCircumference(number);

   module.exports={
       showCircleArea,
   showCircleCircumference}
