import Link from 'next/link'
export default function Home() {
  return (
      <div>
          <Link href="/post">
              <button style={{width:'200px',height:'100px',fontSize:'22px'}}>去post</button>
          </Link>
          <Link href="/my">
              <button style={{width:'200px',height:'100px',fontSize:'22px'}}>去我的页面</button>
          </Link>
      </div>

  )
}
