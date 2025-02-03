import React,{Component} from "react";

class FormHandle extends Component{
    constructor(){
        super()
        this.state ={
            username:"",
            review :"",
            coures:""
        }
    }
    handlerUserName=Event=>{
        this.setState({
            username:Event.target.value
        })
    }
    handlerReview=Event=>{
        this.setState({
            review:Event.target.value
        })
    }
    handlerCoures=Event=>{
        this.setState({
            coures:Event.target.value
        })
    }
    handlerSubmit=Event=>{
        console.log(`${this.state.username} ${this.state.review} ${this.state.coures}`)
        Event.preventDefault()
    }

    render(){
        return(
            <form onSubmit={this.handlerSubmit}>
                <div>
                    <label>userName</label>
                    <input type="text" value={this.state.username} onChange={this.handlerUserName}  />
                </div>
                <div>
                    <label>Review</label>
                    <textarea typeof="text" value={this.state.review} onChange={this.handlerReview}></textarea>
                </div>
                <div>
                    <label>Coures</label>
                    <select value={this.state.coures} onChange={this.handlerCoures}>
                    <option value="b.a">B.A</option>
                    <option value="b.com">B.com</option>
                    <option value="bba">BBA</option>
                    <option value="b.sc">B.Sc</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FormHandle;