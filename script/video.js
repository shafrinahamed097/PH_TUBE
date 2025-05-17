// 1- Fetch, Load and show Categories on html

// create loadCategories

const loadCategories = async () => {
    try {
        const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
        const data = await res.json();
        const categories = data.categories;
        displayCategories(categories);



    }
    catch (error) {
        console.log("Error:", error)

    }

}



// create DisplayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
        console.log(item);

        // create a button
        const button = document.createElement("button");
        button.classList = "btn btn-soft btn-accent";
        button.innerText = item.category;

        // add button to category container
        categoryContainer.append(button);
    });

}



// load videos
const loadVideos = async () => {
    try {
        const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos");
        const data = await res.json();
        const videos = data.videos;
        displayVideos(videos);

    }
    catch (error) {
        console.log("Videos Error:", error);
    }

}


const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");
    videos.forEach(video => {
        console.log(video);
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `
        <figure class ="h-[200px] relative">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
      <span class = "absolute right-2 bottom-2 bg-black text-white rounded p-1">${video.others.posted_date}</span>
  </figure>
  <div class="px-0 py-2 flex gap-2">
  <div>
     <img class = "w-10 h-10 rounded-full object-cover" src = ${video.authors[0].profile_picture} />
  </div>
  <div>
    <h2 class = "font-bold">${video.title}</h2>
    <div class = "flex items-center gap-2">
     <p class = "text-gray-400">${video.authors[0].profile_name} </p>
     ${video.authors[0].verified === true ? '<img class = "w-5" src = "https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" />' : ""}
    </div>
   
    <p> </p>
  </div>
    
    
   
    </div>

          
        `;
        videoContainer.append(card);

    })
}



loadCategories();
loadVideos();