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
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `
        <figure>
    <img
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      Card Title
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
          
        `;
        videoContainer.append(card);

    })
}



loadCategories();
loadVideos();