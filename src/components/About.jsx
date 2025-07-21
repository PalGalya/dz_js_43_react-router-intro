import { NavLink } from "react-router";

function About() {
  return (
    <div>
      <h1>Про нас</h1>
      <p>Це сторінка з інформацією про нашу компанію.</p>
      <p>Ми займаємося розробкою веб-додатків з використанням React!</p>
      <nav>
        <ul>
          <li>
            <NavLink to="/">На головну</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Контакти</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default About;
