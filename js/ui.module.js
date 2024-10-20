export default class games {
    async getAllData() {
        const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '982f3ff18amsha28f9084881fe6bp1c1277jsn0446fb069649',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.jon();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }
}