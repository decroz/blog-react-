import React, { Component } from 'react'
import Axios from 'axios';
import PostCard from '../component/PostCard';
import { toast } from 'react-toastify';

export default class Home extends Component {
   constructor(){
       super();
       this.state = {
           posts: []
       }
   }

   async componentDidMount() {
    try {
        let { data: posts } = await Axios.get('http://localhost:5000/api/')

        this.setState({
            posts
        })
    } catch (error) {
        if (error.response){
            toast.error(error.response.data.message);
            console.log(error)
        }else if(error.request){
            toast('check your internet connection');
        }else if(error.next){
            toast('something went wrong');     
        }
        // toast
    }
}

    render() {
        const { posts } = this.state;
        return (
            <div>
                <h1>Home</h1>
                {
                    posts.map(post => <PostCard key={post._id} post={post} />)
                }
            </div>
        )
    }
}
