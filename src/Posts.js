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
                        <ion-icon name="heart-outline">
                        </ion-icon>
                        <div class="Likedc Comment Off">
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
                        <ion-icon name="heart-outline">
                        </ion-icon>
                        <div class="Likedc Comment Off">
                        </div>
                    </div>
                </div>
                <div>
                    <p><strong>{props.userComment2}</strong> {props.comment2}</p>
                    <div class="Like-interaction">
                        <ion-icon name="heart-outline">
                        </ion-icon>
                        <div class="Likedc Comment Off">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default function Posts() {
    const [likeOne, setLikeOne] = React.useState('heart-outline');
    const [likeTwo, setLikeTwo] = React.useState('heart-outline');
    const [likeThree, setLikeThree] = React.useState('heart-outline');
    const [heartColorOne, setHeartColorOne] = React.useState({ color: 'black' });
    const [heartColorTwo, setHeartColorTwo] = React.useState({ color: 'black' });
    const [heartColorThree, setHeartColorThree] = React.useState({ color: 'black' });
    const [bookmarkOne, setBookmarkOne] = React.useState('bookmark-outline');
    const [bookmarkTwo, setBookmarkTwo] = React.useState('bookmark-outline');
    const [bookmarkThree, setBookmarkThree] = React.useState('bookmark-outline');
    const [likesOne, setLikesOne] = React.useState((Math.random() * 1000).toFixed());
    const [likesTwo, setLikesTwo] = React.useState((Math.random() * 1000).toFixed());
    const [likesThree, setLikesThree] = React.useState((Math.random() * 1000).toFixed());

    const data = [{
        userImg: "images/Users-img/meowed.svg",
        userName: "meowed",
        postImg: "images/Posts/gato-telefone.svg",
        userLikedImg: "images/Users-img/User-photo.jpg",
        userLiked: "Guicintra27",
        likes: likesOne,
        postCaption: "vendo um miauflix",
        comments: "12",
        userComment1: "Guicintra27",
        comment1: "melhor forma 😋",
        userComment2: "Hgata",
        comment2: "só faltou htinha junto 👀",
        time: "6 horas",
        like: likeOne,
        likeFunction: likeInteractionOne,
        heart: heartColorOne,
        save: bookmarkOne,
        saveFunction: saveBookmarkOne
    }, {
        userImg: "images/Users-img/barked.svg",
        userName: "barked",
        postImg: "images/Posts/dog.svg",
        userLikedImg: "images/Users-img/meowed.svg",
        userLiked: "meowed",
        likes: likesTwo,
        postCaption: "soninho da beleza",
        comments: "10",
        userComment1: "meowed",
        comment1: "vou tirar um soninho desse pra ficar bonito assim 😝",
        userComment2: "",
        comment2: "",
        time: "13 horas",
        like: likeTwo,
        likeFunction: likeInteractionTwo,
        heart: heartColorTwo,
        save: bookmarkTwo,
        saveFunction: saveBookmarkTwo
    }, {
        userImg: "images/Users-img/User-photo.jpg",
        userName: "Guicintra27",
        postImg: "https://cdn1.mundodastribos.com/458820-Fotos-de-cachorros-fantasiados-11.jpg",
        userLikedImg: "images/Users-img/9gag 1.svg",
        userLiked: "9gag",
        likes: likesThree,
        postCaption: "meu dogpresley",
        comments: "15",
        userComment1: "",
        comment1: "",
        userComment2: "",
        comment2: "",
        time: "1 dia",
        like: likeThree,
        likeFunction: likeInteractionThree,
        heart: heartColorThree,
        save: bookmarkThree,
        saveFunction: saveBookmarkThree
    }];

    function likeInteractionOne() {
        if (likeOne === 'heart-outline') {
            setLikeOne('heart');
            setHeartColorOne({ color: 'red' });
            setLikesOne(Number(likesOne) + 1);
        } else {
            setLikeOne('heart-outline');
            setHeartColorOne({ color: 'black' });
            setLikesOne(Number(likesOne) - 1);
        }
    }

    function likeInteractionTwo() {
        if (likeTwo === 'heart-outline') {
            setLikeTwo('heart');
            setHeartColorTwo({ color: 'red' });
            setLikesTwo(Number(likesTwo) + 1);
        } else {
            setLikeTwo('heart-outline');
            setHeartColorTwo({ color: 'black' });
            setLikesTwo(Number(likesTwo) - 1);
        }
    }

    function likeInteractionThree() {
        if (likeThree === 'heart-outline') {
            setLikeThree('heart');
            setHeartColorThree({ color: 'red' });
            setLikesThree(Number(likesThree) + 1);
        } else {
            setLikeThree('heart-outline');
            setHeartColorThree({ color: 'black' });
            setLikesThree(Number(likesThree) - 1);
        }
    }

    function saveBookmarkOne() {
        if (bookmarkOne === 'bookmark-outline') {
            setBookmarkOne('bookmark');
        } else {
            setBookmarkOne('bookmark-outline');
        }
    }

    function saveBookmarkTwo() {
        if (bookmarkTwo === 'bookmark-outline') {
            setBookmarkTwo('bookmark');
        } else {
            setBookmarkTwo('bookmark-outline');
        }
    }

    function saveBookmarkThree() {
        if (bookmarkThree === 'bookmark-outline') {
            setBookmarkThree('bookmark');
        } else {
            setBookmarkThree('bookmark-outline');
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

                    <div class="Post-img" onClick={item.likeFunction}>
                        <img src={item.postImg} alt="Imagem de post" />
                    </div>

                    <div class="Post-interactions">
                        <div>
                            <div class="Like-interaction">
                                <ion-icon name={item.like} onClick={item.likeFunction} style={item.heart}></ion-icon>
                            </div>
                            <ion-icon class="Chat-icon" name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon onClick={item.saveFunction} name={item.save}></ion-icon>
                    </div>

                    <div class="Post-informations">
                        <div class="Likes">
                            <img src={item.userLikedImg} alt="Curtiu a publicação" />
                            <p> Curtido por <strong class="Liked-by">{item.userLiked}</strong> e <strong>outras {item.likes} pessoas</strong></p>
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