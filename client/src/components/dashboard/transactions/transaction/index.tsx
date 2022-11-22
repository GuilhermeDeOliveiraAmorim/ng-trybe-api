import { Badge, Kbd, Td, Tr } from "@chakra-ui/react";
import moment from "moment";
import React from "react";

// interface IUser {
//   picture: string;
//   id: string;
//   name: string;
// }

interface ITransaction {
  id: string;
  creditAccountId: string;
  debitAccountId: string;
  value: number;
  createdAt: string;
  myAccountId: string;
  users: any;
}

let formatCurrency = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});

function Transaction(props: ITransaction) {
  const {
    id,
    creditAccountId,
    debitAccountId,
    value,
    createdAt,
    users,
    myAccountId,
  } = props;

  const renderAccountUsername = () => {
    if (debitAccountId === myAccountId) {
      return users.find((item) => item.accountId === creditAccountId).username;
    }

    if (creditAccountId === myAccountId) {
      return users.find((item) => item.accountId === debitAccountId).username;
    }
  };

  return (
    <Tr key={id}>
      <Td>
        <Badge
          colorScheme={creditAccountId === myAccountId ? "purple" : "pink"}
          shadow={"base"}
          rounded={"md"}
        >
          {creditAccountId === myAccountId ? "cash-in" : "cash-out"}
        </Badge>
      </Td>
      <Td p={2}>{renderAccountUsername()}</Td>
      <Td isNumeric>{formatCurrency.format(value)}</Td>
      <Td>{moment(createdAt).format("DD/MM/YYYY hh:mm:ss")}</Td>
    </Tr>
  );
}

export { Transaction };
