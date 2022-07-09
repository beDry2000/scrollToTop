import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

function useScrollTop() {
    let location = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0});
    },[location])
}
function Home() {
    useScrollTop()
    return (
        <>
            <h1>Home page</h1>
            <hr />
            <p style={{marginTop: '150vh'}}>
                <Link to='/contact'>Go to contact page</Link>
            </p>
        </>
    )
}
function Contact() {
    useScrollTop()
    return (
        <>
            <h1>Contact page</h1>
            <hr />
            <p style={{marginTop: '150vh'}}>
                <Link to='/'>Go to home page</Link>
            </p>
        </>
    )
}
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </Router>
    )
}
export default App;
// function useScrollTop() {
//     let location = useLocation();
//     useEffect(() => {
//         window.scrollTo({ top: 0 });

//     }, [location])
// }
// function Home() {
//     useScrollTop();
//     return (
//         <>
//             <h1>Home Page</h1>
//             <hr />
//             <p style={{ marginTop: '150vh' }}>
//                 <Link to='/contact'>Go to contact page</Link>
//             </p>
//         </>
//     )
// }
// function Contact() {
//     useScrollTop();
//     return (
//         <>
//             <h1>Contact Page</h1>
//             <hr />
//             <p style={{ marginTop: '150vh' }}>
//                 <Link to='/'>Go to home page</Link>
//             </p>
//         </>
//     )
// }


// function App() {
//     return (
//         <div style={{ padding: '50px' }}>
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/contact" element={<Contact />} />
//                 </Routes>
//             </Router>
//         </div>
//     )
// }
// export default App;