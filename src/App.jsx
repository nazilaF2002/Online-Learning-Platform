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
import Profile from './components/Students/Profile.jsx';
import Courses from './components/courses/course.jsx';
import CRoot from './components/courses/CRoot.jsx';
import Discuss from './components/Discuss/discuss.jsx';
import Notifications from './components/Notifications/Notifications.jsx';
import Edit from './components/EditPage/Edit.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HRoot />,
    children: [
      { index: true, element: <Home /> },
      { path: 'register', element: <RegisterForm /> },
      { path: 'login', element: <LoginForm /> },
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
  {path: 'lessons/front' , element:<SRoot/>,
    children:[
      {index:true , element :<Lessons/>},
      {path: ':id' , element :<LessonsDetails/> },
      {path: 'new' , element :<NewLesson/> },
      {path: 'students' ,element:<StudentList/> },
      {path: 'profile/:id' , element: <Profile/>},
      {path: 'courses', element: <Courses/> },
      {path: 'discuss', element:<Discuss/> },
      {path: 'notification',element:<Notifications/> },
      {path: 'edit/:id',element:<Edit/> },
    ]
   },
   {path: 'lessons/backend' , element:<SRoot/>,
    children:[
      {index:true , element :<Lessons/> },
      {path: ':id' , element :<LessonsDetails/> },
      {path: 'new' , element :<NewLesson/> },
      {path: 'students' ,element:<StudentList/> },
      {path: 'profile/:id' , element: <Profile/>},
      {path: 'courses', element: <Courses/> },
      {path: 'discuss', element:<Discuss/> },
      {path: 'notification',element:<Notifications/> },
      {path: 'edit/:id',element:<Edit/> }
    ]
   },
   {path: 'lessons/uiux' , element:<SRoot/>,
    children:[
      {index:true , element :<Lessons/> },
      {path: ':id' , element :<LessonsDetails/> },
      {path: 'new' , element :<NewLesson/> },
      {path: 'students' ,element:<StudentList/> },
      {path: 'profile/:id' , element: <Profile/>},
      {path: 'courses', element: <Courses/> },
      {path: 'discuss', element:<Discuss/> },
      {path: 'notification',element:<Notifications/> },
      {path: 'edit/:id',element:<Edit/> }
    ]
   },
   {path: 'lessons/graphic' , element:<SRoot/>,
    children:[
      {index:true , element :<Lessons/> },
      {path: ':id' , element :<LessonsDetails/> },
      {path: 'new' , element :<NewLesson/> },
      {path: 'students' ,element:<StudentList/> },
      {path: 'profile/:id' , element: <Profile/>},
      {path: 'courses', element: <Courses/> },
      {path: 'discuss', element:<Discuss/> },
      {path: 'notification',element:<Notifications/> },
      {path: 'edit/:id',element:<Edit/> }
    ]
   },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
