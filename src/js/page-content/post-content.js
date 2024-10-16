import { getPosts } from "../database/database.js";

// 获取 HTML 元素
const postsContainer = document.getElementById("posts-container");

export const refreshPostsData = async () => {
  const posts = await getPosts();

  console.log("posts::::", posts);
  
  posts.forEach(post => {
    const postElement = `
      <div class="post">
        <!-- header -->
        <div class="post-header">
          <!-- 用户数据 -->
          <div class="post-profile">
            <img src=${post.avatar} alt="Avatar" class="post-avatar" />
            <span class="post-user">${post.user}</span>
          </div>
          <!-- buttons -->
          <div class="post-buttons">
            <img src="public/image/icon/icon-edit.png" alt="icon" />
            <img src="public/image/icon/icon-close.png" alt="icon" />
          </div>
        </div>
        <!-- body -->
        <div class="post-content">
          <img src=${post.image} alt="Post Image" class="post-image" />
          <p class="post-text">${post.content}</p>
        </div>
        <!-- footer -->
        <div class="post-footer">
          <p class="post-timestamp">${post.timestamp}</p>
        </div>
      </div>
    `
    // postsContainer.innerHTML = postsContainer.innerHTML + postElement;
    postsContainer.innerHTML += postElement;
  })
}