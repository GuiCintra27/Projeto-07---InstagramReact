export default function Navbar(){
    return(
        <header>
        <nav>
            <a href="Index.html">
                <div id="Logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="Divisor"></div>
                    <img src="images/Logo/logo.png" alt=""/>
                </div>
            </a>

            <img id="Logo-mobile" src="images/Logo/logo.png" alt=""/>
            
            <a href="" id="Direct-mobile">
                <ion-icon name="paper-plane-outline"></ion-icon>
            </a>
            
            <div id="Search-bar">
                <ion-icon name="search-outline"></ion-icon>
                <input type="text" placeholder="Pesquisar"/>
            </div>
    
            <div id="User-area">
                <a href="">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </a>
                <a href="">
                    <ion-icon name="compass-outline"></ion-icon>
                </a>
                <a href="">
                    <ion-icon name="heart-outline"></ion-icon>
                </a>
                <a href="">
                    <div id="User-img">
                        <img src="images/Users-img/User-photo.jpg" alt=""/>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    )
}