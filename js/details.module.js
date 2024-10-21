export default class details {
    async getsingleGameData(id) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '982f3ff18amsha28f9084881fe6bp1c1277jsn0446fb069649',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        return new Promise(async(resolve, reject) => {
            try {
                const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
                const data = await response.json();
                resolve(data);
                //show game
            }catch (error) {
                reject(errors);
            }
          });
    }
}