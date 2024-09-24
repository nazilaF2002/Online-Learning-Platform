import './about.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
export default function AboutUs(){
    const courses=[
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
    return(
        <>
        <div className='p-5 about_bg'>
        <div className="container p-md-5 ">
            <div className="row">
                <div className="col-md-4  text-center d-flex justify-content-center align-items-center">
                    <div >
                        <h2 className='_title'>Who we are ?</h2>
                    </div>
                </div>
                <div className="col-md-8  px-md-5 mt-2 mt-md-0 answer text-secondary">
                    <div>
                       <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nam nisi velit,
                         corporis delectus nihil magnam? Molestiae, iure! Quas, nam incidunt. Sit, laudantium
                          dolorum est nostrum pariatur ad rerum, natus unde at soluta doloremque quo, possimus 
                          tenetur corporis ullam? Incidunt quod itaque dolore blanditiis, nobis reiciendis soluta
                           recusandae modi impedit architecto odit mollitia rerum ducimus quia aliquid, repellat eaque
                            illo! Id obcaecati, recusandae quia unde accusantium. 
                        </h6>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {/* what we offer */}
        <div className="our_offring bg-secondary bg-opacity-10 p-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <div className="row ">
                            <div className="col-md-8 px-md-5  my-2 my-md-0 order-1 order-md-2 _answer text-secondary ">
                                <div className='  '>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Dicta alias maiores perspiciatis, perferendis assumenda 
                                    eius! Dolor perspiciatis deserunt beatae quis nulla dolores,
                                     consequuntur pariatur architecto ad, suscipit, fugiat nemo 
                                     delectus nam itaque rerum reprehenderit asperiores rem cum ut
                                      atque blanditiis ratione. Adipisci, aliquid. Quo neque nemo 
                                      magnam .
                                </h6>
                                </div>
                            </div>
                            <div className="col-md-4 order-md-2 d-flex justify-content-center align-items-center  ">
                                <div>
                                <h2 className='_title'>What We Offer ?</h2>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-12 text-center p-5">
                     <div className="row p-md-5">
                        {courses.map((item)=>{
                            return(
                                <div className="col-md-6 col-lg-3 mb-2" key={item.id}>
                            <div className="offer rounded p-3 d-flex flex-column">
                                 <i className='i'>{item.icon}</i> 
                                 <h5>{item.title}</h5>
                                 <p>{item.description} </p>
                            </div>
                        </div> 
                        ) 
                        })} 
                     </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}