function carregarInformacoes() {
    var stories = document.getElementById("stories");
    var feed = document.getElementById("coluna-esquerda");

    axios.get("https://run.mocky.io/v3/01ae68f0-abba-40b4-81da-e848327728a1")
        .then(resposta => {
            resposta.data.stories.forEach(story => {
                stories.innerHTML += `
                <div class="status-card">
                    <div class="profile-pic">
                        <img src="${story.story}" alt="profile-pic" />
                    </div>
                    <p class="username">${story.nome}</p>
                </div>               
                `;
            });

            resposta.data.feed.forEach(post => {
                feed.innerHTML += `
                <div class="post">
                    <div class="info">
                    <div class="user">
                        <div class="profile-pic">
                        <img src="${post.avatar}" alt="profile-pic" />
                        </div>
                        <p class="username">${post.user}</p>
                    </div>
                    <img src="./img/option.PNG" class="options" alt="option" />
                    </div>
                    <img src="${post.post}" alt="post-image" class="post-image" />
                    <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src="./img/like.PNG" alt="like" class="icon" />
                        <img src="./img/comment.PNG" alt="like" class="icon" />
                        <img src="./img/send.PNG" alt="like" class="icon" />
                        <img src="./img/save.PNG" alt="like" class="save icon" />
                    </div>
                    <p class="likes">${post.likes} likes</p>
                    <p class="description">
                        <span>${post.user} </span> Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Harum et voluptatem quasi amet inventore eos
                        at consequuntur ipsa temporibus non quas nulla error officia
                        adipisci, aliquam animi, dicta facere possimus.
                    </p>
                    <p class="post-time">${post.tempo}</p>
                    </div>
                    <div class="comment-wrapper">
                    <img src="./img/smile.PNG" class="icon" alt="smile" />
                    <input type="text" name="comment-box" id="comment-box" class="comment-box" placeholder="Add comment" />
                    <button class="comment-btn">post</button>
                    </div>
                </div>   
                `;
            })
        })
}
