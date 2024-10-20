export default class details {
  
    // constructor (cat){
    //  this.cat = cat;
    // }
    async getsingleGameData(cat) {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '982f3ff18amsha28f9084881fe6bp1c1277jsn0446fb069649',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
}