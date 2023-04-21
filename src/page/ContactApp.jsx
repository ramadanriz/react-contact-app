import React, { Component } from 'react'
import { getData } from '../utils/data'
import ContactList from '../component/ContactList'
import ContactInput from '../component/ContactInput'

export default class ContactApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            contacts: getData()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddContactHandler = this.onAddContactHandler.bind(this)
    }

    onDeleteHandler(id){
        const contacts = this.state.contacts.filter((contact) => contact.id !== id)
        this.setState({contacts})
    }

    onAddContactHandler({ name, tag }){
        this.setState((prevState) => {
            return {
                contacts: [
                    ...prevState.contacts,
                    {
                        id: +new Date(),
                        name,
                        tag,
                        imageUrl: '/images/default.jpg'
                    }
                ]
            }
        })
    }

    render() {
        return (
            <div className='max-w-[800px] mx-auto my-0 p-4'>
                <h1 className='font-normal text-5xl mb-8'>Aplikasi Kontak</h1>
                <h2 className='font-bold'>Tambah Kontak</h2>
                <ContactInput addContact={this.onAddContactHandler} />
                <h2 className='font-bold'>Daftar Kontak</h2>
                <ContactList contacts={this.state.contacts} onDelete={this.onDeleteHandler} />
            </div>
        )
    }
}