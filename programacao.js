    // Função para ativar a seção correspondente ao link clicado
    function activateSection(sectionId) {
      // Esconder todas as seções
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      // Mostrar apenas a seção correspondente ao ID do link clicado
      document.getElementById(sectionId).classList.add('active');
    }

    // Adiciona um evento de clique a cada link para ativar a seção correspondente
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        activateSection(this.getAttribute('href').substring(1)); // Ativa a seção correspondente
      });
    });

    // Ativar a primeira seção ao carregar a página
    activateSection('section1');
    
   ////vem aqui bartolomeu 
    
    
    
    
    
    
    
    
    
   
    
    
    
    
    
    
    
            // Função para buscar notícias sobre robótica, robôs e inteligência artificial
        function fetchProgrammingNews() {
  const apiKey = "6cb1daff61e445efbb4d92ba33b29b54";
  const searchTerms = "linguagem de programação, programadores experientes, impressões, redes sociais";
  const url = `https://newsapi.org/v2/everything?q=${searchTerms}&apiKey=${apiKey}`;

  return fetch(url)
    .then(response => response.json())
    .then(data => data.articles)
    .catch(error => {
      console.error("Erro ao buscar notícias:", error);
      return [];
    });
}

// Função para limpar o conteúdo exibido na tela
function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

// Função para exibir notícias
function displayNews(articles) {
  const content = document.getElementById("content");
  articles.forEach(article => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.urlToImage}" alt="${article.title}">
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Leia mais</a>
        `;
    content.appendChild(item);
  });
}

// Função para exibir mensagem se não houver conteúdo
function displayNoContentMessage() {
  const content = document.getElementById("content");
  content.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
}

// Função principal para exibir notícias
async function displayProgrammingNews() {
  clearContent();

  const news = await fetchProgrammingNews();

  if (news.length === 0) {
    displayNoContentMessage();
  } else {
    displayNews(news);
  }
}

// Chamar função principal quando a página carregar
displayProgrammingNews();
                // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
        import { getDatabase, ref, set, remove, onChildAdded, onChildRemoved } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyBr8z6KZvg2OwcWLe3WQInsgdX7vGic1o8",
  authDomain: "banzeranimes.firebaseapp.com",
  projectId: "banzeranimes",
  storageBucket: "banzeranimes.appspot.com",
  messagingSenderId: "252930330577",
  appId: "1:252930330577:web:cd0996c535a52e2745daf0"
};

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        // variables
        var msgTxt = document.getElementById('msgTxt');
        var sender;
        if (localStorage.getItem('sender')) {
          sender = localStorage.getItem('sender');
        } else {
          sender = prompt('PLEASE ENTER YOUR NAME');
          localStorage.setItem('sender', sender);
        }

        // TO SEND MESSAGES
        module.sendMsg = function sendMsg() {
          var msg = msgTxt.value;
          var timestamp = new Date().getTime();
          set(ref(db, "messages/" + timestamp), {
            msg: msg,
            sender: sender
          })

          msgTxt.value = "";
        }

        // TO RECEIVE MSG
        onChildAdded(ref(db, "messages"), (data) => {
          if (data.val().sender == sender) {
            messages.innerHTML += "<div style=justify-content:end class=outer id=" + data.key + "><div  id=inner class=me>you : " + data.val().msg + "<button id=dltMsg onclick=module.dltMsg(" + data.key + ")>DELETE</button></div></div>";
          } else {
            messages.innerHTML += "<div class=outer id=" + data.key + "><div id=inner class=notMe>" + data.val().sender + " : " + data.val().msg + "</div></div>";
          }
        })

        // TO DELETE MSG
        module.dltMsg = function dltMsg(key) {
          remove(ref(db, "messages/" + key));
        }

        // WHEN MSG IS DELETED
        onChildRemoved(ref(db, "messages"), (data) => {
          var msgBox = document.getElementById(data.key);
          messages.removeChild(msgBox);
        })
        
       
        
      
      
      
        
    

//perfil de usuário
const foto = document.getElementById("foto");
const nomes = document.getElementById("nomes");
const passwords = document.getElementById("passwords");
const idades = document.getElementById("idades");
const sexo  = document.getElementById("sexo");
  const name =  localStorage.sender
  nomes.innerHTML = name;
   const password = localStorage.password;
   passwords.innerHTML = password


const idade = localStorage.idade;
idades.innerHTML = idade;
const sexos= localStorage.valorSelecionado;
sexo.innerHTML = sexos;
if (idades.innerHTML <= '16' && sexo.innerHTML === "Masculino") {
  foto.src = `perfil/garoto.png`
}
if (idades.innerHTML >= '18' && sexo.innerHTML === "Masculino") {
  foto.src = `perfil/homem.png`
}


if (idades.innerHTML <= '16' && sexo.innerHTML === "Feminino") {
  foto.src = `perfil/menina.png`
}
if (idades.innerHTML >= '18' && sexo.innerHTML === "Feminino") {
  foto.src = `/perfil/meninas.png`
}
const likedVideos = document.getElementById("likedVideos")

if (likedVideos.innerHTML === "") {
  likedVideos.innerHTML = "<center>" + "<h4>" + "Não a videos curtidos" + "</h4>" + "</center>";
  
}


const dislikedVideos = document.getElementById("dislikedVideos")

if (dislikedVideos.innerHTML === "") {
  dislikedVideos.innerHTML = "<center>" + "<h4>" + "Não existe viseos não curtido" + "</h4>" + "</center>";

}



// Função para alterar o background e salvar no localStorage
function changeBackground(imageUrl) {
  // Define o background
  document.getElementById('backgroundDiv').style.backgroundImage = `url(${imageUrl})`;
  // Salva o URL do background no localStorage
  localStorage.setItem('backgroundImage', imageUrl);
}

// Verifica se há um URL de background armazenado e aplica se existir
window.onload = function() {
  var storedBackground = localStorage.getItem('backgroundImage');
  if (storedBackground) {
    document.getElementById('backgroundDiv').style.backgroundImage = `url(${storedBackground})`;
  }
}
async function displayProgrammingNews() {
  clearContent();

  try {
    const news = await fetchProgrammingNews();

    if (!news || news.length === 0) {
      displayNoContentMessage();
    } else {
      displayNews(news);
    }
  } catch (error) {
    console.error("Erro ao exibir notícias:", error);
    displayNoContentMessage();
  }
}