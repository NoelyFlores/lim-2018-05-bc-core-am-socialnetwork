//window.onload = inicializar;
let user = null;

let postRef = firebase.database().ref().child('posts');
dataUserLogin = (uid) => {
  let photoOfDatabase;
  let displayName;
  let email;
  let datos;
  let userDatabase = firebase.database().ref('/Usuarios/'+uid);
    userDatabase.on('value', data=>{
      datos=data.val();
      displayName=datos.usersName;
      email=datos.usersEmail;
      photoOfDatabase=datos.photoURL;
      user = { displayName: displayName, email: email, photoURL: photoOfDatabase };
    });  
  // console.log(displayName,email,photoOfDatabase);
  // return { displayName: displayName, email: email, photoURL: photoOfDatabase }

}
const updateNewPost = (posts, privacy, uidPost) => {
  let userId = firebase.auth().currentUser;
  let postData = {
    content: posts,
    privacy: privacy,
    time: firebase.database.ServerValue.TIMESTAMP,
  }
  firebase.database().ref('/posts/' + uidPost).update(postData);
  firebase.database().ref('user-posts/' + userId.uid + '/' + uidPost).update(postData);
}
const insertNewPost = (picture, posts, privacy) => {
  let userId = firebase.auth().currentUser;
  let newPostKey = postRef.push().key;
  let postData = {
    uidUser: userId.uid,
    content: posts,
    image: picture,
    privacy: privacy,
    time: firebase.database.ServerValue.TIMESTAMP,
  }
  firebase.database().ref('posts/' + newPostKey).set(postData);
  firebase.database().ref('user-posts/' + userId.uid + '/' + newPostKey).set(postData);
  updateLike(newPostKey);
}
const updateLike = (idPost) => {
  let userId = firebase.auth().currentUser;
  let postLikes = firebase.database().ref().child('posts/' + idPost + '/like');
  let starCountRef = firebase.database().ref('posts/' + idPost + '/like').push({
    creationTime: firebase.database.ServerValue.TIMESTAMP,// para mostrar dar formato actual
    create: userId.uid,
  })
}
const Like = (idPost) => {
  let userId = firebase.auth().currentUser;
  let ObjectLikes = firebase.database().ref('/posts/' + idPost + '/like/');
  ObjectLikes.once('value', (data) => {// recupera todos los datos
    let dataLike = data.val();
    for (const like in dataLike) {
      if (dataLike[like].create === userId.uid) {
        let refDelete = firebase.database().ref('posts/' + idPost + '/like');
        //refDelete.remove();
        alert('YA DISTE UN !!');
      }
      else {
        updateLike(idPost);
      }
    }
  });
}
const viewMyAccount = (uidUser) => {
  dataUserLogin(uidUser);
  const dataPostUser = firebase.database().ref('/user-posts/' + uidUser);
  dataPostUser.once('value', data => {
    document.getElementById('items-post').innerHTML='';
    let dataPosts = data.val();
    for (const post in dataPosts) {
      const infoPost = firebase.database().ref('/posts/' + post);
      infoPost.once('value', posts => {
        let dataPost = posts.val();
        const likePos = dataPost.like;
        const count = (Object.keys(likePos).length) - 1;        
        let myDate = new Date(Math.round((dataPost.time) / 1000.0) * 1000);
        document.getElementById('items-post').innerHTML += sectionAllPost(user.displayName, user.photoURL, dataPost.content, dataPost.image, count, myDate.toLocaleString(), post);
      })
    }
    eventsPost();
  });
}
const viewPost = () => {
  postRef.on('value', data => {
    document.getElementById('items-post').innerHTML = '';
    let dataPosts = data.val();
    for (const post in dataPosts) {
      const likePos = dataPosts[post].like;
      const count = (Object.keys(likePos).length) - 1;
      const info = firebase.database().ref('/Usuarios/' + dataPosts[post].uidUser);
      info.once('value', User => {        
        let dataUser = User.val();
        let myDate = new Date(Math.round((dataPosts[post].time) / 1000.0) * 1000);
        document.getElementById('items-post').innerHTML += sectionAllPost(dataUser.usersName, dataUser.photoURL, dataPosts[post].content, dataPosts[post].image, count, myDate.toLocaleString(), post);
        eventsPost();
      });
    };    
  });
}
window.searchUsers = (name) => {
  let info;
  const dataUser = firebase.database().ref('/Usuarios/').orderByChild('usersName').startAt(name).limitToFirst(10);
  return dataUser;
}
