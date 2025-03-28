import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";


const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
        .then(response => {
            setUsers(response.data?.response || []);
        })
        .catch(error => {
            console.error("Axios error :",error);
        });
        
    }
    return(
        <Box
            sx={{
                width:'100% -100px',
                margin:'auto',
                marginTop: '100px',
            }}
        >
            <UserForm/>
            <UsersTable rows = {users} />

        </Box>
        
        

    );

}







export default Users;