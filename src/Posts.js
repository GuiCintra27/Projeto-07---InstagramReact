export default function Posts(){
    return (
            <div>
                <div class="Post">
                    <div class="Post-user">
                        <div>
                            <div class="User-photo">
                                <div class="Gradient-circle Off"></div>
                                <img class="Only" src="images/Users-img/meowed.svg" alt="Usuário"/>
                            </div>

                            <p>meowed</p>
                        </div>

                        <div class="Post-options">
                            <p>...</p>
                        </div>
                    </div>

                    <div class="Post-img">
                        <img src="images/Posts/gato-telefone.svg" alt="Imagem de post"/>
                    </div>

                    <div class="Post-interactions">
                        <div>
                            <div class="Like-interaction">
                                <ion-icon id="L1" name="heart-outline"
                                    onclick="Like(document.getElementById('L1'), document.getElementById('HL1'))">
                                </ion-icon>
                                <div id="HL1" class="Liked Off"
                                    onclick="Like(document.getElementById('L1'), document.getElementById('HL1'))"></div>
                            </div>
                            <ion-icon class="Chat-icon" name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>

                    <div class="Post-informations">
                        <div class="Likes">
                            <img src="images/Users-img/User-photo.jpg" alt="Curtiu a publicação"/>
                            <p> Curtido por <strong class="Liked-by">Guicintra27</strong> e <strong>outras
                                    pessoas</strong></p>
                        </div>

                        <div class="Post-caption">
                            <p><strong>meowed</strong> vendo um miauflix</p>
                        </div>

                        <div class="Comments">
                            <p>Ver todos os 12 comentários</p>
                            <div>
                                <p><strong>Guicintra27</strong> melhor forma 😋</p>
                                <div class="Like-interaction">
                                    <ion-icon id="CL1-1" name="heart-outline"
                                        onclick="Like(document.getElementById('CL1-1'), document.getElementById('HCL1-1'))">
                                    </ion-icon>
                                    <div id="HCL1-1" class="Likedc Comment Off"
                                        onclick="Like(document.getElementById('CL1-1'), document.getElementById('HCL1-1'))">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p><strong>Hagata</strong> só faltou htinha junto 👀</p>
                                <div class="Like-interaction">
                                    <ion-icon id="CL1-2" name="heart-outline"
                                        onclick="Like(document.getElementById('CL1-2'), document.getElementById('HCL1-2'))">
                                    </ion-icon>
                                    <div id="HCL1-2" class="Likedc Comment Off"
                                        onclick="Like(document.getElementById('CL1-2'), document.getElementById('HCL1-2'))">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="Post-time">
                            <span>Há 6 horas</span>
                        </div>
                    </div>

                    <div class="Write-comment">
                        <ion-icon name="happy-outline"></ion-icon>

                        <input type="text" name="" id="" placeholder="Adicione um comentário..."/>

                        <button>Publicar</button>
                    </div>
                </div>

                <div class="Post">
                    <div class="Post-user">
                        <div>
                            <div class="User-photo">
                                <div class="Gradient-circle Off"></div>
                                <img class="Only" src="images/Users-img/barked.svg" alt="Usuário"/>
                            </div>

                            <p>barked</p>
                        </div>

                        <div class="Post-options">
                            <p>...</p>
                        </div>
                    </div>

                    <div class="Post-img">
                        <img src="images/Posts/dog.svg" alt="Imagem de post"/>
                    </div>

                    <div class="Post-interactions">
                        <div>
                            <div class="Like-interaction">
                                <ion-icon id="L2" name="heart-outline"
                                    onclick="Like(document.getElementById('L2'), document.getElementById('HL2'))">
                                </ion-icon>
                                <div id="HL2" class="Liked Off"
                                    onclick="Like(document.getElementById('L2'), document.getElementById('HL2'))"></div>
                            </div>
                            <ion-icon class="Chat-icon" name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>

                    <div class="Post-informations">
                        <div class="Likes">
                            <img src="images/Users-img/meowed.svg" alt="Curtiu a publicação"/>
                            <p> Curtido por <strong class="Liked-by">meowed</strong> e <strong>outras pessoas</strong>
                            </p>
                        </div>

                        <div class="Post-caption">
                            <p><strong>barked</strong> soninho da beleza</p>
                        </div>

                        <div class="Comments">
                            <p>Ver todos os 10 comentários</p>
                            <div>
                                <p><strong>meowed</strong> vou tirar um soninho desse pra ficar bonito assim 😝</p>
                                <div class="Like-interaction">
                                    <ion-icon id="CL2-1" name="heart-outline"
                                        onclick="Like(document.getElementById('CL2-1'), document.getElementById('HCL2-1'))">
                                    </ion-icon>
                                    <div id="HCL2-1" class="Likedc Comment Off"
                                        onclick="Like(document.getElementById('CL2-1'), document.getElementById('HCL2-1'))">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="Post-time">
                            <span>Há 6 horas</span>
                        </div>
                    </div>

                    <div class="Write-comment">
                        <ion-icon name="happy-outline"></ion-icon>

                        <input type="text" name="" id="" placeholder="Adicione um comentário..."/>

                        <button>Publicar</button>
                    </div>
                </div>

                <div class="Post">
                    <div class="Post-user">
                        <div>
                            <div class="User-photo">
                                <div class="Gradient-circle"></div>
                                <img src="images/Users-img/User-photo.jpg" alt="Usuário"/>
                            </div>

                            <p>Guicintra27</p>
                        </div>

                        <div class="Post-options">
                            <p>...</p>
                        </div>
                    </div>

                    <div class="Post-img">
                        <img src="https://cdn1.mundodastribos.com/458820-Fotos-de-cachorros-fantasiados-11.jpg" alt="Imagem de post"/>
                    </div>

                    <div class="Post-interactions">
                        <div>
                            <div class="Like-interaction">
                                <ion-icon id="L3" name="heart-outline"
                                    onclick="Like(document.getElementById('L3'), document.getElementById('HL3'))">
                                </ion-icon>
                                <div id="HL3" class="Liked Off"
                                    onclick="Like(document.getElementById('L3'), document.getElementById('HL3'))"></div>
                            </div>
                            <ion-icon class="Chat-icon" name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>

                    <div class="Post-informations">
                        <div class="Likes">
                            <img src="images/Users-img/9gag 1.svg" alt="Curtiu a publicação"/>
                            <p> Curtido por <strong class="Liked-by">9gag</strong> e <strong>outras pessoas</strong></p>
                        </div>

                        <div class="Post-caption">
                            <p><strong>Guicintra27</strong> meu dogpresley</p>
                        </div>

                        <div class="Comments">
                            <p>Ver todos os 15 comentários</p>
                        </div>

                        <div class="Post-time">
                            <span>Há 6 horas</span>
                        </div>
                    </div>

                    <div class="Write-comment">
                        <ion-icon name="happy-outline"></ion-icon>

                        <input type="text" name="" id="" placeholder="Adicione um comentário..."/>

                        <button>Publicar</button>
                    </div>
                </div>
            </div>
    )
}