import axios from 'axios';

async function getResults(query) {
    const proxy = `https://cors-anywhere.herokuapp.com/`;
    const key = '4fe8e6d4cf18c9028fc403fc23a705dc';
    try{
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes)
    }catch (error){
        alert(error);
    }
}
    
getResults('tomato pasta');


// API Key: 4fe8e6d4cf18c9028fc403fc23a705dc
// API Search: https://www.food2fork.com/api/search
