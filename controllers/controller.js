const { default: axios } = require("axios");

class Controller {
  static async fetchData(req, res, next) {
      const base_path = "https://api.themoviedb.org/3/account/";
      const USED_ID = 11819950;
      const IMG_URL = "https://image.tmdb.org/t/p/w500/";
      const SESSION_ID = "session_id=54f60baf7a6a1b6eb8a5d14e185ba11ab57f36bf";
      const API_KEY_V3 = "api_key=325149c0389a686a4cd05963d4343b67";
      const routes = "/favorite/movies?";
      const USED_PATH = `${base_path}${USED_ID}${routes}${API_KEY_V3}?${SESSION_ID}`;
    
     try {
      const response = await axios.get("https://api.themoviedb.org/3/account/11819950/favorite/movies?api_key=325149c0389a686a4cd05963d4343b67&session_id=54f60baf7a6a1b6eb8a5d14e185ba11ab57f36bf")
    //  response.data.results.forEach(el => {

    //  }) 
    const resp = response.data.results
    resp.forEach(el => {
        // console.log(el.genre_ids);
        // let genreId = el.genre_id
       console.log(el.genre_ids);
    })
      res.status(200).json(response.data.results)
    } catch (err) {
      next(err);
    console.log(err);
    }
  }


}
// console.log(USED_PATH);
module.exports = Controller
