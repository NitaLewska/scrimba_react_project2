import "./Footer.css"
import twitter_logo from "../img/Twitter.svg"
import facebook_logo from "../img/Facebook.svg"
import instagram_logo from "../img/Instagram.svg"
import github_logo from "../img/GitHub.svg"

export default function Footer() {
    return (
      <footer>
          <a href="https://twitter.com/nita_lewska"><img src={twitter_logo} alt="twitter_logo"></img></a>
          <img src={facebook_logo} alt="facebook_logo"></img>
          <img src={instagram_logo} alt="instagram_logo"></img>
          <a href="https://github.com/NitaLewska"><img src={github_logo} alt="github_logo"></img></a>
      </footer>
    );
  }