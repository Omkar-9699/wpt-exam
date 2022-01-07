
import {usesate } from "react";


export default function App() {
  
   const [message,setmessage]=uesrState("");
   const[messageList,setmessageList] =useState([]);
   const processmessage =(e)=>{
     setmessageList(e.target.value);
   }

   const handlesend =( )=>{
     const newList =[...messageList,message];
     setmessageList(newList);
     setmessageList("");
   
  }

  return <div>
    <header className="bg-dark text-light p-3 " >
      MYChatApp by Omkar PAtre 074_kh 
    </header>
    <div>
      <input className="form-control mt-2" type="text" value={message}placeholder="chat here..." 
      onchange={procesmessage}/>
      <input className="btn btn-primery w-100 mt-2" type="button" value="send" onClick="{handesend}"/>
    </div>
    

    {messageList.map((item,index)=>
    <div className="bg-secondary bg-opacity-25 mt-1" key={index}>
    
    <div>
      input classNmae="from-control mt-2" type="text" value={message} "onChange"={processmessage}/>
      <input className="btn btn-primary w-100 mt-2" type="button" value={sendmessage}
    </div>

    {messageList.map((item,index) =>(
      <div className="bg-secondary bg-opticity-25 mt-1" key={index}>
       {item}
      </div>
    )
      )}
</div>


