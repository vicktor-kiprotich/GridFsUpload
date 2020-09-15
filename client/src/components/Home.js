import React ,{useState,useEffect} from 'react'
import axios from 'axios'
export default function Home() {
    const [fetchData, setDataUpload] = useState('')
    const fetchUsers = async () => {
        const response = await axios.get(`/uploads`);

        setDataUpload(response.data);
      };
      useEffect( () => { fetchUsers(fetchData) });



    return (
        <div>
           <p>{fetchData}</p>
        </div>
    )
}
