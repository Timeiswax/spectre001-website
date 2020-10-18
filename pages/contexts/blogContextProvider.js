import React, {createContext, Component} from 'react';
import axios from 'axios'

export const BlogContext = createContext();

const api = axios.create({
    baseURL: 'https://legume-heads-blog-api.herokuapp.com'
})

class BlogContextProvider extends Component {
    state = {
        items: "",
    }
    componentDidMount() {
        api.get('/posts').then(res => {
            this.setState({
                items: res.data
            })
            //console.log(this.state.items)
        })
        
    }
    render() { 
        return (
            <BlogContext.Provider value = {{...this.state}}>
                {this.props.children}
            </BlogContext.Provider>
          );
    }
}
 
export default BlogContextProvider;