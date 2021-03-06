import { useEffect, useState } from 'react'
import validation from '../../components/ValidateProfileSettings';
import AcDetails from './AcDetails';

function ProfileUpdate(submit) {

    const [teachProfilepic,profileDetails] = AcDetails();
    
    const [values, setvalues] = useState({firstName:"",lastName:"",userName:"",phoneNumber:"",email:"",address:"",des:""});
    const [errors, seterrors] = useState({firstName:"",lastName:"",userName:"",phoneNumber:"",email:"",address:"",des:""});
    const [hide, sethide] = useState({firstName:false,lastName:false,userName:false,email:false,phoneNumber:false,phonenumber:false,address:false,des:false});
    const [isSibmitting, setisSibmitting] = useState(false);
    const [inputField, setinputField] = useState([]);
    const [inputFieldED, setinputFieldED] = useState([]);
    const [fini, setfini] = useState(false);
    const [fidi, setfidi] = useState(false);
    
    //set database values to fields
    useEffect(() => {
        setvalues({...values,firstName:profileDetails.name,lastName:profileDetails.lname,phoneNumber:profileDetails.phoneNumber,email:profileDetails.email,userName:profileDetails.userName,des:profileDetails.des})
        
        setinputField([{ex:profileDetails.ex1},{ex:profileDetails.ex2},{ex:profileDetails.ex3}]);
        setinputFieldED([{ed:profileDetails.ed1},{ed:profileDetails.ed2},{ed:profileDetails.ed3}]);
        setfini(true);
        setfidi(true);

    }, [profileDetails])

    useEffect(() => {
        //removing empty objects in experience and education fields
        if(fini){
            const cl = [...inputField];
            inputField.map((fini,index)=>(
                (fini.ex === null || fini.ex === undefined )? cl.splice(index,1) : ''
                ))
                setinputField(cl);
                setfini(false)
        }
        if(fidi){
            const cled = [...inputFieldED];
            inputFieldED.map((fini,index)=>(
                (fini.ed === null || fini.ed === undefined) ? cled.splice(index,1) : ''
            ))
                setinputFieldED(cled);
                setfidi(false)
        }
    })

    //set values to states
     const hadelChange =(e)=>{
         const {name,value} = e.target
        setvalues({
            ...values,[name]:value
        })
     }

     //handel dynamic input fields and set values
     const hadelInputField = (index,e) =>{
         const values = [...inputField];
         values[index][e.target.name] = e.target.value;
         setinputField(values);
     }
     const hadelCreateExField = () =>{
        inputField.map(refil =>(
            console.log(refil.ex)
        ))

         if(inputField.length !==3){
             setinputField([...inputField,{"ex":""}]);
         }
     }
     const hadelRemoveField = (index) =>{
         const values = [...inputField];
         values.splice(index,1);
         setinputField(values);
     }


    //handel dynamic Education 
    const hadelInputFieldED = (index,e) =>{
        const values = [...inputFieldED];
        values[index][e.target.name] = e.target.value;
        setinputFieldED(values);
    }
    const hadelCreateExFieldED = () =>{
        if(inputFieldED.length !==3){
            setinputFieldED([...inputFieldED,{"ed":""}]);
        }
    }
    const hadelRemoveFieldED = (index) =>{
        const values = [...inputFieldED];
        values.splice(index,1);
        setinputFieldED(values);
    }

     //hadel form submit
     const hadelSubmitForm = (e)=> {
        e.preventDefault();
        //hadlling errors
        seterrors(validation(values));
        sethide({firstName:false,lastName:false,userName:false,email:false,phoneNumber:false,phonenumber:false,address:false,des:false});
        setisSibmitting(true);
     };
     const hideError = (e)=>{
        Object.entries(errors).map(([keys,val]) =>{
            if(keys === e.target.name && val !== ""){
                sethide({...hide,[e.target.name]:true});
            }
        })
    }
     

     useEffect(() => {
        if(Object.keys(errors).length === 0 && isSibmitting){
            submit();
        }
     }, [errors])

    return ([hadelChange,hadelSubmitForm,values,errors,hide,hideError,hadelInputField,hadelCreateExField,hadelRemoveField,inputField,hadelInputFieldED,hadelCreateExFieldED,hadelRemoveFieldED,inputFieldED])
}

export default ProfileUpdate
