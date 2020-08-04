import React from "react";
import {Card, CardBody, Button, CardHeader, CardFooter} from "reactstrap";

class Form extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Card style={{marginLeft:'20%',marginRight:'20%',marginTop:'10%'}}>
                    <CardHeader>
                    <h3 style={{textAlign:'center'}}>WEATHER APP</h3>
                    </CardHeader>
                    <CardBody>
                        <form onSubmit={this.props.getWeather}>
                            <input className="form-control" type='text' placeholder='city' name='city'/>
                        <br/>
                            <input className="form-control" type='text' placeholder='country' name='country'/>
                        <br/>
                            <div style={{textAlign:'center'}}>
                                <Button>Submit</Button>
                            </div>
                        </form> 
                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                </Card>
            </React.Fragment>
        )
    }
}

export default Form;