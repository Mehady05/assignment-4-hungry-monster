document.getElementById("search-name").addEventListener("click", function () {
  const mealName = document.getElementById("meal-name").value;
  mealCategory(mealName);
});

const mealCategory = (name) => {
  const mainApi = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  fetch(mainApi)
    .then((res) => res.json())
    .then((data) => {
      displayItems(data.meals);
    });
};

const displayItems = (foodItems) => {
  const foodContainer = document.getElementById("food-items");
  foodContainer.innerHTML = "";

  console.log(foodItems);
  foodItems.forEach((food) => {
    console.log(food.idMeal)
   const foodDiv = document.createElement('div');
   foodDiv.className = 'col-md-3 p-4';
   foodDiv.innerHTML = `
          <div class="food-review" onclick="mealDetails(${food.idMeal})">
              <div class="food-image">
                  <img class="img-fluid" src=${food.strMealThumb} alt="">
              </div>
              <div class="food-name d-flex align-items-center justify-content-center text-capitalize text-black-80">
                  <p>${food.strMeal}</p>
              </div>
          </div>
  `
      foodContainer.appendChild(foodDiv);
  });
};

const mealDetails = (id)=>{
  const foodIdUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  console.log(foodIdUrl);
  fetch(foodIdUrl)
  .then(res => res.json())
  .then(data => singleFoodDetails(data.meals))
  
}


const singleFoodDetails = (foodSingleDetail)=>{
  console.log(foodSingleDetail);
  const foodDetails = document.getElementById("details-food");
  foodDetails.innerHTML = "";
  foodSingleDetail.forEach((fdDetails)=>{
    console.log(fdDetails)
    const fdDiv = document.createElement('div');
    fdDiv.className = 'col-md-12';
    fdDiv.innerHTML = `
      <div class="single-food-img">
          <img
            src=${fdDetails.strMealThumb}
            alt=""
          />
        </div>
        <div class="single-food-details text-capitalize">
          <p>name: ${fdDetails.strMeal}</p>
          <p>food area: ${fdDetails.strArea}</p>
          <p>ingredients:</p>
          <ul class="line">
            <li>
              <span>
                <i
                  class="fa fa-check-square bg-white text-danger"
                  aria-hidden="true"
                >
                </i>
            </span>
              <span>${fdDetails.strIngredient1}</span>
            </li>
            <li>
              <span>
                <i
                  class="fa fa-check-square bg-white text-danger"
                  aria-hidden="true"
                >
                </i>
            </span>
              <span>${fdDetails.strIngredient1}</span>
            </li>
            <li>
              <span>
                <i
                  class="fa fa-check-square bg-white text-danger"
                  aria-hidden="true"
                >
                </i>
            </span>
              <span>${fdDetails.strIngredient2}</span>
            </li>
            <li>
              <span>
                <i
                  class="fa fa-check-square bg-white text-danger"
                  aria-hidden="true"
                >
                </i>
            </span>
              <span>${fdDetails.strIngredient3}</span>
            </li>
            <li>
              <span>
                <i
                  class="fa fa-check-square bg-white text-danger"
                  aria-hidden="true"
                >
                </i>
            </span>
              <span>${fdDetails.strIngredient4}</span>
            </li>
            <li>
              <span>
                <i
                  class="fa fa-check-square bg-white text-danger"
                  aria-hidden="true"
                >
                </i>
            </span>
              <span>${fdDetails.strIngredient5}</span>
            </li>
            <li>
              <span>
                <i
                  class="fa fa-check-square bg-white text-danger"
                  aria-hidden="true"
                >
                </i>
            </span>
              <span>${fdDetails.strIngredient6}</span>
            </li>
            <li>
              <span>
                <i
                  class="fa fa-check-square bg-white text-danger"
                  aria-hidden="true"
                >
                </i>
            </span>
              <span>${fdDetails.strIngredient7}</span>
            </li>
            <li>
              <span>
                <i
                  class="fa fa-check-square bg-white text-danger"
                  aria-hidden="true"
                >
                </i>
            </span>
              <span>${fdDetails.strIngredient8}</span>
            </li>
            <li>
              <span>
                <i
                  class="fa fa-check-square bg-white text-danger"
                  aria-hidden="true"
                >
                </i>
            </span>
              <span>${fdDetails.strIngredient9}</span>
            </li>
            <li>
              <span>
                <i
                  class="fa fa-check-square bg-white text-danger"
                  aria-hidden="true"
                >
                </i>
            </span>
              <span>${fdDetails.strIngredient10}</span>
            </li>

          </ul>
      </div>
    `

    foodDetails.appendChild(fdDiv);
  })

};


