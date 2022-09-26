const allNews = document.querySelector(".all-news")

axios.get("http://localhost:7070/post")
  .then(res => res.data)
  .then(res => {
    allNews.innerHTML = ""

    for (let i = 0; i < res.data.length; i++) {
      console.log(res.data[i])
      allNews.innerHTML += 
      `
      <li class="new-box">
        <p class="new-id">id: ${res.data[i].id}</p>
        <h1 class="new-title">${res.data[i].title}</h1>
        <p class="new-text">${res.data[i].content}</p>
        <p class="new-date">${res.data[i].createAt}</p>
      </li>
      `
    }
  })