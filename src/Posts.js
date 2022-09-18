import React from "react";

function Comment(props) {
    if (props.comment1 === '' || props.comment1 === null) {
        return (
            <div class="Comments">
                <p>Ver todos os {props.comments} comentários</p>
            </div>
        )
    } else if (props.comment2 === '' || props.comment2 === null) {
        return (
            <div class="Comments">
                <p>Ver todos os {props.comments} comentários</p>
                <div>
                    <p><strong>{props.userComment1}</strong> {props.comment1}</p>
                    <div class="Like-interaction">
                        <ion-icon id="CL1-1" name="heart-outline"
                            onClick="Like(document.getElementById('CL1-1'), document.getElementById('HCL1-1'))">
                        </ion-icon>
                        <div id="HCL1-1" class="Likedc Comment Off"
                            onClick="Like(document.getElementById('CL1-1'), document.getElementById('HCL1-1'))">
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div class="Comments">
                <p>Ver todos os {props.comments} comentários</p>
                <div>
                    <p><strong>{props.userComment1}</strong> {props.comment1}</p>
                    <div class="Like-interaction">
                        <ion-icon id="CL1-1" name="heart-outline"
                            onClick="Like(document.getElementById('CL1-1'), document.getElementById('HCL1-1'))">
                        </ion-icon>
                        <div id="HCL1-1" class="Likedc Comment Off"
                            onClick="Like(document.getElementById('CL1-1'), document.getElementById('HCL1-1'))">
                        </div>
                    </div>
                </div>
                <div>
                    <p><strong>{props.userComment2}</strong> {props.comment2}</p>
                    <div class="Like-interaction">
                        <ion-icon id="CL1-2" name="heart-outline"
                            onClick="Like(document.getElementById('CL1-2'), document.getElementById('HCL1-2'))">
                        </ion-icon>
                        <div id="HCL1-2" class="Likedc Comment Off"
                            onClick="Like(document.getElementById('CL1-2'), document.getElementById('HCL1-2'))">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default function Posts() {
    const [likeInteraction, setLikeInteraction] = React.useState('heart-outline');
    const [heartColor, setHeartColor] = React.useState({ color: 'black' });
    const [saveInteraction, setSaveInteraction] = React.useState('bookmark-outline')

    const data = [{
        userImg: "images/Users-img/meowed.svg",
        userName: "meowed",
        postImg: "images/Posts/gato-telefone.svg",
        userLikedImg: "images/Users-img/User-photo.jpg",
        userLiked: "Guicintra27",
        postCaption: "vendo um miauflix",
        comments: "12",
        userComment1: "Guicintra27",
        comment1: "melhor forma 😋",
        userComment2: "Hgata",
        comment2: "só faltou htinha junto 👀",
        time: "6 horas"
    }, {
        userImg: "images/Users-img/barked.svg",
        userName: "barked",
        postImg: "images/Posts/dog.svg",
        userLikedImg: "images/Users-img/meowed.svg",
        userLiked: "meowed",
        postCaption: "soninho da beleza",
        comments: "10",
        userComment1: "meowed",
        comment1: "vou tirar um soninho desse pra ficar bonito assim 😝",
        userComment2: "",
        comment2: "",
        time: "13 horas"
    }, {
        userImg: "images/Users-img/User-photo.jpg",
        userName: "Guicintra27",
        postImg: "https://cdn1.mundodastribos.com/458820-Fotos-de-cachorros-fantasiados-11.jpg",
        userLikedImg: "images/Users-img/9gag 1.svg",
        userLiked: "9gag",
        postCaption: "meu dogpresley",
        comments: "15",
        userComment1: "",
        comment1: "",
        userComment2: "",
        comment2: "",
        time: "1 dia"
    }];

    function like() {
        if (likeInteraction === 'heart-outline') {
            setLikeInteraction('heart');
            setHeartColor({ color: 'red' });
        } else {
            setLikeInteraction('heart-outline');
            setHeartColor({ color: 'black' });
        }
    }

    function save() {
        if (saveInteraction === 'bookmark-outline') {
            setSaveInteraction('bookmark');
        } else {
            setSaveInteraction('bookmark-outline');
        }
    }

    return (
        <div>
            {data.map((item) =>
                <div class="Post">
                    <div class="Post-user">
                        <div>
                            <div class="User-photo">
                                <div class="Gradient-circle Off"></div>
                                <img class="Only" src={item.userImg} alt={item.userName} />
                            </div>

                            <p>{item.userName}</p>
                        </div>

                        <div class="Post-options">
                            <p>...</p>
                        </div>
                    </div>

                    <div class="Post-img" onClick={like}>
                        <img src={item.postImg} alt="Imagem de post" />
                    </div>

                    <div class="Post-interactions">
                        <div>
                            <div class="Like-interaction">
                                <ion-icon name={likeInteraction} onClick={like} style={heartColor}></ion-icon>
                            </div>
                            <ion-icon class="Chat-icon" name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon onClick={save} name={saveInteraction}></ion-icon>
                    </div>

                    <div class="Post-informations">
                        <div class="Likes">
                            <img src={item.userLikedImg} alt="Curtiu a publicação" />
                            <p> Curtido por <strong class="Liked-by">{item.userLiked}</strong> e <strong>outras
                                pessoas</strong></p>
                        </div>

                        <div class="Post-caption">
                            <p><strong>{item.userName}</strong> {item.postCaption}</p>
                        </div>

                        <Comment
                            comments={item.comments}
                            userComment1={item.userComment1}
                            comment1={item.comment1}
                            userComment2={item.userComment2}
                            comment2={item.comment2}
                        />

                        <div class="Post-time">
                            <span>Há {item.time}</span>
                        </div>
                    </div>

                    <div class="Write-comment">
                        <ion-icon name="happy-outline"></ion-icon>

                        <input type="text" name="" id="" placeholder="Adicione um comentário..." />

                        <button>Publicar</button>
                    </div>
                </div>
            )}
        </div>
    )
}