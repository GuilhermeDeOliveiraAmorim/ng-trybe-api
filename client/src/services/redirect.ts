import Router from "next/router";

const redirect = (context: any, target: string) => {
    if (context.res) {
        context.res.writeHead(303, { Location: target });
        context.res.end();
    } else {
        Router.replace(target);
    }
};

export default redirect;
