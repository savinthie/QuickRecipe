const recipeSearch=document.querySelector('form');
const searchResultContainer= document.querySelector('.foodResult');
const mainContainer=document.querySelector('.mainContainer');
let searchQuery='';
//API credentials
const apiId='992fb4ab';
const apiKey='80404ca1af105c923bb10429c1e0a599';


// retrieves the value from the search form 
recipeSearch.addEventListener('submit',(e)=>{
    e.preventDefault();
    searchQuery=e.target.querySelector('input').value;
    
    //calling the function
    fetchAPI();

});

async function fetchAPI(){
    const url=`https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&to=21`;
    const response= await fetch(url);
    const data=await response.json();
    console.log(data.hits)
    generateHTML(data.hits)
  
    console.log(data);

}
function generateHTML(results){
    let generate='';
    results.map(result => {
        generate+=
        `
        <div class="foodItem">
            <img src="${result.recipe.image}" alt="japanese cuisine">
            <div class="foodContainer">
                <h1 class="foodName">${result.recipe.label}</h1>
                <a  class="viewRecipe"href="${
                    result.recipe.url}"target="_blank">View Recipe</a>
            </div>
            
        </div>
      `
    })
    searchResultContainer.innerHTML=generate;
}


