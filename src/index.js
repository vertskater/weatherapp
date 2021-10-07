import "./style.scss";

async function weatherData(city) {
    const responseCelsius = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b027513fdfc1efe52bc162e6113654d5`
    );

    const responseFahr = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=b027513fdfc1efe52bc162e6113654d5`
    );
    if (responseCelsius.status >= 200 && responseCelsius.status <= 299) {
        document.querySelector("#error").textContent = "";
        const dataC = await responseCelsius.json();
        const dataF = await responseFahr.json();
        let result = await Promise.all([dataC, dataF]);
        return result;
    } else {
        let error = new Error(
            "Sorry, we can not find the location you are searchign for!"
        );
        errorMsg(error);
    }
}
function errorMsg(err) {
    const inputCountry = document.querySelector("#error");
    inputCountry.textContent = err;
}

function setData() {
    class Weather {
        constructor(
            id,
            tempC,
            tempF,
            minTempC,
            minTempF,
            maxTempC,
            maxTempF,
            tempFeelsC,
            tempFeelsF,
            wCondition,
            condDescription,
            wIcon,
            clouds,
            country,
            city
        ) {
            this.id = id;
            this.tempC = tempC;
            this.tempF = tempF;
            this.minTempC = minTempC;
            this.minTempF = minTempF;
            this.maxTempC = maxTempC;
            this.maxTempF = maxTempF;
            this.tempFeelsC = tempFeelsC;
            this.tempFeelsF = tempFeelsF;
            this.wCondition = wCondition;
            this.condDescription = condDescription;
            this.wIcon = wIcon;
            this.clouds = clouds;
            this.country = country;
            this.city = city;
        }
    }
    const location = document.querySelector("#country");
    location.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            createObject(Weather, location.value);
        }
    });
    createObject(Weather, "graz");
}

function createObject(Weather, location) {
    const currentWeather = weatherData(location);
    currentWeather.then((currentData) => {
        let data = new Weather(
            currentData[0].weather[0].id,
            currentData[0].main.temp,
            currentData[1].main.temp,
            currentData[0].main.temp_min,
            currentData[1].main.temp_min,
            currentData[0].main.temp_max,
            currentData[1].main.temp_max,
            currentData[0].main.feels_like,
            currentData[1].main.feels_like,
            currentData[0].weather[0].main,
            currentData[0].weather[0].description,
            currentData[0].weather[0].icon,
            currentData[0].clouds.all,
            currentData[0].sys.country,
            location.toUpperCase()
        );
        renderHTML(data);
    });
}

function renderHTML(data) {
    const icon = document.querySelector(".icon-img");
    const country = document.querySelector(".country");
    const condition = document.querySelector(".condition");
    const clouds = document.querySelector(".clouds");
    const maxLow = document.querySelector(".max-low");
    const degrees = document.querySelector(".degrees");
    country.textContent = data.city + ", " + data.country;
    condition.textContent = data.condDescription;
    clouds.textContent = data.clouds + " % Clouds";
    maxLow.textContent =
        "min Temp: " +
        parseInt(data.minTempC) +
        " °C" +
        ", " +
        "max Temp: " +
        data.maxTempC +
        " °C";
    degrees.textContent = parseInt(data.tempC) + " °C";
    let url = `http://openweathermap.org/img/wn/${data.wIcon}@2x.png`;
    icon.src = url;
    weatherBackground(data.id);
}

function weatherBackground(cond) {
    console.log(cond);
    const pics = {
        fewclouds:
            "https://images.unsplash.com/photo-1601297183305-6df142704ea2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
        clearsky:
            "https://images.unsplash.com/photo-1622278647429-71bc97e904e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
        clouds: "https://images.unsplash.com/photo-1498496294664-d9372eb521f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fD,B8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        thunder:
            "https://images.unsplash.com/photo-1599070221195-bf2801877d7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        rain: "https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
        snow: "https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        mist: "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    };
    if (cond >= 801 && cond <= 802) {
        document.body.style.backgroundImage = "url(" + pics.fewclouds + ")";
    } else if (cond >= 701 && cond <= 781) {
        document.body.style.backgroundImage = "url(" + pics.mist + ")";
    } else if (cond === 800) {
        document.body.style.backgroundImage = "url(" + pics.clearsky + ")";
    } else if (cond >= 803 && cond <= 804) {
        document.body.style.backgroundImage = "url(" + pics.clouds + ")";
    } else if ((cond >= 500 && cond <= 531) || (cond >= 300 && cond <= 321)) {
        document.body.style.backgroundImage = "url(" + pics.rain + ")";
    } else if (cond >= 200 && cond <= 232) {
        document.body.style.backgroundImage = "url(" + pics.thunder + ")";
    } else if (cond >= 600 && cond <= 622) {
        document.body.style.backgroundImage = "url(" + pics.snow + ")";
    }
}

setData();
