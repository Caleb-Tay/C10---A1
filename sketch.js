var weight =[45,33,68,72,82];
function add(){
  var sum = weight[0]+weight[1]+weight[2]+weight[3]+weight[4];
  var avg = sum/weight.length ;
  console.log(avg);
}




function setup() 
{
  createCanvas(400,400);
  add();
}

function draw() 
{
background(51);

}

