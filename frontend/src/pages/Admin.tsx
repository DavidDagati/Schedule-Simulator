import { useEffect, useState } from "react"
import { Statistics } from "../types/types"
import { List, ListItem } from "@mui/material"
import { useLocation } from "react-router-dom";

export default function Admin() {
    const { state: password } = useLocation()
    const [stats, setStats] = useState<Statistics>()
    const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false)

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:8000/stats', {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({password})
            })
            if(res.status == 200) {
                setIsAuthenticated(true);
                setStats(await res.json() as Statistics)
            }
        }
        fetchData()
    }, [])

    if(isAuthenticated) {
        return (
            <>
                <h1>Admin</h1>
                <h2>Database Statistics</h2>
                <List className="flex justify-center flex-col items-center">
                    <ListItem>Program Count: {stats?.programCount}</ListItem>
                    <ListItem>Department Count: {stats?.departmentCount}</ListItem>
                    <ListItem>Course Count: {stats?.courseCount}</ListItem>
                </List>
            </>
        )
    }
    else {
        return <h1>Error: Not Authenticated</h1>
    }
}