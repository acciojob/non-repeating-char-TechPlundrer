function firstNonRepeatedChar(str) {
 // Write your code here
if(!str || str.length === 0) return null;

const freq = {};
for(let i = 0; i < str.length; i++){
	const c = str[i];
	freq[c] = (freq[c] || 0) + 1; 
}

	for(let i = 0; i < str.length; i++){
		const c = str[i];
		if(freq[c] === 1) {
			return c;
		}
	}
return null; 
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));  
