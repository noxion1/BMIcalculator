function ajax(gewicht, lengte) {
  let debug = true;
  let controlScript = "BMI.php";
  let xmlhttp = new XMLHttpRequest();
  let httpString = controlScript _ "?gewicht=" +  gewicht + "&lengte_cm=" + lengte;
  let httpResponse = "";
  if (debug) console.log(httpString);
  xmlhttp.open("GET", httpString, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      if(debug) console.log("http response = " + xmlhttp.responseText);
      httpResponse = xmlhttp.responseText;
      resultaat.innerHTML = httpResponse;
    }
  }
}
