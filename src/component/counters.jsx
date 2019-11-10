import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    state = { 
        counters :[
            { id:1, values :4 },
            { id:2, values :3 },
            { id:3, values :0 },
            { id:4, values :5 }
        ]
     }
    render() { 
    return ( 
        <div>
           {this.state.counters.map(counter=>(
           <Counter key={counter.id} value={counter.values}/>
           ))}
        </div>
        );
    }
}
 
export default Counters;