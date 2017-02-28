var time;
var date;
var am8 = false;
var am9 = false;
var am10 = false;
var am11 = false;
var pm12 = false;
var pm1 = false;
var pm2 = false;
var pm3 = false;
var pm4 = false;
var pm5 = false;
var pm6 = false;
var pm7 = false;
var pm8 = false;

function readName() {
  if (document.getElementById("namees").value == "John" ||
    document.getElementById("namees").value == "john") {
    document.getElementById("cal1").style.visibility = 'visible';
    document.getElementById("disappear").style.visibility = 'visible';
  }
}

function unavailable() {
  if (document.getElementById("namees").value == "John" || document.getElementById("namees").value == "john") {
    document.getElementById("righttitle").innerHTML = "TIMES THAT WORK FOR BOTH";
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
    am8 = false;
    am9 = false;
    am10 = false;
    am11 = false;
    pm12 = false;
    pm1 = false;
    pm2 = false;
    pm3 = false;
    pm4 = false;
    pm5 = false;
    pm6 = false;
    pm7 = false;
    pm8 = false;
    makeButtonsFalse();
  }

  function makeButtonsFalse() {
    if (am8 == false) {
      document.getElementById("am8").innerHTML = "";
    }
    if (am9 == false) {
      document.getElementById("am9").innerHTML = "";
    }
    if (am10 == false) {
      document.getElementById("am10").innerHTML = "";
    }
    if (am11 == false) {
      document.getElementById("am11").innerHTML = "";
    }
    if (pm12 == false) {
      document.getElementById("pm12").innerHTML = "";
    }
    if (pm1 == false) {
      document.getElementById("pm1").innerHTML = "";
    }
    if (pm2 == false) {
      document.getElementById("pm2").innerHTML = "";
    }
    if (pm3 == false) {
      document.getElementById("pm3").innerHTML = "";
    }
    if (pm4 == false) {
      document.getElementById("pm4").innerHTML = "";
    }
    if (pm5 == false) {
      document.getElementById("pm5").innerHTML = "";
    }
    if (pm6 == false) {
      document.getElementById("pm6").innerHTML = "";
    }
    if (pm7 == false) {
      document.getElementById("pm7").innerHTML = "";
    }
    if (pm8 == false) {
      document.getElementById("pm8").innerHTML = "";
    }
  }
}

function TTH() {
  if (document.getElementById("namees").value == "John" || document.getElementById("namees").value == "john") {
    document.getElementById("righttitle").innerHTML = "TIMES THAT WORK FOR BOTH";
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
    am8 = false;
    am9 = false;
    am10 = true;
    am11 = false;
    pm12 = false;
    pm1 = false;
    pm2 = false;
    pm3 = false;
    pm4 = true;
    pm5 = true;
    pm6 = true;
    pm7 = true;
    pm8 = false;
    makeButtonsTTH();
  }

  function makeButtonsTTH() {
    if (am8 == false) {
      document.getElementById("am8").innerHTML = "";
    }
    if (am9 == false) {
      document.getElementById("am9").innerHTML = "";
    }
    if (am10 == true) {
      document.getElementById("am10").innerHTML = "<button class='btns' id='btn3'> Select this time </button>";
      document.getElementById("btn3").onclick = function() {bttime3(); myFunction();}
    }
    if (am11 == false) {
      document.getElementById("am11").innerHTML = "";
    }
    if (pm12 == false) {
      document.getElementById("pm12").innerHTML = "";
    }
    if (pm1 == false) {
      document.getElementById("pm1").innerHTML = "";
    }
    if (pm2 == false) {
      document.getElementById("pm2").innerHTML = "";
    }
    if (pm3 == false) {
      document.getElementById("pm3").innerHTML = "";
    }
    if (pm4 == true) {
      document.getElementById("pm4").innerHTML = "<button class='btns' id='btn9'> Select this time </button>";
      document.getElementById("btn9").onclick = function() {
        bttime9();
        myFunction();}
    }
    if (pm5 == true) {
      document.getElementById("pm5").innerHTML = "<button class='btns' id='btn10'> Select this time </button>";
      document.getElementById("btn10").onclick = function() {bttime10();myFunction();}
    }
    if (pm6 == true) {
      document.getElementById("pm6").innerHTML = "<button class='btns' id='btn11'> Select this time </button>";
      document.getElementById("btn11").onclick = function() {
        bttime11();myFunction();}
    }
    if (pm7 == true) {
      document.getElementById("pm7").innerHTML = "<button class='btns' id='btn12'> Select this time </button>";
      document.getElementById("btn12").onclick = function() {bttime12();
                                                             myFunction();}
    }
    if (pm8 == false) {
      document.getElementById("pm8").innerHTML = "";
    }
  }
}

