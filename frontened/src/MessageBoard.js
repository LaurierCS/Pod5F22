import drink from "../src/images/drink.png";
import {useState} from 'react';


const MessageBoard = () => {

    const [comments,setComments] = useState([]);
    const [name,setName] = useState('');
    const [comment, setComment] = useState('');


    const handleAddComment= ()=> {
        setComments([...comments, {name,comment}]);
        setComment('');
        setName('');
    };
    return ( 
        <div className="messageboard">
            <h1>Message Board</h1>
            <div className="spot">
                <img width="100%" height="100%" src={drink} />
            </div>
            <div className="comment">
                <form>
                    <label>Your Name</label>
                    <input
                    type="text"
                    required
                    value={name}
                    onChange= {(e) => setName(e.target.value)}
                    placeholder="Name"
                    />
                    <label>Comment</label>
                    <textarea 
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Comment"
                    ></textarea>
                    <button onClick={handleAddComment}>Submit</button>
                </form>
                <ul>
                    {comments.map((c,index) => (
                        <li key={index}>{c.name}:{c.comment}</li>

                    ))}
                </ul>

            </div>
        </div>
     );
}
 
export default MessageBoard;