// import React from "react";

// import Sidebar from "../../components/Sidebar";
// import AdminFooter from "../../components/dashboard/AdminFooter";
// import ScrollTop from "../../components/ScrollTop";

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// export default function DoctorSchedule() {
//   let events = [
//     {
//       title: "Business Lunch",
//       start: "2024-05-03T13:00:00",
//       constraint: "businessHours",
//     },
//     {
//       title: "Meeting",
//       start: "2024-02-13T11:00:00",
//       constraint: "availableForMeeting",
//       color: "#53c797",
//     },
//     {
//       title: "Conference",
//       start: "2024-03-18",
//       end: "2022-04-20",
//     },
//     {
//       title: "Party",
//       start: "2024-04-29T20:00:00",
//     },
//   ];

//   return (
//     <>
//       <section className="bg-dashboard">
//         <div className="container-fluid">
//           <div className="row">
//             <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// <>
//   <section className="bg-dashboard">
//     <div className="container-fluid">
//       <div className="row">
//         <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//         <div className="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
//           <h5 className="mb-0"> Schedule Timing </h5>
//           <div className="row">
//             <div className="col-xl-2 col-lg-4 col-12 mt-4">
//               <div id="external-events">
//                 <div className="card border-0 p-4 shadow rounded">
//                   <span className="h6"> All Events </span>
//                   <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
//                     <div className="fc-event-main"> Meeting </div>{" "}
//                   </div>{" "}
//                   <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
//                     <div className="fc-event-main"> Operations </div>{" "}
//                   </div>{" "}
//                   <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
//                     <div className="fc-event-main"> Lunch </div>{" "}
//                   </div>{" "}
//                   <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
//                     <div className="fc-event-main"> Conference </div>{" "}
//                   </div>{" "}
//                   <div className="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
//                     <div className="fc-event-main"> Business Metting </div>{" "}
//                   </div>
//                   <div className="mt-2">
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="drop-remove"
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="drop-remove"
//                       >
//                         {" "}
//                         Remove after drop{" "}
//                       </label>{" "}
//                     </div>{" "}
//                   </div>{" "}
//                 </div>{" "}
//               </div>{" "}
//             </div>
//             <div className="col-xl-10 col-lg-8 col-12 mt-4">
//               <div
//                 id="calendar-container"
//                 className="card rounded border-0 shadow p-4"
//               >
//                 <FullCalendar
//                   defaultView="dayGridMonth"
//                   plugins={[dayGridPlugin]}
//                   events={events}
//                   headerToolbar={{
//                     left: "prev,next today addEventButton",
//                     center: "title",
//                     right: "dayGridMonth,dayGridWeek,dayGridDay",
//                   }}
//                   customButtons={{
//                     addEventButton: {
//                       text: "Add Event",
//                       click: function () {
//                         var dateStr = prompt(
//                           "Enter a date in YYYY-MM-DD format"
//                         );
//                       },
//                     },
//                   }}
//                 />{" "}
//               </div>{" "}
//             </div>{" "}
//           </div>{" "}
//         </div>{" "}
//       </div>{" "}
//     </div>{" "}
//   </section>
//   <AdminFooter />
//   <ScrollTop />
// </>

// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import AdminFooter from "../../components/dashboard/AdminFooter";
// import ScrollTop from "../../components/ScrollTop";

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// export default function DoctorSchedule() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("token");

//   // Fetch schedule from the server
//   useEffect(() => {
//     const fetchSchedule = async () => {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_API_URL}/doctor/get-schedule`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: { token },
//             },
//             // body: JSON.stringify({ token }),
//           }
//         ); // Replace with your API endpoint
//         const data = await response.json();
//         console.log(data);
//         const scheduleData = data.data.schedule[0].weekdays;

//         // Map the schedule data to FullCalendar events
//         const formattedEvents = scheduleData.map((item) => ({
//           title: `${item.day} (${item.startTime} - ${item.endTime})`,
//           start: new Date(item.date),
//           end: new Date(item.date), // Optional: same-day events
//         }));

//         setEvents(formattedEvents);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching schedule:", error);
//         setLoading(false);
//       }
//     };

//     fetchSchedule();
//   }, []);

