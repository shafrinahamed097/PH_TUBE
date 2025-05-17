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

function getTimeString(timeInSeconds) {
    const pastDate = new Date(Date.now() - timeInSeconds * 1000);

    const day = pastDate.getDate();
    const month = pastDate.toLocaleString('default', { month: 'long' });
    const year = pastDate.getFullYear();

    let hours = pastDate.getHours();
    const minutes = pastDate.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // if 0 then show 12

    return `${day} ${month} - ${year}, ${hours}:${minutes} ${ampm}`;
}

const loadCategoryVideos = async (id) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`);
        const data = await res.json();
        displayVideos(data.category);


    }
    catch (error) {
        console.log("Error: ", error);
    }

}





// create DisplayCategories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach((item) => {
        console.log(item);

        // create a button
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
        <button onclick="loadCategoryVideos(${item.category_id}) "class="btn btn-soft btn-success">
         ${item.category}
        </button>
        `;


        // add button to category container
        categoryContainer.append(buttonContainer);
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
    videoContainer.innerHTML = "";

    if (videos.length == 0) {
        videoContainer.classList.remove("grid");
        videoContainer.innerHTML = `
         <div class = "min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
         <img src="assets/icon.png" />
         <h2 class = "text-center text-xl font-bold">No Content Here in this Category</h2>
         </div>
        `;
        return;

    } else {
        videoContainer.classList.add("grid");

    }

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
      ${video.others.posted_date?.length == 0 ? "" : `<span class = "absolute right-2 bottom-2 bg-black text-white rounded p-1">${getTimeString(video.others.posted_date)}</span>`}
      
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