import React, { useState } from 'react'

const TempComponent = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password,setPassword] = useState()
    const [file, setFile] = useState()

    // const handleSumbmit = ()=>{
    //     console.log(name);
    //     console.log(email);
    //     console.log(password);
    //     console.log(file)
    // }
    const collectData = async () => {
        console.log(name, email, password,file);
        let result = await fetch("http://localhost:5000/register", {
          method: "post",
          body: JSON.stringify({ name, email, password, file }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
      
        
          alert('Your account has been registered successfully')
        
      };
  return (
    <>
      <div className='ml-[260px]'>
        <div >
            <div >
                <input type="text" placeholder='Name'className='mt-16'
                value={name} onChange={(e)=> setName(e.target.value)} />
               
                <br /><br />
                <input type="text" placeholder='Email'
                value={email} onChange={(e)=> setEmail(e.target.value)}/>
                
                <br /><br />
                <input placeholder='Password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                
                <br /><br />
                <input type="file"
                value={file} onChange={(e)=>setFile(e.target.value)} />

            </div>
            <button onClick={collectData} className='mt-10 rounded-lg bg-red-700 py-1 px-2 text-white'>Ok Submit</button>
        </div>
      </div>
    </>
  )
}

export default TempComponent
