export interface iButton {
    buttonTitle?: string;
    bg?: string;
    c?: string;
    onClick?: () => void;
}

export interface iCard {
    title?: string;
    buttonTitle?: string;
    onClick?: () => void;

    inputTitle?: string;
    inputTitle1?: string;
    inputTitle2?: string;
    request?: boolean;
    sign?: boolean;

    tex?: boolean;
    req?: boolean;
    textTitle?: string;
    message?: string;
    remake?: string;

    text?: string;
    route?: string;
    path?: string;

    call?: boolean;
    text1?: string;
    route1?: string;
    path1: string;

    email?: string;
    password?: string;
    userName?: string;

    onChange?: React.ChangeEventHandler<HTMLInputElement>

    setEmail?: React.Dispatch<React.SetStateAction<string>>
    setPassword?: React.Dispatch<React.SetStateAction<string>>
    setUserName?: React.Dispatch<React.SetStateAction<string>>
}
    
export interface iInput {
    inputTitle?: string;
    inputTitle1?: string;
    inputTitle2?: string;
    request?: boolean;
    sign?: boolean;

    email?: string;
    password?: string;
    userName?: string;

    onChange?: React.ChangeEventHandler<HTMLInputElement>;

    setEmail?: React.Dispatch<React.SetStateAction<string>>
    setPassword?: React.Dispatch<React.SetStateAction<string>>
    setUserName?: React.Dispatch<React.SetStateAction<string>>
}

export interface iGlobal {
    email?: string;
    password?: string;
    userName?: string;
    setEmail?: React.Dispatch<React.SetStateAction<string>>
    setPassword?: React.Dispatch<React.SetStateAction<string>>
    setUserName?: React.Dispatch<React.SetStateAction<string>>
}