/** @format */

export const fetchMusic = async (query) => {
  if (query.length > 2) {
    try {
      const response = await fetch(
        "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query,
        {
          headers: {
            "X-RapidAPI-Key":
              "85f7b0f089msh4f95fec2293b7cep1ac28fjsn78f6f1885c53",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        const songs = result.data;
        console.log(songs);
      } else {
        console.log("ERROR !!");
      }
    } catch (error) {
      console.log(error);
    }
  }
};
