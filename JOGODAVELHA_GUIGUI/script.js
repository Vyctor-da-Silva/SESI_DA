//oredem de jogada
var ordem_jogada = true
var vitx = 0;
var vito = 0;
var vitorias = 0;

function jogar(num_btn) {
  const botao = document.getElementById(num_btn)
  if (ordem_jogada === true) {
    botao.innerHTML = "O";
    ordem_jogada = false;
    botao.disabled = true;
  }
  else {
    botao.innerHTML = "X";
    ordem_jogada = true;
    botao.disabled = true;
  }
  validar_jogada();

  //validar jogada
  validar_jogada()
  function validar_jogada() {
    const btn1_vlr = document.getElementById("1").innerHTML
    const btn2_vlr = document.getElementById("2").innerHTML
    const btn3_vlr = document.getElementById("3").innerHTML
    const btn4_vlr = document.getElementById("4").innerHTML
    const btn5_vlr = document.getElementById("5").innerHTML
    const btn6_vlr = document.getElementById("6").innerHTML
    const btn7_vlr = document.getElementById("7").innerHTML
    const btn8_vlr = document.getElementById("8").innerHTML
    const btn9_vlr = document.getElementById("9").innerHTML


     if ((btn1_vlr == btn2_vlr) && (btn1_vlr == btn3_vlr) && (btn1_vlr !== "") && (btn2_vlr !== "") && (btn3_vlr !== "")) {
      alert("O ganhador foi " + (ordem_jogada ? "X" : "O"));
      if (ordem_jogada === true) { vitx++; } else { vito++; }
      vitorias++;
      document.getElementById("vitorias").innerHTML = vitorias;
      document.getElementById("vitx").innerHTML = vitx;
      document.getElementById("vito").innerHTML = vito;
      limpar_jogo();
    } 
    else if ((btn4_vlr == btn5_vlr) && (btn4_vlr == btn6_vlr) && (btn4_vlr !== "") && (btn5_vlr !== "") && (btn6_vlr !== "")) {
      alert("O ganhador foi " + (ordem_jogada ? "X" : "O"));
      if (ordem_jogada === true) { vitx++; } else { vito++; }
      vitorias++;
      document.getElementById("vitorias").innerHTML = vitorias;
      document.getElementById("vitx").innerHTML = vitx;
      document.getElementById("vito").innerHTML = vito;
      limpar_jogo();
    } 
    else if ((btn7_vlr == btn8_vlr) && (btn7_vlr == btn9_vlr) && (btn7_vlr !== "") && (btn8_vlr !== "") && (btn9_vlr !== "")) {
      alert("O ganhador foi " + (ordem_jogada ? "X" : "O"));
      if (ordem_jogada === true) { vitx++; } else { vito++; }
      vitorias++;
      document.getElementById("vitorias").innerHTML = vitorias;
      document.getElementById("vitx").innerHTML = vitx;
      document.getElementById("vito").innerHTML = vito;
      limpar_jogo();
    } 
    else if ((btn1_vlr == btn4_vlr) && (btn4_vlr == btn7_vlr) && (btn1_vlr !== "") && (btn4_vlr !== "") && (btn7_vlr !== "")) {
      alert("O ganhador foi " + (ordem_jogada ? "X" : "O"));
      if (ordem_jogada === true) { vitx++; } else { vito++; }
      vitorias++;
      document.getElementById("vitorias").innerHTML = vitorias;
      document.getElementById("vitx").innerHTML = vitx;
      document.getElementById("vito").innerHTML = vito;
      limpar_jogo();
    } 
    else if ((btn2_vlr == btn5_vlr) && (btn5_vlr == btn8_vlr) && (btn2_vlr !== "") && (btn5_vlr !== "") && (btn8_vlr !== "")) {
      alert("O ganhador foi " + (ordem_jogada ? "X" : "O"));
      if (ordem_jogada === true) { vitx++; } else { vito++; }
      vitorias++;
      document.getElementById("vitorias").innerHTML = vitorias;
      document.getElementById("vitx").innerHTML = vitx;
      document.getElementById("vito").innerHTML = vito;
      limpar_jogo();
    } 
    else if ((btn3_vlr == btn6_vlr) && (btn6_vlr == btn9_vlr) && (btn3_vlr !== "") && (btn6_vlr !== "") && (btn9_vlr !== "")) {
      alert("O ganhador foi " + (ordem_jogada ? "X" : "O"));
      if (ordem_jogada === true) { vitx++; } else { vito++; }
      vitorias++;
      document.getElementById("vitorias").innerHTML = vitorias;
      document.getElementById("vitx").innerHTML = vitx;
      document.getElementById("vito").innerHTML = vito;
      limpar_jogo();
    } 
    else if ((btn1_vlr == btn5_vlr) && (btn5_vlr == btn9_vlr) && (btn1_vlr !== "") && (btn5_vlr !== "") && (btn9_vlr !== "")) {
      alert("O ganhador foi " + (ordem_jogada ? "X" : "O"));
      if (ordem_jogada === true) { vitx++; } else { vito++; }
      vitorias++;
      document.getElementById("vitorias").innerHTML = vitorias;
      document.getElementById("vitx").innerHTML = vitx;
      document.getElementById("vito").innerHTML = vito;
      
      limpar_jogo();
    } 
    else if ((btn3_vlr == btn5_vlr) && (btn5_vlr == btn7_vlr) && (btn3_vlr !== "") && (btn5_vlr !== "") && (btn7_vlr !== "")) {
      alert("O ganhador foi " + (ordem_jogada ? "X" : "O"));
      if (ordem_jogada === true) { vitx++; } else { vito++; }
      vitorias++;
      document.getElementById("vitorias").innerHTML = vitorias;
      document.getElementById("vitx").innerHTML = vitx;
      document.getElementById("vito").innerHTML = vito;
      
      limpar_jogo();
    } 
    else if(btn1_vlr !== "" && btn2_vlr !== "" && btn3_vlr !== "" && btn4_vlr !== "" && btn5_vlr !== "" && btn6_vlr !== "" && btn7_vlr !== "" && btn8_vlr !== "" && btn9_vlr !== "") {
      alert("empate");
      vitorias++;
      document.getElementById("vitorias").innerHTML = vitorias;
      
      if(document.getElementById("velha")) {
        document.getElementById("velha").innerHTML = empates;
      }
      
      limpar_jogo();
    }
  function limpar_jogo() { 
  document.getElementById("1").innerHTML = "";
  document.getElementById("2").innerHTML = "";
  document.getElementById("3").innerHTML = "";
  document.getElementById("4").innerHTML = "";
  document.getElementById("5").innerHTML = "";
  document.getElementById("6").innerHTML = "";
  document.getElementById("7").innerHTML = "";
  document.getElementById("8").innerHTML = "";
  document.getElementById("9").innerHTML = "";

  document.getElementById("1").disabled = false;
  document.getElementById("2").disabled = false;
  document.getElementById("3").disabled = false;
  document.getElementById("4").disabled = false;
  document.getElementById("5").disabled = false;
  document.getElementById("6").disabled = false;
  document.getElementById("7").disabled = false;
  document.getElementById("8").disabled = false;
  document.getElementById("9").disabled = false;
}
}
}
