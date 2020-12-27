// import React, {useContext, useState, useEffect} from 'react'
// import {auth} from '../components/firebaseAuth'

// // useContext returns the current context value, as given by the nearest context provider for the given context.
// const AuthContext = React.useContext(); 

// //create a function that allows us to use this context
// export function useAuth(){
//     return useContext(AuthContext)
// }

// export function AuthProvider({children}) {
//     const [currentUser, setCurrentUSer] = useState()
      
//     function signup(email,password){
//         auth.createUserWithEmailAndPassword(email, password)
//     }

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {setCurrentUSer(user)})
//         return unsubscribe
//     }, [])

//     const value = {
//         currentUser,
//         signup
//     }

//     return (
//         <div>
//             <AuthContext.Provider value={value}>
//                 {children}
//             </AuthContext.Provider>
//         </div>
//     )
// }


