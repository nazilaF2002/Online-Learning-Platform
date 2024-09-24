export default function Notifications(){
    const Notification=[
        {
            id:1,
            name:'Ahmad Akbari',
            message:'   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, repellendus.'
        },
        {
            id:2,
            name:'Somia Shirzad',
            message:'   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, repellendus.'
        },
        {
            id:3,
            name:'Ramin Darwishzadah',
            message:'   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, repellendus.'
        },
        {
            id:4,
            name:'Taban Ahmadi',
            message:'   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, repellendus.'
        },
        {
            id:5,
            name:'Arwin MOhamdi',
            message:'   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, repellendus.'
        }
    ]
    return(
        <>
        <div className=" mt-3  py-5" style={{direction:'rtl',overflow:'hidden',height:'100vh'}}>
           <div className="row border " style={{height:'100vh'}}>
            <div className="col-md-6     col-lg-4 p-5 h-100" style={{direction:'ltr'}}>
              <ul style={{listStyleType:'none'}}>
                { 
                  Notification.map((item)=>(
                        <li key={item.id}>
                            <h6 className="text-danger">{item.name}</h6>
                            <p className="text-secondary">{item.message}</p>
                        </li>
                    ))
                }
              </ul>
            </div>
            <div className=" col-md-6   col-lg-8 d-none d-md-inline-block bg-secondary bg-opacity-10 h-100"></div>
           </div>
        
        </div>
        </>
    );
}