function Fibonacci() {

  // var nterms = int(input("How many terms? "));
  var nterm = document.getElementById("G");
  var nterms = nterm.value;

  a = [];
  var count = 0;


  if (nterms <= 0) { alert("Please enter a positive integer"); }

  else if (nterms == 1) {
    alert("Fibonacci sequence upto:" + nterms)
    a.push(0);
    alert(a);
  }

  else {
    alert("Fibonacci sequence: " + nterms)
    a = [0, 1]
    while (a.length < nterms) {
      t = (a.length - 1) + (a.length - 2)
      a.push(t)
    }
    alert(a)
  }


}
