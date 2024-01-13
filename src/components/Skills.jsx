import React from 'react';
import skills from '../lib/Skills';

export default function Skills() {
    return (
        <div className="skills--container">
              <h1 className="skills__title">Skills</h1>
              <ul className="skills__list">
              {skills.map(function (skills, index) {
                return (
                  <li className="skills-li" key={index}>
                    {skills.name}                   
                  </li>
                );
              })}
              </ul>
        </div>
    )
}