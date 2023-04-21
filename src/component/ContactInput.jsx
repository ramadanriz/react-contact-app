import React, { Component } from 'react'

export default class ContactInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      tag: ''
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this)
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onNameChangeEventHandler(event){
    this.setState(() => {
      return {
        name: event.target.value
      }
    })
  }

  onTagChangeEventHandler(event){
    this.setState(() => {
      return {
        tag: event.target.value
      }
    })
  }

  onSubmitEventHandler(event){
    event.preventDefault()
    this.props.addContact(this.state)
  }

  render() {
    return (
      <form action="" className='border-[1px] border-dashed border-black p-4 my-[14px] mx-0 rounded-lg mb-8' onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder='Name' className='block w-full p-2 my-2 mx-0' value={this.state.name} onChange={this.onNameChangeEventHandler}/>
        <input type="text" placeholder='Tag' className='block w-full p-2 my-2 mx-0' value={this.state.tag} onChange={this.onTagChangeEventHandler}/>
        <button type="submit" className='w-full p-2 border-[1px] border-[#aaa]'>Tambah</button>
      </form>
    )
  }
}