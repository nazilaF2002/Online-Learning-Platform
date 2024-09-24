// import './App.css';
// import Home from './components/Home/Home';
// import ReactDom, { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import RegisterForm from './components/Forms/RegisterForm';
// import LoginForm from './components/Forms/LoginForm';
// import HRoot from './components/Home/HRoot';
// import Lessons from './components/Students/lessons';
// import LessonsDetails from './components/Students/LessonDetails';

// const router = createBrowserRouter([
//   { path : '/', 
//     element: <HRoot/>,
//     children:[
//       {Index:true, element:<Home/>},
//       {path : '/register',element:<RegisterForm/> },
//       {path : '/login',element:<LoginForm/> },
//       {path : '/lessons',element:<Lessons/> ,
//         children:[
//               {    path : ':id' , element : <LessonsDetails/>}
//               // {    path : '/lessons:id' , element : <LessonsDetails/>}
//         ]
//        }
//     ]
//   },
//   // {

//   //   path : '/lesson-detail:id' , element : <LessonsDetails/>
//   // }
// ])
// function App() {
//   return (
//     <RouterProvider router={router}/>
//   );
// }

// export default App;




import './App.css';
import Home from './components/Home/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RegisterForm from './components/Forms/RegisterForm';
import LoginForm from './components/Forms/LoginForm';
import HRoot from './components/Home/HRoot';
import Lessons from './components/Students/lessons';
import LessonsDetails from './components/Students/LessonDetails';
import SRoot from './components/Students/SRoot';
import NewLesson from './components/Teachers/NewLesson.jsx';
import StudentList from './components/Teachers/StudentList.jsx';
import { Profiler } from 'react';
import Profile from './components/Students/Profile.jsx';
import Courses from './components/courses/course.jsx';
import CoursesNav from './components/Navbars/CoursesNav.jsx';
import CRoot from './components/courses/CRoot.jsx';
import Discuss from './components/Discuss/discuss.jsx';
import Notifications from './components/Notifications/Notifications.jsx';
// import Lessons from './components/Students/Lessons';
// import LessonsDetails from './components/Students/LessonsDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HRoot />,
    children: [
      { index: true, element: <Home /> },
      { path: 'register', element: <RegisterForm /> },
      { path: 'login', element: <LoginForm /> },
      // {path: 'lessons' , element:<SRoot/>,
      //   children:[
      //     {index:true , element :<Lessons/> },
      //     {path: ':id' , element :<LessonsDetails/> }
      //   ]
      //  },
    ]
  },
  {path: 'courses' , element: <CRoot/> ,
    children:[
      {index:true , element :<Courses/> },
      {path: 'profile' , element: <Profile/>},
      {path: 'courses', element: <Courses/> },
    ]
   },
  // the rout that work corectly
  {path: 'lessons' , element:<SRoot/>,
    children:[
      {index:true , element :<Lessons/> },
      {path: ':id' , element :<LessonsDetails/> },
      {path: 'new' , element :<NewLesson/> },
      {path: 'students' ,element:<StudentList/> },
      {path: 'profile' , element: <Profile/>},
      {path: 'courses', element: <Courses/> },
      {path: 'discuss', element:<Discuss/> },
      {path: 'notification',element:<Notifications/> }
    ]
   },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
