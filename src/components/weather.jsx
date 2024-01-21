export default function Weather({ weather }) {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-sun"
      width={150}
      height={150}
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
    </svg>
  );

  if (weather) {
    console.log(weather)
    const temperature = Math.round(weather.main.temp - 273.15);
    return (
      <section className="flex items-center justify-center gap-10 text-xl text-gray-500">
        <div className="text-yellow-500">{icon}</div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-8xl font-light text-black">{temperature} C°</p>
          <div className="flex items-center justify-center text-center">
            <p className="text-3xl font-light">
              {weather.main.temp_min}/{weather.main.temp_max}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-wind"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
              <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
              <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
            </svg>
            <p>{weather.wind.speed}Km/h</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-umbrella"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 12a8 8 0 0 1 16 0z" />
              <path d="M12 12v6a2 2 0 0 0 4 0" />
            </svg>
            {/* <p>{precipitation}%</p> */}
          </div>
          <div className="flex items-center justify-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-droplet"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7.502 19.423c2.602 2.105 6.395 2.105 8.996 0c2.602 -2.105 3.262 -5.708 1.566 -8.546l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546z" />
            </svg>
            <p>{weather.main.humidity}%</p>
          </div>
        </div>
      </section>
    );
  }
}
