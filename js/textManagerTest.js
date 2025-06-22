const myBody = document.getElementById('body');
const language = document.getElementsByTagName('html')[0].attributes.lang.value;

let texts = 0;

language_manager();

myBody.innerHTML = texts.premise.body;

function language_manager()
{
    switch(language) {
        case 'en':
            texts = textsEN;
            break;
        case 'it':
            texts = textsIT;
            break;
        default:
            console.log('language manager error');
            texts = textsEN;
            break;
    }
}