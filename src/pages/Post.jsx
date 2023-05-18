import { useEffect, useState } from 'react'
import "../assets/css/componentes/card.css"
import { useParams, useNavigate } from 'react-router-dom'
import { buscar } from '../api/api'

const Post = ({url}) => {
    const [post, setPost] = useState({})
    const {id} = useParams()
    useEffect(() => {
        buscar(`/posts/${id}`, setPost).catch(() => {
            navigate("/not-found")
        })
    }, [id])

    const navigate =  useNavigate()

    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="post-card__title">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    )
}

export default Post