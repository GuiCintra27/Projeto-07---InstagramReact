export default function Stories() {
    const data = [
        {
            userImg: "images/Users-img/9gag 1.svg",
            userName: "9gag"
        }, {
            userImg: "images/Users-img/barked.svg",
            userName: "Barked"
        }, {
            userImg: "images/Users-img/filomoderna.svg",
            userName: "filomoderna"
        }, {
            userImg: "images/Users-img/memeriagourmet.svg",
            userName: "memeriag.."
        }, {
            userImg: "images/Users-img/nathanwpylestrangeplanet.svg",
            userName: "nathanw.."
        }, {
            userImg: "images/Users-img/respondeai.svg",
            userName: "respondeai"
        }, {
            userImg: "images/Users-img/wawawiwacomicsa 1.svg",
            userName: "wawawi..."
        }, {
            userImg: "images/Users-img/meowed.svg",
            userName: "meowed"
        }, {
            userImg: "https://i.pinimg.com/originals/53/c4/98/53c498f0edb7ccf1390429f68162eab5.jpg",
            userName: "Neymarjr"
        }, {
            userImg: "https://yt3.ggpht.com/szyPYpR-sT0BiZwPndOALzhCaZM6H9xxVFHUZKhf8HCUuPGS7vcFOHKzhV3HtH7i_MqpFUVDfg=s900-c-k-c0x00ffffff-no-rj",
            userName: "mateusas.."
        }
    ];
    
    return (
        <div id="Story-box">
            <div id="Story-button-mobile">
                <img src="images/Users-img/Story-button.svg" alt="" />
            </div>

            {data.map((item) =>
                <div class="Story">
                    <div class="Story-img">
                        <div class="Gradient-circle"></div>
                        <img src={item.userImg} alt={item.userName} />
                    </div>

                    <p>{item.userName}</p>
                </div>)}
        </div>
    )
}