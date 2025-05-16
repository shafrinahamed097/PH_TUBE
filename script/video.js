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




loadCategories();