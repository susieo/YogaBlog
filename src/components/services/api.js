import axios from "axios"

const getURl = endPoint => {
    if (process.env.MONGOLAB_URI) return endPoint;
    return `http://localhost:3001${endPoint}`;
};

export default {
    getUsersInfo: (userId) => {
        console.log(userId)
        return axios
            .get(getURl(`/api/users/${userId}`))
            .then(response => {
                return response.data.user
            })
    },

    getBlogInfo: (blogId) => {
        console.log(blogId)
        return axios
            .get(getURl(`/api/blogs/${blogId}`))
            .then(response => {
                return response.data.blog
            })
    },

    getBlogInfo: () => {
        return axios
            .get(getURl(`/api/blogs/`))
            .then(response => {
                console.log(response.data.blogs)
                return response.data.blogs
            })
    },

    postLoginUser: (userInfo) => {
        console.log(userInfo)
        return axios
            .post(getURl("/api/login"), userInfo)
            .then(response => {
                return response.data
            })
    },

    
        // getBlogInfo: (blogId) => {
        //     console.log(blogId)
        //     return axios
        //         .get(getURl(`/api/newblogs/${blogId}`))
        //         .then(response => {
        //             return response.data
        //         })
        // },
}