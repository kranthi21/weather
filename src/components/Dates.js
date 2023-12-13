import React, { Component } from "react";
// import Dates from "./Dates";
import Dayslist from "./Dayslist";

class Dates extends Component {
    constructor(props){
        super(props);
        this.state = {
            to : '',
            from : '',
            show:'no'
        }
    }

    onToChange = (event) => {
        this.setState({to:event.target.value});
    }

    onFromChange = (event) => {
        this.setState({from:event.target.value});
    }
    
    onSubmitDate = () =>{
        const {to, from, show} = this.state;
        if(!to || !from){
            alert("please fill the fields correctly");
        }
        else{
            this.setState({show:"yes"});
            console.log(to, from);
            const getDayName = (inputDate) => {
                const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const dt = new Date(inputDate);
                // if (typeof dt === 'object' && dt !== null && 'getDate' in dt) {

                //     console.log("The data type is", typeof dt)
                
                //     // Print the day of the month
                //     console.log(dt.getDate())
                
                // }
                const dayIndex = dt.getDay();
                return dayNames[dayIndex];

                
            };
            
            const dayName = getDayName(new Date(to));
      
         console.log( dayName);
        }

    }

    render() {
        const {to, from} = this.state;
        return (
            <div>
                <div class="measure center dib">
                    <fieldset id="date-field" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Weather</legend>
                        <div className="mt3">
                            <label className=" fw6 lh-copy f6" for="fromdate">From</label>
                            <input 
                                onChange={this.onFromChange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="date" name="fromdate" id="fromdate" />
                        </div>
                        <div className="mv3">
                            <label className=" fw6 lh-copy f6" for="todate">To</label>
                            <input 
                                onChange={this.onToChange}
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="date" name="todate" id="todate" />
                        </div>
                    </fieldset>
                    <div class="">
                        <input
                            onClick={this.onSubmitDate} 
                            class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />
                    </div>
                </div>
                {
                    this.state.show === "yes"?
                    <div className="center mt4">
                        <legend className="f4 fw6 ph0 mh0">Forecast</legend>
                        <Dayslist to= {to} from = {from}/>
                    </div>
                    :
                    
                    <div/>
                }
                
                
                
            </div>
        );
    }
}

export default Dates;