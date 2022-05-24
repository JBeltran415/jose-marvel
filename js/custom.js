console.log("hello");

async function getData(e) {
    e.preventDefault();
    let name = $("#character").val();
    let url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=ced5fc9e39e12328dd738bbb91952fad&ts=1564731162583987&hash=0ceaf9aa8cde04654494841ffa1c2489`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    let marvelMap = data.data.results.map((item) =>
    $(".flex-container").append(
        `<div class='cards'>
            <img src = '${item.thumbnail.path}.${item.thumbnail.extension}' alt = 'image of ${item.name}'/>
            <p>${item.name}</p>
            <p class="description">${item.description}</p>

        </div>`
    )
);



    
}

$(".button").on("click", function (e) {
    getData(e);
});
