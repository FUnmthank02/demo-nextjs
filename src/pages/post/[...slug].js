// import { useRouter } from 'next/router'
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// const Post = () => {
//   const router = useRouter()
//   // const { pid, foo } = router.query
//   const [todos, setTodos] = useState([])
//   const [refresh, setRefresh] = useState(false)
//   const [isOpenModal, setOpenModal] = useState({
//     status: false,
//     type: ''
//   })
//   const [updateAcc, setUpdateAcc] = useState({})

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetch('https://639003d065ff41831106d1c8.mockapi.io/api/login/Account')
//         .then(response => response.json())
//         .then(json => setTodos(json))
//     }

//     fetchData()
//   }, [refresh])

//   const handleOpenUpdate = (acc) => {
//     setUpdateAcc(acc)
//     setOpenModal({
//       status: true,
//       type: 'update'
//     })
//   }

//   const handleUpdate = async () => {
//     await axios.put(`https://639003d065ff41831106d1c8.mockapi.io/api/login/Account/${updateAcc.id}`,
//         updateAcc
//     )
//       .then(res => {
//         setRefresh(!refresh)
//         alert('Updated successfully!')
//       })
//   }

//   const handleDelete = async (acc) => {
//     await axios.delete(`https://639003d065ff41831106d1c8.mockapi.io/api/login/Account/${todo.id}`)
//       .then(res => {
//         setRefresh(!refresh)
//         alert('Delete completed successfully!')
//       })
//   }


//   return (
//     <>
//       {
//         isOpenModal.status && isOpenModal.type === 'update' &&
//         <div style={{ width: '100%', height: '100vh', background: 'rgb(25 25 25 / 54%)', position: 'fixed', zIndex: 1000 }}>
//           <div style={{ width: '30%', padding: '70px 30px', background: '#fff', color: '#000', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
//             <p style={{position: 'absolute', top: 1, right: 3, cursor: 'pointer'}} onClick={() => setOpenModal({status: false})}>X</p>
//             <form onSubmit={handleUpdate}>
//               Email:
//               <input type="text" value={updateAcc.Email} onChange={(e) => setUpdateAcc({ Email: e.target.value })} />
//               <button type='submit'>Update</button>
//             </form>

//           </div>
//         </div>
//       }

//       <p>Post page</p>
//       <button onClick={() => router.push('/')}>Go to home</button>

//       <table className='auto'>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>email</th>
//             <th>password</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {todos.map((todo, index) => (
//             <tr key={index}>
//               <td>{todo.id}</td>
//               <td>{todo.Email}</td>
//               <td>{todo.Password}</td>
//               <td><button onClick={() => handleOpenUpdate(todo)}>Update</button></td>
//               <td><button onClick={() => handleDelete(todo)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </>
//   )
// }

// export default Post