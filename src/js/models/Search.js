import axios from 'axios'



export default class Search {

constructor(query) {

this.query = query;

}



async getResults() {

const key = 'd2e967cc683df1e92aa4480165ce26c1';

const proxy = 'https://cors-anywhere.herokuapp.com/';

try {

const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);

this.result = res.data.recipes;

//console.log(result);

} catch(error) {

alert(error);

}

}

}