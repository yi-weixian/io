// access the position of some tag
var button = document.getElementById('create-twit-button');
var modal_backdrop = document.getElementById('modal-backdrop');
var create_twit_modal = document.getElementById('create-twit-modal');
var modal_cancel_button = document.getElementsByClassName('modal-cancel-button');
var modal_close_button = document.getElementsByClassName('modal-close-button');
var modal_accept_button = document.getElementsByClassName('modal-accept-button');
var twit_container = document.getElementsByClassName('twit-container');
var hidden = document.getElementsByClassName('hidden');

// if click red "create twit" button, then pop up the modal
button.addEventListener('click', function(event){
    hidden[0].style.display = "inline";
    hidden[1].style.display = "inline";
});

// if click cancel or 'X', then the modal disppear
modal_cancel_button[0].addEventListener('click', function(event){
    hidden[0].style.display = "none";
    hidden[1].style.display = "none";
});
modal_close_button[0].addEventListener('click', function(event){
    hidden[0].style.display = "none";
    hidden[1].style.display = "none";
});

// if click Create Twit button, then the modal disppear and show a new twit
var input_twit = document.getElementById('twit-text-input');
var input_author = document.getElementById('twit-attribution-input');
var text;
var author;

input_twit.addEventListener('change', function(event){  // get the input value
    text = event.currentTarget.value;
})
input_author.addEventListener('change', function(event){
    author = event.currentTarget.value;
})

modal_accept_button[0].addEventListener('click', function(){
    if (text != null && author != null){
        generate_a_new_twit(event);
        hidden[0].style.display = "none";   // after create modal disppear
        hidden[1].style.display = "none";
        input_twit.value = null;    // input box clear
        input_author.value = null;
        text = null;    // value container clear
        author = null;
    }
    else
        alert("At least leave something."); // no-blank guarantee
});

function generate_a_new_twit(event){
    
    var articale = document.createElement('article');   // <artical class="twit">
    articale.classList.add('twit');

    var div1 = document.createElement('div');   // <div class="twit-icon">
    div1.classList.add('twit-icon');
    var i = document.createElement('i');    // <i class="fas fa-bullhorn">
    i.classList.add("fas");
    i.classList.add("fa-bullhorn");

    var div2 = document.createElement('div');   // <div class="twit-content">
    div2.classList.add('twit-content');
    var p1 = document.createElement('p');   // <p class="twit-text">
    p1.classList.add('twit-text');
    p1.textContent = text;    // input text value insert to new modal

    var p2 = document.createElement('p');   // <p class="twit-author">
    p2.classList.add('twit-author');
    var a = document.createElement('a');    // <a href="#">
    a.href = "#";
    a.textContent = author;     // input author value insert to new modal

    twit_container[0].appendChild(articale);    // insert new modal to page
    articale.appendChild(div1);
    articale.appendChild(div2);
    div1.appendChild(i);
    div2.appendChild(p1);
    div2.appendChild(p2);
    p2.appendChild(a);
}

// if click the magnifying glass, then Only the modal matches in the input box are preserved
var navbar_search_input = document.getElementById('navbar-search-input');
var navbar_search_button = document.getElementById('navbar-search-button');
var twit = document.getElementsByClassName('twit');
var twit_text = document.getElementsByClassName('twit-text');
var twit_author = document.getElementsByClassName('twit-author');
var input_search = 0;
var twit_text_lowercase = [];
var twit_author_lowercase = [];


navbar_search_input.addEventListener('change', function(){  
    input_search = event.currentTarget.value.toLowerCase();    // input value in search box and all transfer to low-case
   
    navbar_search_button.addEventListener('click', function() {     
        for (var i = 0; i < twit.length; i++){
            twit_text_lowercase[i] = twit_text[i].textContent.toLowerCase();    // text and author to lower-case
            twit_author_lowercase[i] = twit_author[i].textContent.toLocaleLowerCase();
            
            if(twit_text_lowercase[i].indexOf(input_search) == -1){
                if(twit_author_lowercase[i].indexOf(input_search) == -1)
                    twit[i].remove();
            }
        }
    });
})

// extra credits
/*
var twit_copy = [];
for(var i = 0; i < twit.length; i++){
    twit_copy[i] = twit[i];
}

do {
    for (var i = 0; i < twit_copy.length; i++){
        twit[i] = twit_copy[i];
    }

    navbar_search_input.addEventListener('change', function(){  
        input_search = event.currentTarget.value.toLowerCase();    // input value in search box and all transfer to low-case
       
        navbar_search_button.addEventListener('click', function() {     
            for (var i = 0; i < twit.length; i++){
                twit_text_lowercase[i] = twit_text[i].textContent.toLowerCase();    // text and author to lower-case
                twit_author_lowercase[i] = twit_author[i].textContent.toLocaleLowerCase();
                
                if(twit_text_lowercase[i].indexOf(input_search) == -1){
                    if(twit_author_lowercase[i].indexOf(input_search) == -1)
                        twit[i].remove();
                }
            }
        });
    })
} while ();
*/
