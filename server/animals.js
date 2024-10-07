
const start = 1369728000
const end = 1369789200
const radius = 1000 // TODO: this might need to be tweaked


async function getCoordinateAnimals(lat, lon, radius) {
  console.log("coordinate animals api called\n")

    const url = `https://api.gbif.org/v1/occurrence/search?decimalLatitude=${lat}&decimalLongitude=${lon}&radius=${radius}&limit=5`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json'
            }
          })

          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        // filters only animalia results
        const animaliaResults = json.results.filter(result => result.kingdom === 'Animalia');

        const length = animaliaResults.length
        //console.log(length)

        const randIdx = Math.floor(Math.random() * (length - 1))
        //console.log(randIdx)

        const kingdom = animaliaResults[randIdx]?.kingdom
        const family = animaliaResults[randIdx]?.family
        const genus = animaliaResults[randIdx]?.genus
        const species = animaliaResults[randIdx]?.species

        // console.log("kingdom: " + kingdom + "\nfamily: " + family + "\ngenus: " + genus + "\nspecies: " + species)

        return [kingdom, family, genus, species]

    } catch (error) {
        console.error(error.message);
    }
}

export default getCoordinateAnimals
