import React from 'react';
import { SkewedButton } from '../_globals/SkewedButton';

// @TODO: This component really requires Styled-Components.
export const Form = () => {
	return (
		<form className='flex flex-col gap-6 tablet:flex-row tablet:flex-wrap'>
			<fieldset className='flex flex-col gap-6 tablet:flex-row tablet:flex-wrap tablet:w-full'>
				<legend className='absolute -top-96'>Type in your name.</legend>
				<div className='flex flex-col tablet:w-[47.5%]'>
					<label className=' font-oxanium ' htmlFor='First Name'>
						First Name <span aria-label='required'>*</span>
					</label>
					<input
						className='px-5 h-12 mt-4 -skew-x-[5deg] border-wBlue border-solid border bg-transparent placeholder:text-sm placeholder:text-dBlueishGrey placeholder:skew-x-[5deg] tablet:w-full desktop:-skew-x-[10deg]'
						type='text'
						name='First Name'
						required
						placeholder='First name'
					/>
				</div>
				<div className='flex flex-col tablet:w-[47.5%]'>
					<label className=' font-oxanium' htmlFor='Last Name'>
						Last Name <span aria-label='required'>*</span>
					</label>
					<input
						className='px-5 h-12 mt-4 -skew-x-[5deg] border-wBlue border-solid border bg-transparent placeholder:text-sm placeholder:text-dBlueishGrey placeholder:skew-x-[5deg] tablet:w-full desktop:-skew-x-[10deg]'
						type='text'
						name='Last Name'
						required
						placeholder='Last name'
					/>
				</div>
			</fieldset>

			<fieldset className='tablet:w-[47.5%]'>
				<legend className='absolute -top-96'>Type in your email.</legend>
				<div className='flex flex-col'>
					<label className=' font-oxanium' htmlFor='Email'>
						Email <span aria-label='required'>*</span>
					</label>
					<input
						className='px-5 h-12 mt-4 -skew-x-[5deg] border-wBlue border-solid border bg-transparent placeholder:text-sm placeholder:text-dBlueishGrey placeholder:skew-x-[5deg] tablet:w-full desktop:-skew-x-[10deg]'
						type='email'
						name='Email'
						required
						placeholder='Email'
					/>
				</div>
			</fieldset>

			<fieldset className='tablet:w-[47.5%]'>
				<legend className='absolute -top-96'>How did you hear about us?</legend>
				<div className='flex flex-col'>
					<label className=' font-oxanium' htmlFor='Options'>
						How did you hear about us?
					</label>
					<select
						placeholder='Select option'
						className='px-5 h-12 mt-4 -skew-x-[5deg] border-wBlue border-solid border bg-transparent placeholder:text-sm placeholder:text-dBlueishGrey placeholder:skew-x-[5deg] tablet:w-full desktop:-skew-x-[10deg]'
						name='Options'
						defaultValue={'HIDDEN'}
					>
						{/* TODO@: Check if this is the industry standard for displaying "placeholder" text in a select box */}
						<option
							hidden
							disabled
							value={'HIDDEN'}
							className='text-dBlueishGrey'
						>
							Select option
						</option>
						<option value='linkedin'>LinkedIn</option>
						<option value='facebook'>Facebook</option>
						<option value='twitch'>Twitch.tv</option>
						<option value='youtube'>Youtube</option>
						<option value='tournament'>Tournament</option>
					</select>
				</div>
			</fieldset>

			<fieldset className='tablet:w-full'>
				<legend className='absolute -top-96 '>Your message to us.</legend>
				<div className='flex flex-col '>
					<label className=' font-oxanium' htmlFor='Message'>
						Message <span aria-label='required'>*</span>
					</label>
					<textarea
						className='px-5 mt-4 resize-none py-4 h-48 -skew-x-[2deg] border-wBlue border-solid border bg-transparent tablet:w-full desktop:-skew-x-[5deg]'
						name='Message'
						required
						placeholder='Write your message'
					/>
				</div>
			</fieldset>
			<div className='m-auto desktop:m-0'>
				<SkewedButton text='Submit' width='normal' />
			</div>
		</form>
	);
};
