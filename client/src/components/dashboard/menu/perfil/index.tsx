import { Avatar } from "@chakra-ui/react";
import React from "react";

type IUser = {
  id: string;
  username: string;
  account: {
    id: string;
    balance: number;
  };
};

function Perfil({ me }: { me: IUser }) {
  return (
    <div key={me.id} className="flex justify-center items-center flex-col">
      <Avatar name={me.username} mb={2} />
      {/* <img src={me.picture} alt="" className="rounded-full w-32 h-32" /> */}
      <h2 className="text-white">Olá, {me.username}</h2>
    </div>
  );
}

export { Perfil };
