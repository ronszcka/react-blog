import { useState } from "react";

import { Post } from "./Post";

export function Blog() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Meu primeiro post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam error voluptatem tenetur. Culpa eius delectus perferendis facilis eveniet quisquam minima laudantium reprehenderit tempora ipsam voluptate cupiditate unde labore, soluta magni!",
      author: "Ana"
    },
    {
      id: 2,
      title: "Top 10 Alguma coisa",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam error voluptatem tenetur. Culpa eius delectus perferendis facilis eveniet quisquam minima laudantium reprehenderit tempora ipsam voluptate cupiditate unde labore, soluta magni!",
      author: "Maria"
    },
    {
      id: 3,
      title: "Como fazer algo",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam error voluptatem tenetur. Culpa eius delectus perferendis facilis eveniet quisquam minima laudantium reprehenderit tempora ipsam voluptate cupiditate unde labore, soluta magni!",
      author: "João"
    }
  ]);

  return (
    <>
    {
      posts.map((post) => {
        return (
          <Post title={ post.title } author={ post.author } />
        )
      })
    }
    </>
  );
}