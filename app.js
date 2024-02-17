const express = require("express");
const app = express();
  


app.listen(process.env.PORT || 3000);

console.log(`Server is listening on http://localhost:3000/`);



const tvshows = [ //ok array with 3 objects, each has 3 attributes
//so we're gonna do a callback function to loop through the array and add title + image for each object (TVshow)
//I'm not including type because it's not asked for in the challenge instruction
    { 
        name: "The Traitors",
        type: "Game Show",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/499/1248534.jpg",
    },
    {
        name: "Bodies",
        type: "Scripted",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/482/1205619.jpg",
    },
    {
        name: "The English",
        type: "Scripted",
        image: "https://static.tvmaze.com/uploads/images/medium_portrait/444/1112100.jpg",
    }
];


//Right so inside callback is variable 'html' which is a string with h2

app.get("/tv", (req, res) => {
    let html = "<h2>My TV</h2>"; //the html with the heading

    tvshows.forEach((tv) => {  //add a name heading and image for each tv show to the html ^^ this is gonna loop through the array and add a title and image 
        html += `<p>${tv.name}</p>`; //TVshow name
        html += `<img src="${tv.image}" alt="${tv.name}">`; //TVshow image
    });

    //send the tvshow html to the browser
    res.send(html);
});