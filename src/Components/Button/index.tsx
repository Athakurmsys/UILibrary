import React, { FC, ReactNode } from 'react';

type Props = {
   children: ReactNode;
   onChange: (event: React.MouseEvent<HTMLButtonElement>) => void;
   className: string;
}

const Button:FC<Props> = ({children, onChange, className}) =>{
    return <button className={className}  onClick={onChange}>{children}</button>
}

export default Button;