import React, { useContext } from 'react';
import FirstStep from '../FirstStep/FirstStep';
import {StepLabel,  Stepper, Step} from '@material-ui/core'
import {multiStepContext} from '../StepContext/StepContext'
import Header from './Header/Header';
import GeneralRating from '../GeneralRating/GeneralRating';
import CookgnKitchen from '../CookgnKitchen/CookgnKitchen';
import SpoilageInformation from '../SpoilageInformation/SpoilageInformation';
import LiquorInformation from '../LiquorInformation/LiquorInformation';
import BarTavern from '../BarTavern/BarTavern';
import Remarks from '../Remarks/Remarks';
import AdditionalRemarks from '../AdditionalRemarks/AdditionalRemarks';
import Signature from '../Signature/Signature';


const FormMin = () => {
    const {currentStep,setStep, finalData, setUserData, userData} = useContext(multiStepContext);
    const handleBlur = e =>{
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = e =>{

        console.log(userData);
        setUserData('')
        setStep(1)
    }

    function showStep(step){
        switch(step){
            case 1:
                return <FirstStep handleBlur={handleBlur}/>
            case 2:
                return <GeneralRating handleBlur={handleBlur}/>
            case 3:
                return <CookgnKitchen handleBlur={handleBlur}/>
            case 4:
                return <SpoilageInformation handleBlur={handleBlur}/>
            case 5:
                return <LiquorInformation handleBlur={handleBlur}/>
            case 6:
                return <BarTavern handleBlur={handleBlur} />
            case 7:
                return <Remarks handleBlur={handleBlur} />
            case 8:
                return <AdditionalRemarks handleBlur={handleBlur} />
            case 9:
                return <Signature handleBlur={handleBlur} handleSubmit={handleSubmit}/>
        }
    }

    return (
        <>
            <Header/>
            <Stepper style={{width: '100%'}} activeStep={currentStep - 1} orientation="horizontal">
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
            </Stepper>
            {showStep(currentStep)}
        </>
    );
};

export default FormMin;