import axios from "axios";

export default async function searchNPM(req, res) {
  try {
    const results = await axios
      .get(`https://www.npmjs.com/search/suggestions?q=${req.query.q}`)
      .then((res) => res.data);

    res.send(results);
  } catch (error) {
    console.log(error);
  }
}
