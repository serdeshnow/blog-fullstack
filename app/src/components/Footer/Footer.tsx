import { Logo } from '../reusable';
import { useEffect, useState } from 'react';

export const Footer = () => {
	const [city, setCity] = useState<string>('');
	const [temperature, setTemperature] = useState<string>('');
	const [weather, setWeather] = useState<string>('');

	useEffect(() => {
		fetch("https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&lang=ru&appid=61922dac724130ce4927ed7ad16a1e93")
			.then((data) => data.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(String(main.temp));
				setWeather(weather[0].description);
		})
	}, [])

	return (
		<footer className="xl:w-3/5 mx-10 w-5/6 flex-default text-center bg-green mb-1 py-1 px-2.5 rounded text-light-500 shadow-lg transition-all duration-300 ease-in-out">
			<ul className="flex-default gap-5">
				<li><Logo/></li>
				<li>@Serdeshnow</li>
			</ul>
			<ul className="flex-default gap-5 cursor-default">
				<li>{new Date().toLocaleString('ru', {day: "numeric", month:"long"}) }</li>
				<li>{city || null}</li>
				<li>{temperature || null}C {weather || null}</li>
			</ul>
		</footer>
	);
};
