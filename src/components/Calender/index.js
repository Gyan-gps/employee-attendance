import "./index.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { Button, FormControl, InputLabel, Menu, MenuItem, Select } from "@mui/material";
// function getFullMonth() {
//     let month = new Date().getMonth() + 1;
//     let year = new Date().getFullYear();
//     let a = ["holiday", "absent", "leave", "present"];
//     let fullMonth = [];
//     for (let i = 0; i < 31; i++) {
//         let x = "" + year + "-" + (month < 9 ? "0" : "") + month + "-" + (i < 9 ? "0" : "") + (i + 1);
//         let status = a[Math.floor(a.length * Math.random())];
//         fullMonth.push({
//             date: x,
//             title: status,
//         });
//     }
//     return fullMonth;
// }
let style = {
    present: {
        labelStyle: {
            backgroundColor: "green",
        }
    },
    absent: {
        labelStyle: {
            backgroundColor: "red",
        }
    },
    holiday: {
        labelStyle: {
            backgroundColor: "yellow",
        }
    },
    leave: {
        labelStyle: {
            backgroundColor: "orange",
        }
    },
    "N/A": {
        labelStyle: {
            backgroundColor: "orange",
        }
    },
    weaklyOff: {
        labelStyle: {
            backgroundColor: "skyblue",
        }
    }
}

const stutus = ["present", "leave", "weakly off", "lop", "holiday"]
export default function Calender() {
    const [x, setX] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null);
    const [events, setEvents] = useState(localStorage.getItem("attendance") ? JSON.parse(localStorage.getItem("attendance")) : [...Array(31)].map((prev,i)=>({title: prev?.title ? prev?.title : "N/A",date:"2024-07-"+(i < 9 ? "0" : "") + (i + 1)})));
    const handleDateClick = (arg) => {
        alert(arg.dateStr);
    };

    function RenderEventContent(eventInfo) {
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };
        let date = new Date();
        let today = date.getDate();
        let currDate = new Date(eventInfo.event.start);
        let currDay = currDate.getDate();

        // When employee click on punch
        const handleSelect = (status) => {
            const attendance = [...events]
            let month = date.getMonth();
            attendance[today - 1] = {
                title: status,
                date: ("" + date.getFullYear() + "-" + (month < 9 ? "0" : "") + (month+1) + "-" + (today < 9 ? "0" : "") + today)
            }
            localStorage.setItem("attendance",(JSON.stringify(attendance)))
            setEvents(attendance);
            handleClose();
        }

        return (
            <>
                {
                    (today > currDay || eventInfo.event.title != "N/A") ?
                        <div
                            style={style[eventInfo.event.title].labelStyle}
                            className="status"
                        >
                            {eventInfo.event.title}
                        </div> :
                        today < currDay ? <div className="na" >N/A</div> :

                            <div className="status">
                                <Button
                                    id="demo-positioned-button"
                                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    sx={{ padding: 0 }}
                                >
                                    Punch
                                </Button>
                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={()=>handleSelect("present")}>Present</MenuItem>
                                    <MenuItem onClick={()=>handleSelect("absent")}>Absent</MenuItem>
                                    <MenuItem onClick={()=>handleSelect("weaklyOff")}>Weakly OFF</MenuItem>
                                    <MenuItem onClick={()=>handleSelect("holiday")}>Holiday</MenuItem>
                                    <MenuItem onClick={()=>handleSelect("leave")}>Leave</MenuItem>
                                </Menu>
                            </div>
                }
            </>
        );
    }

    // const attendanceList = localStorage.getItem("attendance") ? JSON.parse(localStorage.getItem("attendance")) : [];
    
    return (
        <div className='calender'>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                // dateClick={(e) => handleDateClick(e)}
                events={events}
                eventContent={RenderEventContent}
            />
        </div>
    );
}
