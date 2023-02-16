import Link from "next/link"
// import { signIn, signOut, useSession } from "next-auth/react"

function Navbar() {
    // const {data: session, status} = useSession()

    return (
        <>
            <div style={{ width: '100%', padding: '30px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#34495e' }}>
                <ul style={{ display: 'flex' }}>
                    <li style={{ margin: '0 20px' }}>
                        <Link style={{ color: '#fff' }} href='/'>Home</Link>
                    </li>
                    <li style={{ margin: '0 20px' }}>
                        <Link style={{ color: '#fff' }} href='/post'>Post</Link>
                    </li>
                    {/* {
                        !session && status !== 'authenticated'&&
                        <li style={{ margin: '0 20px' }}>
                            <Link style={{ color: '#fff' }} href='/api/auth/signin' onClick={e => { e.preventDefault(); signIn(); }}>Log in</Link>
                        </li>
                    }
                    {
                        session && status !== 'unauthenticated' &&
                        <li style={{ margin: '0 20px' }}>
                            <Link style={{ color: '#fff' }} href='/api/auth/signout' onClick={e => { e.preventDefault(); signOut(); }}>Log out</Link>
                        </li>
                    } */}
                </ul>
            </div>
        </>
    )
}
export default Navbar