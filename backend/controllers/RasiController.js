import axios from 'axios'
function convertDataToString(data) {
    const planets = Object.values(data)
      .filter(planet => planet.name !== 'ayanamsa' && planet.name !== 'debug')
      .map(planet => {
        const { name, current_sign, fullDegree, normDegree, isRetro } = planet;
  
        // Check if fullDegree and normDegree exist before calling toFixed
        const formattedFullDegree = fullDegree !== undefined ? fullDegree.toFixed(4) : 'N/A';
        const formattedNormDegree = normDegree !== undefined ? normDegree.toFixed(4) : 'N/A';
  
        return `- ${name}: sign=${current_sign}, fullDegree=${formattedFullDegree}, normDegree=${formattedNormDegree}, isRetro=${isRetro}`;
      }).join('\n');
  
    const ayanamsa = data["13"];
    const debug = data["debug"];
  
    return `Planets:\n${planets}\n\nAyanamsa: value=${ayanamsa.value.toFixed(4)}, type=lahiri\nDebug: observation_point=${debug.observation_point}`;
  }


  const RasiInsight = async (req, res) => {

    try {
        const url = 'https://json.freeastrologyapi.com/planets';
        const headers2 = {
            'Content-Type': 'application/json',
            'x-api-key': process.env.ASTRO_API
        };
        const {year,month,date,hours,minutes,seconds} = req.body;
        const data = {
            "year": year,
            "month": month,
            "date": date,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
            "latitude": 17.38333,
            "longitude": 78.4666,
            "timezone": 5.5,
            "settings": {
                "observation_point": "topocentric",
                "ayanamsha": "lahiri"
            }
        };

        const response = await axios.post(url, data, { headers:headers2 });

        const result = convertDataToString(response.data.output[0])
        console.log(result);
        
        const apiUrl = `${process.env.BASE_API_URL}/lf/${process.env.LANGFLOW_ID}/api/v1/run/${process.env.ENDPOINT}`;
        const payload = {
            input_value: result,
            output_type: "chat",
            input_type: "chat",
        };
        const headers = {
            Authorization: `Bearer ${process.env.APPLICATION_TOKEN}`,
            "Content-Type": "application/json",
        };
        console.log("langflow flow started");
        const response2 = await axios.post(apiUrl, payload, { headers });
        console.log(response2.data.outputs[0].outputs[0].results.message.text);
        return res.status(200).json(response2.data.outputs[0].outputs[0].results.message.text)
    } catch (error) {
        console.error('Error:', error);
    }
}

const rasiChart = async (req,res) => {
    const url = 'https://json.freeastrologyapi.com/horoscope-chart-url';
    const headers = {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ASTRO_API  
    };
    const {year,month,date,hours,minutes,seconds} = req.body;

    const data = {
        "year": year,
        "month": month,
        "date": date,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds,
      "latitude": 17.38333,
      "longitude": 78.4666,
      "timezone": 5.5,
      "config": {
        "observation_point": "topocentric",
        "ayanamsha": "lahiri"
      }
    };
  
    try {
      const response = await axios.post(url, data, { headers });
      
      console.log(response.data);
      return res.status(200).json(response.data)
    } catch (error) {
      console.error('Error fetching horoscope chart:', error);
    }
  };
export { RasiInsight,rasiChart };