//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

function longestPalindrome(s) {
    // let longest = '';

    // for (let i = 0; i < s.length; i++) {
    //     for (let j = 0; j < s.length; j++) {
    //         if (s[i] === s[j]) {
    //             let word = s.slice(i,j+1);
    //             let reverseWord = word.split('').reverse().join('')
    //             if (word === reverseWord) {
    //                 if (word.length > longest.length) {
    //                     longest = word;
    //                 }
    //             }
    //         }
    //     }
    // }
    // return longest
    
    let startIdx = 0;
    let longest = 1;

    function expandAroundMiddle(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            currentPalLength = right - left + 1;
            if (currentPalLength > longest) {
                longest = currentPalLength;
                startIdx = left;
            }
            left--;
            right++
        }
    }

    for (let i = 0; i < s.length; i++) {
        expandAroundMiddle(i - 1, i + 1);
        expandAroundMiddle (i, i + 1)
    }
    return s.slice(startIdx, startIdx + longest)
}

module.exports = longestPalindrome;
