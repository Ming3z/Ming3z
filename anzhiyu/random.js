var posts=["2023/09/25/hello-world/","2023/09/26/markdown语法/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};