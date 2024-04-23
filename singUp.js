    
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

        const signupForm = document.getElementById('signupForm');

        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio do formulário padrão

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(response => {
   console.log('Conta criada com sucesso', response);
   localStorage.email = email;
   localStorage.password = password;
  var select = document.getElementById("options");
      var selectedOption = select.options[select.selectedIndex].value;
      localStorage.setItem("opcaoSelecionada", selectedOption);
      
   
   const gosto = localStorage.opcaoSelecionada;
  if (gosto === "programacao") {
window.location.href = `programar.html`
  }
if (gosto === "animes") {
window.location.href = `animes.html`
  }
if (gosto === "robotica") {

window.location.href = `robotica.html`
  }

const idade = document.getElementById("idade");
localStorage.idade = idade.value;


          const nome = document.getElementById("nome")
           localStorage.sender = nome.value;
  var radios = document.getElementsByName('option');

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      var valorSelecionado = radios[i].value;
      localStorage.setItem('valorSelecionado', valorSelecionado);

      break;
    }
  }
      
 
      
      
                })
                .catch(error => {
                    console.error('Erro ao criar conta', error);
                });
        });
        
        
            // Adicionando eventos de escuta para transformar texto em minúsculas e remover espaços
    document.getElementById('nome').addEventListener('input', function() {
      this.value = this.value.toLowerCase().trim();
    });

    document.getElementById('email').addEventListener('input', function() {
      this.value = this.value.toLowerCase().trim();
    });

    document.getElementById('password').addEventListener('input', function() {
      this.value = this.value.trim();
    });