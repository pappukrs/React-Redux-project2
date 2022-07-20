import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {incCount,decCount,resetCount,doubleCount,halfCount,cubeCount,squareCount} from '../Redux/action'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Counter = () => {

    const {count}=useSelector((state)=>state);
    console.log(count);
    const dispatch=useDispatch();

  return (
    <>
    <div>{count}</div>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button onClick={()=>dispatch(resetCount())} >RESET</Button>
    </ButtonGroup>
    <br/>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button onClick={()=>dispatch(incCount(1))} >INCRE</Button>
    <Button onClick={()=>dispatch(decCount(1))}>DECRE</Button>
    </ButtonGroup>
    <br/>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button  onClick={()=>dispatch(doubleCount())}>DOUBLE</Button>
    <Button onClick={()=>dispatch(halfCount())}>HALF</Button>
    </ButtonGroup>
    <br/>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button onClick={()=>dispatch(squareCount())}>SQUARE</Button>
    <Button onClick={()=>dispatch(cubeCount())}>CUBE</Button>
    </ButtonGroup>
    <br/>
    

    </>
  )
}

export default Counter