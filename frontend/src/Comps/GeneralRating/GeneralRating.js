import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const GeneralRating = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                    <div className="col">
                        <h5>GENERAL RATING / UNDERWRITING</h5>
                        <p>RECEIPTS (LAST 3 YEARS)</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="row " style={{marginTop: "33px"}}>
                            <div className="col-2">
                                <label htmlFor="">YEAR:</label>
                            </div>
                            <div className="col-10">
                                <input
                                 type="text"
                                 onChange={handleBlur}
                                 name="YEAR"
                                 className="form-control"
                                 />
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col-2">
                                <label htmlFor="">YEAR:</label>
                            </div>
                            <div className="col-10">
                                <input
                                 type="text"
                                 onChange={handleBlur}
                                 name="YEAR"
                                 className="form-control"
                                 />
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col-2">
                                <label htmlFor="">YEAR:</label>
                            </div>
                            <div className="col-10">
                                <input
                                 type="text"
                                 onChange={handleBlur}
                                 name="YEAR"
                                 className="form-control"
                                 />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row text-center">
                            <div className="col">
                                <label htmlFor="">FOOD</label>
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col">
                                <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                    </div>
                                    <input type="text" class="form-control" name="FOOD" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row my-1">
                        <div className="col">
                                <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                    </div>
                                    <input type="text" class="form-control" name="FOOD" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                        <div className="row my-1">
                            <div className="col">
                                <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                    </div>
                                    <input type="text" class="form-control" name="FOOD" onChange={handleBlur}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="row text-center">
                                <div className="col ">
                                    <label htmlFor="">LIQUOR</label>
                                </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col my-1">
                                    <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                        </div>
                                        <input type="text" class="form-control" name="LIQUOR" onChange={handleBlur}/>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-1">
                                    <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                        </div>
                                        <input type="text" class="form-control" name="LIQUOR" onChange={handleBlur}/>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-1">
                                    <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                        </div>
                                        <input type="text" class="form-control" name="LIQUOR" onChange={handleBlur}/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row my-1">
                                    <div className="col">
                                        <input type="text" class="form-control" name="% OF TOTAL SALES" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col">
                                        <input type="text" class="form-control" name="% OF TOTAL SALES" onChange={handleBlur}/>
                                    </div>
                                </div>
                                <div className="row my-1">
                                    <div className="col">
                                        <input type="text" class="form-control" name="% OF TOTAL SALES" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                                <div className="row text-center">
                                    <div className="col">
                                        <label htmlFor="">OTHER (Describe Below)</label>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col my-1">
                                            <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                <div class="input-group-text">@</div>
                                                </div>
                                                <input type="text" class="form-control" name="OTHER" onChange={handleBlur}/>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col my-1">
                                            <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                <div class="input-group-text">@</div>
                                                </div>
                                                <input type="text" class="form-control" name="OTHER" onChange={handleBlur}/>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col my-1">
                                            <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                <div class="input-group-text">@</div>
                                                </div>
                                                <input type="text" class="form-control" name="OTHER" onChange={handleBlur}/>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col my-1">
                                                <input type="text" class="form-control" name="OTHER" onChange={handleBlur}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col my-1">
                                                <input type="text" class="form-control" name="OTHER" onChange={handleBlur}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col my-1">
                                                <input type="text" class="form-control" name="OTHER" onChange={handleBlur}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">FINANCIAL INFORMATION - MOST RECENT 12 MONTH PERIOD</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-8">
                                <label style={{fontSize:"14px"}}>TOTAL OPERATING EXPENSES (FOOD AND LIQUOR ONLY)</label>
                            </div>
                            <div className="col-4">
                                <div className="col my-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                        </div>
                                            <input type="text" class="form-control" name="TOTAL OPERATING EXPENSES" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <label style={{fontSize:"14px"}}>TOTAL OPERATING EXPENSES (OTHER THAN COST OF FOOD AND LIQUOR)</label>
                            </div>
                            <div className="col-4">
                                <div className="col my-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                        </div>
                                            <input type="text" class="form-control" name="TOTAL OPERATING EXPENSES" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <label style={{fontSize:"14px"}}>NET PROFIT OR LOSS (IF LOSS, ATTACH FINANCIAL STATEMENT)</label>
                            </div>
                            <div className="col-4">
                                <div className="col my-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                        </div>
                                            <input type="text" class="form-control" name="NET PROFIT OR LOSS" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-8">
                                <label style={{fontSize:"14px"}}>ACCOUNTS PAYABLE</label>
                            </div>
                            <div className="col-4">
                                <div className="col my-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                        </div>
                                            <input type="text" class="form-control" name="TOTAL OPERATING EXPENSES" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <label style={{fontSize:"14px"}}>BANK LOANS PAYABLE</label>
                            </div>
                            <div className="col-4">
                                <div className="col my-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                        </div>
                                            <input type="text" class="form-control" name="TOTAL OPERATING EXPENSES" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <label style={{fontSize:"14px"}}>NOTES PAYABLE (NOT TO BANKS)</label>
                            </div>
                            <div className="col-4">
                                <div className="col my-1">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                        <div class="input-group-text">@</div>
                                        </div>
                                            <input type="text" class="form-control" name="NET PROFIT OR LOSS" onChange={handleBlur}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                       <div className="row text-center">
                        <label htmlFor="">TYPE OF BUSINESS - CHECK ONLY ONE</label>
                       </div>
                       <div className="row">
                           <div className="col-6">
                               <label style={{fontSize: "15px"}} htmlFor="">RESTAURANT TYPE</label>
                               <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="DELI"
                                    class="custom-control-input"
                                    id="DELI"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="DELI">DELI</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="BAR"
                                    class="custom-control-input"
                                    id="BAR"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="BAR">BAR</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="TAVERN"
                                    class="custom-control-input"
                                    id="TAVERN"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="TAVERN">TAVERN</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FAST FOOD"
                                    class="custom-control-input"
                                    id="FAST FOOD"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="FAST FOOD">FAST FOOD</label>
                                </div>
                           </div>
                           <div className="col-6">
                                <label htmlFor="">BUSINESS TYPE</label>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="FRANCHISED"
                                    class="custom-control-input"
                                    id="FRANCHISED"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="FRANCHISED">FRANCHISED</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="NOT FRANCHISED"
                                    class="custom-control-input"
                                    id="NOT FRANCHISED"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="NOT FRANCHISED">NOT FRANCHISED</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="PRIVATE/MEMBERSHIP"
                                    class="custom-control-input"
                                    id="NOT FRANCHISED"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="NOT FRANCHISED">NOT FRANCHISED</label>
                                </div>
                                <label htmlFor="">MEMBERSHIP</label>
                                <input type="text" class="form-control" name="MEMBERSHIP" onChange={handleBlur}/>
                           </div>
                       </div>
                       <div className="row">
                    <div className="col">
                        <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="RESTAURANT WITHOUT TABLE SERVICE"
                                    class="custom-control-input"
                                    id="RESTAURANT WITHOUT TABLE SERVICE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="RESTAURANT WITHOUT TABLE SERVICE">RESTAURANT WITHOUT TABLE SERVICE</label>
                                </div>
                        </div>
                </div>
                <div className="row">
                        <div className="col">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="RESTAURANT WITH TABLE SERVICE"
                                    class="custom-control-input"
                                    id="RESTAURANT WITH TABLE SERVICE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="RESTAURANT WITH TABLE SERVICE">RESTAURANT WITH TABLE SERVICE</label>
                                </div>
                        </div>
                    </div>
                </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-2">
                                <div className="row">
                                    <div className="col">
                                        <label style={{fontSize:"14px", textAlign:"center"}} htmlFor="">HOURS OF OPERATION</label>

                                        <label htmlFor="" style={{marginTop: "10px"}} >SUNDAY</label>
                                        <br/>
                                        <label htmlFor="" style={{marginTop: "10px"}} >MONDAY</label>
                                        <br/>
                                        <label htmlFor="" style={{marginTop: "10px"}} >TUESDAY</label>
                                        <br/>
                                        <label htmlFor="" style={{marginTop: "10px"}} >WEDNESDAY</label>
                                        <br/>
                                        <label htmlFor="" style={{marginTop: "10px"}} >THURSDAY</label>
                                        <br/>
                                        <label htmlFor="" style={{marginTop: "10px"}} >FRIDAY</label>
                                        <br/>
                                        <label htmlFor="" style={{marginTop: "10px"}} >SATURDAY</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                    <div className="row">
                                        <div className="col">
                                            <label  style={{fontSize:"14px", textAlign:"center"}} htmlFor="">24 HOUR OPERATION? (Y / N)</label>
                                        </div>
                                    </div>
                                    <input
                                    type="text"
                                    name=""
                                    class="form-control my-1"
                                    id="SUNDAY"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="text"
                                    name=""
                                    class="form-control my-1"
                                    id="MONDAY"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="text"
                                    name=""
                                    class="form-control my-1"
                                    id="TUESDAY"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="text"
                                    name=""
                                    class="form-control my-1"
                                    id="WEDNESDAY"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="text"
                                    name=""
                                    class="form-control my-1"
                                    id="THURSDAY"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="text"
                                    name=""
                                    class="form-control my-1"
                                    id="FRIDAY"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="text"
                                    name="OPENING TIME"
                                    class="form-control my-1"
                                    id="SATURDAY"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                    <div className="row text-center">
                                        <div className="col">
                                            <label  style={{fontSize:"14px", textAlign:"center"}} htmlFor="">OPENING TIME</label>
                                        </div>
                                    </div>
                                    <input
                                    type="time"
                                    name="OPENING TIME"
                                    class="form-control my-1"
                                    id="OPENING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="OPENING TIME"
                                    class="form-control my-1"
                                    id="OPENING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="OPENING TIME"
                                    class="form-control my-1"
                                    id="OPENING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="OPENING TIME"
                                    class="form-control my-1"
                                    id="OPENING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="OPENING TIME"
                                    class="form-control my-1"
                                    id="OPENING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="OPENING TIME"
                                    class="form-control my-1"
                                    id="OPENING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="OPENING TIME"
                                    class="form-control my-1"
                                    id="OPENING TIME"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-2">
                                    <div className="row text-center">
                                        <div className="col">
                                            <label  style={{fontSize:"14px", textAlign:"center"}} htmlFor="">CLOSING TIME</label>
                                        </div>
                                    </div>
                                    <input
                                    type="time"
                                    name="CLOSING TIME"
                                    class="form-control my-1"
                                    id="CLOSING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="CLOSING TIME"
                                    class="form-control my-1"
                                    id="CLOSING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="CLOSING TIME"
                                    class="form-control my-1"
                                    id="CLOSING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="CLOSING TIME"
                                    class="form-control my-1"
                                    id="CLOSING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="CLOSING TIME"
                                    class="form-control my-1"
                                    id="CLOSING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="CLOSING TIME"
                                    class="form-control my-1"
                                    id="CLOSING TIME"
                                    onChange={handleBlur}
                                    />
                                    <input
                                    type="time"
                                    name="CLOSING TIME"
                                    class="form-control my-1"
                                    id="CLOSING TIME"
                                    onChange={handleBlur}
                                    />
                            </div>
                            <div className="col-4">
                                    <div className="row text-center">
                                        <div className="col">
                                            <label  style={{fontSize:"14px", textAlign:"center"}} htmlFor="">ENTERTAINMENT PROVIDED</label>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        name="ENTERTAINMENT"
                                        class="form-control my-1"
                                        id="ENTERTAINMENT"
                                        onChange={handleBlur}
                                    />
                                    <input
                                        type="text"
                                        name="ENTERTAINMENT"
                                        class="form-control my-1"
                                        id="ENTERTAINMENT"
                                        onChange={handleBlur}
                                    />
                                    <input
                                        type="text"
                                        name="ENTERTAINMENT"
                                        class="form-control my-1"
                                        id="ENTERTAINMENT"
                                        onChange={handleBlur}
                                    />
                                    <input
                                        type="text"
                                        name="ENTERTAINMENT"
                                        class="form-control my-1"
                                        id="ENTERTAINMENT"
                                        onChange={handleBlur}
                                    />
                                    <input
                                        type="text"
                                        name="ENTERTAINMENT"
                                        class="form-control my-1"
                                        id="ENTERTAINMENT"
                                        onChange={handleBlur}
                                    />
                                    <input
                                        type="text"
                                        name="ENTERTAINMENT"
                                        class="form-control my-1"
                                        id="ENTERTAINMENT"
                                        onChange={handleBlur}
                                    />
                                    <input
                                        type="text"
                                        name="ENTERTAINMENT"
                                        class="form-control my-1"
                                        id="ENTERTAINMENT"
                                        onChange={handleBlur}
                                    />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">CHECK ALL THAT APPLY</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="CATERING"
                                    class="custom-control-input"
                                    id="CATERING"
                                    onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="CATERING">CATERING / BANQUET OPERATIONS</label>
                            </div>
                            <label htmlFor="">% OF TOTAL RECEIPTS:</label>
                            <input
                                    type="text"
                                    name="TOTAL"
                                    class="form-control"
                                    id="TOTAL"
                                    onChange={handleBlur}
                                />
                            </div>
                            <div className="col-6">
                            <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="ON PREMISES"
                                    class="custom-control-input"
                                    id="ON PREMISES"
                                    onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="ON PREMISES">ON PREMISES</label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input
                                    type="checkbox"
                                    name="OFF PREMISES"
                                    class="custom-control-input"
                                    id="OFF PREMISES"
                                    onChange={handleBlur}
                                />
                                <label class="custom-control-label" style={{fontSize: "13px"}} for="OFF PREMISES">OFF PREMISES</label>
                            </div>
                    </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <label htmlFor="">DESCRIBE</label>
                        <textarea name="DESCRIBE" id="" cols="30" rows="1"  onChange={handleBlur} className="form-control"></textarea>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col-4">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="STAIRWAY(S)"
                                    class="custom-control-input"
                                    id="STAIRWAY(S)"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="STAIRWAY(S)">STAIRWAY(S)</label>
                                </div>
                        </div>
                        <div className="col-4">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ELEVATOR(S)"
                                    class="custom-control-input"
                                    id="ELEVATOR(S)"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="ELEVATOR(S)">ELEVATOR(S)</label>
                                </div>
                        </div>
                        <div className="col-4">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="ESCALATOR(S)"
                                    class="custom-control-input"
                                    id="ESCALATOR(S)"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="ESCALATOR(S)">ESCALATOR(S)</label>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-6">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="EMERGENCY LIGHTING SYSTEMS (Describe):"
                                    class="custom-control-input"
                                    id="EMERGENCY LIGHTING SYSTEMS (Describe):"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "13px"}} for="EMERGENCY LIGHTING SYSTEMS (Describe):">EMERGENCY LIGHTING SYSTEMS (Describe):</label>
                                </div>
                    </div>
                    <div className="col-6">
                            <input
                                type="text"
                                name="EMERGENCY"
                                class="form-control my-1"
                                id="EMERGENCY"
                                onChange={handleBlur}
                            />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="">VALET PARKING</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="VALET PARKING"
                                    class="custom-control-input"
                                    id="VALET PARKING"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="VALET PARKING:">VALET PARKING BY EMPLOYEES</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="THIRD PARTY"
                                    class="custom-control-input"
                                    id="THIRD PARTY"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="THIRD PARTY">VALET PARKING BY THIRD PARTY</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="OFF PREMISES PARKING"
                                    class="custom-control-input"
                                    id="OFF PREMISES PARKING"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="OFF PREMISES PARKING">OFF PREMISES PARKING</label>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <label htmlFor="">SQUARE FOOTAGE:</label>
                                        <input type="text" name="SQUARE FOOTAGE" className="form-control" onChange={handleBlur}/>
                                    </div>
                                </div>
                    </div>
                    <div className="col-8">
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="GARAGE KEEPERS"
                                    class="custom-control-input"
                                    id="GARAGE KEEPERS"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="GARAGE KEEPERS">GARAGE KEEPERS LEGAL LIABILITY REQUIRED / MAINTAINED FOR VALET PARKING BY EMPLOYEES</label>
                                </div>
                                <div class="custom-control custom-checkbox">
                                    <input
                                    type="checkbox"
                                    name="CERTIFICATE"
                                    class="custom-control-input"
                                    id="CERTIFICATE"
                                    onChange={handleBlur}
                                    />
                                    <label class="custom-control-label" style={{fontSize: "14px"}} for="CERTIFICATE">CERTIFICATE OF INSURANCE REQUIRED / MAINTAINED FOR VALET PARKING BY THIRD PARTY</label>
                                </div>
                                <label htmlFor="">ADDRESS:</label>
                                <textarea name="ADDRESS:" id="" cols="30" className="form-control" rows="2"></textarea>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-11">
                        <label htmlFor="">EXPLAIN ALL "YES" RESPONSES UNLESS STATED OTHERWISE</label>
                        
                    </div>
                    <div className="col-1">
                        <label htmlFor="">Y / N</label>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">1.WAS THE STRUCTURE ORIGINALLY DESIGNED FOR ITS CURRENT USE?  (If "NO", describe original and subsequent occupancies)</label>
                        <textarea name="EXPLAIN ALL" id="" cols="30" onChange={handleBlur} className="form-control ml-2" rows="4"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text"  onChange={handleBlur} className="form-control mt-3" name="WAS THE STRUCTURE" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">2. HAS BUSINESS BEEN IN OPERATION LESS THAN FIVE (5) YEARS AT THIS LOCATION? (If "YES", answer the following)</label>
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="">DATE CURRENT MANAGEMENT STARTED:</label>
                                    </div>
                                    <div className="col-6">
                                        <input type="text"  onChange={handleBlur} className="form-control mt-3" name="DATE CURRENT" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="">DATE BUSINESS STARTED AT THIS LOCATION:</label>
                                    </div>
                                    <div className="col-6">
                                        <input type="text"  onChange={handleBlur} className="form-control mt-3" name="DATE BUSINESS" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <label htmlFor="">PRIOR EXPERIENCE OF OWNER / MANAGER</label>
                                <textarea name="PRIOR EXPERIENCE " id="" cols="30" onChange={handleBlur} className="form-control ml-2" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input type="text"  onChange={handleBlur} className="form-control mt-3" name="WAS THE STRUCTURE" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">3. ANY DELIVERIES? (If "YES". answer the following):</label>
                        <div className="row">
                            <div className="col-2 text-center">
                                <label htmlFor=""># COMPANY VEHICLES USED</label>
                                <input type="text"  onChange={handleBlur} className="form-control mt-3" name="COMPANY VEHICLES USED" />
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor=""># EMPLOYEE VEHICLES USED</label>
                                <input type="text"  onChange={handleBlur} className="form-control mt-3" name="# EMPLOYEE VEHICLES USED" />
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">TIME GUARANTEE (Y / N)</label>
                                <input type="text"  onChange={handleBlur} className="form-control mt-3" name="TIME GUARANTEE (Y / N)" />
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">TIME GUARANTEE DESCRIPTION</label>
                                <input type="text"  onChange={handleBlur} className="form-control mt-3" name="TIME GUARANTEE DESCRIPTION" />
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">RADIUS OF DELIVERIES (MILES)</label>
                                <input type="text"  onChange={handleBlur} className="form-control mt-3" name="RADIUS OF" />
                            </div>
                            <div className="col-2 text-center">
                                <label htmlFor="">SALES %</label>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="">DELIVERY</label>
                                        <input type="text"  onChange={handleBlur} style={{fontSize:"13px"}} className="form-control mt-3" name="DELIVERY" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="">DELIVERY</label>
                                        <input type="text"  onChange={handleBlur} style={{fontSize:"13px"}} className="form-control mt-3" name="ON-PREMISES" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input type="text"  onChange={handleBlur} className="form-control mt-3" name="WAS THE STRUCTURE" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">4. ARE ADEQUATE EMERGENCY EXITS PROVIDED AND EQUIPPED WITH PANIC HARDWARE? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input type="text"  onChange={handleBlur} className="form-control mt-3" name="ARE ADEQUATE" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">5. HAVE ADEQUATE SMOKE ALARMS BEEN INSTALLED? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input type="text"  onChange={handleBlur} className="form-control mt-3" name="HAVE ADEQUATE SMOKE" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-11">
                        <label htmlFor="">6. ANY OTHER ON OR OFF PREMISES EXPOSURES NOT LISTED ABOVE?</label>
                        <textarea onChange={handleBlur} name="6. ANY OTHER ON" id="" className="form-control" cols="30" rows="10"></textarea>
                    </div>
                    <div className="col-1">
                        <input type="text"  onChange={handleBlur} className="form-control mt-3" name="ANY OTHER" />
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(1) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(3) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default GeneralRating;