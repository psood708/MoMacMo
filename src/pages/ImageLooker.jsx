import * as React from 'react';
import { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
 
export default function ImageLooker() {

    const [image,setImage] = useState([]);
    const [volume,setVolume] = useState(0);
    const [frame,setFrame] = useState(0);
    const [scaleMin,setscaleMin] = useState(0);
    const [scaleMax,setscaleMax] = useState(0);
    const [colorScale,setcolorScale] = useState(0);
    const [link,setLink] = useState(`https://4g0io647a0.execute-api.us-east-1.amazonaws.com/Test/image?bucket=momacmos3&project=momacmo&folder=meagerdas&dataset=1432_aws_output_filt_5_50_despike&format=png&prefix=momacmo/meagerdas/1432_aws_output_filt_5_50_despike&volume=${volume}&frame=${frame}1&scaleMin=${scaleMin}&scaleMax=${scaleMax}&colorScale=${colorScale}`);

    // useEffect(()=>{
    //     axios
    //     .get(``)
    //     .then((res)=>
    //     setImage(res.data));
    // },[]);
     
       
        const getImage =() =>{
           axios.get(link,{
                headers:{
                    'Accept':'image/png',
                     
                }
             }
                ).then((response)=>{
                    console.log(response.data)
                    
                    setImage(response.data)
                })
             
            // setImage(newImg);
        };
       
        
        // return (
        //     <div className=''>
        //         <img src={image} alt=''/>
        //         <button onClick={getImage}>Get Image</button>
        //     </div>
        // )
    
     const clicked =()=>{
        setLink(`https://4g0io647a0.execute-api.us-east-1.amazonaws.com/Test/image?bucket=momacmos3&project=momacmo&folder=meagerdas&dataset=1432_aws_output_filt_5_50_despike&format=png&prefix=momacmo/meagerdas/1432_aws_output_filt_5_50_despike&volume=${volume}&frame=${frame}1&scaleMin=${scaleMin}&scaleMax=${scaleMax}&colorScale=${colorScale}`)
     }

    return (
        <div className='flex font-mono flex-col items-center bg-slate-200 text-5xl font-bold text-center'>
            
            <div className='p-4 mt-10'>Image looker </div>
            <div>
                {/* {myData.map((post)=>{
                    const{id,title,body}= post;
                    return (<div className='card p-10' key={id}>
                            <h2>{title}</h2>
                            <p>{body}</p>
                            </div>)
                })} */}
               <div className='flex ml-48 flex-row row-span-2 p-10'>
                <div className='p-4'>
                    <h4 className='text-xl'>volume</h4>
                    <input onChange={event=> setVolume(event.target.value)} className='volume mt-4 text-xl'/>
                </div>
                <div className='p-4'>
                <h4 className='text-xl'>frame</h4>
                    <input onChange={event=> setFrame(event.target.value)} className='frame mt-4 text-xl'/>
                </div>
                <div className='p-4'>
                <h4 className='text-xl'>scaleMin</h4>
                    <input onChange={event=> setscaleMin(event.target.value)} className='scaleMin mt-4 text-xl'/>
                </div>
                <div className='p-4'>
                <h4 className='text-xl'>scaleMax</h4>
                    <input onChange={event=> setscaleMax(event.target.value)} className='scaleMax mt-4 text-xl'/>
                </div>
                <div className='p-4'>
                <h4 className='text-xl'>colorScale</h4>
                    <input onChange={event=> {setcolorScale(event.target.value); }} className='colorScale mt-4 text-xl'/>
                </div>
                
               </div>
               <button className='bg-purple-500 rounded-lg p-4 text-2xl text-white' onClick={clicked}>Submit</button>
               <div> {volume} {frame} {scaleMin} {scaleMax} {colorScale} </div>
               <div className='text-lg'> {link} </div>
            </div>
          
            <div className=''>
                {/* <img src={image} clas alt=''/> */}
                <div>{image}</div>
                 <button className='text-lg text-white p-4 bg-purple-600 rounded-xl' onClick={getImage}>Get Image</button>
            </div>
            {/* <button 
                className='w-40 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-violet-500 rounded-xl text-white font-bold text-lg'>
                
                Sign Out
            </button>  */}
        </div>
    )
}