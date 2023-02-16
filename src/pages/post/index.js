import axios from "axios"
// import { getSession } from "next-auth/react"


function Post({allUsers }) {

    return (
        <>
            {
                allUsers.map((prod, index) => (
                    <div key={index}>
                        <h1>{prod.name}</h1>
                        <h1>{prod.price}</h1>
                        <h1>{prod.origin}</h1>
                    </div>
                ))
            }
        </>
    )
}

export default Post


export async function getServerSideProps(context) {
    // const session = await getSession(context)
    const allUsers = await axios.get('https://63edb791d466e0c18ba1e958.mockapi.io/api/product')
        .then(res => res.data)

    // if(!session) {
    //     return {
    //         redirect: {
    //             destination: 'api/auth/signin?callbackUrl=http://localhost:3000/blog',
    //             permanent: false,
    //         },
    //     }
    // }

    return {
        props: {
            // session,
            // data: session ? '100 private posts' : '50 free posts',
            allUsers,
        }
    }

}