import axios from "axios"

const getURl = endPoint => {
    if (process.env.MONGOLAB_URI) return endPoint;
    return `http://localhost:3001${endPoint}`;
};

export default {
    getBlogInfo:() =>{
        return axios
        .get(getURl(`/api/blogs/`))
            .then(response => {
                console.log(response.data)
                return response.data.blog
            })
        }
}