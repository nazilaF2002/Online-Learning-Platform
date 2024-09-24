import { faAnchor, faCocktail, faCodeCommit, faComment, faQuestion, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Discuss.css'
export default function Discuss(){
    const Questions=[
        {
            id:1,
            name:'Somial',
            questin:'how can I make my div rounded?'
        },
        {
            id:2,
            name:'Akbar',
            questin:'Hi dear you can use border radius.'
        },
    ];
    function HundelSubmit(e){
      e.preventDefault();
    }
    return(
        <>
        <div className=" mt-3 my-5  h-100" style={{height:'100vh',overflow:'hidden'}}>
             <div className="row  pt-5 h-100" style={{height:'100vh'}}>
                <div className="col-md-3 pt-5 d-none d-md-inline-block">
                  <FontAwesomeIcon className="_User" icon={faUser}/>
                  <FontAwesomeIcon className="_Question" icon={faQuestion} />  
                </div>
                <div className="col-md-5 pt-5 text-center mb-5">
                    <h3 className="_title">Do you have any question ? fell free to ask !</h3>
                    <form action="" onSubmit={HundelSubmit}>
                        <div className="my-5">
                                <h6 className="mb-3">Type your Question :</h6>
                           <input type="text" name="question" className="w-75" />
                        </div>
                        <button type="submit" className="w-75 btn btn-success"> Send </button>
                    </form>
                </div>
                <div className="col-md-4  py-5 h-100">
                    <div className="d-none d-md-inline-block  _comment">
                    <FontAwesomeIcon style={{height:'80px'}} icon={faComment} />
                    </div>
                    
                    <ul style={{listStyleType:'none'}}>
                        {
                            Questions.map((q)=>(
                                <li key={q.id}>
                                  <h6 className="text-danger">{q.name}</h6>
                                  <p>{q.questin}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
             </div>
        </div>
        </>
    );
}