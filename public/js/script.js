const url_start = 'https://ghibliapi.herokuapp.com/films/'

// Elements to touch on DOM using jQuery
const $title = $('#title');
const $orignialTitle = $('#originalTitle')
const $author= $('#author');
const $film = $('#film');
const $input = $('input[type="text"]');
const $new = $('#new');
const $reset = $('#reset');
const $form = $('#form');
const $specificFilm = $('#specificFilm')
const $filmTitle = $('#filmTitle')

$form.on('submit', handleGetData);
// $reset.on('click', reset);

const idList = {
    'castle in the sky': '2baf70d1-42bb-4437-b551-e5fed5a87abe',
    'grave of the fireflies': '12cfb892-aac0-4c5b-94af-521852e46d6a',
    'my neighbor totoro' : '58611129-2dbc-4a81-a72f-77ddfc1b1b49',
    "kiki's delivery service": 'ea660b10-85c4-4ae3-8a5f-41cea3648e3e',
    "only yesterday" : '4e236f34-b981-41c3-8c65-f8c9000b94e7',
    "porco rosso" : 'ebbb6b7c-945c-41ee-a792-de0e43191bd8',
    "pom poko" : '1b67aa9a-2e4a-45af-ac98-64d6ad15b16c',
    "whisper of the heart": 'ff24da26-a969-4f0e-ba1e-a122ead6c6e3',
    "princess mononoke" : '0440483e-ca0e-4120-8c50-4c8cd9b965d6',
    "my neighbors the yamadas" : '45204234-adfd-45cb-a505-a8e7a676b114',
    "spirited away" : 'dc2e6bd1-8156-4886-adff-b39e6043af0c',
    "the cat returns" : '90b72513-afd4-4570-84de-a56c312fdf81',
    "howl's moving castle" : 'cd3d059c-09f4-4ff3-8d63-bc765a5184fa',
    "tales from earthsea" : '112c1e67-726f-40b1-ac17-6974127bb9b9',
    "ponyo" : '758bf02e-3122-46e0-884e-67cf83df1786',
    "arrietty" : '2de9426b-914a-4a06-a3a0-5e6d9d3886f6',
    "from up on poppy hill" : '45db04e4-304a-4933-9823-33f389e8d74d',
    "the wind rises" : '67405111-37a5-438f-81cc-4666af60c800',
    "the tale of the princess kaguya" : '578ae244-7750-4d9f-867b-f3cd3d6fecf4',
}

function parse(){
    for(i in idList){
        // you will need to use a regular expression to split string into words, OR use indexOf 
        if (i.indexOf($input.val()) > -1){
            userInput = idList[i]
        }
    }
};

function handleGetData(event){
    event.preventDefault();
    parse()
    // userInput = idList[$input.val()];
    $input.val('');
    const promise = $.ajax({
        url: url_start + userInput,
    });
    promise.then(
        data => {
            //   render(data) -> this one may not work bec we are no longer parsing through an array
            renderEach(data)
        },
        (error) => {
        console.log('bad request: ', error);
        }
    );

}

const promise = $.ajax({
    url:'https://ghibliapi.herokuapp.com/films'
});

promise.then(
  (data) => {
    //   console.log(data)
      render(data)
  },
  (error) => {
   console.log('bad request: ', error);
  }
);

function renderEach(data){
    $film.remove(),
    $new.append(`<div class="card">
        <div>${data.title}</div>
        <div>${data.original_title}</div>
        <div>${data.description}</div>
    </div>`);

};

function render(data){
    data.forEach(i => 
        $film.append(
        `<div class="card">
            <div class=row padding>
                <div class=col-md-4>
                    <div><a id="link" href="/movies/show/${i.id}">${i.title}<a/></div>
                    <div>${i.original_title}</div>
                    <div>${i.description}</div>
                </div>
            </div>
        </div>`));
};


promise.then(
    (data) => {
        renderById(data)
    },
    (error) => {
     console.log('bad request: ', error);
    }
  );

function renderById(data){
    let pathArray = (window.location.pathname.split('/'))
    for (let i in data){
        console.log(pathArray[3])
        if(data[i].id == pathArray[3]){
            $specificFilm.append(`
            <div>${data[i].title}</div>
            <div>${data[i].original_title}</div>
            <div>${data[i].description}</div>`)
        }
    }

}
