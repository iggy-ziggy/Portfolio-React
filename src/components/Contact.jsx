import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message sent successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops! Something went wrong',
                    text: error.text,
                })
            });
            e.target.reset();
    };
    return (
        <div className="contact--form">
            <Form onSubmit={handleOnSubmit}>
                <Form.Field 
                className='contact__email-input'
                id='form-input-control-email'
                control={Input}
                label='Email'
                name='reply_to'
                placeholder='Email...'
                required
                />
                <Form.Field 
                className='contact__name-input'
                id='form-input-control-last-name'
                control={Input}
                label='Name'
                name='from_name'
                placeholder='Name...'
                required
                />
                <Form.Field 
                className='contact__message-input'
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Message'
                name='message'
                placeholder='Message...'
                required
                />
                <Button className='contact__btn' type='submit'>Submit</Button>
            </Form>
        </div>
    )
}