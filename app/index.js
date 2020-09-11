function d3update() {
// D3Js Code 

var numArray =[10,20,30,40,50];
d3.selectAll('.list_items li')
.data(numArray)
.style('font-size',function(d){
  return d+'px';
})
};
d3update();
