function SuggestedFriend(props) {
    return (
        <div class="Suggested-friend">
            <div>
                <a href={props.linkIg}>
                    <img src={props.linkImg} alt={props.userSuggested} />
                </a>
                <div>
                    <a href={props.linkIg}>
                        <strong>{props.userSuggested}</strong>
                    </a>
                    <p>{props.subtitle}</p>
                </div>
            </div>
            <p>Seguir</p>
        </div>
    )
}

export default function Suggestions() {
    return (
        <div id="Sugestions">
            <div id="More-sugestions">
                <p>Sugestões para você</p>
                <a href="">
                    <p> Ver tudo</p>
                </a>
            </div>

            <SuggestedFriend linkIg="https://www.instagram.com/alex_eubank15/" linkImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94XZA3RhwYUaH18gZqHbLfr3AaU90FFiaxA&usqp=CAU"
                userSuggested="alex_eubank15" subtitle="Novo no instagram"
            />

            <SuggestedFriend linkIg="https://www.instagram.com/thew6rst/" linkImg="https://yt3.ggpht.com/ytc/AMLnZu_172Hicqkw-pzZpQDPnUNVYLaqjDUg3kt_AfduhQ=s88-c-k-c0x00ffffff-no-rj"
                userSuggested="thew6rst" subtitle="segue você"
            />

            <SuggestedFriend linkIg="https://www.instagram.com/leandro_karnal/" linkImg="https://pbs.twimg.com/profile_images/1399424959668162566/S4wPpTK1_400x400.jpg"
                userSuggested="leandro_karnal" subtitle="segue você"
            />

            <SuggestedFriend linkIg="#" linkImg="https://pbs.twimg.com/profile_images/1198910664691126272/EANypwvT_400x400.jpg"
                userSuggested="miauflix" subtitle="Seguido(a) por mewoed e mais..."
            />

            <SuggestedFriend linkIg="https://www.instagram.com/lf_ponde/" linkImg="https://yt3.ggpht.com/ytc/AMLnZu_gPM_XF0juZA9LFYbLP_i0QZyeidAUysjNNVujfQ=s900-c-k-c0x00ffffff-no-rj"
                userSuggested="lf_ponde" subtitle="Seguido(a) por filomoderna e ..."
            />
        </div>
    )
}