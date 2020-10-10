var resultViews = []
var signboards_num = 0
var order = []
var picture_num = 100
var question = []
question.push('')


for(var i = 0; i < picture_num; i++)
	order[i] = i

for(var i = 0; i < picture_num; i++) {
	let j = Math.floor(Math.random() * picture_num);
	let tmp = order[i];
	order[i] = order[j];
	order[j] = tmp;
}
updateInterface();

var currentIndex = 0;

$(function (){
	$("#btn").click(function ()  {
		updateInterface();
  })
})


function updateInterface(j){
	var url = "json/" + j + ".json"
	$.getJSON(url, function (data){
		console.log(data)
		resultViews = data['result']['views']
		signboards_num = Object.keys(resultViews).length// resultViews.length
		console.log(signboards_num)
		d3.selectAll('li').remove();

		for(var i = 0; i < signboards_num; i++){
			var harmony_single_li = d3.select('#harmony_single ul').append('li')
			var integration_single_li =  d3.select('#integration_single ul').append('li')
			// console.log(harmony_single_li)
			harmony_single_li.append('span').attr('class','signboardindex').text('Signboard '+ i + " : ");
			integration_single_li.append('span').attr('class','signboardindex').text('Signboard '+ i + " : ");
			for(var j = 0; j < 7; j++){
				harmony_single_li.append('input').attr('type','radio').attr('value',j).text(j)
				integration_single_li.append('input').attr('type','radio').attr('value',j).text(j)
			}
		}
	})
}