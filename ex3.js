//let text = "   i LL    Love   Javascript ver   444    and upd   222  ";
let text = "a 1 b 2 c 3 d 4 b 5 d 2";
    text.trim();
    text += ' ';
    let newText = '';
    let mainPos = 0;
	let nextWord='';
    if (text !== ' ') {
        while (text.indexOf(' ', mainPos) >= 0) {
            let word = text.slice(mainPos, text.indexOf(' ', mainPos));
            if (word[0] !== undefined) {
                let nextPos = text.indexOf(' ', mainPos)+1;
                while (text.indexOf(' ', nextPos) >= 0){
                    nextWord=text.slice(nextPos,text.indexOf(' ',nextPos));
                    if (nextWord[0] !== undefined){
                        if (!isNaN(parseFloat(nextWord))){
                            newText+=word +' ';
                            mainPos=text.indexOf(' ',nextPos)-1;
                        }
                        break;
                    }
                    nextPos = text.indexOf(' ',nextPos)+1;
                }
            }
            mainPos=text.indexOf(' ', mainPos)+1;
        }
        newText = newText.trimRight();
    }
    document.write(newText);