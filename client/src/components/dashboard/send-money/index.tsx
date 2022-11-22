import React, { useEffect, useState } from "react";
import { Table, Tbody, TableContainer } from "@chakra-ui/react";
import { User } from "./user";
import { CardUser } from "./user/card";

interface IUser {
  id: string;
  username: string;
  accountId: string;
}

const SendMoney = ({ users, myAccount }: { users: any; myAccount: string }) => {
  const [search, setSearch] = useState("");

  const filteredUsers =
    search.length > 0
      ? users.filter((user: IUser) => user.username.includes(search))
      : [];

  return (
    <div>
      <div className="bg-black-900 p-4 rounded-tl-2xl rounded-tr-2xl">
        <input
          type="text"
          className="p-2 rounded-xl w-full"
          placeholder="Buscar usuário"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <div className="bg-black-900 pl-1 pr-1 pb-1">
        <div className="flex flex-col gap-1 pr-3 pl-3 pb-3">
          {search.length > 0
            ? filteredUsers.map((user: IUser) => {
                return (
                  <CardUser
                    key={user.id}
                    myAccount={myAccount}
                    id={user.id}
                    username={user.username}
                    accountId={user.accountId}
                  />
                );
              })
            : users.map((user: IUser) => {
                return (
                  <CardUser
                    key={user.id}
                    myAccount={myAccount}
                    id={user.id}
                    username={user.username}
                    accountId={user.accountId}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export { SendMoney };