//   return (
//     <>
//       <section className="bg-dashboard">
//         <div className="container-fluid">
//           <div className="row">
//             <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//             <div className="col-xl-9 col-lg-8 col-md-7 col-12">
//               <h2 className="my-4">Doctors Weekly Schedule</h2>
//               {loading ? (
//                 <p>Loading schedule...</p>
//               ) : (
//                 <FullCalendar
//                   plugins={[dayGridPlugin]}
//                   initialView="dayGridWeek"
//                   events={events}
//                 />
//               )}
//               <AdminFooter />
//             </div>
//           </div>
//         </div>
//       </section>
//       <ScrollTop />
//     </>
//   );
// }

// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import AdminFooter from "../../components/dashboard/AdminFooter";
// import ScrollTop from "../../components/ScrollTop";

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// export default function DoctorSchedule() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("token");

//   // Fetch schedule from the server
//   useEffect(() => {
//     const fetchSchedule = async () => {
//       if (!token) {
//         console.error("No token found in localStorage");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_API_URL}/doctor/get-schedule`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `${token}`,
//             },
//           }
//         );
//         // cl;
//         if (!response.ok) {
//           console.error(`Error: ${response.status} ${response.statusText}`);
//           setLoading(false);
//           return;
//         }

//         const data = await response.json();
//         const scheduleData = data?.data?.schedule?.[0]?.weekdays || [];
//         if (!scheduleData.length) {
//           console.error("No schedule data found");
//           setLoading(false);
//           return;
//         }

//         // Map the schedule data to FullCalendar events
//         const formattedEvents = scheduleData.map((item) => ({
//           title: `${item.day} (${item.startTime} - ${item.endTime})`,
//           start: new Date(item.date),
//           end: new Date(item.date),
//         }));

//         setEvents(formattedEvents);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching schedule:", error);
//         setLoading(false);
//       }
//     };

//     fetchSchedule();
//   }, [token]);

//   return (
//     <>
//       <section className="bg-dashboard">
//         <div className="container-fluid">
//           <div className="row">
//             <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//             <div className="col-xl-9 col-lg-8 col-md-7 col-12">
//               <h2 className="my-4">Doctors Weekly Schedule</h2>
//               {loading ? (
//                 <p>Loading schedule...</p>
//               ) : (
//                 <FullCalendar
//                   plugins={[dayGridPlugin]}
//                   initialView="dayGridWeek"
//                   events={events}
//                 />
//               )}
//               <AdminFooter />
//             </div>
//           </div>
//         </div>
//       </section>
//       <ScrollTop />
//     </>
//   );
// }

// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import AdminFooter from "../../components/dashboard/AdminFooter";
// import ScrollTop from "../../components/ScrollTop";

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// export default function DoctorSchedule() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("token");

//   // Fetch schedule from the server
//   useEffect(() => {
//     const fetchSchedule = async () => {
//       if (!token) {
//         console.error("No token found in localStorage");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_API_URL}/doctor/get-schedule`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `${token}`,
//             },
//           }
//         );

//         if (!response.ok) {
//           console.error(`Error: ${response.status} ${response.statusText}`);
//           setLoading(false);
//           return;
//         }

//         const data = await response.json();

//         // Find the schedule with the latest week
//         const schedules = data?.schedule || [];
//         if (!schedules.length) {
//           console.error("No schedules found");
//           setLoading(false);
//           return;
//         }

//         const latestSchedule = schedules.reduce((latest, current) =>
//           current.week > latest.week ? current : latest
//         );

//         const weekdays = latestSchedule?.weekdays || [];

//         // Map the schedule data to FullCalendar events
//         const formattedEvents = weekdays.map((item) => ({
//           title: `${item.day} (${item.startTime} - ${item.endTime})`,
//           start: new Date(item.date),
//           end: new Date(item.date),
//         }));

//         setEvents(formattedEvents);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching schedule:", error);
//         setLoading(false);
//       }
//     };

//     fetchSchedule();
//   }, [token]);

//   return (
//     <>
//       <section className="bg-dashboard py-5">
//         <div className="container-fluid">
//           <div className="row">
//             {/* Sidebar */}
//             <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />

