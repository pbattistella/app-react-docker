import {FormEvent, useContext, useRef, useState} from 'react'
import {TextField, Button, makeStyles} from '@material-ui/core'
import {User} from '../models'
import UsersContext from './UsersContext'

const useStyles = makeStyles({
    buttonWrapper:{
        marginTop: "8px",
    }
})

interface FormProps{}

export const Form: React.FunctionComponent<FormProps>=(props) =>{
    const classes = useStyles()

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    const [users, setUsers] = useContext(UsersContext)

    const onSubmit = (event: FormEvent) =>{
        event.preventDefault()

        console.log(nameRef.current?.value)
        console.log(emailRef.current?.value)

        setUsers([
            ... users,
            {
                name: nameRef.current!.value,
                email:emailRef.current!.value
            }
        ])
    }

    return (
        <form onSubmit={onSubmit}>
            <TextField fullWidth label="Nome" inputRef={nameRef}/>
            <TextField fullWidth label="E-mail" inputRef={emailRef} type="email"/>
            <div className={classes.buttonWrapper}>
                <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>

            </div>
        </form>
    )

}