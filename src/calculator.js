import React, {useState} from 'react';
import './calculator.css';

const Calculator = () => {
    let hold = 0.0;
    let hold2 = 0.0;
    
    
    
    
    
    
    const [Number, setNum] = useState('');
    const [oper, setOper] = useState('');
    
    const [Number2, setNum2] = useState();
    
    const [final, setFinal] = useState();
    const [helper, setHelper] = useState();
    const [operStatus, setOperStatus] = useState('false');
    

    //const [count, setCount] = useState('mult');
    
    
    

    
    const handleClick = (num) => {
        if(num === 'reset'){
            
            setNum('');
            setOper('');
            setNum2();
            setFinal();
            setOperStatus('false');

        }
        
      else if(num === '-' || num === '+' || num === '/' || num ==='x'){
          if(operStatus === 'true'){
              return
          }
          else if(operStatus === 'false' && Number === ''){
              return
          }
          

          setOperStatus('true');
        //setFinal1(N)
        
        
        
        setNum(Number + num);
        setHelper(final);
        setOper(num);
        setNum2('');
        
        
        
        
        
      }
      else if(num =='√'){

      }
      else if(num ==='='){
        
          if(oper === '-'){
            
            hold = parseInt(helper);
            hold2 = parseInt(Number2);
            setNum(hold - hold2);
            setNum2(final);
            setOperStatus('false');
            
            

          }
          else if(oper === '+'){
            
                hold = parseInt(helper);
                hold2 = parseInt(Number2);
                console.log("helper: " + helper);
        console.log("number 2: " + Number2);
        console.log("hold: " + hold);
        console.log("hold2: " + hold2);
            
            
            
            
              

            setNum(hold + hold2);
            setNum2(final);
            setOperStatus('false');
            
              
            
            
            
            
            
            
            
            
            
          }
          else if(oper === '/'){
            hold = parseInt(helper);
            hold2 = parseInt(Number2);
            console.log(helper);
            console.log(hold2);
            
          
            setNum((hold) / (hold2));
            setNum2(final);
          
            setOperStatus('false');
         
              
          }
        
        else if(oper === 'x'){
          hold = parseInt(helper);
          hold2 = parseInt(Number2);
          console.log(helper);
          console.log(hold2);
          
        
          setNum(hold * hold2);
            setNum2(final);
            setOperStatus('false');
            
        }
    }
     
        
      else{
        
        hold = Number + num;
        hold2 = Number2 + num;
        
        console.log("helper: " + helper);
        console.log("number 2: " + Number2);
        console.log("hold: " + hold);
        console.log("hold2: " + hold2);
        
        setHelper(hold);
        setNum(hold);
        setNum2(hold2);
        
      }
      
      
      
      
        
    };
    
    

    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)}>{num}</td>
    };
    
    
    
    return (
        <div className='container'>
            <div className='bg'>

            
            <h1>Calculator</h1>
            <div className='header'>
                {final}
                {Number}
  
            </div>
            <div className='top'>
                <Cell num={'reset'}/>
                    
  
            </div>
            <table>
                <tbody>
                
               
                
                <tr>
                    <Cell num={1}/>
                    
                    <Cell num={2}/>
                    <Cell num={3}/>
                    <Cell num={'+'}/>
                    
                </tr>
                <tr>
                    <Cell num={4}/>
                    <Cell num={5}/>
                    <Cell num={6}/>
                    <Cell num={'-'}/>
                </tr>
                <tr>
                    <Cell num={7}/>
                    <Cell num={8}/>
                    <Cell num={9}/>
                    <Cell num={'/'}/>
                </tr>
                <tr>
                    <Cell num={0}/>
                    
                    <Cell num={'='}/>
                    <Cell num={'x'}/>
                </tr>
                </tbody>
            
            
            </table>
            </div>
            
            
            
        
        </div>
    );
};

export default Calculator;