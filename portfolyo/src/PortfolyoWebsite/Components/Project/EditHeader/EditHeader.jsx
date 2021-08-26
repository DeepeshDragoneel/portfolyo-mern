import React from 'react'
import "./EditHeader.scss";
import { TextField } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FontPicker from "font-picker-react";
import { SketchPicker } from "react-color";

const EditHeader = () => {
    const projectheader = useSelector(state => state.projectheader);
    const dispatch = useDispatch();
    return (
        <div className="EditHeaderPro my-5">
            <h3 className="text-center my-5">Text and Font's</h3>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                <div style={{ width: "max-content" }}>
                    <TextField
                        className="disabledrag"
                        id="firstnameInput"
                        label="ProjectTitle"
                        variant="outlined"
                        fullWidth
                        required
                        value={projectheader.name}
                        onChange={(e) => {
                            // console.log(e.target.value, projectheader)
                            dispatch({ type: "PS_projectname", payload: { ...projectheader, name: e.target.value } });
                        }
                        }
                    />
                </div>
                <div className=" disabledrag">
                    <FontPicker
                        pickerId="1"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={projectheader.fontStyle}
                        onChange={(nextFont) => {
                            // console.log(nextFont, projectheader)
                            dispatch({ type: "PS_projectname", payload: { ...projectheader, fontStyle: nextFont.family } })
                        }
                        }
                    />

                </div>
            </div>
            <div className="my-5" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                <div style={{ width: "max-content" }}>
                    <TextField
                        className="disabledrag"
                        id="firstnameInput"
                        label="ProjectTitle"
                        variant="outlined"
                        fullWidth
                        required
                        value={projectheader.description}
                        onChange={(e) => {
                            // console.log(e.target.value, projectheader)
                            dispatch({ type: "PS_projectname", payload: { ...projectheader, description: e.target.value } });
                        }
                        }
                    />
                </div>
                <div className=" disabledrag">
                    <FontPicker
                        pickerId="2"
                        apiKey="AIzaSyA4zVMDlSV-eRzbGR5BFqvbHqz3zV-OLd0"
                        activeFontFamily={projectheader.fontStyle}
                        onChange={(nextFont) => {
                            // console.log(nextFont, projectheader)
                            dispatch({ type: "PS_projectname", payload: { ...projectheader, fontStylep: nextFont.family } })
                        }
                        }
                    />

                </div>
            </div>
            <h3 className='text-center my-5'>Font Color's</h3>
            <div className="my-5" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">title color</p>
                        <SketchPicker
                            color={projectheader.color}
                            onChange={(color) => {
                                // console.log(color);
                                 dispatch({ type: "PS_projectname", payload: { ...projectheader, color: color.hex } })
                            }
                            }
                            style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">description color</p>
                        <SketchPicker
                            color={projectheader.colorp}
                            onChange={(color) => {
                                // console.log(color); 
                                dispatch({ type: "PS_projectname", payload: { ...projectheader, colorp: color.hex } })
                            }
                            }
                            style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">buttontext color</p>
                        <SketchPicker
                            color={projectheader.colorbt}
                            onChange={(color) => {
                                // console.log(color);
                                dispatch({ type: "PS_projectname", payload: { ...projectheader, colorbt: color.hex } })
                            }
                            }
                            style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">button bgcolor</p>
                        <SketchPicker
                            color={projectheader.colorbbg}
                            onChange={(color) => {
                                // console.log(color);
                                 dispatch({ type: "PS_projectname", payload: { ...projectheader, colorbbg: color.hex } })
                            }
                            }
                            style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">ArrowIcon color</p>
                        <SketchPicker
                            color={projectheader.colora}
                            onChange={(color) => {
                                // console.log(color);
                                 dispatch({ type: "PS_projectname", payload: { ...projectheader, colora: color.hex } })
                            }
                            }
                            style={{ cursor: "pointer" }} />
                    </span>
                </div>
                <div className="mt-4" style={{ width: "max-content" }}>
                    <span
                        id="SketchPicker"
                        className="disabledrag"
                        style={{ cursor: "pointer !important" }}
                    >
                        <p className="text-center text-uppercase">ArrowIcon bgcolor</p>
                        <SketchPicker
                            color={projectheader.colorabg}
                            onChange={(color) => {
                                // console.log(color); 
                                dispatch({ type: "PS_projectname", payload: { ...projectheader, colorabg: color.hex } })
                            }
                            }
                            style={{ cursor: "pointer" }} />
                    </span>
                </div>
            </div>
            <div className="my-5">
                    <h4 className="text-center">Animation Type</h4>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between" }} aria-label="select-animation-type" name="gender1" value={projectheader.animation} onChange={(e)=>{
                            dispatch({type:"PS_projectname",payload:{...projectheader,animation:e.target.value}})
                        }
                        }>
                            <FormControlLabel value="fade-top" control={<Radio />} label="fade-top" />
                            <FormControlLabel value="fade-bottom" control={<Radio />} label="fade-bottom" />
                            <FormControlLabel value="fade-right" control={<Radio />} label="fade-right" />
                            <FormControlLabel value="fade-left" control={<Radio />} label="fade-left" />
                            <FormControlLabel value="fade-up" control={<Radio />} label="fade-up" />
                            <FormControlLabel value="fade-dowm" control={<Radio />} label="fade-down" />
                            <FormControlLabel value="fade-up-right" control={<Radio />} label="fade-up-right" />
                            <FormControlLabel value="fade-up-left" control={<Radio />} label="fade-up-left" />
                            <FormControlLabel value="fade-dowm-right" control={<Radio />} label="fade-dowm-right" />
                            <FormControlLabel value="fade-dowm-left" control={<Radio />} label="fade-dowm-left" />
                            <FormControlLabel value="flip-left" control={<Radio />} label="flip-left" />
                            <FormControlLabel value="flip-right" control={<Radio />} label="flip-right" />
                            <FormControlLabel value="flip-up" control={<Radio />} label="flip-up" />
                            <FormControlLabel value="flip-down" control={<Radio />} label="flip-down" />
                            <FormControlLabel value="zoom-in" control={<Radio />} label="zoom-in" />
                            <FormControlLabel value="zoom-in-up" control={<Radio />} label="zoom-in-up" />
                            <FormControlLabel value="zoom-in-down" control={<Radio />} label="zoom-in-down" />
                            <FormControlLabel value="zoom-in-right" control={<Radio />} label="zoom-in-right" />
                            <FormControlLabel value="zoom-in-left" control={<Radio />} label="zoom-in-left" />
                            <FormControlLabel value="zoom-out" control={<Radio />} label="zoom-out" />
                            <FormControlLabel value="zoom-out-up" control={<Radio />} label="zoom-out-up" />
                            <FormControlLabel value="zoom-out-down" control={<Radio />} label="zoom-out-down" />
                            <FormControlLabel value="zoom-out-right" control={<Radio />} label="zoom-out-right" />
                            <FormControlLabel value="zoom-out-left" control={<Radio />} label="zoom-out-left" />
                            <FormControlLabel value="" control={<Radio />} label="none" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="my-4">
                    <h4 className="text-center">Animation Duration</h4>
                    <h4 className="text-center my-3 text-muted" style={{ fontSize: "1.5rem" }}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                    <input type="range" data-toggle="tooltip" data-placement="top" class="custom-range disabledrag" onChange={(e) => {
                        dispatch({ type: "PS_projectname", payload: {...projectheader,duration:e.target.value} });
                    }} min="0" max="3" step="0.3" value={projectheader.duration}

                        id="customRange3"></input>
                </div>
                <div className="my-4">
                    <h4 className="text-center">Animation Delay</h4>
                    <h4 className="text-center my-3 text-muted" style={{ fontSize: "1.5rem" }}>0s--0.3s--0.6s--0.9s--1.2s--1.5s--1.8s--2.1s--2.4s--2.7s--3s</h4>
                    <input type="range" data-toggle="tooltip" data-placement="top" class="custom-range disabledrag" onChange={(e) => {
                        dispatch({ type: "PS_projectname", payload: {...projectheader,delay:e.target.value} });
                    }} min="0" max="3" step="0.3" value={projectheader.delay}

                        id="customRange3"></input>
                </div>
            </div>
    )
}

export default EditHeader