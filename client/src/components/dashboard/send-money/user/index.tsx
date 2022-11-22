import { Button, FormControl, Input, Td, Tr } from "@chakra-ui/react";
import React, { useState } from "react";

interface IUser {
    id: string;
    name: string;
    picture: string;
}

function User(props: IUser) {
    const { id, name, picture } = props;

    const [money, setMoney] = useState();

    function sendMoney(e: any) {
        console.log(e);
        setMoney(e);
        console.log(id, name, money);
    }

    return (
        <Tr key={id}>
            <Td>
                <img className="h-20" src={picture} alt={name} />
            </Td>
            <Td>{name}</Td>
            <Td>
                <FormControl>
                    <Input id={id} placeholder="Valor" backgroundColor={"white"} type='number' />
                </FormControl>
            </Td>
            <Td>
                <Button
                    id={id}
                    colorScheme='teal'
                    variant='outline'
                    onClick={() => sendMoney(document.getElementsByName(id)[0])}
                >
                    cash-in
                </Button>
            </Td>
        </Tr>
    )
}

export { User };