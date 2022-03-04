//Altere i tipo de ação usando o operador OR (|)
export type Action = {type: "ADD_TOKEN"; payload: string};

//Adicione o tipo de açã para pegar o Token
export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});

