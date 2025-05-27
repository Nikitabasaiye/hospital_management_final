// import React from "react";
// import Sidebar from "../../components/Sidebar";

// const AdminManageSchedule = () => {
//   return (
//     <section className="bg-dashboard">
//       <div className="container-fluid">
//         <div className="row">
//           <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdminManageSchedule;
// import React, { useState, useEffect } from "react";
// import { Table, Spin } from "antd"; // Ant Design components
// import { ToastContainer, toast } from "react-toastify"; // Toast notifications
// import "react-toastify/dist/ReactToastify.css"; // Toastify CSS
// import Sidebar from "../../components/Sidebar";
// import { Edit, Delete } from "@mui/icons-material"; // Material UI icons
// import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

// const AdminManageSchedule = () => {
//   const [schedules, setSchedules] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Simulate API call
//     const fetchSchedules = async () => {
//       setLoading(true);
//       try {
//         // Mock data, replace with API call
//         const mockSchedules = [
//           {
//             id: 1,
//             name: "John Doe",
//             role: "Manager",
//             shift: "9:00 AM - 5:00 PM",
//             date: "2024-12-04",
//           },
//           {
//             id: 2,
//             name: "Jane Smith",
//             role: "Receptionist",
//             shift: "10:00 AM - 6:00 PM",
//             date: "2024-12-04",
//           },
//           {
//             id: 3,
//             name: "Bob Johnson",
//             role: "Chef",
//             shift: "6:00 AM - 2:00 PM",
//             date: "2024-12-04",
//           },
//         ];
//         setSchedules(mockSchedules);
//         toast.success("Schedules loaded successfully!");
//       } catch (error) {
//         toast.error("Failed to load schedules!");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSchedules();
//   }, []);

//   const columns = [
//     { title: "ID", dataIndex: "id", key: "id" },
//     { title: "Name", dataIndex: "name", key: "name" },
//     { title: "Role", dataIndex: "role", key: "role" },
//     { title: "Shift", dataIndex: "shift", key: "shift" },
//     { title: "Date", dataIndex: "date", key: "date" },
//     {
//       title: "Actions",
//       key: "actions",
//       render: (_, record) => (
//         <div className="d-flex align-items-center gap-2">
//           <Edit
//             style={{ cursor: "pointer", color: "#1890ff" }}
//             onClick={() => handleEdit(record.id)}
//           />
//           <Delete
//             style={{ cursor: "pointer", color: "#ff4d4f" }}
//             onClick={() => handleDelete(record.id)}
//           />
//         </div>
//       ),
//     },
//   ];

//   const handleEdit = (id) => {
//     toast.info(`Edit schedule for ID: ${id}`);
//     // Implement edit logic here
//   };

//   const handleDelete = (id) => {
//     toast.warn(`Delete schedule for ID: ${id}`);
//     // Implement delete logic here
//   };

//   return (
//     <section className="bg-dashboard">
//       <div className="container-fluid">
//         <div className="row">
//           <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
//           <div className="col-xl-9 col-lg-8 col-md-7 col-12">
//             <div className="p-4">
//               <h2 className="text-center mb-4">Staff Schedules</h2>
//               {loading ? (
//                 <div className="text-center">
//                   <Spin size="large" />
//                 </div>
//               ) : (
//                 <Table
//                   dataSource={schedules}
//                   columns={columns}
//                   rowKey="id"
//                   pagination={{ pageSize: 5 }}
//                   bordered
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </section>
//   );
// };

// export default AdminManageSchedule;

import React, { useState, useEffect } from "react";
import { Table, Spin, Modal, Form, Input, TimePicker, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../../components/Sidebar";
import { Edit, Delete, AddCircle } from "@mui/icons-material";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

const AdminManageSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    // Simulate API call
    const fetchSchedules = async () => {
      setLoading(true);
      try {
        const mockSchedules = [
          {
            id: 1,
            name: "John Doe",
            role: "Manager",
            shift: "9:00 AM - 5:00 PM",
            date: "2024-12-04",
          },
          {
            id: 2,
            name: "Jane Smith",
            role: "Receptionist",
            shift: "10:00 AM - 6:00 PM",
            date: "2024-12-04",
          },
          {
            id: 3,
            name: "Bob Johnson",
            role: "Chef",
            shift: "6:00 AM - 2:00 PM",
            date: "2024-12-04",
          },
        ];
        setSchedules(mockSchedules);
        toast.success("Schedules loaded successfully!");
      } catch (error) {
        toast.error("Failed to load schedules!");
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Shift", dataIndex: "shift", key: "shift" },
    { title: "Date", dataIndex: "date", key: "date" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="d-flex align-items-center gap-2">
          <Edit
            style={{ cursor: "pointer", color: "#1890ff" }}
            onClick={() => handleEdit(record)}
          />
          <Delete
            style={{ cursor: "pointer", color: "#ff4d4f" }}
            onClick={() => handleDelete(record.id)}
          />
        </div>
      ),
    },
  ];

  const handleEdit = (record) => {
    setCurrentSchedule(record);
    form.setFieldsValue({
      ...record,
      shift: [
        moment(record.shift.split(" - ")[0], "hh:mm A"),
        moment(record.shift.split(" - ")[1], "hh:mm A"),
      ],
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setSchedules((prev) => prev.filter((schedule) => schedule.id !== id));
    toast.warn(`Deleted schedule with ID: ${id}`);
  };

  const handleAdd = () => {
    setCurrentSchedule(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleFormSubmit = (values) => {
    const shift = `${values.shift[0].format(
      "hh:mm A"
    )} - ${values.shift[1].format("hh:mm A")}`;
    const updatedSchedules = currentSchedule
      ? schedules.map((schedule) =>
          schedule.id === currentSchedule.id
            ? { ...currentSchedule, ...values, shift }
            : schedule
        )
      : [...schedules, { ...values, id: schedules.length + 1, shift }];

    setSchedules(updatedSchedules);
    toast.success(
      currentSchedule
        ? "Schedule updated successfully!"
        : "Schedule added successfully!"
    );
    setIsModalOpen(false);
  };

  return (
    <section className="bg-dashboard">
      <div className="container-fluid">
        <div className="row">
          <Sidebar colClass="col-xl-3 col-lg-4 col-md-5 col-12" />
          <div className="col-xl-9 col-lg-8 col-md-7 col-12">
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-center">Staff Schedules</h2>
                <Button type="primary" icon={<AddCircle />} onClick={handleAdd}>
                  Add Schedule
                </Button>
              </div>
              {loading ? (
                <div className="text-center">
                  <Spin size="large" />
                </div>
              ) : (
                <Table
                  dataSource={schedules}
                  columns={columns}
                  rowKey="id"
                  pagination={{ pageSize: 5 }}
                  bordered
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

      <Modal
        title={currentSchedule ? "Edit Schedule" : "Add Schedule"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
          initialValues={currentSchedule}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please enter the role!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Shift"
            name="shift"
            rules={[{ required: true, message: "Please select the shift!" }]}
          >
            <TimePicker.RangePicker format="hh:mm A" />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select the date!" }]}
          >
            <Input type="date" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            {currentSchedule ? "Update" : "Add"} Schedule
          </Button>
        </Form>
      </Modal>
    </section>
  );
};

export default AdminManageSchedule;
