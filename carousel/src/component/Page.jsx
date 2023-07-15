import React, {  useState } from 'react'
import Buttons from './Buttons'
import PageSize from './PageSize';


function Page() {
    const [extra,setExtra] = useState(1);

    const [pg_sz,setSz] = useState(3);
    const moveRight = ()=>{
        setExtra((prev)=>{
            console.log(prev,pg_sz);
            let c= (prev+pg_sz);
            if(c>9){
                c=1;
            }
            return c;
        });
    }
    const moveLeft = ()=>{
        setExtra((prev)=>{
            if(prev-pg_sz<=0){
                let cnt=1;
                for(let i=1;i<n;i++){
                    cnt+=pg_sz;
                }
                return cnt;
            }
            return prev-pg_sz;
        });
    }
    const reset = ()=>{
        for(let i=1;i<=n;i++){
            if(document.getElementById(`b${i}`)!==null){
                document.getElementById(`b${i}`).classList.remove('current');
            }
        }
    }
    const mark = (i)=>{
        if(document.getElementById(`b${i}`)!==null){
            document.getElementById(`b${i}`).classList.add('current');
        }
    }
    const right = ">";
    const left = "<";
    const n= Math.ceil(9/pg_sz);
    let chooseBullet = (e)=>{
        let cur=e.target;
        reset();
        const cur_id = parseInt(cur.id[1]);
        mark(cur_id);
        setExtra(()=>{
            return (cur_id-1)*pg_sz+1;
        })
        
    }
    
    const changeSize = (val)=>{
        setSz(()=>{
            return val;
        });
        setExtra(()=>{
            return 1;
        });
    };
    return (
    <>
        <PageSize changeSize={changeSize}/>
        <div className='wrap'>   
            <button className="arrowr clickable" onClick={moveLeft}>
                <div>{left}</div>
            </button>
        {(()=>{
            const elements=[];
            const n=Math.ceil(9/pg_sz);
            let cnt=1;
            for(let i=1;i<=n;i++){
                if(cnt===extra){
                    reset();
                    mark(i);
                }
                cnt+=pg_sz;
            }
            for(let i=extra,c=0;c<pg_sz && i<=9;i++,c++){
                elements.push(<Buttons val={i}></Buttons>);
            }
            return elements;
            })()}        
            <button className="arrow clickable" onClick={moveRight}>
                <div>{right}</div>
            </button>
        </div>
        <div className='bottom'>
            <button className='bullet current clickable' id='b1' onClick={chooseBullet}/>
            {(()=>{
                const element=[];
                const n = Math.ceil(9/pg_sz);
                console.log(n);
                for(let i=2;i<=n;i++){
                    element.push(<button className='bullet clickable' id={`b${i}`} onClick={chooseBullet} />)
                }
                return element;
            })()}
        </div>
    </>
  )
}

export default Page