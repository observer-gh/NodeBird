import React, {FC, useCallback, ChangeEventHandler} from "react";
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

import useInput from '../hooks/useInput';
import styled from "styled-components"

/* 
used in AppLayout.tsx
*/

/* styled component to use */
const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const LoginForm:FC = ( ) => {
    /* values to use */
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");
    /* functions to use */
    /* still not sure about useCallback() */
    const onSubmitForm = useCallback( ()=> {
        console.log({
            id, password,
          });
    }, [id, password]);

    /* HTML to return */
    return (
        <Form>
        <div>
            <label htmlFor="user-id">ID</label>
            <br /> {/* line breaker */}
            <Input name="user-id" value={id as string} required 
            onChange={onChangeId as ChangeEventHandler<HTMLInputElement>}/>
        </div>
        <div>
            <label htmlFor="user-password">Password</label>
            <br /> {/* line breaker */}
            <Input name="user-password" type="password" value={password as string} required
            onChange={onChangePassword as ChangeEventHandler<HTMLInputElement>}></Input>
        </div>
        <div>
            <ButtonWrapper>
                <Button
                type="primary"
                htmlType="submit"
                loading={false}
                >
                    Login
                </Button>
                {/* why use both link and a? */}
                <Link href="/signup">
                    <a href="">
                        <Button>
                            Sign Up
                        </Button>
                    </a>
                </Link>
            </ButtonWrapper>

        </div>
        </Form>
        
    )
}

export default LoginForm;