function MFS() {
  if (document.getElementById("namees").value == "John" || document.getElementById("namees").value == "john") {
    document.getElementById("righttitle").innerHTML = "TIMES THAT WORK FOR BOTH";
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
    am8 = false;
    am9 = false;
    am10 = false;
    am11 = true;
    pm12 = true;
    pm1 = true;
    pm2 = false;
    pm3 = false;
    pm4 = false;
    pm5 = true;
    pm6 = false;
    pm7 = false;
    pm8 = false;
    makeButtonsMFS();
  }

  function makeButtonsMFS() {
    if (am8 == false) {
      document.getElementById("am8").innerHTML = "";
    }
    if (am9 == false) {
      document.getElementById("am9").innerHTML = "";
    }

    if (am10 == false) {
      document.getElementById("am10").innerHTML = "";
    }
    if (am11 == true) {
      document.getElementById("am11").innerHTML = "<button class='btns' id='btn4'> Select this time </button>";
        document.getElementById("btn4").onclick = function() {
          bttime4();
          myFunction(); }
      
    }
    if (pm12 == true) {
      document.getElementById("pm12").innerHTML = "<button class='btns' id='btn5'> Select this time </button>";
      document.getElementById("btn5").onclick = function() {
        bttime5();
        myFunction();}
    }
    if (pm1 == true) {
      document.getElementById("pm1").innerHTML = "<button class='btns' id='btn6'> Select this time </button>";
      document.getElementById("btn6").onclick = function() {
        bttime6();
        myFunction();}
    }
    if (pm2 == false) {
      document.getElementById("pm2").innerHTML = "";
    }
    if (pm3 == false) {
      document.getElementById("pm3").innerHTML = "";
    }
    if (pm4 == false) {
      document.getElementById("pm4").innerHTML = "";
    }
    if (pm5 == true) {
      document.getElementById("pm5").innerHTML = "<button class='btns' id='btn10'> Select this time </button>";
      document.getElementById("btn10").onclick = function() {bttime10();
                                                             myFunction();
                                                            }
    }
    if (pm6 == false) {
      document.getElementById("pm6").innerHTML = "";
    }
    if (pm7 == false) {
      document.getElementById("pm7").innerHTML = "";
    }
    if (pm8 == false) {
      document.getElementById("pm8").innerHTML = "";
    }
  }
}

function day1() {
  document.getElementById("coldate").innerHTML = "Wednesday 2/1";
  date = "02/01/2017";
}

function day2() {
  document.getElementById("coldate").innerHTML = "Thursday 2/2";
  date = "02/02/2017";

}

function day3() {
  document.getElementById("coldate").innerHTML = "Friday 2/3";
  date = "02/03/2017";
}

function day4() {
  document.getElementById("coldate").innerHTML = "Saturday 2/4";
  date = "02/04/2017";
}

function day5() {
  document.getElementById("coldate").innerHTML = "Sunday 2/5";
  date = "02/05/2017";
}

function day6() {
  document.getElementById("coldate").innerHTML = "Monday 2/6";
  date = "02/06/2017";
}

function day7() {
  document.getElementById("coldate").innerHTML = "Tuesday 2/7"
  date = "02/07/2017";
}

function day8() {
  document.getElementById("coldate").innerHTML = "Wednesday 2/8";
  date = "02/08/2017";
}

function day9() {
  document.getElementById("coldate").innerHTML = "Thursday 2/9";
  date = "02/09/2017";
}

function day10() {
  document.getElementById("coldate").innerHTML = "Friday 2/10";
  date = "02/10/2017";
}

function day11() {
  document.getElementById("coldate").innerHTML = "Saturday 2/11";
  date = "02/11/2017";
}

function day12() {
  document.getElementById("coldate").innerHTML = "Sunday 2/12";
  date = "02/12/2017";
}

function day13() {
  document.getElementById("coldate").innerHTML = "Monday 2/13";
  date = "02/13/2017";
}

function day14() {
  document.getElementById("coldate").innerHTML = "Tuesday 2/14";
  date = "02/14/2017";
}

function day15() {
  document.getElementById("coldate").innerHTML = "Wednesday 2/15";
  date = "02/15/2017";
}

function day16() {
  document.getElementById("coldate").innerHTML = "Thursday 2/16";
  date = "02/16/2017";
}

function day17() {
  document.getElementById("coldate").innerHTML = "Friday 2/17";
  date = "02/17/2017";
}

function day18() {
  document.getElementById("coldate").innerHTML = "Saturday 2/18";
  date = "02/18/2017";
}

function day19() {
  document.getElementById("coldate").innerHTML = "Sunday 2/19";
  date = "02/19/2017";
}

function day20() {
  document.getElementById("coldate").innerHTML = "Monday 2/20";
  date = "02/20/2017";
}

function day21() {
  document.getElementById("coldate").innerHTML = "Tuesday 2/21";
  date = "02/21/2017";
}

function day22() {
  document.getElementById("coldate").innerHTML = "Wednesday 2/22";
  date = "02/22/2017";
}

function day23() {
  document.getElementById("coldate").innerHTML = "Thursday 2/23";
  date = "02/23/2017";
}

function day24() {
  document.getElementById("coldate").innerHTML = "Friday 2/24";
  date = "02/24/2017";
}

function day25() {
  document.getElementById("coldate").innerHTML = "Saturday 2/25";
  date = "02/25/2017";
}

function day26() {
  document.getElementById("coldate").innerHTML = "Sunday 2/26";
  date = "02/26/2017";
}

function day27() {
  document.getElementById("coldate").innerHTML = "Monday 2/27";
  date = "02/27/2017";
}

function day28() {
  document.getElementById("coldate").innerHTML = "Tuesday 2/28";
  date = "02/28/2017";
}

var z = 0;

function confirmEvent() {

  var y;
  if (z == 0) {
    if (confirm("Click OK to confirm event") == true) {
      y = "Event Created!";
      z++
    } else {
      y = "";
    }
    document.getElementById("confirmation").innerHTML = y;
  }
}

function myFunction() {
  document.getElementById("theDate").value = date;
  document.getElementById("theTime").value= time;
}

function bttime3(){
  time = "10:00 AM";
}
function bttime4(){
  time = "11:00 AM";
}
function bttime5(){
  time = "12:00 PM";
}
function bttime6(){
  time = "1:00 PM";
}
function bttime9(){
  time = "4:00 PM";
}
function bttime10(){
  time = "5:00 PM";
}
function bttime11(){
  time = "6:00 PM";
}
function bttime12(){
  time = "7:00 PM";
}