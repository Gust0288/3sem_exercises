const button = document.querySelector("button");

button.addEventListener("click", () => {
    const input = document.getElementById('input').value;
    const option = document.getElementById('option').value;
    let output;

    if (option === 'firstName') {
        output = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    } else if (option === 'fullName') {
        output = input.split(' ')[0];
    } else if (option === 'fullNameLength') {
        output = input.split(' ')[0].length;
    } else if (option === 'middleName') {
        const middleNameStart = input.indexOf(' ');
        const middleNameEnd = input.lastIndexOf(' ');
        output = {
            start: middleNameStart,
            end: middleNameEnd,
            name: input.slice(middleNameStart + 1, middleNameEnd) // første bogstav efter mellemrum
        }; 
    } else if (option === 'isPngOrJpg') {
        // ???
    } else if (option === 'password') {
        output = '*'.repeat(input.length);
    } else if (option === 'thirdCharacterUppercase') {
        output = input.slice(0,2) + input.charAt(2).toUpperCase() + input.slice(3).toLowerCase ();
    } else if (option === 'uppercaseAfterSpaceOrHyphen') {
        // output = input.replace(/(?<=[ -])[a-z]/g, (match) => match.
        // toUpperCase());
        output = input.split(' ').map((word) => word.replace(/(^[a-z]|[-][a-z])/g, (match) => match.toUpperCase())).join(' ');
    }

    document.getElementById('output').textContent = JSON.stringify(output);
})