import "./Buttons.css"

export default function Buttons() {
    return (
      <div>
        <button type="button" onclick="location.href='mailto: nita@ya.ru';">Email</button>
        <button type="button" onclick="window.location.href = 'https://www.linkedin.com/in/anna-muzalevskaya/';">LinkedIn</button>
      </div>
    );
  }