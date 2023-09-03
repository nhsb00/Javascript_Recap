// Write a function, `anagrams(str1, str2)`, that takes in two words and returns 
// a boolean indicating whether or not the words are anagrams. Anagrams are 
// words that contain the same characters but not necessarily in the same order. 
// Solve this without using Array.prototype.sort.
// 
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false

function anagrams (str1, str2) {
    // let a = str1.split("").sort().join("");
    // let b = str2.split("").sort().join("");
    // return a === b;
    const letter = {};

    str1.split("").forEach(char => {
        if (!letters[char]) letters[char] = 0;
        letters[char] ++;
    })

    str2.split("").forEach(char => {
        if (!letters[char]) letters[char] = 0;
        letters[char] --;
    })

    return Object.values(letters).every(letter => letter === 0);
}