import React from 'react'
import Calendar from 'calendar-reactjs'
import './index.css'

function getFullMonth(){
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let a = ["vacation","absent","leave","present"];
    let fullMonth = [];
    for(let i=0; i<31; i++){
        let x = "" + year +"-"+ month +"-"+ (i+1);
        let status = a[Math.floor(a.length * Math.random())];
        fullMonth.push({
            date: x,
            status
        })
    }
    return fullMonth;
}
export default function Calender() {
    console.log("sdfghjklkbhvbjk",new Date().getFullYear())
    return (
        <div className='calender'>
            <Calendar
                onCellClick={(val) => console.log(val)}
                month={{
                    date: "2024-07-06",
                    days: getFullMonth()
                }}
                emptyCellStyle={{ backgroundColor: "white" }}
                status={{
                    present: {
                        labelStyle: {
                            backgroundColor: "green",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                        }
                    },
                    absent: {
                        labelStyle: {
                            backgroundColor: "red",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                        }
                    },
                    vacation: {
                        labelStyle: {
                            backgroundColor: "yellow",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                        }
                    },
                    leave: {
                        labelStyle: {
                            backgroundColor: "orange",
                            color: "black",
                            borderRadius: "8px",
                            padding: "0px 0px 3px 0px"
                        }
                    }
                }}
            />
        </div>
    )
}
