export default function Suggestions() {
    const data = [
        {
            linkIg: "https://www.instagram.com/alex_eubank15/",
            linkImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94XZA3RhwYUaH18gZqHbLfr3AaU90FFiaxA&usqp=CAU",
            userSuggested: "alex_eubank15",
            subtitle: "Novo no instagram"
        }, {
            linkIg: "https://www.instagram.com/thew6rst/",
            linkImg: "https://yt3.ggpht.com/ytc/AMLnZu_172Hicqkw-pzZpQDPnUNVYLaqjDUg3kt_AfduhQ=s88-c-k-c0x00ffffff-no-rj",
            userSuggested: "thew6rst",
            subtitle: "segue você"
        }, {
            linkIg: "https://www.instagram.com/leandro_karnal/",
            linkImg: "https://pbs.twimg.com/profile_images/1399424959668162566/S4wPpTK1_400x400.jpg",
            userSuggested: "leandro_karnal",
            subtitle: "segue você"
        }, {
            linkIg: "#",
            linkImg: "https://pbs.twimg.com/profile_images/1198910664691126272/EANypwvT_400x400.jpg",
            userSuggested: "miauflix",
            subtitle: "Seguido(a) por mewoed e mais..."
        }, {
            linkIg: "https://www.instagram.com/lf_ponde/",
            linkImg: "https://yt3.ggpht.com/ytc/AMLnZu_gPM_XF0juZA9LFYbLP_i0QZyeidAUysjNNVujfQ=s900-c-k-c0x00ffffff-no-rj",
            userSuggested: "lf_ponde",
            subtitle: "Seguido(a) por filomoderna e ..."
        }
    ];
    
    return (
        <div id="Sugestions">
            <div id="More-sugestions">
                <p>Sugestões para você</p>
                <a href="">
                    <p> Ver tudo</p>
                </a>
            </div>

            {data.map((item) =>
                <div class="Suggested-friend">
                    <div>
                        <a href={item.linkIg}>
                            <img src={item.linkImg} alt={item.userSuggested} />
                        </a>
                        <div>
                            <a href={item.linkIg}>
                                <strong>{item.userSuggested}</strong>
                            </a>
                            <p>{item.subtitle}</p>
                        </div>
                    </div>
                    <p>Seguir</p>
                </div>)}
        </div>
    )
}