////////////////////////////////////////////////
// DOM elements

const myBody = document.getElementById('body');
const language = document.getElementsByTagName('html')[0].attributes.lang.value;
const scene = document.getElementById('scene');
const grid = document.getElementById('parent-container');

////////////////////////////////////////////////
// Global variables

let texts = 0;

////////////////////////////////////////////////
// Main

// Language selection
language_manager();

// Scene initialization
scene_premise();

////////////////////////////////////////////////
// Functions

//---------------------------------------------
function language_manager()
//---------------------------------------------
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

//---------------------------------------------
function scene_manager(scene)
//---------------------------------------------
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

//---------------------------------------------
function scene_premise()
//---------------------------------------------
{
    const body = document.createElement('p');
    const rememberButton = document.createElement('button');
    
    scene.append(body);
    scene.append(rememberButton);

    rememberButton.innerHTML = "Remember";

    grid.style.gridTemplateColumns = "1fr 3fr 1fr";

    body.innerHTML = texts.premise.body;

    rememberButton.addEventListener("click", () => {
        body.remove();
        rememberButton.remove();

        scene_remember();
    });
}

//---------------------------------------------
function scene_conclusion()
//---------------------------------------------
{
    scene_manager("conclusion");
}

//---------------------------------------------
function scene_remember()
//---------------------------------------------
{
    const body = document.createElement('p');
    scene.append(body);

    body.innerHTML = "ciao"
    scene_manager("remember");
}

//---------------------------------------------
function scene_senses()
//---------------------------------------------
{
    scene_manager("senses");
}

//---------------------------------------------
function scene_rectangles()
//---------------------------------------------
{
    scene_manager("rectangles");
}