import { useUser } from "@/contexts/UserContext";
import { NameInput } from "./NameInput";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export const Chat = () => {
  // Passo 1: Saber o nome do usuário.
  const userCtx = useUser();
  if(!userCtx) return null;// Se não tiver usuário.
  if(!userCtx.user) return <NameInput />
  
  return (
    <div className="border border-white/30 rounded-md">
      {/* // Passo 3: Histórico de mensagens. */}
      <div className="h-96 p-3 overflow-y-scroll">
        <ChatMessages />
      </div>
      {/* // Passo 2: Input de adicionar mensagens. */}
      <div className="border-t border-t-white/30 p-3">
        <ChatInput name={userCtx.user} />
      </div>
      <div className="border-t border-t-white/30 p-3">
      <ChatInput name={'bot'} />
      </div>
    </div>
  );
}