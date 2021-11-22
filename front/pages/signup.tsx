import React, { useState, FC, ChangeEventHandler, ReactNode, ReactFragment } from 'react';
import Head from 'next/head';
import { Button, Checkbox, Form, Input } from 'antd';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const Signup: FC = () => {
    /* get values to use */
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);
    /* value and setter */
    /* not sure why we needed the useInput() hook? */
    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput("");
    const [password, onChangePassword] = useInput('');

    /* functions to be used */
    /* checks validity of submitted stuff,
    then logs it */
    const onSubmit = () => {
        if (password !== passwordCheck){
            setPasswordError(true);
            return;
        }
        if(!term) {
            setTermError(true);
            return;
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term,
          });

    }
    /* ?? etype? */
    const onChangePasswordCheck = (e:any) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }
    /* ?? etype? */
    const onChangeTerm = (e:any) => {
        setTermError(false);
        setTerm(e.target.checked);
      };



    /* the component we return */
    return (
        /* can return only 1 parent elem, so use <> */
        <>
            <Head>
                <title>SignUp|NodeBird</title>
            </Head>
            <AppLayout>
                {/* Form for the 4 input fields */}
                <Form onFinish={onSubmit} style={{ padding: 10 }}>
                    <div>
                        <label htmlFor="user-id">ID</label>
                        <br /> {/* line breaker */}
                        <Input name="user-id" value={id as string} required 
                        onChange={onChangeId as ChangeEventHandler<HTMLInputElement>}/>
                    </div>
                    <div>
                        <label htmlFor="user-nick">NickName</label>
                        <br /> {/* line breaker */}
                        <Input name="user-nick" value={nick as string} required
                        onChange={onChangeNick as ChangeEventHandler<HTMLInputElement>}></Input>
                    </div>
                    <div>
                        <label htmlFor="user-password">Password</label>
                        <br /> {/* line breaker */}
                        <Input name="user-password" type="password" value={password as string} required
                        onChange={onChangePassword as ChangeEventHandler<HTMLInputElement>}></Input>
                    </div>
                    {/* div for password check */}
                    <div>
                        <label htmlFor="user-password-check">Confirm Password</label>
                        <br />
                        <Input 
                            name="user-password-check"
                            type="password"
                            value={passwordCheck}
                            required
                            onChange={onChangePasswordCheck}
                        />
                        {/* ?? WTF is this syntax */}
                        {passwordError 
                        && <div style={{color: "red"}}>Password doesnt Match!</div>}
                    </div>
                    <div>
                        <Checkbox
                            name="user-term"
                            checked={term}
                            onChange={onChangeTerm}
                        >
                            Agree to abide by Whoyaho's laws
                        </Checkbox>
                        {termError
                        && <div style={{color: "red"}}>
                            You must agree to User Terms
                            </div>}
                    </div>
                    <div style={{marginTop:10}}>
                        <Button 
                            type="primary"
                            htmlType="submit"
                        >
                            Register
                        </Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default Signup;