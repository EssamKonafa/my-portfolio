import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import join from "../Slider/twiiter/join.png"
import signin from "../Slider/twiiter/signin.png"
import signup from "../Slider/twiiter/signup.png"
import profile from "../Slider/twiiter/profile.png"
import editProfile from "../Slider/twiiter/editProfile.png"
import messages from "../Slider/twiiter/messages.png"

export default function Slider() {

    const [activeSlide, setActiveSlide] = useState(0);
    const handleSlideChange = (index) => {
        setActiveSlide(index)
    }
    return (

        <div  className="container-fluid" >
            <Carousel
                showArrows={true}
                showThumbs={false}
                selectedItem={activeSlide}
                onChange={handleSlideChange}
            >
                <div className="card-img-top">
                    <img className="card-img-top" src={join} alt="photo" />
                </div>
                <div>
                    <img className="card-img-top" src={signin} alt="photo" />
                </div>
                <div>
                    <img className="card-img-top" src={signup} alt="photo" />
                </div>
                <div>
                    <img className="card-img-top" src={profile} alt="photo" />
                </div>
                <div>
                    <img className="card-img-top" src={editProfile} alt="photo" />
                </div>
                <div>
                    <img className="card-img-top" src={messages} alt="photo" />
                </div>
            </Carousel>
        </div>
    )
}