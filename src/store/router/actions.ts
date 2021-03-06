import { push } from "connected-react-router";

export const redirectToAuthForGetToken = () => {
    if (process.env.REACT_APP_API_KEY) {
        document.location.href =
            "https://trello.com/1/authorize?scope=write&expiration=1day&name=TestTrello&return_url=http://localhost:3000/auth/save_token/&scope=read&response_type=token&key=" +
            process.env.REACT_APP_API_KEY;
    } else {
        console.error("Not specified env.REACT_APP_API_KEY");
    }
};

export const redirectToBoard = (idBoard: string) => {
    return push("/board/" + idBoard);
};
