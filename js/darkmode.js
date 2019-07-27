let illus = $('#illus');
let toggle = true;

let stString = '<style id="newSS">@media(max-width: 786px) { #nav-ul {background: var(--background-dark-accent-s);} .grey-bg {background: var(--background-dark-accent-s);} .nav-list-element:hover { background-color: #5E5E5F;}}</style>'

let preload = new Image();
preload.src = '../img/computer-dark.svg';

illus.on('click', function clickIllus() {
    if (toggle) {
        illus.css('background-image', 'url("../img/computer-dark.svg")');
        $('body').css('background-color', 'var(--background-dark)');
        $('*').css('color', 'var(--background-light)');
        
        $('.project').addClass('dark-p');
        $('.project').removeClass('light-p');
        $('#nav-icon1 span').css('background', 'var(--background-light)');       
        $('footer').css('background', 'var(--background-dark-accent-s)');
        $('head').append(stString);
        toggle = false;
    } else {
        illus.css('background-image', 'url("../img/computer.svg")');
        $('body').css('background-color', 'var(--background-light)');
        $('*').css('color', 'var(--background-dark)');
        $('#nav-icon1 span').css('background', 'var(--background-dark)');
        $('.project').addClass('light-p');
        $('.project').removeClass('dark-p');
        $('footer').css('background', 'var(--background-light-accent)');
        $('#newSS').remove();
        toggle = true;
    }
});


