import { useState } from "react"
import "./header.css"
// import { DateRange } from "react-date-range"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Header =()=>
{
    // const [DateRange,setDateRange]= useState([
    //     {
    //         startDate: new Date(),
    //         endDate: null,
    //         key: 'selection'
    //       }
    // ])
const [show,setshow]= useState(false)
   const [Date,openDate]=useState(false)
//    const [Num,changeNumber]=useState({
//     adult:1,
//     children:0,
//     room:1
//    })
//    function changenum()
//    {
// changeNumber(Num+1)
//    }

const [person,setperson]= useState({
    adult:1,
    children:2,
    rooms:1,

});
const changebtn=(name,act)=>
{  
    if(name==="A"&&act==="I")
setperson({
    adult:person.adult+1,
    children:person.children,
    rooms:person.rooms,
})
else if(name==="A"&&act==="D") setperson({
    adult:person.adult-1,
    children:person.children,
    rooms:person.rooms,
})
if(name==="C"&&act==="I")
setperson({
    adult:person.adult,
    children:person.children +1,
    rooms:person.rooms,
})
else if(name==="C"&&act==="D") setperson({
    adult:person.adult,
    children:person.children-1,
    rooms:person.rooms,
})
if(name==="R"&&act==="I")
setperson({
    adult:person.adult,
    children:person.children,
    rooms:person.rooms+1,
})
else if(name==="R"&&act==="D") setperson({
    adult:person.adult,
    children:person.children,
    rooms:person.rooms-1,
})

    
}

// console.log(person.adult,person.children,person.rooms)
    return (
        <div className="header">
            
            <div className="texthead">
                <h1>Find your next stay</h1>
                <p>search low prices on hotels, homes and much more</p>
            </div>
            <div className="addinfo">
<div className="searchbar cc">
    
    <input className="input" type="text" placeholder="Where are you going to?" />

</div>
<div className="checkinDate cc">
    <p onClick={()=>
    {
        setshow(!show)
    }}>Check in - Check out</p>
   
   {
    show&&  <div className="setpass"> 
 

    <div className="adult">
    
        <h4>Adult:</h4>
        <div className="buttonchange">

        <button onClick={()=>changebtn("A","I")} >+</button> 
      {person.adult}
        <button onClick={()=>changebtn("A","D")}>-</button>
        </div>
    </div>
    <div className="adult">

        <h4>Children:</h4>
        <div className="buttonchange">

        <button onClick={()=>changebtn("C","I")} >+</button> 
        {person.children}
        <button onClick={()=>changebtn("C","D")} >-</button>
        </div>
    </div>
    <div className="adult">
        <h4>Rooms:</h4>
        <div className="buttonchange">

        <button onClick={()=>changebtn("R","I")} >+</button> 
        {person.rooms}
        <button onClick={()=>changebtn("R","D")} >-</button>
        </div>
    </div>
    </div>
   }
</div>
<div className="passengers  cc" >
    <p onClick={()=>
{
   openDate(!Date)
}}>{person.adult} adults - {person.children} children - {person.rooms} rooms</p>

   
{Date&&
   <div className="setpass"> 
 

    <div className="adult">
    
        <h4>Adult:</h4>
        <div className="buttonchange">

        <button  >+</button> 
        
        <button >-</button>
        </div>
    </div>
    <div className="adult">

        <h4>Adult:</h4>
        <div className="buttonchange">

        <button >+</button> 
        
        <button >-</button>
        </div>
    </div>
    <div className="adult">
        <h4>Adult:</h4>
        <div className="buttonchange">

        <button >+</button> 
        
        <button >-</button>
        </div>
    </div>
    </div>
 
}
    
</div>
<button className="but">Search</button>
            </div>
        </div>
    )
}

export default Header