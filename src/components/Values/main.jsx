import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading,AccordionItemButton, AccordionItemPanel,AccordionItemState } from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from "react-icons/md"
import "./style.css"
import AccordionData from "../../utils/accordion"

const Values = () => {
  return (
    <section className='value-wrapper'>
      <div className="innerWidth paddings value-container flexCenter">
        <div className="value-left">
          <div className='image-container'>
            <img src='./value.png' alt='left image' />  
          </div>
        </div>


        <div className='value-right flexColStart'>
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value We Give to You</span>
            <span className='secondaryText'>
              We are always ready to help by providing the best services for you.
              <br />
              We believe a good place to live can make your life better
            </span>

            <Accordion allowMultipleExpanded={false} preExpanded={[0]} className='accordion'>
              {
                  AccordionData.map((data,index)=> (
                    <AccordionItem key={index} className='accordion-item' uuid={index}>
                      <AccordionItemHeading>
                        <AccordionItemButton className='flexCenter accordion-button'>
                          <div className="flexCenter icon">{data?.icon}</div>
                          <span className='primaryText'>{data?.heading}</span>
                          <div className="flexCenter icon">
                            <MdOutlineArrowDropDown  size={20}/>
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>

                      <AccordionItemPanel><p className='secondaryText'>{data?.detail}</p></AccordionItemPanel>
                    </AccordionItem>
                  ))
              }
            </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Values