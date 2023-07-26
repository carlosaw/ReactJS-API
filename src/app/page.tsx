"use client";

import { User } from "@/types/User";
import { useEffect, useState } from "react";

const Page = () => {
  const [ users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Faz a requisição.
  useEffect(() => {
    //console.log("Etapa 1");
    //console.log("Etapa 2");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json);
      })
      .catch(() => {
        console.log("DEU ALGO ERRADO!");
      })
      .finally(() => {
        setLoading(false);
        //console.log("TERMINOU TODA A REQUISIÇÂO...")
      });
      //console.log("Etapa 4");
  }, []);
  
  return ( 
  
    <div className="container mx-auto w-96">
      <h1 className="text-3xl text-center mt-10">Lista de usuários</h1>
      {loading && "Carregando..."}
      {!loading && users.length > 0 &&
        <ul>
          {users.map(item => (
            <li key={item.id} className="border-b p-4">
              <p className="text-2xl">{item.name}</p> 
              EMAIL: {item.email} 
              <p>END: Rua {item.address.street}</p>
              CIDADE: {item.address.city}
              <p>CEP: {item.address.zipcode}</p>
              FONE: {item.phone}
            </li>
          ))}
        </ul>
      } 
      {!loading && users.length === 0 && "Não há usuários para exibir!"}     
    </div>      
  );  
}

export default Page;