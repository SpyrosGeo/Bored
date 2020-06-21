import React, { useState } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography, Container } from '@material-ui/core'
import './App.css';
import Selector from './components/Selector';




function App() {
  const [activity, setActivity] = useState('')
  const [background, setBackground] = useState('')
  const [activityType, setActivityType] = useState('education')
  const useStyles = makeStyles(theme => ({
    title:{
      marginTop:'2rem',
      marginBottom:'0px',
    },
    subtitle:{
      fontSize:'1rem',
      marginBottom:'2rem',
      letterSpacing: '0.345rem'

    },
    activityStyle: {
      padding:'2rem 2rem',
      color: 'white',
      backgroundColor:"rgba(171, 171, 171,0.5)"

    },
    paper: {
      color: 'white',
      padding:"2rem",
      marginBottom: '3rem',
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      [theme.breakpoints.up('md')]:{
        padding:'15rem'
      }
    },
    container:{

    }
  }));
  const classes = useStyles();


  const getActivity = () => {
    axios.get('http://www.boredapi.com/api/activity/', {
      params: {
        type: activityType,
      }
    }).then(res => {
      const { data } = res
      setActivity(data.activity)
      switch (data.type) {
        case 'music':
          setBackground('https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80')
          break;
        case 'recreational':
          setBackground('https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2202&q=80')
          break;
        case 'social':
          setBackground('https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80')
          break;
        case 'diy':
          setBackground('https://images.unsplash.com/photo-1540103711724-ebf833bde8d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')
          break;
        case 'charity':
          setBackground('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80')
          break;
        case 'cooking':
          setBackground('https://images.unsplash.com/photo-1549590143-d5855148a9d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80')
          break;
        case 'relaxation':
          setBackground('https://images.unsplash.com/photo-1512552288940-3a300922a275?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80')
          break;
        case 'busywork':
          setBackground('https://images.unsplash.com/photo-1485965373059-f07657e9f841?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80')
          break;
          default:
          setBackground('https://images.unsplash.com/photo-1551643556-0e32e30fc8e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80')
          break;
      }
    })
  }
  const handleSelectType = (e) => {
    setActivityType(e.target.value)
  }

  return (
    <div className="App">
      <Typography className={classes.title} variant="h2">Bored?</Typography>
      <Typography className={classes.subtitle} variant="caption">Let me suggest something</Typography>
      {activity ?

        <Container className={classes.container}>
          <Paper className={classes.paper}  elevation={3} ><Typography className={classes.activityStyle} variant="h4">{activity}</Typography></Paper>
        </Container>
        : ""
      }
      <Selector
        activityType={activityType}
        getActivity={getActivity}
        handleSelectType={handleSelectType} />
    </div>
  );
}

export default App;
