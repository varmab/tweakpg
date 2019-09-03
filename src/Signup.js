import React, { useState } from 'react'

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const SIGNUP = gql`
    mutation signUp($name:String!,
                    $username:String!,
                    $email:String!,
                    $password:String!,
                    $devicetype:String!) {
        signUp(signUpInput:{name:$name,
                            username:$username,
                            email:$email,
                            password:$password,
                            devicetype:$devicetype}){
            name
        }
    }
`

const Signup = (props) => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    let [register, { data, error, loading }] = useMutation(SIGNUP);

    const submit = (e) => {
        e.preventDefault();

        register({
            variables: {
                name,
                email,
                username,
                password,
                devicetype: "ios"
            }
        })
            .then((data) => {
                setName('');
                setEmail('');
                setUsername('');
                setPassword('');
            })
            .catch((err) => {
                console.log(JSON.stringify(err))
            });
    }

    if (loading) {
        return (
            <div>Loading</div>
        )
    }
    return (
        <div>
            {
                (error) && (<p>{error.message}</p>)
            }
            {
                (data) && (<p>Registration is successful</p>)
            }
            <div>
                <input type="text" value={name} placeholder="Name" name="name" onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <input type="text" value={email} placeholder="Email" name="email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="text" value={username} placeholder="Username" name="username" onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <input type="text" value={password} placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} />
            </div>
            <div>
                <button onClick={submit}>Register</button>
            </div>
        </div>
    )
}

export default Signup;