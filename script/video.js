// 1- Fetch, Load and show Categories on html

// create loadCategories

const loadCategories = async () => {
    try {
        const res = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
        const data = await res.json();
        displayCategories(data.categories);



    }
    catch (error) {
        console.log("Error:", error)

    }

}


// create DisplayCategories
const displayCategories = (data) => {
    console.log(data);

}




loadCategories();