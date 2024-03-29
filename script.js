function getHistory(){
    return document.getElementById("history-value").innerText;

}
function printHistory(val){
    document.getElementById("history-value").innerText=val;
}
function getOutput(){
    return document.getElementById("display-value").innerText;
}
function printOutput(val){
    if(val==""){
        document.getElementById("display-value").innerText=val;
    }
    else{
        document.getElementById("display-value").innerText=getFormattedNumber(val);
    }
}

function getFormattedNumber(num){
	if(num=="-"){
		return "";
    }
    
    var value = num.toLocaleString("en-IN");
    
    
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("0");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
        }
        
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
                history=history+output;
				if(this.value=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.value;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
        var output=(getOutput());
      
        if(output!=NaN){ //if output is a number
            output=output+this.value;
			printOutput(output);
		}
	});
}
