const ProcessButton = ({ file, processFile }) => {
    return (
      <div>
        {file && <button onClick={processFile}>Process</button>}
      </div>
    );
  };
  
  export default ProcessButton;
  