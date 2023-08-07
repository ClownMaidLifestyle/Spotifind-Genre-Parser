
let genreList = document.getElementById("genreList");
console.log(genreList);

let gnu;
let genreJSON = {genre: []};

for (i=0; i < genreList.children.length; i++){
    gnu = genreList.children[i].innerHTML;
    genreJSON.genre.push(gnu);
}


console.log(genreJSON);


