<<<<<<< HEAD
portadaDescripcion = () => {
    return `<div class="onPortada">
    <div class="description-portada">
        <h2>MAMÁ POR PRIMERA VEZ EN</h2>
        <span class="description-portadaModo">MODO</span><span class="description-portadaMama">MAMA</span>
        <div class="description"><span class="icon-heart"></span><p>Recibe muchimos tips</p></div>
        <div class="description"><span class="icon-bubbles"></span><p>Orienta a tu comunidad</p></div>
        <div class="description"><span class="icon-gift"></span><p>Especialistas en tu bolsillo</p></div>
        <div class="description"><span class="icon-flag"></span><p>Haz que conoscan tu marca</p></div>
    </div>                        
</div>`
        ;
}
headerElement = (userLogin, photo) => {
    return `
    <div class='header-main-content'>
        <div class='header-section'>
            <div class='menu-header-main'>
                <span class='icon-menu'> </span>
            </div>
        </div>
        <div class='header-section'>
            <div class='logo-web'>
                <span class='icon-user'></span>
            </div>            
        </div>
        <div class='header-section'>
            <div class=search-content>
=======
headerElement = (userLogin, photo) => {
    return $('#header-main').append(`
    <div class='header-main-content'>

        <div class='header-section'>
            <div class=search>
>>>>>>> 9116f5b27d74f4b195365ea8d0b91492e5a4e2f0
                <input type='text' class='search-input'>
                <span class='icon-search'></span>
            </div>
        </div>
<<<<<<< HEAD
        <div class='header-section'>
            <nav>
                <ul>
                    <li class='menu-profile-user'>
                        <img src='${photo}' alt='photo-profile'>
                        <div id="welcomeProfile"> ${userLogin}</div>                        
                    </li>
                    <li class='icon-home2'>  Inicio </li>
                    <li class='icon-question'></li>
                    <li class='icon-config'>
                        <button type="button" id="btnLogOut" value="Salir">Cerrar Sesion</button>
                    </li>
                    <span class="icon-switch"></span>
                </ul>
            </nav>
        </div>
    </div>`
}
sectionElement = () => {
    return `
    <div class = 'devsite-main-content'>
        <div class = 'devsite-banner-content'>
            <div class = 'devsite-newpost-content'></div>
            <div class = 'devsite-section-nav'></div>
            <div class = 'devsite-post'></div>
            <div class = 'devsite-page-nav'></div>            
        </div>
    </div>
`;
}

=======
        <div class='header-section-user'>
            <nav>
                <ul>
                    <li>
                        <div id="welcomeProfile">${userLogin}</div>
                    </li>                    
                    <li>
                        <img src='${photo}' alt='photo-profile' id="btnLogOut">                                                
                    </li>
                    
                </ul>
            </nav>
        </div>
    </div>`);
}
sectionElement = () => {
    return `<select id='typePost'>
                <option>Público</option>
                <option>Mis amigos</option>
                <option>Solo yo</option>
            </select>
            <input type='textarea' id='input-post' class='input-post' placeholder='En quien estas pensando?'><br>
            <div id='file-preview-zone'></div>
            <div class='accion-public'>                    
                <div class='public-image'>
                    <input type="file" name="file" id="file" class="inputfile" />
                    <label for="file" class='icon-images'>  Foto/video</label>
                </div>                        
                <div id='button-post' >
                    <input type='button' value='Publicar' id='send-post' class='publicar-cancelar'>
                    <input type='button' value='Cancelar' class='publicar-cancelar' id='publicar-cancelar'>
                </div>
            </div>  
            <div class='edit-eliminar'id='edit-eliminar'>
                <input type='textarea' id='input-post-edit' class='input-post'><br>
                <div id='button-post' >
                    <input type='button' value='Editar' id='edit-post' class='publicar-cancelar'>
                    <input type='button' value='Eliminar' class='publicar-cancelar' id='eliminar'>
                </div>
            </div>    
`;
}
const sectionAllPost = (user, photo, coment, image, likes, time, idpost) => {
    return `
    <li class='content-allPost'>
        <div class='stream-item-header-allPost'>
            <img class='photo-profile-user-post' src='${photo}' alt='photo'>    
            <div class='profile-user-post'>               
                <span class='full-name-user'>
                    <strong> ${user}</strong>
                </span>            
                <small class='time' id='time'>
                    <span class='time-post-regresivo'>${time}</span>
                </small>
                <div id='button-editar-eliminar' '>
                    <span class='icon-circle-down'   onclick='abrir(this)'></span>
                    <div class='action-content'>
                        <div class='menu-action-content-post'>
                            <ul>
                            <li id='${idpost}' onclick='editar(this.id)'>Editar</li>
                            <li id='${idpost}' onclick='eliminar(this.id)'>Eliminar</li>
                            <ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class='post-text-container'>
            <p>${coment}</p>    
        </div>
        <div class='post-container'>
            <img src='${image}' alt='img'>
        </div>
        <div class='content-edit'></div>
        <div class='stream-item-footer'>
            <div class='acciones-post'>
            <div class='acction'>
                <div class='icon-likes-post'>
                    <span class='icon-heart'></span >
                    <label class='count-like-post'>${likes}</label>
                </div>
                <div class='icon-likes-post'>
                    <span class='icon-share2'></span >
                    <label class='count-like-post'>${likes}</label>
                </div>
            </div>
            <div class='content-coment-post'>
                <div class='comentar-post'>
                    <input type='text' placeholder='Agregar un comentario'>
                </div>
            </div>
            </div>

        </div>            
    </li>`;
}
>>>>>>> 9116f5b27d74f4b195365ea8d0b91492e5a4e2f0
deletePostElement = (img, title) => {
    return `<div></div>`;
}
EditPostElement = (img, title) => {
    return `<div></div>`;
}
registerElement = () => {
<<<<<<< HEAD
    return `<div id="section-register-user" class="content-login">
=======
    return $('#contentLoginRegister').append(`<div id="section-register-user" class="content-login">
>>>>>>> 9116f5b27d74f4b195365ea8d0b91492e5a4e2f0
        <form>
            <div class="form-login">
                <div>
                    <span class="icon-circle-left" id="back-login"></span>
                    <h3>SIGN UP</h3>
                </div>                
                <div class="section-Text">
                    <div class="section-value">
                        <input type="text" placeholder="User Name" id="users-name" class="input-user">
                    </div>
                    <div class="section-value">
                        <input type="text" placeholder="Last Name" id="users-last-name" class="input-user">
                    </div>
                    <div class="section-value">
                        <input type="text" placeholder="Email" id="users-email" >
                        <span id="icon-validate"></span>
                    </div>
                    <div class="section-value">
                        <input type="password" placeholder="Password" id="users-password" class="input-user">
                    </div>
                    <div class="section-value">
                        <input type="password" placeholder="Repeat Password" id="users-passwordTwo">
                        <span id="icon-validate-password"></span>
                    </div>
                </div>
                <div class="section-Button">
                    <input type="button" name="" id="register" value="Registrar">
                    <p id="mensaggeRegisterValide"></p>
                </div>

            </div>

        </form>
<<<<<<< HEAD
    </div>`
}
loginElement = () => {
    return `<div id="section-login" class="content-login">
=======
    </div>`);
}
loginElement = () => {
    return $('#contentLoginRegister').append(`<div id="section-login" class="content-login">
>>>>>>> 9116f5b27d74f4b195365ea8d0b91492e5a4e2f0
        <form>
            <div class="logo">
                <img src="https://png.icons8.com/windows/1600/stork.png" alt="logo">
            </div>
            <div class="form-login">
                <div class="section-Text">
                    <div class="section-value">
                        <input type="text" placeholder="Email" id="txtEmail" class="value-data">
                        <span id="icon-check"></span>
                    </div>
                    <div class="section-value">
                        <input type="password" placeholder="Password" id="txtPassword" class="input-user">
                    </div>
                </div>
                <div class="section-Button">
                    <input type="button" id="btnLogin" value="LOGIN">
                    <p id="messageValide"></p>
                    <span class="or">--------------or--------------</span>
                </div>
            </div>
            <div class="loginAditional">
                <span>
                    <a id="btnSignUp" class="icon-mail2"></a>
                </span>
                <span>
                    <a id="btnLoginFacebook" class="icon-facebook"></a>
                </span>
                <span>
                    <a id="btnLoginGoogle" class="icon-google"></a>
                </span>

                <!-- <input type="button"  value="Facebook">
            <input type="button"   value="Google"> -->
            </div>

        </form>
<<<<<<< HEAD
    </div>`
} 
=======
    </div>`);
}
>>>>>>> 9116f5b27d74f4b195365ea8d0b91492e5a4e2f0
