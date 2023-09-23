import { FormEvent, useRef, useState } from "react";

export function NewPost() {

  //controlled form
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  // console.log(title, body, author);

  // uncontrolled form ... stand by
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const authorRef = useRef<HTMLSelectElement>(null);

console.log("newpost renderizou");

  function handleCreateNewPost(event: FormEvent<HTMLFormElement>) {
    
    event.preventDefault();

    // const newPost = {
    //   title,
    //   body,
    //   author
    // }

    const newPost = {
      title: titleRef.current?.value,
      body: bodyRef.current?.value,
      author: authorRef.current?.value,
    }

    console.log(newPost);

    fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    }).then((res) => {
      if (res.ok) {
        console.log("Post criado com sucesso!");
        // redirect página do post...
      } else {
        throw new Error("Erro ao criar o post!");
      }
    }).catch((err) => {
      console.error(err);
      alert("Erro ao criar o post!");
    });

  }

  return (
    <div className="create">
      <form onSubmit={ handleCreateNewPost }>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          ref={ titleRef }
          required
          value={ title }
          onChange={ (e) => setTitle(e.target.value) }
        />
        <label htmlFor="body">Conteúdo:</label>
        <textarea
          id="body"
          ref={ bodyRef }
          required
          value={ body }
          onChange={ (e) => setBody(e.target.value) }
        ></textarea>
        <label htmlFor="author">Autor:</label>
        <select
          name="author"
          id="author"
          ref={ authorRef }
          value={ author }
          onChange={ (e) => setAuthor(e.target.value) }
        >
          <option value="João">João</option>
          <option value="Maria">Maria</option>
        </select>
        <button>Criar post</button>
      </form>
    </div>
  )
}