
async function enviarScript(scriptText) {
  const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);

  for (const line of lines) {
    console.log(line);

    await new Promise(resolve => setTimeout(resolve, 30000)); // Wait 30 seconds before sending the next message

    // Focus and insert the text into the textarea
    var main = document.querySelector('form');
    var textarea = document.querySelector('textarea');

    if (!textarea) throw new Error("No conversation is open.");

    textarea.focus();
    document.execCommand('insertText', false, line);
    textarea.dispatchEvent(new Event('input', { bubbles: true }));

    // Dynamically reselect the send button before each click
    var sendButton = main.querySelectorAll('[role="button"][type="submit"], [role="button"]')[1];
    if (!sendButton) {
      console.error("Send button not found.");
      continue; // Skip to the next line if the button is missing
    }

    sendButton.click();

    // Add a small delay between lines
    if (lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
  }

  return lines.length;
}

// Example usage
enviarScript(`
Vocês são incríveis! Rumo à vitória!
Bateria Computaria, vocês já são campeões!
Toda força e energia para vocês!
Confiamos no talento de vocês!
Mostrem ao mundo do que são capazes!
Cada batida é uma vitória!
Vai, Computaria, com tudo!
Vocês nasceram para brilhar!
A vitória é só consequência do esforço de vocês!
Bateria Computaria no topo sempre!
Arrasem como só vocês sabem!
Vamos juntos, campeões!
Sintam a energia, vocês conseguem!
Unidos, somos invencíveis!
Cada som é um passo para a vitória!
Vocês são inspiração para todos nós!
Vamos dominar esse campeonato!
Força, foco e batucada!
A Computaria vai brilhar mais uma vez!
Vocês têm o ritmo da vitória!
Acreditem no trabalho em equipe!
Energia máxima, é agora!
Bateria Computaria, sempre na frente!
Vocês têm o dom, agora é hora de mostrar!
Brilhem, Computaria, brilhem!
Hoje é dia de fazer história!
Toda vitória começa com acreditar!
A força de vocês está no som!
Vamos com tudo, Computaria!
O talento de vocês é imbatível!
Sintam a batida, a vitória é certa!
Vocês já ganharam nossos corações!
Deem tudo de vocês e mais um pouco!
Cada nota é uma explosão de talento!
Bateria Computaria, orgulho nacional!
O palco é de vocês, dominem!
Vamos ecoar esse som pelo mundo!
Mais fortes juntos, sempre!
Vocês têm nosso apoio incondicional!
Acreditem, a vitória está ao alcance!
Todo esforço será recompensado!
Lembrem-se: vocês são únicos!
Um passo de cada vez rumo ao topo!
O universo conspira a favor de vocês!
Vocês são a alma da música!
Hoje é o dia de brilhar!
Nunca duvidem do potencial de vocês!
Ritmo, talento e união – vocês têm tudo!
A Bateria Computaria já é imortal!
Somos todos Computaria!
A vitória está no coração de vocês!
Mostrem o que a Computaria sabe fazer!
Chegou a hora de fazer história!
Bateria Computaria, vocês são lendários!
Vocês têm a energia do sucesso!
Ritmistas, vocês são sensacionais!
Um som perfeito para um título perfeito!
Confiança total na Computaria!
Deem tudo no palco, vocês são brilhantes!
Cada batida é um grito de vitória!
Vocês são a alma da competição!
Orgulho de dizer: somos Computaria!
Com cada som, encantem o público!
Sejam únicos, como sempre foram!
Bateria Computaria: sinônimo de sucesso!
Vocês já são nossos campeões!
Levante o público, vocês conseguem!
O mundo é pequeno para o som de vocês!
Arrebentem no palco como sempre!
Vamos juntos, Computaria, até o pódio!
O topo foi feito para vocês!
A batida da vitória já está ecoando!
Tragam o troféu para casa!
Estamos com vocês em cada batida!
Deem o máximo, o palco é de vocês!
Vocês têm o dom de emocionar!
O som da Computaria é único!
Mostrem a essência da Computaria!
O talento de vocês é inspirador!
Hoje é o grande dia, brilhem!
A força de vocês está no coração!
O sucesso é inevitável com vocês!
Sejam a energia que o palco precisa!
Vamos juntos, Bateria Computaria!
Vocês são o som da vitória!
Mostrem ao mundo como se faz!
Talento e união, essa é a Computaria!
A vitória já é de vocês!
Sintam a música, vocês conseguem!
Confiamos 100% em vocês!
A Computaria nunca decepciona!
Foco, força e talento Computaria!
O público vai se encantar com vocês!
Cada batida de vocês é perfeita!
Vocês nasceram para vencer!
O som de vocês é imbatível!
Sigam confiantes, o pódio espera!
Tragam o título para a Computaria!
O sucesso de vocês é certo!
Orgulho eterno da Bateria Computaria!
`).then(e => console.log(`Script completed, ${e} messages sent.`)).catch(console.error);