import { NavLink } from "react-router";

function Home() {
  return (
    <div>
      <h1>Домашня сторінка</h1>
      <p>Вітаємо на домашній сторінці нашого сайту!</p>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">Про нас</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Контакти</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
