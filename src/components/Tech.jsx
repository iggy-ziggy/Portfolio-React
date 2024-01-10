import React from 'react';
import tech from '../lib/Tech';

export default function Tech() {
    return (
        <div className="block container tech--container">
              <ul className="list grid grid--1x2 tech--list">
              {tech.map(function (tech, index) {
                return (
                  <li className="tech__list-item" key={index}>
                    <p className="tech__item-title">{tech.title}</p>                   
                    <i className={tech.name} id="tech__item"></i>
                  </li>
                );
              })}
              </ul>
        </div>
    )
}