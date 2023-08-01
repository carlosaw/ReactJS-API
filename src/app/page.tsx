"use client";

import { api } from "@/utils/api";

const Page = () => {

  const handleGetPost = async () => {
    const response = await api.get('/posts',);
    console.log(response);
  }

  const handleAddPost = async () => {
    const response = await api.post('/posts', {
      userId: 98,
      title: 'titulo do post',
      body: 'corpo do post'
    });
    if(response.data.id) {
      console.log('Inseriu beleza');
    } else {
      console.log('Não houve inserção!');
    }
    
  }
  
  return (  
    <div className="container mx-auto flex flex-col items-center">
      <button onClick={handleAddPost}>Adicionar Post</button>
      <button onClick={handleGetPost}>Pegar Posts</button>
    </div>      
  );  
}

export default Page;