"use client";

import { User } from "@/types/User";
import { useEffect, useState } from "react";

const Page = () => {
  const [ users, setUsers] = useState<User[]>([]);

  // Faz a requisição.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(json => {
        setUsers(json);
      })
  }, []);
  
  return ( 
  
    <div className="container mx-auto w-96">
      <h1 className="text-3xl text-center mt-10">Lista de usuários</h1>
      
        <ul>
          {users.map(item => (
            <li key={item.id} className="border-b p-4">
              <p className="text-blue-500">{item.name}</p> 
              EMAIL: {item.email} 
              <p>END: Rua {item.address.street}</p>
              CIDADE: {item.address.city}
              <p>CEP: {item.address.zipcode}</p>
              FONE: {item.phone}
            </li>
          ))}
        </ul>
      
    </div>      
  );  
}

export default Page;