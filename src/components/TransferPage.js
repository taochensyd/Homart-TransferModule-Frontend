import React, { useState, useEffect } from "react";
import axios from "axios";

const TransferPage = () => {
  const [errorMessage, setErrorMessage] = useState([]);
  const [batchInBin, setBatchInBin] = useState([]);
  const [batchNumberInputBox, setBatchNumberInputBox] = useState();
  const [batchNumber, setBatchNumber] = useState();
  const [itemCode, setItemCode] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [batchStatus, setBatchStatus] = useState("");
  const [uomName, setUomName] = useState("");

  const [whsArray, setWhsArray] = useState([]);
  const [selectedWhs, setSelectedWhs] = useState([]);
  const [binArray, setBinArray] = useState([]);
  const [selectedBin, setSelectedBin] = useState([]);
  const [maxQuantity, setMaxQuantity] = useState(0);

  const [toWarehouses, setToWarehouses] = useState([
    "WIQ",
    "W3Q",
    "WFP",
    "WPQ",
    "WRJ",
    "WRV",
    "WRT",
    "WCP",
  ]);
  const [selectedToWarehouse, setSelectedToWarehouse] = useState();
  const [selectedToWarehouseName, setSelectedToWarehouseName] = useState("");
  const [toBins, setToBins] = useState([]);
  const [wcpBinList, setWcpBinList] = useState([]);
  const [wrvBinList, setWrvBinList] = useState([]);
  const [wiqBinList, setWiqBinList] = useState([]);
  const [selectedToBin, setSelectedToBin] = useState("");

  const [errorTransferMessage, setErrorTransferMessage] = useState([]);
  const [successTransferMessage, setSuccessTransferMessage] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [transferDetailsSummary, setTransferDetailsSummary] = useState([]);

  const handleBatchNumberChange = async (batchNumber) => {
    // Clear error message
    setErrorMessage([]);

    if (batchNumber === "") {
      setErrorMessage(...errorMessage, "Please enter a batch number");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3005/api/batchnumberdetail",
        {
          BatchNumber: batchNumber,
        }
      );
      // handle response here
      console.log(response.data);
      if (response.data.value.length > 0) {
        setItemCode(response.data.value[0].ItemCode);
        console.log(`ItemCode: ${response.data.value[0].ItemCode}`);
        setItemDescription(response.data.value[0].ItemDescription);
        console.log(
          `ItemDescription: ${response.data.value[0].ItemDescription}`
        );
        setUomName(response.data.value[0].U_InventoryUoM);
        if (response.data.value[0].Status.includes("_")) {
          setBatchStatus(
            response.data.value[0].Status.split("_")[1].toUpperCase()
          );
        } else {
          setBatchStatus(response.data.value[0].batchStatus);
        }
        console.log(`BatchStatus: ${response.data.value[0].Status}`);
      } else {
        setErrorMessage(...errorMessage, "Batch number not found");
        setItemCode("");
        setItemDescription("");
        setBatchStatus("");
        setUomName("");
      }
    } catch (error) {
      // handle error here
      console.log(`handleBatchNumberChange: ${error}`);
    }
  };

  const fetchBatchInBin = async (batchNumber) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/batchinbin",
        {
          BatchNumber: batchNumber,
        }
      );
      console.log(JSON.stringify(response.data));
      console.log(response.data);
      console.log(`fetchBatchInBin Data: ${response.data.value}`);

      if (!response.data.value) {
        setErrorMessage(
          errorMessage,
          "Stock information not found for this batch number."
        );
      } else if (response.data.value.length === 0) {
        setErrorMessage(
          errorMessage,
          "No stock available for this batch number."
        );
      }

      if (response.data && response.data.value.length > 0) {
        console.log(`setBatchInBin: ${response.data.value}`);
        setBatchInBin(response.data.value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const readWhCodeAndBin = async (batchInBin) => {
    let tempWhArray = [];
    let tempBinArray = [];

    batchInBin.forEach((item) => {
      if (!tempWhArray.includes(item.WhsCode)) {
        tempWhArray.push(item.WhsCode);
      }
      tempBinArray.push(item.BinCode);
    });
    setWhsArray(tempWhArray);
    setBinArray(tempBinArray);
  };

  const fetchBinLocations = async (batchNumber) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/api/binlocations",
        {
          BatchNumber: batchNumber,
        }
      );
      console.log(`fetchBinLocations: ${response.data.value}`);
      if (response.data && response.data.value) {
        setWiqBinList([]);
        setWcpBinList([]);
        setWrvBinList([]);

        response.data.value.forEach((item) => {
          if (item.substring(0, 3) === "WIQ") {
            setWiqBinList((prevWiqBinList) => [
              ...prevWiqBinList,
              item.BinCode,
            ]);
            console.log(`WIQ Bin: ${item.BinCode}`);
          } else if (item.substring(0, 3) === "WCP") {
            setWcpBinList((prevWcpBinList) => [
              ...prevWcpBinList,
              item.BinCode,
            ]);
            console.log(`WCP Bin: ${item.BinCode}`);
          } else if (item.substring(0, 3) === "WRV") {
            setWrvBinList((prevWrvBinList) => [
              ...prevWrvBinList,
              item.BinCode,
            ]);
            console.log(`WRV Bin: ${item.BinCode}`);
          }
        });
      }
    } catch (error) {
      console.log(`fetchBinLocations: ${error}`);
    }
  };


  const setBinByToWarehouse = (selectedToWarehouse, wiqBinList, wrvBinList, wcpBinList) => {
    if(selectedToWarehouse === "WIQ"){
      setToBins(wiqBinList);
      console.log(`wiqBinList: ${wiqBinList}`)
    } else if(selectedToWarehouse === "WRV"){
      setToBins(wrvBinList);
      console.log(`wrvBinList: ${wrvBinList}`)
    } else if(selectedToWarehouse === "WCP"){
      setToBins(wcpBinList);
      console.log(`wcpBinList: ${wcpBinList}`)
    }
    console.log(`ToBins in setBinByToWarehouse(): ${toBins}`)
  }

  useEffect(() => {
    handleBatchNumberChange(batchNumber);
    fetchBatchInBin(batchNumber);
  }, [batchNumber]);

  useEffect(() => {
    readWhCodeAndBin(batchInBin);
  }, [batchInBin]);

  useEffect(() => {
    fetchBinLocations(batchNumber);
    console.log(`toBins in useEffect: ${toBins}`)
  },[])

  useEffect(() => {
    setBinByToWarehouse(selectedToWarehouse, wiqBinList, wrvBinList, wcpBinList);
  },[selectedToWarehouse])

  return (
    <div>
      {errorMessage && (
        <div className="error" style={{ color: "red", fontWeight: "bold" }}>
          {errorMessage}
        </div>
      )}
      <label>Batch Number: </label>
      <input
        type="text"
        onChange={(event) => setBatchNumberInputBox(event.target.value)}
      />
      <button onClick={() => setBatchNumber(batchNumberInputBox)}>
        Search
      </button>

      <div>
        <label>ItemCode: </label>
        <label>{itemCode}</label>
      </div>

      <div>
        <label>ItemDescription: </label>
        <label>{itemDescription}</label>
      </div>

      <div>
        <label>BatchStatus: </label>
        <label>{batchStatus}</label>
      </div>

      <div>
        <label>UoM Name : </label>
        <label>{uomName}</label>
      </div>

      <h3>Warehouse</h3>
      <select
        value={selectedWhs}
        onChange={(e) => setSelectedWhs(e.target.value)}
      >
        <option value="" disabled selected>
          Select a warehouse
        </option>
        {whsArray.map((whs) => (
          <option key={whs} value={whs}>
            {whs}
          </option>
        ))}
      </select>

      <h3>Bin</h3>
      <select
        value={selectedBin}
        onChange={(e) => setSelectedBin(e.target.value)}
      >
        <option value="">Select a bin</option>
        {binArray.map((bin) => (
          <option key={bin} value={bin}>
            {bin}
          </option>
        ))}
      </select>

      <h3>Max Quantity</h3>
      <pre>{maxQuantity}</pre>

      <label>To Warehouse:</label>
      <select
        value={selectedToWarehouse}
        onChange={(event) => setSelectedToWarehouse(event.target.value)}
      >
        <option value="" disabled selected>
          Select a warehouse
        </option>
        {toWarehouses.map((toWarehouse) => (
          <option key={toWarehouse} value={toWarehouse}>
            {toWarehouse}
          </option>
        ))}
      </select>

      <div className="input-group">
        <label>To Bin:</label>
        <select
          value={selectedToBin}
          onChange={(event) => setSelectedToBin(event.target.value)}
        >
          {toBins.map((toBin) => (
            <option key={toBin} value={toBin}>
              {toBin}
            </option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <label>Quantity:</label>
        <input type="number" />
        <div>MaxQty: {maxQuantity}</div>
      </div>

      <div className="input-group">
        <label>UoM Name: {uomName}</label>
      </div>

      <div className="input-group">
        <label>Posting Date:</label>
        <input type="date" />
      </div>

      <div className="input-group">
        <label>Remarks:</label>
        <textarea></textarea>
      </div>

      <div className="input-group">
        <button>Clear All</button>
        <button>Add</button>
        <button>Transfer</button>
      </div>
    </div>
  );
};

export default TransferPage;
