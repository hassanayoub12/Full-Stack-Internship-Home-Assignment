import { useState } from 'react';
import UploadFile from '../components/UploadFile';
import ProcessButton from '../components/ProcessButton.js';
import EmployeeTable from '../components/EmployeeTable.js';

const Index = () => {
  const [file, setFile] = useState(null);
  const [employees, setEmployees] = useState([]);

  const processFile = async () => {
    // Process the file and retrieve employee data (You'll need to implement this logic)

    // For demonstration purposes, let's assume `processedEmployees` is an array of employee objects retrieved after processing the file
    const processedEmployees = []; // Replace this with the actual processing logic

    setEmployees(processedEmployees);
  };

  return (
    <div>
      <h1>Upload Employee CSV</h1>
      <UploadFile setFile={setFile} />
      <ProcessButton file={file} processFile={processFile} />
      {employees.length > 0 && <EmployeeTable employees={employees} />}
    </div>
  );
};

export default Index;
