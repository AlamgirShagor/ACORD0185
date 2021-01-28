import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const Remarks = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col-8">
                        <h5>REMARKS</h5>
                    </div>
                    <div className="col-4">
                        <h5>ATTACHMENTS</h5>
                    </div>
                </div>
                <div className="row d-flex justify-content-end">
                    <div className="col-4">
                                <div class="custom-control custom-checkbox my-1">
                                    <input
                                    type="checkbox"
                                    name="FINANCIAL STATEMENT"
                                    class="custom-control-input"
                                    id="FINANCIAL STATEMENT"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="FINANCIAL STATEMENT">FINANCIAL STATEMENT</label>
                                </div>
                                <div class="custom-control custom-checkbox my-1">
                                    <input
                                    type="checkbox"
                                    name="PHOTOS"
                                    class="custom-control-input"
                                    id="PHOTOS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" for="FINANCIAL STATEMENT">PHOTOS</label>
                                </div>
                    </div>
                </div>
                <div className="row">
                    <textarea name="REMARKS" onChange={handleBlur} className="form-control" id="" cols="30" rows="8"></textarea>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(6) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(8) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default Remarks;