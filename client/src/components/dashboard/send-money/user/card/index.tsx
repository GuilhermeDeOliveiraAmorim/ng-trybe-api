import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Stack,
  Td,
  Text,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendMoney } from "../../../../../services/transactions";

interface IUser {
  id: string;
  username: string;
  accountId: string;
  myAccount: string;
}

function CardUser(props: IUser) {
  const { id, accountId, username, myAccount } = props;

  const [value, setValue] = useState(0);

  const toast = useToast();

  let formatCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  });

  const queryClient = useQueryClient();

  const sendMoneyQuery = useMutation(sendMoney);

  const handleSendMoney = async () => {
    const input = {
      debitAccountId: myAccount,
      creditAccountId: accountId,
      value: value,
    };
    try {
      await sendMoneyQuery.mutateAsync(input);
      toast({
        title: `Você acabou de enviar ${formatCurrency.format(
          value
        )} para ${username}`,
        duration: 2000,
        status: "success",
        position: "top",
        isClosable: true,
      });
    } catch (err) {
      return toast({
        title: err.response.data.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
    setValue(0);
    await queryClient.invalidateQueries(["transactions"]);
    await queryClient.invalidateQueries(["user"]);
  };

  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        backgroundColor={"gray.100"}
      >
        <Stack>
          <CardBody>
            <Flex flexDirection="column">
              <Heading mb={2} size="md">
                {username}
              </Heading>
              <Flex gap={5}>
                <Input
                  id={id}
                  placeholder="Valor"
                  backgroundColor={"white"}
                  type="number"
                  onChange={(event) => setValue(Number(event.target.value))}
                  value={value}
                />
                <Button
                  isLoading={sendMoneyQuery.isLoading}
                  id={id}
                  colorScheme="teal"
                  variant="outline"
                  onClick={handleSendMoney}
                >
                  cash-in
                </Button>
              </Flex>
            </Flex>
          </CardBody>
        </Stack>
      </Card>
    </div>
  );
}

export { CardUser };
