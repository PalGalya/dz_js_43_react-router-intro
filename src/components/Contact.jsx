import { NavLink } from "react-router";

function Contact() {
  return (
    <div>
      <h1>Контактна сторінка</h1>
      <p>Зв'яжіться з нами:</p>
      <ul>
        <li>Email: pal.galya@gmail.com</li>
        <li>Телефон: +38 (012) 345-67-89</li>
        <li>Адреса: м. Коростень, вул. Прикладна, 12</li>
      </ul>
      <nav>
        <ul>
          <li>
            <NavLink to="/">На головну</NavLink>
          </li>
          <li>
            <NavLink to="/about">Про нас</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Contact;
