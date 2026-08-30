module.exports = function safeReplace(text, searchStr, replaceStr) {
    if (typeof searchStr !== 'string') return text; // regex not supported here, handle them separately
    let result = '';
    let index = 0;
    while (true) {
        let matchIndex = text.indexOf(searchStr, index);
        if (matchIndex === -1) {
            result += text.substring(index);
            break;
        }
        let lastSpanStart = text.lastIndexOf('<span', matchIndex);
        let lastSpanEnd = text.lastIndexOf('</span', matchIndex);
        let isInsideEnAssist = false;
        if (lastSpanStart > lastSpanEnd) {
            let spanTag = text.substring(lastSpanStart, text.indexOf('>', lastSpanStart) + 1);
            if (spanTag.includes('en-assist')) {
                isInsideEnAssist = true;
            }
        }
        if (isInsideEnAssist) {
            result += text.substring(index, matchIndex + searchStr.length);
            index = matchIndex + searchStr.length;
        } else {
            result += text.substring(index, matchIndex) + replaceStr;
            index = matchIndex + searchStr.length;
        }
    }
    return result;
};
