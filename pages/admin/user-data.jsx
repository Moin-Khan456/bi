import React, { useState, useEffect } from 'react'
import Header from "../../components/Admin/Header.jsx"
import Sidebar from "../../components/Admin/Sidebar.jsx"
import Table from "../../components/Admin/Tables.jsx"

const UserData = () => {
    const [view, setView] = useState(false)
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            window.location.href = '/'
        }
        else {
            setView(true)
        }
    }, [])
    return (
        <>{
            view &&
            <>
                <Header type={{ logout: true, text: "Logout" }} />
                <div className='w-full'>
                    <Sidebar />
                    <Table />
                </div>
            </>
        }
        </>
    )
}

export default UserData