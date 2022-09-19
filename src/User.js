import React from "react";


export default function User(props) {
    const [userImage, setUserImage] = React.useState(props.UserImg);
    const [userName, setUserName] = React.useState(props.UserNick);
    function switchPefilData() {
        const newUserImage = prompt('Digite a url da imagem de perfil');
        const newUserName = prompt('Digite seu novo nome de perfil');
        setUserImage(newUserImage);
        setUserName(newUserName);
    }

    return (
        <div id="Profile">
            <div>
                <a href="#"><img src={(userImage === '' || userImage === null) ? 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' : userImage} alt="Imagem do usuário" /></a>
                <div>
                    <a href="#">
                        <p>{props.UserName}</p>
                    </a>
                    <p>{(userName === '' || userName === null) ? 'Usuário não conectado' : userName}</p>
                </div>
            </div>

            <a href="#">
                <p onClick={switchPefilData}>Mudar</p>
            </a>
        </div>
    )
}
