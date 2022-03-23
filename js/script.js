// 1
// var myName ="Md Imamul Hoque Sheikh Monir"

// var ul = document.createElement(ul);
// var li = document.createElement(li);
// var liText = document.createTextNode(myName)

// ul.appendChild(li);
// li.appendChild(liText);

// document.body.appendChild(ul)


// 2
// var select = document.createElement('select');
// var option = document.createElement('option');
// var optionText =document.createTextNode('select');


// select.appendChild(option);
// option.appendChild(optionText)

// document.body.appendChild(select);

// 3

// var select = document.createElement('select');
// for(i=1;i<=31;i++){
//     var option = document.createElement('option');
//     var optionText = document.createTextNode(i);
//     day.appendChild(option);
//     option.appendChild(optionText);
// }

// document.body.appendChild(select);


/*
//4 
var day = document.getElementById('day');
for(i=1;i<=31;i++){
    var option = document.createElement('option');
    var optionText = document.createTextNode(i);
    day.appendChild(option);
    option.appendChild(optionText);
}



var month = document.getElementById('month');
for(i=1;i<=12;i++){
    var option = document.createElement('option');
    var optionText = document.createTextNode(i);
    month.appendChild(option);
    option.appendChild(optionText);

}

var year = document.getElementById('year');
for(i=1950;i<=2022;i++){
    var option=document.createElement('option');
    var optionText = document.createTextNode(i);
    year.appendChild(option);
    option.appendChild(optionText);
}
*/
/*
//5

function generateOption(selector,minValue,maxValue){

    var jsSelector = document.getElementById(selector);

    for(i=minValue;i<=maxValue;i++){
        var option=document.createElement('option');
        var optionText = document.createTextNode(i);
        jsSelector.appendChild(option);
        option.appendChild(optionText);
}
}
generateOption('day',1,30)
generateOption('month',1,12)
generateOption('year',1950,2022)

*/
//6
function generateOption(selector,maxValue,minValue,){

    var jsSelector = document.getElementById(selector);

    for(i=maxValue;i>=minValue;i--){
        var option=document.createElement('option');
        var optionText = document.createTextNode(i);
        jsSelector.appendChild(option);
        option.appendChild(optionText);
}
}
generateOption('day',30,1)
generateOption('month',12,1)
generateOption('year',2022,1950)
