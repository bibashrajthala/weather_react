import axios from "axios";
import { useState, useEffect } from "react";
import { Form, Button, Toast } from "react-bootstrap";

const Weather = () => {
  const [city, setCity] = useState("bhaktapur");
  const [data, setData] = useState({});

  // useEffect(() => {
  //   const apiKey = "acbd401a0545bb9dbad533a48947a94e";
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  //   axios
  //     .get(url)
  //     .then((response) => {
  //       //   console.log(response);
  //       //   console.log(response.data); // response.data is object // so set data according to properties of reponse.data object.
  //       return response.data;
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       setData({
  //         temp: data.main.temp,
  //         temp_min: data.main.temp_min,
  //         temp_max: data.main.temp_max,
  //         description: data.weather[0].description,
  //         humidity: data.main.humidity,
  //         city: data.name,
  //         country: data.sys.country,
  //       });
  //     });
  // }, [city]);

  const showWeatherData = (e) => {
    e.preventDefault();

    const apiKey = "acbd401a0545bb9dbad533a48947a94e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios
      .get(url)
      .then((response) => {
        //   console.log(response);
        //   console.log(response.data); // response.data is object // so set data according to properties of reponse.data object.
        return response.data;
      })
      .then((data) => {
        // console.log(data);
        console.log(data); // data is now a new object set on setData()

        setData({
          temp: data.main.temp,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          city: data.name,
          country: data.sys.country,
        });
      });

    const showData = document.querySelector(".show__data");
    showData.style.opacity = 1;
  };

  return (
    <>
      <h1>Weather from Weather api</h1>

      <Form className="form">
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label>City:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={showWeatherData}>
          Submit
        </Button>
      </Form>

      <div className="show__data">
        <Toast>
          <Toast.Header>
            <strong className="me-auto">Temp:</strong>
          </Toast.Header>
          <Toast.Body>{data.temp}</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header>
            <strong className="me-auto">Temp_max:</strong>
          </Toast.Header>
          <Toast.Body>{data.temp_max}</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header>
            <strong className="me-auto">Temp_min:</strong>
          </Toast.Header>
          <Toast.Body>{data.temp_min}</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header>
            <strong className="me-auto">Description:</strong>
          </Toast.Header>
          <Toast.Body>{data.description}</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header>
            <strong className="me-auto">Humidity:</strong>
          </Toast.Header>
          <Toast.Body>{data.humidity}</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header>
            <strong className="me-auto">City:</strong>
          </Toast.Header>
          <Toast.Body>{data.city}</Toast.Body>
        </Toast>
        <Toast>
          <Toast.Header>
            <strong className="me-auto">Country:</strong>
          </Toast.Header>
          <Toast.Body>{data.country}</Toast.Body>
        </Toast>
      </div>
    </>
  );
};

export default Weather;
