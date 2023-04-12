//let text = "   i LL    Love   Javascript ver   222 444    and upd 333  222  ";
let text = "a b c d e f g";
text.trim();
text += ' ';
let newText = '';
let mainPos = 0;
let nextWord = '';
if (text !== ' ') {
    while (text.indexOf(' ', mainPos) >= 0) {
        let word = text.slice(mainPos, text.indexOf(' ', mainPos));
        if (word[0] !== undefined) {
            let nextPos = text.indexOf(' ', mainPos) + 1;
            while (text.indexOf(' ', nextPos) >= 0) {
                nextWord = text.slice(nextPos, text.indexOf(' ', nextPos));
                if (nextWord[0] !== undefined) {
                    if (!isNaN(parseFloat(nextWord))) {
                        if (isNaN(parseFloat(word)))
                            newText += word + ' ';
                        mainPos = text.indexOf(' ', nextPos) - 1;
                    }
                    break;
                }
                nextPos = text.indexOf(' ', nextPos) + 1;
            }
        }
        mainPos = text.indexOf(' ', mainPos) + 1;
    }
    newText = newText.trimRight();
}
document.write(newText);
