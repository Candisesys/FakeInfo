let rndNumber = (start, end) => {
    return Math.floor((Math.random() * (end - start)) + start);
}
function replaceAll(str, find, replace) {
    var escapedFind=find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return str.replace(new RegExp(escapedFind, 'g'), replace);
}

let fakeName = faker.name.findName();
let fakeMail = faker.internet.email();
let fakeYear = rndNumber(1980, 1995);
let date = new Date();
/*
console.log(fakeName);
console.log(rndNumber(1980, 1995));
*/
// this is a change
window.onload = () => {
    // Elements
    let info = document.getElementById("info");
    let copy = document.getElementById("copy");
    // Scripting
    info.innerHTML = `Hi! My name is ${fakeName}. I was born in ${fakeYear}, which makes me ${parseInt(date.getFullYear()) - parseInt(fakeYear)} years old. <br/> Email me at ${fakeMail}`;
    copy.onclick = () => {
        let copied = info.innerHTML.replace(" <br> ", " ");
        navigator.clipboard.writeText(copied);
    }
}