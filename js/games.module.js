export default class games {
    async getGamesData(cat) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '982f3ff18amsha28f9084881fe6bp1c1277jsn0446fb069649',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        return new Promise(async(resolve, reject) => {
            try {
                const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options);
                const data = await response.json();
                resolve(data);
                 //show games
            }catch (error) {
                reject(errors);
                console.error(error);
            }
          });
    }
}