import React from 'react';
import { Popover, Text } from "@nextui-org/react";
import './styles/Projects.css';
import cuisine from './styles/images/cuisine.png';
import pass from './styles/images/pass.png';
import snail from './styles/images/snail.png';
import weather from './styles/images/weather.png';

const projects = [
    {url: "https://guarded-basin-90757.herokuapp.com/", pageName: "Cuisine and recipies book", repo: "https://github.com/francescortuna/cuisine-and-recipes-logbook", src: cuisine},
    {url: " https://arspeke8.github.io/SaltySnails/", pageName: "Salty Snails saves the environment", repo: "https://github.com/Arspeke8/SaltySnails", src: snail},
    {url: "https://boxlegends.github.io/WeatherApi/", pageName: "Weather API", repo: "https://github.com/BoxLegends/WeatherApi", src: weather},
    {url: "https://boxlegends.github.io/Challenge3/", pageName: "Password Generator", repo: "https://github.com/BoxLegends/Challenge3", src: pass}
];

export default function Projects() {
    return (
        <div className='projects'>
            {projects.map(p => (
        <figure>
               <Popover offset= {-75}>
      <Popover.Trigger>
                <div className="container">
                <img  className="image" src={p.src} alt={p.pageName}></img>
                    <div className="overlay">{p.pageName}</div>
                    </div>
                    </Popover.Trigger>
      <Popover.Content css={{ background: '#3a3a3a', pl: '$20', pr: '$20', borderRadius: 0}}>
        <Text className='popoverText' css={{ p: "$10", color: "$white", textAlign: "$center" }}>{p.pageName}
        <br></br>
        <a href={p.url} target="_blank" rel="noreferrer" style={{color: "white"}}>Visit Here</a>
        <br></br>
        <a href={p.repo} target="_blank" rel="noreferrer" style={{color: "white"}}>Github Repo</a></Text>
      </Popover.Content>
    </Popover>
            </figure>
            ))}
        </div>
    );
}