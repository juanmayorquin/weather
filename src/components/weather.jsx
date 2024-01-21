import { IconWind } from '@tabler/icons-react';

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
        const temperature = Math.round(weather.main.temp);
        const tempMax = Math.round(weather.main.temp_max);
        const tempMin = Math.round(weather.main.temp_min);

        return (
            <section className="flex flex-col items-center justify-center gap-5 text-xl text-gray-500">
                <h2 className="font-semibold text-3xl">{weather.name}, {weather.sys.country}</h2>
                <div className="text-yellow-500">
                    {icon}
                </div>
                <div className="capitalize">
                    {weather.weather[0].description}
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-8xl font-light text-black">{temperature} C°</p>
                    <div className="flex items-center justify-center text-center">
                        <p className="text-3xl font-light">
                            {tempMax}°C/{tempMin}°C
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center justify-center gap-2 w-24">
                        <IconWind/>
                        <p>{weather.wind.speed} km/h</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 w-24">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-umbrella"
                            width="20"
                            height="20"
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
                        <p>{weather.main.pressure} bar</p>

                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 w-24">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-droplet"
                            width="20"
                            height="20"
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
