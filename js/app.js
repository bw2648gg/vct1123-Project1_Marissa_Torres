function sayHello() {
    alert("hello Class")
}
sayHello();

<script>         
    var head = document.getElementsByTagName('HEAD')[0];  
    var link = document.createElement('link'); 

    link.rel = 'stylesheet';  
    link.type = 'text/css'; 
    link.href = 'style.css';  
 
head.appendChild(link);  
</script>  

function wrap() {
    var newDiv = document.createElement('div');
    newDiv.setAttribute("body");
    document.getElementById('wrapper').appendChild(newDiv);
    newDiv.appendChild(document.getElementById('body'))
}

//for loop
for (var i=0; i<4; i++){
    document.write(i);
}
//appendchild method and wrapper variable 
let div = document.createElement('div');
var wrap = function (toWrap, wrapper) {
    wrapper = wrapper || document.createElement('div');
    toWrap.parentNode.appendChild(wrapper);
    return wrapper.appendChild(toWrap);
};

//creating color variable
var color1= "linear-gradient(135deg,#0B132B 0%, #3A506B 100%)";
var color2= "linear-gradient(330deg, #5BC0BE 0%, #3A506B 100%)";
var color3= "linear-gradient(35deg, #0B132B 0%, #5BC0BE 100%)";
var color4= "linear-gradient(235deg, #5BC0BE 0%, #3A506B 100%)"; 

var colors ['1',
            '2',
            '3',
            '4'];
var el = document.getElementById('colors');

//create a variable wrapper_divs and use the getElementByClassName 


var divOne = wrapper_Divs.item(0);
var divTwo = wrapper_Divs.item(1);
var divThree = wrapper_Divs.item(2);
var divFour = wrapper_Divs.item(3); 

//create an array variable allDivs variables above as its values. Run console.log to see results in developer tools


for (var i = 0; i < 4; i++) {
    document.write(i);
    //inside the block statement of our loop, create a new variable myDiv and assign it value of allDivs[i]

}
//on the myDiv variable use the style and use the style and backgroundImage properties to assign colorsArray[i] as its value 
//create a variable update and use the createElement method to create a 'section' that test will be assigned on your update variable

