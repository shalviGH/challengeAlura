var textNormal = document.getElementById("txtFrase");
var textEncript = document.getElementById('txtFraseEncript');
var btnEncript = document.getElementById('btnEncript');
var btnDescencript = document.getElementById('btnDescencript');
var btnCopyText = document.getElementById('btnCopyText');


function hideTextAreaAndButton() {
    var textEncript = document.getElementById('txtFraseEncript');
    textEncript.style.display = 'none';
    btnCopyText.style.display = 'none'; 
    var textNormal = document.getElementById("txtFrase");
    //textNormal.value=" ";

    var img = document.getElementById('imgMuneco');
    var lblText = document.getElementById('lblText');
    var lblText2 = document.getElementById('lblText2');
    btnCopyText.style.display = 'none';
    //img.style.display = 'flex'; 
    lblText.style.display = 'flex'; 
    lblText2.style.display = 'flex'; 
    document.getElementById("txtFrase").value="";
}

function showTextAreaAndButton() {
    var textEncript = document.getElementById('txtFraseEncript');
    var img = document.getElementById('imgMuneco');
    var lblText = document.getElementById('lblText');
    var lblText2 = document.getElementById('lblText2');
    textEncript.style.display = 'flex';
    btnCopyText.style.display = 'flex';
    img.style.display = 'none'; 
    lblText.style.display = 'none'; 
    lblText2.style.display = 'none'; 
}


function showAlert(){
    var infoAlert = document.getElementById("alert");
    infoAlert.style.display = 'flex';
}
function hideAlert(){
    var infoAlert = document.getElementById("alert");
    infoAlert.style.display = 'none';
}

function showAlertCopy(){
    var infoAlert = document.getElementById("alertCopy");
    infoAlert.style.display = 'flex';
}
function hideAlertCopy(){
    var infoAlert = document.getElementById("alertCopy");
    infoAlert.style.display = 'none';
}

function showAlertCopyEmpty(){
    var infoAlert = document.getElementById("alertCopyEmpty");
    infoAlert.style.display = 'flex';
}
function hideAlertCopyEmpty(){
    var infoAlert = document.getElementById("alertCopyEmpty");
    infoAlert.style.display = 'none';
}


hideTextAreaAndButton();

function encriptarFrase() {

    

    var textNormal = document.getElementById("txtFrase").value;
    document.getElementById('txtFraseEncript').value = textNormal;
    document.getElementById("txtFrase").value = "";
    //textNormal.value = "";
  

    var frase = textNormal;

        if(frase == ""){
            //return false;
            showAlert();
            setInterval(hideAlert, 5000);
            
        }else
        {
            showTextAreaAndButton();
            var textNormal = document.getElementById("txtFrase").value;
            document.getElementById('txtFraseEncript').value = textNormal;
            document.getElementById("txtFrase").value = "";

             var fraseEcriptado = "";
            var simbol;
            
            for (let index = 0; index < frase.length; index++) {
                    var element = frase[index];

                    if(element == 'a'){simbol = 'ai';}
                    else if(element == 'e'){ simbol = 'enter'; }
                    else if(element == 'i'){simbol = 'imes';}
                    else if(element == 'o'){simbol = 'ober';}
                    else if(element == 'u'){ simbol = 'ufat';}
                    else if(element == " "){simbol = " ";}
                    else{simbol = element;}
                    fraseEcriptado = fraseEcriptado + simbol;
                }
                document.getElementById('txtFraseEncript').value = fraseEcriptado;
        }


    
}


function desencriptar(){

   

    let frase = document.getElementById("txtFrase").value;


    if(frase == ""){
            showAlert();
            setInterval(hideAlert, 5000);
    }else{
        showTextAreaAndButton();
        let frase = document.getElementById("txtFrase").value;
        let resultadoPatron = frase.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/g, (e)=>
            {if(e=="ai"){return "a";};
            if(e=="enter"){return "e";};
            if(e=="imes"){return "i";};
            if(e=="ober"){return "o";};
            if(e=="ufat"){return "u";}; 
        });
    
        document.getElementById("txtFrase").value = "";
        

        
        var textEncript = document.getElementById('txtFraseEncript').value = resultadoPatron;
    }



};


function copyText() {

    let textEncript = document.getElementById("txtFraseEncript").value;

    if(textEncript == ""){
        showAlertCopyEmpty();
        setInterval(hideAlertCopyEmpty, 3000);
    }
    else{
        let textEncript = document.getElementById("txtFraseEncript").value;
        var inputValue = document.createElement("input");
    
        inputValue.setAttribute("value", textEncript);
        document.body.appendChild(inputValue);
        inputValue.select();
        document.execCommand("copy");
        document.body.removeChild(inputValue);
        document.getElementById("txtFraseEncript").value = "";
    
        //alert("La copia se ha realizado correctamente ");
        showAlertCopy();
        setInterval(hideAlertCopy, 4000 );
        //hideTextAreaAndButton();
    
        document.getElementById("txtFrase").focus();
    }
   
}

btnEncript.onclick = encriptarFrase;
btnDescencript.onclick = desencriptar;
btnCopyText.addEventListener("click", copyText, false);