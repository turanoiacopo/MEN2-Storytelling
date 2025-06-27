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
    const rememberButton = document.createElement('a');
    
    scene.append(body);
    scene.append(rememberButton);

    rememberButton.innerHTML = "Remember";

    grid.style.gridTemplateColumns = "1fr 3fr 1fr";

    body.style.fontSize = "1.5em";
    body.innerHTML = texts.premise.body;

    rememberButton.addEventListener("click", () => {
        scene.innerHTML = '';

        scene_remember();
    });
}

//---------------------------------------------
function scene_conclusion()
//---------------------------------------------
{
    scene_manager("conclusion");
}

function scene_remember() 
{
    Object.keys(texts).forEach(key => {
        const titleElement = document.createElement('div');
        titleElement.classList.add('floating-title');
        titleElement.innerText = texts[key].title;

        // Click handler to launch the correct scene
        titleElement.addEventListener('click', () => {
            scene.innerHTML = '';

            switch (key) {
                case 'premise':
                    scene_premise();
                    break;
                case 'conclusion':
                    scene_conclusion();
                    break;
                case 'rectangles':
                    scene_rectangles();
                    break;
                case 'senses':
                    scene_senses();
                    break;
                default:
                    console.log('Unknown scene key:', key);
                    break;
            }
        });

        scene.appendChild(titleElement);

        // Random animation start position (in pixels)
        const container = scene.getBoundingClientRect();
        const maxTop = container.height - 50; // approximate element height
        const maxLeft = container.width - 150; // approximate element width

        titleElement.style.top = `${Math.random() * maxTop}px`;
        titleElement.style.left = `${Math.random() * maxLeft}px`;

        // Optional: Start floating
        animateFloating(titleElement);
    });
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

function animateFloating(el) {
    const move = () => {
        const container = scene.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();

        const maxTop = container.height - el.offsetHeight;
        const maxLeft = container.width - el.offsetWidth;

        const deltaX = (Math.random() - 0.5) * 100;
        const deltaY = (Math.random() - 0.5) * 100;

        const currentTop = parseFloat(el.style.top);
        const currentLeft = parseFloat(el.style.left);

        let newTop = currentTop + deltaY;
        let newLeft = currentLeft + deltaX;

        // Clamp to bounds
        newTop = Math.max(0, Math.min(maxTop, newTop));
        newLeft = Math.max(0, Math.min(maxLeft, newLeft));

        el.style.top = `${newTop}px`;
        el.style.left = `${newLeft}px`;
    };

    setInterval(move, 1);
}

