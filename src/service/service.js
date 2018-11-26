export default class Service {
    _apiBase = "https://api.themoviedb.org";
    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        const body = await res.json();
        return body;
    }

    async getPopularMovie(id){
        const film = await this.getResource(`/3/movie/${id}?api_key=209ac81f9ce8d93ae6683227af60927c`);
        return this.transformFilm(film)
    }

    transformFilm(film){
        return {
            id: film.id,
            image: film.poster_path,
            title: film.title,
            popularity: film.vote_average,
            runtime: film.runtime,
            overview: film.overview
          }
    }
}

