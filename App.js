import react,{useState,useEffect} from "react"
import './App.css';
//ximport Button from "./material-ul/core"
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { FormHelperText, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase"
import FlipMove from 'react-flip-move';

 
function App() {
  
   const [input,setInput]=useState('');
   const [username,setUsername]=useState('')
   const[messages,setMessages]=useState([{username:"ADARSH" , message:"idk"},]);


  const inputchanger=(event)=>{
    setInput(event.target.value)
  }
  useEffect(() => {
   setUsername(prompt('enter your name'))
   
  }, [])

  useEffect(() => {
  
     db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      setMessages(
        snapshot.docs.map((doc)=>({
          id:doc.id,
          message:doc.data(),
          Username:doc.data().username
        })))
    });
    setInput("")
    
  }, []);
  

  const sendmessages= (event)=>{ 
    event.preventDefault()
     db.collection('messages').add({
      message:input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');
  }
  return (
    <div className="App">
      <img
  src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Facebook_Messenger-512.png"
  alt="hi"
  width="100px"/>
   <center> <p>@Adarsh_gupta</p>
     <h2>Hey {username}</h2>
     </center> 
   
   <form className="formclass" onSubmit={sendmessages}>
     
              <FormControl className="formcontrol"  onSubmit={sendmessages}>
                      <InputLabel >Type your Message</InputLabel>
                      <Input value={input}  onChange={inputchanger} aria-describedby="my-helper-text" />
                      <FormHelperText >encrypted messages</FormHelperText>
                      <Button disabled={!input} onClick={sendmessages} variant="contained" color="primary">
                        >>>
                      </Button>
              </FormControl>
   </form>
  
  
   
  
    

<FlipMove>
   {
      messages.map(({id,message,Username}) =>{
       return <Message key={id} username={username} message={message} unme={Username}/>

        
      // return <p>{message}</p>
      // console.log(message)

      })
    }
    
</FlipMove>
   
    </div>
  );
  }
export default App;
