import React from 'react';
import skills from '../lib/Skills';

export default function Skills() {
    return (
        <div>
              <h1 className="skills__title">Skills</h1>
              <div className="container block skills--container">
                  <ul className="list grid grid--1x2-small grid--1x3 skills__list">
                  {skills.map(function (skills, index) {
                    return (
                      <li key={index}>
                        {skills.name}
                      </li>
                    );
                  })}
                  </ul>
              </div>
        </div>
    )
}