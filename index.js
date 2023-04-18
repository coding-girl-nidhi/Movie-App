function getMovie() {
    let movie = document.getElementById("search").value;
    let url = `https://www.omdbapi.com/?s=${movie}&apikey=50cf57bd`;
    console.log(url);

    async function getData(){
        let res = await fetch(url);
        let data = await res.json();
        let movieData = data.Search;
        console.log(movieData);

        if(movieData==undefined){
            let container = document.getElementById("displayDiv");
            displayDiv.innerHTML = null;
            let errorDiv = document.getElementById("errorDiv");
            errorDiv.innerHTML = null;
            let h1 = document.createElement("h1");
            h1.innerText = "Error! Movie Not Found!";
            let img = document.createElement("img");
            img.src = "https://uploads.toptal.io/blog/image/121529/toptal-blog-image-1480947746066-8ebd846a9593b2e413ad14546471953a.gif"

            errorDiv.append(h1, img)
        }else{
            displayMovie(movieData);
        }
    }

    getData();

    function displayMovie(data){
        let container = document.getElementById("displayDiv");
        displayDiv.innerHTML = null;
        let errorDiv = document.getElementById("errorDiv");
        errorDiv.innerHTML = null;

        
        
        data.map(function(elem){
            let div = document.createElement("div");

            let img = document.createElement("img");
            img.src = elem.Poster;
            img.alt = "Movie Poster"

            let title = document.createElement("h3");
            title.innerText = elem.Title;

            let year = document.createElement("p");
            year.innerText = `Year: ${elem.Year}`;

            let type = document.createElement("p");
            type.innerText = `Type: ${elem.Type}`;

            let rate = Math.floor(Math.random() * (100 - 10) + 10) / 10;
            if(rate >8.5){
                let rating = document.createElement("p");
                rating.innerText = `IMDb Rating: ${rate}⭐`;

                let rec = document.createElement("p");
                rec.innerText = "Recommended"
                rec.id = "rec"

                div.append(img, rec, title, year, type, rating);
                container.append(div);
            }else{
                let rating = document.createElement("p");
                rating.innerText = `IMDb Rating: ${rate}⭐`;

                div.append(img, title, year, type, rating);
                container.append(div);
            }
            
        })
    }        

}