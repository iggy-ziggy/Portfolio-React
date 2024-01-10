import React from 'react';
import tech from '../lib/Tech';

export default function Tech() {
    return (
        <div className="tech-container">
              <ul className="row mb-4 tech-list">
              {tech.map(function (tech, index) {
                return (
                  <li className="col mx-4 tech-li" key={index}>
                    <i className={tech.name} id="tech-item"></i>
                    <p className="tech-item-title">{tech.title}</p>                   
                  </li>
                );
              })}
              </ul>
        </div>
    )
}