//             {/* Main Content */}
//             <div className="col-xl-9 col-lg-8 col-md-7 col-12">
//               <div className="content-wrapper bg-white p-4 shadow rounded">
//                 <h2 className="text-primary mb-4">Doctor's Weekly Schedule</h2>

//                 {/* Schedule or Loading Indicator */}
//                 {loading ? (
//                   <div
//                     className="d-flex justify-content-center align-items-center"
//                     style={{ minHeight: "300px" }}
//                   >
//                     <div className="spinner-border text-primary" role="status">
//                       <span className="visually-hidden">Loading...</span>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="calendar-container">
//                     <FullCalendar
//                       plugins={[dayGridPlugin]}
//                       initialView="dayGridWeek"
//                       events={events}
//                       height="auto"
//                       eventColor="#007bff" // Professional blue for events
//                       eventTextColor="#fff" // White text for event clarity
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Footer */}
//               <AdminFooter />
//             </div>
//           </div>
//         </div>
//       </section>
//       <ScrollTop />
//     </>
//   );
// }

// import React, { useEffect, useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import AdminFooter from "../../components/dashboard/AdminFooter";
// import ScrollTop from "../../components/ScrollTop";

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";

// export default function DoctorSchedule() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchSchedule = async () => {
//       try {
//         const response = await fetch(
//           `${import.meta.env.VITE_API_URL}/doctor/get-schedule`,
//           {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Authorization: `${token}`,
//             },
//           }
//         );
//         const data = await response.json();
//         console.log(data);
//         // Assuming latest week's schedule is in the last array element
//         const latestSchedule =
//           data.schedule[data.schedule.length - 1]?.weekdays;

//         // Map the schedule to FullCalendar format
//         const formattedEvents = latestSchedule.map((item) => ({
//           title: `${item.startTime} - ${item.endTime}`,
//           date: item.date,
//           extendedProps: {
//             day: item.day,
//           },
//         }));

//         setEvents(formattedEvents);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching schedule:", error);
//         setLoading(false);
//       }
//     };

//     fetchSchedule();
//   }, []);

//   const renderEventContent = (eventInfo) => {
//     return (
//       <div className="event-content">
//         <div className="event-day">{eventInfo.event.extendedProps.day}</div>
//         <div className="event-timing">{eventInfo.event.title}</div>
//       </div>
//     );
//   };

//   return (
//     <>
//       <section className="bg-dashboard py-5">
//         <div className="container-fluid">
//           <div className="row">
//             {/* Sidebar */}
//             <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />

//             {/* Main Content */}
//             <div className="col-xl-9 col-lg-8 col-md-7 col-12">
//               <div className="content-wrapper bg-white p-4 shadow rounded">
//                 <h2 className="text-primary mb-4">Doctors Weekly Schedule</h2>

