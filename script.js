

const body = document.querySelector('body');
const submit_name = document.getElementById('melody');
submit_name.addEventListener('click', () => {
    const name = document.getElementById('name');

    playMelody(name.value);
    addCornerImg();
    removeAskName();
    addHearts_bg();
    setTimeout(() => {
        addLetter(name.value);
    }, 5000);
});

function playMelody(premika) {
    const melody = new Audio('./audio/Falling In Love - Cigarettes After Sex.mp3');
    
    if (premika) {
        melody.play();
        submit_name.disabled = true;
    };
};

function addCornerImg() {
    const imageSources = [
        "./images/dancing-bear.gif",
        "./images/head-massage.gif",
        "./images/hugging-bears.gif",
        "./images/bear1.gif",
        "./images/bear2.gif",
        "./images/bear3.gif",
        "./images/bear4.gif",
        "./images/bear5.gif",
        "./images/bear6.gif",
        "./images/bear7.gif",
        "./images/bear8.gif",
        "./images/bear9.gif",
        "./images/bear10.gif",
        "./images/bear11.gif",
        "./images/bear12.gif",
    ];
    const img = new Image;
    let curr = 0;
    img.id = "corner-image";
    // img.

    img.src = imageSources[curr];

    img.addEventListener('click', () => {
        if (document.getElementById('hidden-text')) {
            document.getElementById('hidden-text').remove();
        };
        curr = (curr === imageSources.length - 1) ? 0 : curr+1;
        img.src = imageSources[curr];
    });

    img.onload = function(){
        body.appendChild(img);
    }

    hiddenText();
};

function removeAskName() {
    const name_section = document.querySelector('.ask-name');
    name_section.classList.add('fade-out');

    setTimeout(() => {
        name_section.remove();
        body.style.backgroundColor = '#dddddd';
    }, 3000);
}

function addHearts_bg() {
    const hearts = new Image;
    hearts.src = "./images/hanging-heart-bg.jpg";
    hearts.id = "hearts-bg";
    setTimeout(() => {
        hearts.classList.add('fade-in');
    }, 100);

    hearts.onload = function(){
        body.appendChild(hearts);
    }
};

function hiddenText() {
    const hidden_text = document.createElement('p');
    setTimeout(() => {
        const bears = document.getElementById('corner-image');

        hidden_text.textContent = "Psst... click the bears!";
        hidden_text.id = "hidden-text";

        bears.insertAdjacentElement('beforeBegin', hidden_text);

        setTimeout(() => {
            hidden_text.classList.add('fade-in');
        }, 200);
    }, 5000);
};

function addLetter(premika) {
    const letter = document.createElement('p');
    console.log(premika);

    letter.innerHTML = `Dear ${premika}, <br/><br/>
    Stuck together inside our duvet, <br/>
    love letters sprawled everywhere, <br/>
    peace in each other's shadows, <br/>
    pain is foreign. <br/><br/>
    The smell of coffee, <br/>
    of pages in our books, <br/>
    and of petrichor. <br/><br/>
    The sound of your laughter, <br/>
    and my stories, <br/>
    the sound of pages turning, <br/>
    the rain and of our silence. <br/><br/>
    Despite the passage of time, <br/>
    let us stay in love. <br/><br/>`;


    letter.id = "love-letter";
    setTimeout(() => { 
        letter.classList.add('fade-in');
    }, 200);

    body.appendChild(letter);
};