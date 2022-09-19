import Suggestions from "./Suggestions";
import User from "./User";

export default function Sidebar(){
    return (
        <aside>
            <User UserImg='../images/Users-img/User-photo.jpg' UserName='Guicintra27' UserNick='Guilherme Cintra'/>
            <Suggestions/>

            <div id="Ig-informations">
                <div id="Information-links">
                    <a href="https://about.instagram.com/">Sobre</a>
                    <a href="https://help.instagram.com/">Ajuda</a>
                    <a href="https://about.instagram.com/blog/">Imprensa</a>
                    <a href="https://developers.facebook.com/docs/instagram">API</a>
                    <a href="https://www.instagram.com/about/jobs/">Carreiras</a>
                    <a href="https://www.instagram.com/legal/privacy/">Privacidade</a>
                    <a href="https://www.instagram.com/legal/terms/">Termos</a>
                    <a href="https://www.instagram.com/explore/locations/">Localizações</a>
                    <p>Idioma</p>
                </div>

                <p>© 2022 INSTAGRAM FROM META</p>
            </div>
        </aside>
    )
}