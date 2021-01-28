import React, { useContext } from 'react';
import {multiStepContext} from '../StepContext/StepContext'

const LiquorInformation = ({handleBlur}) => {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    return (
        <div style={{paddingRight : "3%", paddingLeft: "3%"}}>
            <form className="my-5">
                <div className="row">
                   <div className="col">
                    <h5>LIQUOR INFORMATION (If sales are 30% or more, complete ACORD 803, Liquor Liability Section)</h5>
                   </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="">LIQUOR LICENSE NUMBER</label>
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="LIQUOR LICENSE NUMBER"
                            className="form-control"
                        />
                    </div>
                    <div className="col-6">
                        <label htmlFor="">LIQUOR LICENSE TYPE</label>
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="LIQUOR LICENSE TYPE"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-3">
                        <label htmlFor="">NUMBER OF BARS ON PREMISES</label>
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="NUMBER OF BARS ON PREMISES"
                            className="form-control"
                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="">NUMBER OF BARS ON PREMISES</label>
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="NUMBER OF BARS ON PREMISES"
                            className="form-control"
                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="">NUMBER OF BARTENDERS</label>
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="NUMBER OF BARTENDERS"
                            className="form-control"
                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="">NUMBER OF WAITERS / WAITRESSES</label>
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="NUMBER OF WAITERS / WAITRESSES"
                            className="form-control"
                        />
                    </div>
                    <div className="col-3">
                        <label htmlFor="">AVERAGE LENGTH OF EMPLOYMENT (Months)</label>
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="AVERAGE LENGTH OF EMPLOYMENT (Months)"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <h5>EXPLAIN ALL "YES" RESPONSES UNLESS STATED OTHERWISE</h5>
                    </div>
                    <div className="col-1">
                        <h6>Y / N</h6>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">1.  ARE THERE WINE / BEER SALES ONLY? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="ARE THERE WINE Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">2.  IS THERE A FULL BAR? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="IS THERE A FULL BAR? Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">3.  IS THERE A HAPPY HOUR, OR DRINK SPECIALS OR SIMILAR PROMOTIONS? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="IS THERE A HAPPY HOUR, Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">4.  ARE PATRONS ALLOWED TO BRING ALCOHOL ON THE PREMISES? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="ARE PATRONS ALLOWED, Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">5.  DO EMPLOYEES CHECK IDENTIFICATION OF PATRONS PRIOR TO SERVING ALCOHOL? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="DO EMPLOYEES CHECK IDENTIFICATION, Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">6.  IS THERE A WRITTEN POLICY ON SERVING ALCOHOL TO EMPLOYEES AND CUSTOMERS? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="IS THERE A WRITTEN POLICY Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">7.  IS MANAGEMENT NOTIFIED PRIOR TO REFUSING TO SERVE PATRONS? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="IS MANAGEMENT NOTIFIED PRIOR Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">8.  IS DOCUMENTATION KEPT ON EACH INCIDENT INVOLVING REFUSAL TO SERVE PATRONS? (No explanation needed)</label>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="IS DOCUMENTATION KEPT Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">9.  ARE EMPLOYEES GIVEN LIQUOR TRAINING / CERTIFICATION COURSES? (If "YES", answer the following):</label>
                        <div className="row ml-2">
                            <div className="col-6 text-center">
                                <h6>DESCRIBE TYPE OF TRAINING AND WHEN TRAINED</h6>
                                <textarea name="DESCRIBE TYPE" onChange={handleBlur} className="form-control" id="" cols="30" rows="3"></textarea>
                            </div>
                            <div className="col-3 text-center">
                                <h6 style={{fontSize: "15px"}}># OF ALCOHOL SERVERS WHO HAVE COMPLETED TIPS® INTERVENTION COURSES OR EQUIVALENT</h6>
                                <textarea name="OF ALCOHOL SERVERS WHO" onChange={handleBlur} className="form-control" id="" cols="30" rows="2"></textarea>
                            </div>
                            <div className="col-3 text-center">
                                <h6>ARE ALL ALCOHOL SERVERS CURRENTLY TIPS® OR TAM® CERTIFIED? (Y / N)</h6>
                                <textarea name="ARE ALL ALCOHOL" onChange={handleBlur} className="form-control" id="" cols="30" rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="ARE EMPLOYEES GIVEN LIQUOR TRAINING Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row">
                        <div className="col-11">
                            <label htmlFor="">10.  HAVE THERE BEEN ANY LIQUOR BOARD VIOLATIONS? (If "YES", list all violations)</label>
                            <div className="row ml-2">
                                <div className="col-2">
                                    <label style={{fontSize: "15px"}} htmlFor="">DATE OF OCCURRENCE</label>
                                    <input
                                        type="date"
                                        onChange={handleBlur}
                                        name="ATE OF OCCURRENCE"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="">EXPLANATION</label>
                                    <input
                                        type="text"
                                        onChange={handleBlur}
                                        name="EXPLANATION"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-4">
                                    <label htmlFor="">RESOLUTION</label>
                                    <input
                                        type="text"
                                        onChange={handleBlur}
                                        name="RESOLUTION"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="">RESOLUTION</label>
                                    <input
                                        type="text"
                                        onChange={handleBlur}
                                        name="RESOLUTION"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-1">
                            <input
                                type="text"
                                onChange={handleBlur}
                                name="HAVE THERE Y / N"
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">11.  ARE FACILITIES AVAILABLE FOR USE OR RENT FOR PRIVATE PARTIES, RECEPTIONS, BANQUETS OR SIMILAR AFFAIRS?</label>
                        <div className="row ml-2">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="">NUMBER OF TIMES PER YEAR:</label>
                                    </div>
                                    <div className="col-8">
                                        <input
                                            type="text"
                                            onChange={handleBlur}
                                            name="NUMBER OF TIMES PER YEAR:"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="IS DOCUMENTATION KEPT Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">12.  DO YOU SUBSCRIBE TO A TAXI OR OTHER SERVICE PROVIDING TRANSPORTATION HOME TO APPARENTLY INTOXICATED PATRONS?</label>
                        <div className="row ml-2">
                            <div className="col">
                                <textarea name="DO YOU SUBSCRIBE" id="" className="form-control" cols="30" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="DO YOU SUBSCRIBE Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-11">
                        <label htmlFor="">13.  DO YOU OR EMPLOYEES PROVIDE TRANSPORTATION HOME TO APPARENTLY INTOXICATED PATRONS?</label>
                        <div className="row ml-2">
                            <div className="col">
                                <textarea name="DO YOU OR EMPLOYEES" id="" className="form-control" cols="30" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="col-1">
                        <input
                            type="text"
                            onChange={handleBlur}
                            name="DO YOU OR EMPLOYEES Y / N"
                            className="form-control"
                        />
                    </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                    <input type="button" value="Back" onClick={()=>setStep(4) } className="btn btn-success" style={{width: "100px"}}/>
                    <input type="button" value="Next" onClick={()=>setStep(6) } className="btn btn-success" style={{width: "100px"}}/>
                </div>
            </form>
        </div>
    );
};

export default LiquorInformation;