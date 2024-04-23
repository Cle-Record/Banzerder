      const firebaseConfig = {
        apiKey: "AIzaSyBNBTJdGuYzUziAc4FUI0y_4WYQdTgbcwY",
        authDomain: "animes-8443b.firebaseapp.com",
        databaseURL: "https://animes-8443b-default-rtdb.firebaseio.com",
        projectId: "animes-8443b",
        storageBucket: "animes-8443b.appspot.com",
        messagingSenderId: "431498686661",
        appId: "1:431498686661:web:a4d152d2124ad2b3ccc0ac"
      };

      firebase.initializeApp(firebaseConfig);

      const loginForm = document.getElementById('loginForm');

      loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(response => {
            console.log('Login bem-sucedido', response);
            //alert('Login bem-sucedido!'); 
               const gosto = localStorage.opcaoSelecionada;
  if (gosto === "programacao") {
window.location.href = `programassao.html`
  }
if (gosto === "animes") {
window.location.href = `animes.html`
  }
if (gosto === "robotica") {
window.location.href = `robotica.html`
  }

          })
          .catch(error => {
            console.error('Erro ao fazer login', error);
            if (error.code === 'auth/user-not-found') {
              alert('Usuário não encontrado.'); // Exibe um alerta se o usuário não for encontrado
            } else {
              alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.'); // Exibe um alerta de erro padrão
            }
          });
      });
      