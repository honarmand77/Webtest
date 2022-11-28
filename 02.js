const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

const comment = document.querySelector('.comment');
const share = document.querySelector('.share');

const comments = document.querySelector('.comments');

const incomment = document.querySelector('.incomment');
const send = document.querySelector('.send');


menuToggle.addEventListener('click', () => {
menuToggle.classList.toggle('active');
showcase.classList.toggle('active');
});


comment.addEventListener('click', () => {
    comment.classList.toggle('comment1');
    comments.classList.toggle('comments1');
    incomment.classList.toggle('incomment1');
    send.classList.toggle('send1')
    share.className ='share';
    
});

share.addEventListener('click', ()=>{
    share.classList.toggle('share1');
    comment.classList ='comment';
    comments.classList = 'comments';
    incomment.classList = 'incomment';
    send.classList = 'send';
});

function s(){
    if(incomment.value != ""){
        comments.innerHTML += "<p>"+incomment.value+"</p>"
        incomment.value = "";
    }
};

incomment.addEventListener('keypress',function(event){
    if(event.keyCode==13 && incomment.value != ""){
        comments.innerHTML += "<p>"+incomment.value+"</p>"
        incomment.value = "";
    }
});