window.onload = function() {
    let yellowPara = document.getElementById('yellowP');
    yellowPara.addEventListener('mouseover', function() {
      yellowPara.style.backgroundColor = 'yellow';
    });
    yellowPara.addEventListener('mouseout', function() {
      yellowPara.style.backgroundColor = '';
    });
    
    let greenPara = document.getElementById('greenP');
    greenPara.addEventListener('mousedown', function() {
    greenPara.style.backgroundColor = 'green';
    });

    greenPara.addEventListener('mouseup', function() {
    greenPara.style.backgroundColor = '';
    });
}

function hideCapa() {
    let hideOtta = document.getElementById('canadaCap');
    hideOtta.style.display = 'none';
}
  
function showCapa() {
    let showOtta = document.getElementById('canadaCap');
    showOtta.style.display = 'block';
}
  
function toggleCapa() {
    let showOtta = document.getElementById('canadaCap');
    let toggleOtta = showOtta.style.display;
  
    if (toggleOtta == 'none') {
      showOtta.style.display = 'block';
    } else {
      showOtta.style.display = 'none';
    }
}