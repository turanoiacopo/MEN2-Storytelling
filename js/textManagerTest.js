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

function scene_manager(scene)
{
    switch(scene) {
        case "premise":
            break;
        case "conclusion":
            break;
        case "rectangles":
            break;
        case "senses":
            break;
        case "remember":
            break;
        default:
            console.log('scene manager error');
            break;
    }
}

function scene_premise()
{
    scene_manager("premise");
}

function scene_conclusion()
{
    scene_manager("conclusion");
}

function scene_remember()
{
    scene_manager("remember");
}

function scene_senses()
{
    scene_manager("senses");
}

function scene_rectangles()
{
    scene_manager("rectangles");
}