import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
export const courses=[
    {
      id:1,
      icon:<FontAwesomeIcon icon={faHtml5}/>,
      title:'Front-End',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero totam illum aut vitae temporibus'
   },
   {
    id:2,
    icon:<FontAwesomeIcon icon={faDatabase} />,
    title:'Back-End',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero totam illum aut vitae temporibus'
 },
 {
    id:3,
    icon:<FontAwesomeIcon icon={faUserCheck} />,
    title:'UI & UX',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero totam illum aut vitae temporibus'
 },
 {
    id:4,
    icon:<FontAwesomeIcon icon={faImage} />,
    title:'Graphic',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero totam illum aut vitae temporibus'
 },
]