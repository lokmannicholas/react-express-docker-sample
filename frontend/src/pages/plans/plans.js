import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableFooter } from '@material-ui/core';
import  CheckIcon  from '@material-ui/icons/Check';
import CloseIcon  from '@material-ui/icons/Close';
import SweetAlert from "react-bootstrap-sweetalert";
import ReactLoading from 'react-loading';

import "../../App.css";


// Redux
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { getPlans,getFeatures,apiError } from '../../store/actions';



class Plans extends Component {
    constructor(props) {
      super(props);
      this.state = {
          currentOrder:{},
          editModal: false,
          selectedValue: null,
          tried:0,
      };
      this.handleChange = this.handleChange.bind(this)
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.Plan !== this.props.Plan){
            nextState.editModal = false
        }
    }
    
    componentDidMount = async () => {
      this.props.apiError("");
      this.props.getFeatures()
      this.props.getPlans()
    }
    onConfirm = () => {
      this.setState((prev)=>{tried:prev.tried++})
      this.props.apiError("");
      this.props.getFeatures()
      this.props.getPlans()
    }
    handleChange = (event) => {
      this.setState({selectedValue:event.target.value})
    };
    render() {
          const {features,loading,plans} = this.props
          console.log(this.props)
          function createData(features, plans) {
            let data = {features}
            plans.map((plan)=>{
              data[plan.planName] = plan.features[features]
            })
            return data;
          }
          
          
          const rows =()=>{
            let r=[]
            features.forEach((feature)=>{
              r.push(createData(feature, plans))
            })
            return r
          }

        return (
            <React.Fragment>
              

               {this.props.error ? (
                  <SweetAlert
                    title={this.state.tried > 0 ?"API failed "+this.state.tried+" times":"API Failed"}
                    danger
                    onConfirm={this.onConfirm}
                  >
                    {this.props.error.message}
                  </SweetAlert>
                ) : null}
               <CssBaseline />
                    <Container maxWidth="sm" component="main" >
                        <Typography component="h5" variant="h4" align="center" color="textPrimary" gutterBottom>
                        Choose a plan
                        </Typography>
                    </Container>
                    <Container component="main">
                        <Grid container  >
                        {features.length ===0 ||  plans.length === 0 || loading?<ReactLoading type={'spin'} color="textPrimary" height={'20%'} width={'20%'} />:
                        <Grid item xs={12}>

                        <TableContainer component={Paper}>
                                  <Table aria-label="simple table">
                                    <TableHead>
                                      <TableRow>
                                      <TableCell component="th" align="center"></TableCell>
                                        {
                                          plans.map((plan,i)=>{
                                              return <TableCell key={i} align="center" >
                                                <Button variant="outlined">{plan.planName}</Button>
                                              </TableCell>
                                          })
                                        }
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {rows().map((row,rowIndex) => (
                                          <TableRow key={row.features}>
                                            <TableCell component="th" scope="row">
                                              {row.features}
                                            </TableCell>
                                            {
                                              plans.map((plan,i)=>{
                                                return <TableCell key={i} align="center">{row[plan.planName]?<CheckIcon/>:<CloseIcon/>}</TableCell>
                                            })
                                            }
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                    <TableFooter>
                                    <TableRow>
                                      <TableCell  align="center"></TableCell>
                                      {
                                        
                                        plans.map((plan,i)=>{
                                          return <TableCell key={i} align="center">
                                            <FormControlLabel
                                              value={plan.planName}
                                              control={<Radio
                                                checked={(this.state.selectedValue===plan.planName)}
                                                onChange={this.handleChange}
                                              />}
                                              label={<p className="radiop">HK${plan.price}<span className="radiospan">/Month</span></p>}
                                            />
                                          </TableCell>
                                                  
                                      })
                                      }
                                      </TableRow>
                                    </TableFooter>
                                  </Table>
                                </TableContainer>
                                </Grid>
                          }
                        </Grid>
                        
                    </Container>
                   
            </React.Fragment>
        );
    }
}


const mapStatetoProps = state => {
  const { plans,features,error,loading } = state.Plan;
  return { plans,features, error,loading };
}

export default withRouter(connect(mapStatetoProps, { getPlans,getFeatures,apiError })(Plans));
