import React, { useState } from 'react'
import "./Faq.css"
import { questions } from './Data/FaqQuestion'
export default function Faq() {
  let [openAnsID,setOpenAns]=useState(questions[0].id)  //1 
  return (
    <div>
        <h1>Faq  {openAnsID}</h1>
        
        <div className='faqOuter'>
            {
            questions.map((v,index)=>{
                return(
                    <div className='faqItems' key={index}>
                        <h2 

                        onClick={()=>setOpenAns(

                            (v.id==openAnsID) ? 0 : v.id
                            
                            )}
                        
                        
                        >
                            {v.question}  

                            <span>
                              {v.id==openAnsID ? "-":"+"}  
                            </span>
                            

                        </h2>
                        <p className=
                        {(v.id==openAnsID) ? 'ansShow' : '' }
                        >
                            
                            {v.answer}
                        </p>
                    </div>
                )
            })
            
            }

            
        </div>
    </div>
  )
}
