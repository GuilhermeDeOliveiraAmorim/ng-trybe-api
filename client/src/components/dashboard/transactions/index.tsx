import React, { useEffect, useState } from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  FormControl,
  Select,
  Thead,
  Th,
} from "@chakra-ui/react";
import { Transaction } from "./transaction";

// interface IUser {
//     picture: string;
//     id: string;
//     name: string;
// }

// interface ITransaction {
//     id: string;
//     user: IUser;
//     type: string;
//     value: number;
//     createdAt: string;
// }

// const arrTransactions = [
//     { id: "w", user: { picture: "portrait-3353699__340.jpg", id: "a", name: "Heather J. Cummings" }, type: "cash-out", value: 50, createdAt: "14/11/2022" },
//     { id: "z", user: { picture: "people-875597__340.jpg", id: "b", name: "Robert B. Pursell" }, type: "cash-in", value: 65, createdAt: "13/11/2022" },
//     { id: "y", user: { picture: "smile-2072907__340.jpg", id: "c", name: "Joyce J. Jones" }, type: "cash-in", value: 10, createdAt: "11/11/2022" },
//     { id: "t", user: { picture: "portrait-3098319__340.jpg", id: "d", name: "Luanne M. Arnold" }, type: "cash-out", value: 18, createdAt: "11/11/2022" },
//     { id: "u", user: { picture: "portrait-3292287__340.jpg", id: "e", name: "Janet T. Kruger" }, type: "cash-out", value: 18, createdAt: "11/11/2022" },
// ];

function Transactions({ transactions, myAccount, users }) {
  // const [transactionDateStart, setTtransactionDateStart] = useState("");
  // const [transactionDateEnd, setTtransactionDateEnd] = useState("");

  // const [transactionType, setTtransactionType] = useState("");
  // const [transactions, setTransactions] = useState<ITransaction[]>([]);

  // useEffect(() => {
  //     setTransactions(arrTransactions)
  // }, []);

  // const filteredTransactions = transactionType.length > 0 ? transactions.filter(transaction => transaction.type.includes(transactionType)) : [];

  return (
    <div>
      <div className="bg-black-900 p-4 rounded-tl-2xl rounded-tr-2xl flex flex-col sm:flex-row lg:flex-row sm:justify-between lg:justify-between items-center gap-4">
        {/* <Select
                    placeholder="Todas as suas transações"
                    backgroundColor={"white"}
                    onChange={e => setTtransactionType(e.target.value)}
                    value={transactionType}
                    borderRadius={"0.75rem"}
                >
                    <option>cash-in</option>
                    <option>cash-out</option>
                </Select> */}
        <div className="flex gap-2 justify-between w-full">
          <input className="p-2 h-10 w-1/2 rounded-xl" type="date" />
          <input className="p-2 h-10 w-1/2 rounded-xl" type="date" />
        </div>
      </div>
      <div className="bg-black-900 pl-1 pr-1 pb-1">
        <TableContainer className="bg-white">
          <Table size={"sm"} variant="striped" colorScheme="gray">
            <Thead>
              <Th>Transaction</Th>
              <Th>Account</Th>
              <Th>Valor</Th>
              <Th>Data</Th>
            </Thead>
            <Tbody>
              {transactions
                .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
                .reverse()
                .map((transaction) => (
                  <Transaction
                    users={users}
                    myAccountId={myAccount}
                    key={transaction.id}
                    id={transaction.id}
                    creditAccountId={transaction.creditAccountId}
                    debitAccountId={transaction.debitAccountId}
                    value={transaction.value}
                    createdAt={transaction.createdAt}
                  />
                ))}
            </Tbody>
            {/* {transactionType.length > 0 ? (
                            <Tbody>
                                {filteredTransactions.map(transaction =>
                                    <Transaction key={transaction.id} id={transaction.id} user={transaction.user} type={transaction.type} value={transaction.value} createdAt={transaction.createdAt} />
                                )}
                            </Tbody>
                        ) : (
                            <Tbody>
                                {transactions.map(transaction =>
                                    <Transaction key={transaction.id} id={transaction.id} user={transaction.user} type={transaction.type} value={transaction.value} createdAt={transaction.createdAt} />
                                )}
                            </Tbody>
                        )} */}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export { Transactions };
