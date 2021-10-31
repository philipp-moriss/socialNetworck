import axios, {AxiosResponse} from "axios";
import {AuthStateType} from "../redux/reducer/Auth.reducer";
import {ProfileUser} from "../redux/reducer/profile.reducer";


const usersApi = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'e8538173-277d-4d9f-9e67-b97a7dce6542'
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

type PostFollowResponse<T = {}> = {
    data: T
    fieldsErrors: Array<number>
    messages: Array<string>
    resultCode: number
}

type PostResponse<T = {}> = {
    data: T
    messages: Array<string>
    resultCode: number
}

export const UserApi = {
    getUsers(currentPage: number, pageSize: number) {
        return usersApi.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true,
        }).then((resp) => {
            return resp.data
        })
    },
    unFollow(id: number) {
        return usersApi.delete<PostFollowResponse>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(resp => resp.data)
    },
    Follow(id: number) {
        return usersApi.post<{}, AxiosResponse<PostResponse>>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
            .then(resp => resp.data)
    }
}

type AxiosAuthGetType<T> = {
    data: T
    fieldsErrors: Array<number>
    messages: Array<string>
    resultCode: number
}

const HeadApi = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'e8538173-277d-4d9f-9e67-b97a7dce6542'
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const HeaderApi = {
    getAuth() {
        return HeadApi.get<AxiosAuthGetType<AuthStateType>>("auth/me")
    },


}


const ProfApi = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'e8538173-277d-4d9f-9e67-b97a7dce6542'
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const ProfileApi = {
    getProfile(userId:number | string) {
        return ProfApi.get<ProfileUser>(`profile/${userId}`)
    },


}
