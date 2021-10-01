import React, {useState} from 'react';
import '../styles/AppUserDetails.css';
import AppLoader from './AppLoader';

const AppUserDetials = (props) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="userDetails">
            <img src={props.userPhoto} alt="Logo" className={`image-${
                loaded ? 'visible' : 'hidden'
            }`}
            onLoad={() => {setLoaded(true)}}
            />
            {
                !loaded && (
                    <AppLoader name="image-loader"/>
                )
            }
            <div className="userInfo">
                <h3>{props.userName}</h3>
            </div>
        </div>
    )
}

export default AppUserDetials
