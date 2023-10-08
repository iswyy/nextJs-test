import { useRouter } from 'next/router'
import Link from 'next/link'
const Post = () => {
    const router = useRouter()
    const { id } = router.query

    return (
        <div>
            <h1>Post: {id}</h1>
            <Link href="/">
                <button>回主页</button>
            </Link>
            <Link href="/post">
                <button>回Post</button>
            </Link>
        </div>
    )
}

export default Post