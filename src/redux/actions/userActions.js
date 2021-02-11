import axios from "axios"
import { userTypes } from "../../types"

export const getUsers=(page)=>{
    return async (dispatch)=>{
        dispatch(changeLoad())
        dispatch(errorUser(null))
        try {
            const url=`https://gorest.co.in/public-api/users?_format=json&access-token=nL6p7nrqP2ivDEKY7dtSEECsN0a7ehywZMaE&page=${page}`
            const res=await axios.get(url)
            dispatch(setUsers(res.data))
        } catch (error) {
            dispatch(errorUser(true))
        }finally{
            dispatch(changeLoad())
        }
        
    }
}

const setUsers=(data)=>({
    type:userTypes.GET_USERS,
    payload:data
})

const changeLoad=()=>({
    type:userTypes.CHANGE_LOADING
})

const errorUser=(error)=>({
    type:userTypes.ERROR_LOADING,
    payload:error
})