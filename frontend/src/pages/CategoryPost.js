import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Post from "../components/Post"
import axios from 'axios'

export default function CategoryPost(){

    const [posts, setPosts] =useState([])
    const [category, setCategory] = useState(null)
    const { id } = useParams()

    const fetchPosts = async ()=> {
        const response = await axios.get(`http://localhost:8000/api/posts/category/${id}`)
        setPosts(response.data)
    }
    const fetchCategory = async()=> {
        const response = await axios.get(`http://localhost:8000/api/categories/${id}`)
        setCategory(response.data)

    }
    useEffect(()=> {
        fetchPosts()
        fetchCategory()
    },[])

    if(!category){
        return <h3>loading...</h3>
    }

    return(
    <main>
    <div class="container mt-4">
        <div class="row">
            <div class="col-lg-8">
                <h1 class="mb-4">{category.name}</h1>

                {
                    posts.length > 0 ? posts.map((post) => <Post post={post} />) : <h4>No posts available</h4>
                }
             

            </div>

           
        </div>
    </div>
</main>
)}