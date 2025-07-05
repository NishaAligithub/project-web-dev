function generatePassword(Length,includeUppercase,includeLowercase,includeNumbers,includeSymbols){

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';    
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?'; 

let allowedChars = '';
let password = '';

allowedChars += includeUppercase ? uppercaseChars : '';
allowedChars += includeLowercase ? lowercaseChars : '';
allowedChars += includeNumbers ? numberChars : '';  
allowedChars += includeSymbols ? symbolChars : '';

if(Length<=0){

    return 'Password length must be greater than 0';
}

if(allowedChars.length === 0){
    return 'At least one character type must be selected';
}   
for(let i = 0; i < Length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
}
return password;}

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password1 = generatePassword(passwordLength,
                                  includeUppercase, 
                                  includeLowercase,
                                  includeNumbers,
                                  includeSymbols);
console.log(`Generated password: ${password1}`);
 