import photo from "../img/photo.jpg"
import "./Photo.css"

export default function Photo() {
    return (
        <img src={photo} className="photo" alt="my_photo"></img>
    );
  }