//                 {/* Schedule or Loading Indicator */}
//                 {loading ? (
//                   <div
//                     className="d-flex justify-content-center align-items-center"
//                     style={{ minHeight: "300px" }}
//                   >
//                     <div className="spinner-border text-primary" role="status">
//                       <span className="visually-hidden">Loading...</span>
//                     </div>
//                   </div>
//                 ) : (
//                   <div className="calendar-container">
//                     <FullCalendar
//                       plugins={[dayGridPlugin]}
//                       initialView="dayGridWeek"
//                       events={events}
//                       eventContent={renderEventContent} // Custom rendering
//                       height="auto"
//                       eventDisplay="block"
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Footer */}
//               {/* <AdminFooter className={"fixed bottom-0"} /> */}
//               <div className="fixed bottom-0">
//                 <AdminFooter />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ScrollTop />
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import AdminFooter from "../../components/dashboard/AdminFooter";
import ScrollTop from "../../components/ScrollTop";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function DoctorSchedule() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allSchedules, setAllSchedules] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/doctor/get-schedule`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );
        const data = await response.json();

        // Validate response
        if (!data.schedule || !Array.isArray(data.schedule)) {
          throw new Error("Invalid schedule data received.");
        }

        setAllSchedules(data.schedule);

        // Select the latest week's schedule by default
        console.log(data.schedule);
        // const latestWeek = data.schedule[data.schedule.length - 1];
        // setSelectedWeek(latestWeek);
        if (data?.schedule?.length > 0) {
          // Sort the schedule by the week number in descending order and get the latest week
          const latestWeek = data.schedule.sort((a, b) => b.week - a.week)[0];

          // Set the selected week
          setSelectedWeek(latestWeek);

          // Map the latest week's schedule to FullCalendar events
          const formattedEvents = latestWeek.weekdays.map(
            ({ day, date, startTime, endTime }) => ({
              title: `${startTime} - ${endTime}`,
              date,
              extendedProps: { day },
            })
          );

          // Set the events
          setEvents(formattedEvents);
        } else {
          console.warn("No schedule data available to set the latest week.");
        }

        // if (data && data.schedule && data.schedule.length > 0) {
        //   // Sort the schedule by the week number in descending order
        //   const sortedSchedule = data.schedule.sort((a, b) => b.week - a.week);
        //   console.log(sortedSchedule);

        //   // Select the latest week (first item after sorting)
        //   const latestWeek = sortedSchedule[0];
        //   setSelectedWeek(latestWeek);
        // } else {
        //   console.warn("No schedule data available to set the latest week.");
        // }

        // // Map the latest week's schedule to FullCalendar events
        // const formattedEvents = latestWeek.weekdays.map(
        //   ({ day, date, startTime, endTime }) => ({
        //     title: `${startTime} - ${endTime}`,
        //     date,
        //     extendedProps: { day },
        //   })
        // );
        // setEvents(formattedEvents);
      } catch (error) {
        console.error("Error fetching schedule:", error);
        setError("Failed to load schedule. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
    const formattedEvents = week.weekdays.map(
      ({ day, date, startTime, endTime }) => ({
        title: `${startTime} - ${endTime}`,
        date,
        extendedProps: { day },
      })
    );
    setEvents(formattedEvents);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div className="event-content">
        <div className="event-day">{eventInfo.event.extendedProps.day}</div>
        <div className="event-timing">{eventInfo.event.title}</div>
      </div>
    );
  };

  return (
    <>
      <section className="bg-dashboard">
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />

            {/* Main Content */}
            <div className="col-xl-9 col-lg-8 col-md-7 col-12">
              <div className="content-wrapper bg-white p-4 shadow rounded">
                <h2 className="text-primary mb-4">Doctors Weekly Schedule</h2>

                {/* Week Selector */}
                {/* {allSchedules.length > 0 && (
                  <div className="mb-4">
                    <label htmlFor="week-selector" className="form-label">
                      Select Week:
                    </label>
                    <select
                      id="week-selector"
                      className="form-select"
                      value={selectedWeek?._id || ""}
                      onChange={(e) =>
                        handleWeekChange(
                          allSchedules.find(
                            (week) => week._id === e.target.value
                          )
                        )
                      }
                    >
                      {allSchedules.map((week) => (
                        <option key={week._id} value={week._id}>
                          Week {week.week}
                        </option>
                      ))}
                    </select>
                  </div>
                )} */}
                {/* Week Selector */}
                {allSchedules.length > 0 && (
                  <div className="mb-4">
                    <label htmlFor="week-selector" className="form-label">
                      Select Week:
                    </label>
                    <select
                      id="week-selector"
                      className="form-select"
                      value={selectedWeek?._id || ""}
                      onChange={(e) =>
                        handleWeekChange(
                          allSchedules.find(
                            (week) => week._id === e.target.value
                          )
                        )
                      }
                    >
                      {allSchedules
                        .slice()
                        .sort((a, b) => a.week - b.week) // Sort incrementally by week
                        .map((week) => (
                          <option key={week._id} value={week._id}>
                            Week {week.week}
                          </option>
                        ))}
                    </select>
                  </div>
                )}

                {/* Schedule or Loading/Error Indicator */}
                {loading ? (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ minHeight: "300px" }}
                  >
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : error ? (
                  <p className="text-danger">{error}</p>
                ) : (
                  <div className="calendar-container">
                    <FullCalendar
                      plugins={[dayGridPlugin]}
                      initialView="dayGridWeek"
                      events={events}
                      eventContent={renderEventContent} // Custom rendering
                      height="auto"
                      eventDisplay="block"
                    />
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="fixed bottom-0">
                <AdminFooter />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ScrollTop />
    </>
  );
}
