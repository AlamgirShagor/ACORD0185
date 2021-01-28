import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const SpoilageInformation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h5>SPOILAGE INFORMATION</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <h6>EXPLAIN ALL "YES" RESPONSES UNLESS STATED OTHERWISE</h6>
                    </div>
                    <div className="col-1">
                        <h6>Y/N</h6>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">1. IS THERE A REFRIGERATOR / FREEZER, WALK-IN OR OTHERWISE, ON SITE FOR COLD STORAGE OF FOOD AND BEVERAGES? (If "NO", proceed to next section)</label>

                        <label className="ml-2" htmlFor="">a. HOW LONG CAN REFRIGERATED SPACES HOLD THE TEMPERATURE REQUIRED BEFORE CONTENTS SPOIL?</label>
                    </div>
                    <div className="col-1">
                        <input type="text" onChange={handleBlur} name="Y/N" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">2. DOES THE REFRIGERATION SYSTEM UTILIZED HAVE ANY SPARE CAPACITY? (If "YES", explain)</label>

                        <textarea name="2. DOES THE REFRIGERATION" onChange={handleBlur} className="form-control ml-2" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text" onChange={handleBlur} name="Y/N" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                <div className="col-11">
                        <label htmlFor="">3. IS THERE A WRITTEN SERVICE / MAINTENANCE CONTRACT FOR ALL REFRIGERATION / COOLING EQUIPMENT? (If "YES", attach copy of contract))</label>
                    </div>
                    <div className="col-1">
                        <input type="text" onChange={handleBlur} name="Y/N" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                <div className="col-11">
                        <label htmlFor="">4. DOES A CONTINGENCY PLAN EXIST IN THE EVENT THERE IS A LOSS OF REFRIGERATION? (If "YES", indicate type of plan(s)</label>
                        <div className="row ml-2">
                            <div className="col-3">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ALTERNATIVE POWER SOURCE"
                                    class="custom-control-input"
                                    id="ALTERNATIVE POWER SOURCE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="ALTERNATIVE POWER SOURCE">ALTERNATIVE POWER SOURCE</label>
                                </div>
                            </div>
                            <div className="col-3">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TEMPORARY STORAGE LOCATION"
                                    class="custom-control-input"
                                    id="TEMPORARY STORAGE LOCATION"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="TEMPORARY STORAGE LOCATION">TEMPORARY STORAGE LOCATION</label>
                                </div>
                            </div>
                            <div className="col-3">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="OTHER"
                                    class="custom-control-input"
                                    id="OTHER"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="OTHER">OTHER </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input type="text" onChange={handleBlur} name="Y/N" className="form-control mt-2"/>
                    </div>
                </div>
                <div className="row">
                <div className="col-11">
                        <label htmlFor="">5. DO REFRIGERATED SPACES HAVE TEMPERATURE ALARMS (HIGH / LOW) INSTALLED? (If "YES", indicate where they alarm)</label>
                        <div className="row ml-2">
                            <div className="col-3">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="LOCAL"
                                    class="custom-control-input"
                                    id="LOCAL"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="LOCAL">LOCAL</label>
                                </div>
                            </div>
                            <div className="col-3">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="PAGING"
                                    class="custom-control-input"
                                    id="PAGING"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="PAGING">PAGING</label>
                                </div>
                            </div>
                            <div className="col-3">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="CENTRAL"
                                    class="custom-control-input"
                                    id="CENTRAL"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="CENTRAL">CENTRAL</label>
                                </div>
                            </div>
                            <div className="col-3">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="OTHER"
                                    class="custom-control-input"
                                    id="OTHER"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="OTHER">OTHER </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input type="text" onChange={handleBlur} name="Y/N" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">6. IS AMMONIA USED AS A REFRIGERANT? (If "YES", provide spare capacity)</label>
                        <div className="row ml-2">
                            <label htmlFor="" className="mt-2">a. ARE AMMONIA SENSING DEVICES IN EACH REFRIGERATED SPACE? (If "YES", provide answer to 6.b.)</label>
                            <label htmlFor="" className="mt-2">b. IS AUTOMATIC SHUTOFF TIED TO SENSING SYSTEM? (No explanation needed) </label>
                        </div>
                    </div>
                    <div className="col-1">
                        <input type="text" onChange={handleBlur} name="Y/N" className="form-control"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">7. CAN REFRIGERATED SPACES BE ISOLATED FROM ONE ANOTHER IN THE EVENT OF AN AMMONIA LEAK?</label>
                        <div className="row ml-2">
                            <textarea name="CAN REFRIGERATED SPACES" id="" nChange={handleBlur} className="form-control" cols="30" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-1">
                        <input type="text" onChange={handleBlur} name="Y/N" className="form-control"/>
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(3) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(5) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default SpoilageInformation;