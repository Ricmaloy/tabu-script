
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
  Message 1
  Message 2
  Message 3
`).then(e => console.log(`Script completed, ${e} messages sent.`)).catch(console.error);