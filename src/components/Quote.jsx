import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKiwiBird, faLink, faX } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

class QuoteComponent extends React.Component
{
   
    constructor(props)
    {
        
        super(props);
        this.state = {
            authorName: "",
            authorQuote: ""
        }
        
        
    }

    quoteGenerator()
    {
   
            const quote = [{
                authorName: "– William Faulkner",
                writing: "It may be bad, but it's the only way you can do anything really good."
            },
            {
                authorName: '– Ernest Hemingway',
                writing: "As a writer, you should not judge, you should understand."
            },
            {
                authorName: "– Herman Melville",
                writing: 'To produce a mighty book, you must choose a mighty theme.'
            },
            {
                authorName: " – John Steinbeck",
                writing: "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen."
            },
            {
                authorName: ' – John Green',
                writing: 'Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.'
            },
            {
                authorName: " – Ernest Gaines",
                writing: "The Six Golden Rules of Writing: Read, read, read, and write, write, write."
            },
            {
                authorName: '– Rainer Maria Rilke',
                writing: 'Find out the reason that commands you to write; see whether it has spread its roots into the very depth of your heart; confess to yourself you would have to die if you were forbidden to write.'
            },
            {
                authorName: '– Albert Camus',
                writing: 'The purpose of a writer is to keep civilization from destroying itself.'
            },
            {
                authorName: '– Eugene Ionesco',
                writing: 'A writer never has a vacation. For a writer life consists of either writing or thinking about writing.'
            },
            {
                authorName: ' – Friedrich Nietzsche',
                writing: 'A good writer possesses not only his own spirit but also the spirit of his friends.'
            },
            {
                authorName: '– Meg Rosoff',
                writing: 'Your writing voice is the deepest possible reflection of who you are. The job of your voice is not to seduce or flatter or make well-shaped sentences. In your voice, your readers should be able to hear the contents of your mind, your heart, your soul.'
            },
            

        
        ]
   

        let random_number = Math.floor(Math.random()*quote.length)
        this.setState({authorName: quote[random_number].authorName, authorQuote: quote[random_number].writing})
    }

    render()
    {
        
       
        let color_arr = ['#F08080', '#87CEFA', '#FFD700', '#98FB98', '#FFA07A', '#ADD8E6', '#FF6347', '#BA55D3', '#00CED1', '#FFC0CB', '#A9A9A9']
       let random_num = Math.floor(Math.random() * color_arr.length )

       $('.btn').css('background-color', 'transparent');

       // Use jQuery's fadeIn method to animate the background color transition
       $('.btn').fadeIn('slow', function () {
         // After the fadeIn animation is complete, set the final background color
         $(this).css('background-color', color_arr[random_num]);
       });
        return (
            
        <div className="container " style={{fontFamily:"cursive"}}>
          
         
            <div className="row " >
                <div className="col-lg-6 col-sm-12 p-4 mt-5 mx-auto text-center rounded border authorquote ">
                   <p className="h3" style={{color: color_arr[random_num]}}><span>"</span>{this.state.authorQuote}</p>
                </div>

                
            </div>

            <div className="row">
                <div className="col-lg-6  p-4 mr-2 text-end border rounded mx-auto " style={{color: color_arr[random_num]}}>
                    {this.state.authorName}
                </div>
            </div>
            {this.quoteGenerator.bind(this)}
            <div className="row">

                <div className="col-lg-6 border rounded mx-auto" >

                    <div className="row">
                    

                

                <div className="col-12 p-4 border">
                    <div className="row">
                    <div className="col-2">
                    <button className="btn shadow" >
                        <FontAwesomeIcon icon={faLink} />
                    </button>
                    </div>

                    <div className="col-2">
                    <button className="btn shadow" >
                        
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                    </div>

                    <div className="col-8 d-flex justify-content-end ">

                    <button className="btn shadow " onClick={this.quoteGenerator.bind(this)}>New Quote</button>
                    </div>
                   
                    
                </div>


                </div>
                    </div>
                </div>
                

             
            </div>
            
           
           
        </div>
    
        )
    }
}

export default QuoteComponent
