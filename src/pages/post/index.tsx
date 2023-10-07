import Link from 'next/link'
export default function First() {
    const obj=[{id:1},{id:2}]
    return (
        <div>
            {obj.map(item=>{
                return (
                    <Link key={item.id} href={"/post/postItem?id="+item.id} as={"/post/postItem/"+item.id}>
                        <h1>跳转到页面{item.id}</h1>
                    </Link>
                )
            })}
        </div>
    )
}