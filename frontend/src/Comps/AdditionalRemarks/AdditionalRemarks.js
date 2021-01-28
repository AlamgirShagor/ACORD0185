import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const AdditionalRemarks = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-6">
                        <h5>REMARKS (ACORD 101, Additional Remarks Schedule, may be attached if more space is required)</h5>
                    </div>
                    <div className="col-6">
                    <div className="row d-flex justify-content-end">
                        <div className="col">
                            <div className="row ">
                                <div className="col-4">
                                    <label htmlFor="">AGENCY CUSTOMER ID:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                    type="text"
                                    onChange={handleBlur}
                                    name="AGENCY"
                                    className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-end mt-1">
                    <div className="col">
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                <div className="col-4">
                                    <label htmlFor="">LOC #:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                    type="text"
                                    placeholder="LOC"
                                    onChange={handleBlur}
                                    name="LOC"
                                    className="form-control"
                                    />
                                </div>
                                </div>
                            </div>
                            <div className="col-6">
                            <div className="row">
                                <div className="col-4">
                                    <label htmlFor="">BLDG #:</label>
                                </div>
                                <div className="col-8">
                                    <input
                                    type="text"
                                    placeholder="BLDG"
                                    onChange={handleBlur}
                                    name="BLDG"
                                    className="form-control"
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                    <textarea name="REMARKS" className="form-control my-2" onChange={handleBlur} id="" cols="30" rows="10"></textarea>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(7) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(9) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default AdditionalRemarks;