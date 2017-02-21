function readName(){
if (document.getElementById("namees").value == "John" ||
    document.getElementById("namees").value == "john")
    {
    document.getElementById("cal1").style.visibility ='visible';
    }
}



function unavailable(){
  if (document.getElementById("namees").value == "John" || document.getElementById("namees").value == "john"){
  document.getElementById("righttitle").innerHTML="TIMES THAT WORK FOR BOTH";
  document.getElementById("am8").style.backgroundColor = "#A796BE";
  document.getElementById("am9").style.backgroundColor = "#A796BE";
  document.getElementById("am10").style.backgroundColor = "#A796BE";
  document.getElementById("am11").style.backgroundColor = "#A796BE";
  document.getElementById("pm12").style.backgroundColor = "#A796BE";
  document.getElementById("pm1").style.backgroundColor = "#A796BE";
  document.getElementById("pm2").style.backgroundColor = "#A796BE";
  document.getElementById("pm3").style.backgroundColor = "#A796BE";
  document.getElementById("pm4").style.backgroundColor = "#A796BE";
  document.getElementById("pm5").style.backgroundColor = "#A796BE";
  document.getElementById("pm6").style.backgroundColor = "#A796BE";
  document.getElementById("pm7").style.backgroundColor = "#A796BE";
  document.getElementById("pm8").style.backgroundColor = "#A796BE";
  }
}

function TTH(){
  if (document.getElementById("namees").value == "John" || document.getElementById("namees").value == "john"){
  document.getElementById("righttitle").innerHTML="TIMES THAT WORK FOR BOTH";
  document.getElementById("am8").style.backgroundColor = "#A796BE";
  document.getElementById("am9").style.backgroundColor = "#A796BE";
  document.getElementById("am10").style.backgroundColor = "#EAB4C5";
  document.getElementById("am11").style.backgroundColor = "#A796BE";
  document.getElementById("pm12").style.backgroundColor = "#A796BE";
  document.getElementById("pm1").style.backgroundColor = "#A796BE";
  document.getElementById("pm2").style.backgroundColor = "#A796BE";
  document.getElementById("pm3").style.backgroundColor = "#A796BE";
  document.getElementById("pm4").style.backgroundColor = "#EAB4C5";
  document.getElementById("pm5").style.backgroundColor = "#EAB4C5";
  document.getElementById("pm6").style.backgroundColor = "#EAB4C5";
  document.getElementById("pm7").style.backgroundColor = "#EAB4C5";
  document.getElementById("pm8").style.backgroundColor = "#A796BE";
  }
}

function MFS(){
  if (document.getElementById("namees").value == "John" || document.getElementById("namees").value == "john"){
  document.getElementById("righttitle").innerHTML="TIMES THAT WORK FOR BOTH";
  document.getElementById("am8").style.backgroundColor = "#A796BE";
  document.getElementById("am9").style.backgroundColor = "#A796BE";
  document.getElementById("am10").style.backgroundColor = "#A796BE";
  document.getElementById("am11").style.backgroundColor = "#EAB4C5";
  document.getElementById("pm12").style.backgroundColor = "#EAB4C5";
  document.getElementById("pm1").style.backgroundColor = "#EAB4C5";
  document.getElementById("pm2").style.backgroundColor = "#A796BE";
  document.getElementById("pm3").style.backgroundColor = "#A796BE";
  document.getElementById("pm4").style.backgroundColor = "#A796BE";
  document.getElementById("pm5").style.backgroundColor = "#EAB4C5";
  document.getElementById("pm6").style.backgroundColor = "#A796BE";
  document.getElementById("pm7").style.backgroundColor = "#A796BE";
  document.getElementById("pm8").style.backgroundColor = "#A796BE";
   }
}
function day1(){
  document.getElementById("coldate").innerHTML = "Wednesday 2/1";
}

function day2(){
  document.getElementById("coldate").innerHTML = "Thursday 2/2";
}

function day3(){
  document.getElementById("coldate").innerHTML = "Friday 2/3";
}

function day4(){
  document.getElementById("coldate").innerHTML = "Saturday 2/4";
}

function day5(){
  document.getElementById("coldate").innerHTML = "Sunday 2/5";
}

function day6(){
  document.getElementById("coldate").innerHTML = "Monday 2/6";
}

function day7(){
  document.getElementById("coldate").innerHTML = "Tuesday 2/7";
}

function day8(){
  document.getElementById("coldate").innerHTML = "Wednesday 2/8";
}

function day9(){
  document.getElementById("coldate").innerHTML = "Thursday 2/9";
}

function day10(){
  document.getElementById("coldate").innerHTML = "Friday 2/10";
}

function day11(){
  document.getElementById("coldate").innerHTML = "Saturday 2/11";
}

function day12(){
  document.getElementById("coldate").innerHTML = "Sunday 2/12";
}

function day13(){
  document.getElementById("coldate").innerHTML = "Monday 2/13";
}

function day14(){
  document.getElementById("coldate").innerHTML = "Tuesday 2/14";
}

function day15(){
  document.getElementById("coldate").innerHTML = "Wednesday 2/15";
}

function day16(){
  document.getElementById("coldate").innerHTML = "Thursday 2/16";
}

function day17(){
  document.getElementById("coldate").innerHTML = "Friday 2/17";
}

function day18(){
  document.getElementById("coldate").innerHTML = "Saturday 2/18";
}

function day19(){
  document.getElementById("coldate").innerHTML = "Sunday 2/19";
}

function day20(){
  document.getElementById("coldate").innerHTML = "Monday 2/20";
}

function day21(){
  document.getElementById("coldate").innerHTML = "Tuesday 2/21";
}

function day22(){
  document.getElementById("coldate").innerHTML = "Wednesday 2/22";
}

function day23(){
  document.getElementById("coldate").innerHTML = "Thursday 2/23";
}

function day24(){
  document.getElementById("coldate").innerHTML = "Friday 2/24";
}

function day25(){
  document.getElementById("coldate").innerHTML = "Saturday 2/25";
}

function day26(){
  document.getElementById("coldate").innerHTML = "Sunday 2/26";
}

function day27(){
  document.getElementById("coldate").innerHTML = "Monday 2/27";
}

function day28(){
  document.getElementById("coldate").innerHTML = "Tuesday 2/28";
}

var z = 0;
function confirmEvent() {
  
    var y;
   if (z == 0){
    if (confirm("Click OK to confirm event") == true) {
        y = "Event Created!";
        z++
    }
     else{
       y = "";
     }
     document.getElementById("confirmation").innerHTML = y;
    }
}
