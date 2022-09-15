import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function Body(){
    return (
    <main>
        <div id="Story-button">
            <img src="images/Users-img/Story-button.svg" alt=""/>
        </div> 
        <div>
            <Stories/>
            <Posts/>
        </div>   

        <Sidebar/>

        <div id="Menu-mobile">
            <ion-icon name="home-outline"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <img id="User-mobile" src="images/Users-img/User-photo.jpg" alt="Usuário"/>
        </div>
    </main>
    )
}