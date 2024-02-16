import { useState } from 'react'
import { useRouter } from 'next/router';
import {d} from '../src/sf';

export const Gon = () => {
    const router = useRouter();
    console.log(router.pathname)
    return <div>
        액티비티 명 : <input value={d.AppDisplayMessageBox.para[0].k_name} onChange={()=>{}}></input>
        
    </div>
}
