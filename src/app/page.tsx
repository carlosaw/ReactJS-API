"use client";

import { api } from "@/utils/api";
import axios from "axios";
import { useRef } from "react";

const Page = () => {
  const controller = new AbortController();

  const handleStartRequest = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        signal: controller.signal
      });
    } catch(error) {
      console.log('Deu algum problema!');
    }    
  }

  const handleCancelRequest = () => {
    controller.abort();
  }
  
  return (  
    <div className="container mx-auto flex flex-col items-center gap-3">
      <button onClick={handleStartRequest}>Fazer</button>
      <button onClick={handleCancelRequest}>Cancelar</button>
    </div>      
  );  
}

export default Page;