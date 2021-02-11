import { userTypes } from "../../types"

const initialState = {
    users:[],
    loading:false,
    page:0,
    totalPages:0,
    error:null
}

const usersReducer= (state = initialState, { type, payload }) => {
    switch (type) {
    case userTypes.CHANGE_LOADING:
        return { 
            ...state,
            loading:!state.loading
        }
    case userTypes.GET_USERS:
        return{
            ...state,
            users:payload.data,
            page:payload.meta.pagination.page,
            totalPages:payload.meta.pagination.pages
        }
    case userTypes.ERROR_LOADING:
        return{
            ...state,
            error:payload
        }
    default:
        return state
    }
}

export default usersReducer
