import "./Footer.css"
import twitter_logo from "../img/Twitter.png"
import facebook_logo from "../img/Facebook.png"
import instagram_logo from "../img/Instagram.png"
import github_logo from "../img/GitHub.png"

export default function Footer() {
    return (
      <footer>
          <a href="https://twitter.com/nita_lewska"><img src={twitter_logo} alt="twitter_logo"></img></a>
          <a href=""><img src={facebook_logo} alt="facebook_logo"></img></a>
          <a href=""><img src={instagram_logo} alt="instagram_logo"></img></a>
          <a href="https://github.com/NitaLewska"><img src={github_logo} alt="github_logo"></img></a>
      </footer>
    );
  }