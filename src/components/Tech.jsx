import React from 'react';
import tech from '../lib/Tech';

export default function Tech() {
    return (
        <div className="tech--container">
              <ul className="tech--list">
              {tech.map(function (tech, index) {
                return (
                  <li className="tech__list-item" key={index}>
                    <i className={tech.name} id="tech__item"></i>
                    <p className="tech__item-title">{tech.title}</p>                   
                  </li>
                );
              })}
              </ul>
        </div>
    )
}