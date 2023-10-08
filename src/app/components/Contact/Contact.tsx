import React from 'react'
import { SectionHeader } from '../_globals/SectionHeader'
import { SectionWrapper } from '../_globals/SectionWrapper'
import { ContactInfo } from './ContactInfo'
import { Form } from './Form'

export const Contact = () => {
  return (
    <SectionWrapper>
        <SectionHeader title='Contact Us' />

        <div className="flex flex-col gap-10 tablet:m-[1.19rem] desktop:flex-row">
            <ContactInfo/>
            <Form />
        </div>
    </SectionWrapper>
  )
}
