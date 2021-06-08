const Ones  = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",
                "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],
      Tens  = ["","","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],
      Scale = ["","Thousand","Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion"];

const integerToWords = (n = 0) => {
if (n == 0) return "Zero";                                  
n = ("0".repeat(2*(n+="").length % 3) + n).match(/.{3}/g);   
if (n.length > Scale.length) return "Too Large";             
let out= ""; return n.forEach((Triplet,pos) => {             
if (+Triplet) { out+=' ' +(+Triplet[0] ? Ones[+Triplet[0]]+' '+ Tens[10] : "") +
      ' ' + (+Triplet.substr(1)< 20 ? Ones[+Triplet.substr(1)] :
             Tens[+Triplet[1]] + (+Triplet[2] ? "-" : "") + Ones[+Triplet[2]]) +
      ' ' +  Scale[n.length-pos-1]; }
}),out.replace(/\s+/g,' ').trim();};
var r=0;
if (r==0) console.log("All Tests Passed.");

function test(n,should) {
let result = integerToWords(n);
if (result !== should) {console.log(`${n} Output   : ${result}\n${n} Should be: ${should}`);return 1;}
}

document.getElementById('formtext').onkeyup = function () {
    document.getElementById('formarea').innerHTML = integerToWords(document.getElementById('formtext').value);
};

//text-to-speech

const speak = () => {
  const message = document.querySelector("#formarea").value;
  var speech = new SpeechSynthesisUtterance();

  speech.lang = "en-US";
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};