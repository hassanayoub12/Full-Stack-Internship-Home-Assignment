import { useState } from 'react';
import UploadFile from '../components/UploadFile';
import ProcessButton from '../components/ProcessButton.js';
import EmployeeTable from '../components/EmployeeTable.js';

const Index = () => {
  const [file, setFile] = useState(null);
  const [employees, setEmployees] = useState([]);

  const processFile = async () => {

    const processedEmployees = []; 

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
