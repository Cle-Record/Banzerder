function fetchAnimeVideos(apiKey) {
  const url = `https://pixabay.com/api/videos/?key=${apiKey}&q=anime`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.hits) {
        return data.hits.sort((a, b) => new Date(b.user.last_activity) - new Date(a.user.last_activity));
      } else {
        throw new Error('Erro ao buscar vídeos relacionados a animes.');
      }
    });
}

function displayVideos(videos) {
  const videoContainer = document.getElementById("videoContainer");
  videoContainer.innerHTML = "";

  videos.forEach(video => {
    const videoElement = document.createElement("div");
    videoElement.classList.add("videoItem");
    videoElement.innerHTML = `
                    <video controls>
                        <source src="${video.videos.tiny.url}" type="video/mp4">
                        Seu navegador não suporta o vídeo.
                    </video>
                    <div class="reactionButtons">
                        <button onclick="likeVideo('${video.videos.tiny.url}')">Gosto</button>
                        <button onclick="dislikeVideo('${video.videos.tiny.url}')">Não Gosto</button>
                    </div>
                `;
    videoContainer.appendChild(videoElement);
  });
}

function likeVideo(videoUrl) {
  const likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || [];
  likedVideos.push(videoUrl);
  localStorage.setItem('likedVideos', JSON.stringify(likedVideos));
  alert('Vídeo marcado como gostado!');
  displayLikedVideos();
}

function dislikeVideo(videoUrl) {
  const dislikedVideos = JSON.parse(localStorage.getItem('dislikedVideos')) || [];
  dislikedVideos.push(videoUrl);
  localStorage.setItem('dislikedVideos', JSON.stringify(dislikedVideos));
  alert('Vídeo marcado como não gostado!');
  displayDislikedVideos();
}

function displayLikedVideos() {
  const likedVideosContainer = document.getElementById("likedVideos");
  likedVideosContainer.innerHTML = "";

  const likedVideos = JSON.parse(localStorage.getItem('likedVideos')) || [];
  likedVideos.forEach(videoUrl => {
    const iframe = document.createElement("iframe");
    iframe.src = videoUrl;
    likedVideosContainer.appendChild(iframe);
  });
}

function displayDislikedVideos() {
  const dislikedVideosContainer = document.getElementById("dislikedVideos");
  dislikedVideosContainer.innerHTML = "";

  const dislikedVideos = JSON.parse(localStorage.getItem('dislikedVideos')) || [];
  dislikedVideos.forEach(videoUrl => {
    const iframe = document.createElement("iframe");
    iframe.src = videoUrl;
    dislikedVideosContainer.appendChild(iframe);
  });
}

function main() {
  const apiKey = "43462414-0c8301424d45da5b11208da34";
  fetchAnimeVideos(apiKey)
    .then(videos => {
      displayVideos(videos);
    })
    .catch(error => {
      console.error(error);
    });
  displayLikedVideos();
  displayDislikedVideos();
}

main();