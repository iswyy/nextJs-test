import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <h1>Post: {id}</h1>
            <button>回主页</button>
            <button>回Post</button>
        </div>
    )
}

export default Post