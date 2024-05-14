function checkAnagram() {
    const str1 = document.getElementById('input1').value.toLowerCase();
    const str2 = document.getElementById('input2').value.toLowerCase();

    // Remove spaces and special characters
    const cleanStr1 = str1.replace(/[^a-z]/g, '');
    const cleanStr2 = str2.replace(/[^a-z]/g, '');

    // Sort the characters
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    if (sortedStr1 === sortedStr2) {
        document.getElementById('result').textContent = 'These strings are anagrams!';
    } else {
        document.getElementById('result').textContent = 'These strings are not anagrams.';
    }
}
