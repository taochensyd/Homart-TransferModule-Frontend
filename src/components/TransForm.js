import React, { useState, useEffect } from "react";
import "./TransForm.css";

const TransForm = ({ username }) => {
  const [errorMessage, setErrorMessage] = useState({});
  const [batchNumber, setBatchNumber] = useState("");
  const [inputBatchNumber, setInputBatchNumber] = useState("");
  const [batchInBin, setBatchInBin] = useState([]);
  const [itemCode, setItemCode] = useState("");
  const [itemDescription, setItemDesciption] = useState("");
  const [batchStatus, setBatchStatus] = useState("");
  const [uomName, setUomName] = useState("");
  const [maxQuantity, setMaxQuantity] = useState(0);
  const [enteredQuantity, setEnteredQuantity] = useState(0);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [enteredRemark, setEnteredRemark] = useState();
  const [fromWarehouse, setFromWarehouse] = useState([]);
  const [selectedFromWarehouse, setSelectedFromWarehouse] = useState("");
  const [selectedFromWarehouseName, setSelectedFromWarehouseName] =
    useState("");
  const [fromBinList, setFromBinList] = useState([]);
  const [fromBin, setFromBin] = useState([]);
  const [selectedFromBin, setSelectedFromBin] = useState("");
  const [toWarehouses, setToWarehouses] = useState([]);
  const [selectedToWarehouse, setSelectedToWarehouse] = useState("");
  const [selectedToWarehouseName, setSelectedToWarehouseName] = useState("");
  const [toBinList, setToBinList] = useState([]);
  const [toBin, setToBin] = useState([]);
  const [selectedToBin, setSelectedToBin] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [journalMemo, setJournalMemo] = useState("");
  const [transferMessage, setTransferMessage] = useState("");

  const handleSearchBatchInBin = (batchNumber) => {
    fetch("http://localhost:3005/api/batchinbin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ BatchNumber: batchNumber }),
    })
      .then((response) => {
        console.log(`handleSearchBatchInBin function response: ${response}`)
        return response.json();
      })
      .then((data) => {
        console.log(`handleSearchBatchInBin function and data : ${data}`);
        console.log(
          `handleSearchBatchInBin function and data.value : ${data.value}`
        );
        console.log(
          `handleSearchBatchInBin function and data.value[0] : ${data.value[0]}`
        );
        console.log(
          `handleSearchBatchInBin function and data.value[0].ItemCode : ${data.value[0].ItemCode}`
        );
        setBatchInBin(data.value);
        console.log(`batchInBin: ${batchInBin}`);
        setItemCode(data.value[0].ItemCode);
        setItemDesciption(data.value[0].ItemName);
        setFromWarehouse([...new Set(data.value.map((item) => item.WhsCode))]);
        setFromBinList([...new Set(data.value.map((item) => item.BinCode))]);

        console.log(
          `batchInBin in handleSearchBatchInBin function: ${batchInBin}`
        );

        /*
                [
                    {
                        "ItemCode": "PC038-0010",
                        "ItemName": "Cap 1HOM 38mm Gold Cap for RA300/185 with Induction Seal - JX",
                        "DistNumber": "div6593",
                        "batchabsebntry": 19426,
                        "WhsCode": "WCP",
                        "WhsName": "Component warehouse",
                        "BinAbs": 671,
                        "BinCode": "WCP-3K20-1",
                        "OnHandQty": 19208,
                        "id__": 1
                    },
                    {
                        "ItemCode": "PC038-0010",
                        "ItemName": "Cap 1HOM 38mm Gold Cap for RA300/185 with Induction Seal - JX",
                        "DistNumber": "div6593",
                        "batchabsebntry": 19426,
                        "WhsCode": "WIQ",
                        "WhsName": "Quantine warehouse",
                        "BinAbs": 1155,
                        "BinCode": "WIQ-7K52-1",
                        "OnHandQty": 5447,
                        "id__": 2
                    }
                ]
                */
      })

      .catch((error) => console.error(error));
  };

  const binLocations = () => {
    fetch("http://localhost:3005/api/binlocations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // ,
      // body: JSON.stringify({ FromWarehouse: selectedFromWarehouse })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`http://localhost:3005/api/binlocations`);
        console.log(`Bin location: ${data.value}`);
        setToBinList(data.value);
        /*
                    [{
                        "AbsEntry": 2445,
                        "Warehouse": "WIQ",
                        "BinCode": "WIQ-0-04LOAD"
                    },
                    {
                        "AbsEntry": 8648,
                        "Warehouse": "WIQ",
                        "BinCode": "WIQ-0-08LOAD"
                    },
                    {
                        "AbsEntry": 1362,
                        "Warehouse": "WIQ",
                        "BinCode": "WIQ-1B18-3"
                    }]
                */
      })

      .catch((error) => console.error(error));
  };

  const findBatchNumber = (batchNumber) => {
    fetch("http://localhost:3005/api/batchnumberdetail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ BatchNumber: batchNumber }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBatchStatus(data.value[0].Status);
        setUomName(data.value[0].U_InventoryUoM);

        /*

                */
      })

      .catch((error) => console.error(error));
  };

  const changeToBinCode = (selectedToWarehouse, toBinList) => {
    setToBin([]);

    console.log("toBinList:", toBinList);
    console.log("selectedToWarehouse:", selectedToWarehouse);

    const filteredBinList = toBinList.filter(
      (item) => item.Warehouse === selectedToWarehouse
    );
    console.log("filteredBinList:", filteredBinList);

    const binCodes = filteredBinList.map((item) => item.BinCode);
    console.log("binCodes:", binCodes);

    setToBin(binCodes);

    console.log(`changeToBinCode selectedToWarehouse: ${selectedToWarehouse}`);
    console.log(`changeToBinCode: ${toBin}`);
  };

  function cancelTransfer() {
    setShowSummary(false);
  }

  function submitTransfer(
    itemCode,
    enteredQuantity,
    selectedFromWarehouse,
    selectedFromBin,
    selectedToWarehouse,
    selectedToBin,
    remarks,
    journalMemo,
    batchInBin,
    toBinList,
    batchNumber
  ) {
    console.log(`submitTransfer batchinbin: ${batchInBin}`);

    if (
      (!itemCode ||
        !enteredQuantity ||
        !selectedFromWarehouse ||
        !selectedFromBin ||
        !selectedToWarehouse ||
        !selectedToBin ||
        !remarks ||
        !journalMemo ||
        !batchInBin ||
        !toBinList ||
        !batchNumber) &&
      (selectedFromWarehouse === "WIQ" ||
        selectedFromWarehouse === "WCP" ||
        selectedFromWarehouse === "WRV")
    ) {
      console.error("Error: One or more parameters are missing values");
      return;
    }

    if (!batchInBin || batchInBin.length < 0) {
      console.error("Error: batchInBin is missing or empty");
      return;
    }

    let fromBinAbsCode;
    for (let index = 0; index < batchInBin.length; index++) {
      if (batchInBin[index].BinCode === selectedFromBin) {
        fromBinAbsCode = batchInBin[index].batchabsebntry;
      }
    }

    let toBinAbsCode;
    for (let index = 0; index < batchInBin.length; index++) {
      if (toBinList[index].BinCode === selectedToBin) {
        toBinAbsCode = batchInBin[index].AbsEntry;
      }
    }

    // Submit the data
    let body;
    if (
      selectedFromWarehouse === "WIQ" ||
      selectedFromWarehouse === "WCP" ||
      selectedFromWarehouse === "WRV" ||
      selectedFromWarehouse === "WCS"
    ) {
      body = {
        FromWarehouse: selectedFromWarehouse,
        ToWarehouse: selectedToWarehouse,
        StockTransferLines: [
          {
            ItemCode: itemCode,
            Quantity: enteredQuantity,
            WarehouseCode: selectedToWarehouse,
            FromWarehouseCode: selectedFromWarehouse,
            SerialNumbers: [],
            JournalMemo: journalMemo,
            Comment: remarks,
            BatchNumbers: [
              {
                BatchNumber: batchNumber,
                Quantity: enteredQuantity,
              },
            ],
            StockTransferLinesBinAllocations: [
              {
                BinAbsEntry: toBinAbsCode,
                BinActionType: "batToWarehouse",
                Quantity: enteredQuantity,
                SerialAndBatchNumbersBaseLine: 0,
              },
              {
                BinAbsEntry: fromBinAbsCode,
                BinActionType: "batFromWarehouse",
                Quantity: enteredQuantity,
                SerialAndBatchNumbersBaseLine: 0,
              },
            ],
          },
        ],
      };
    } else {
      body = {
        FromWarehouse: selectedFromWarehouse,
        ToWarehouse: selectedToWarehouse,
        StockTransferLines: [
          {
            ItemCode: itemCode,
            Quantity: enteredQuantity,
            WarehouseCode: selectedToWarehouse,
            FromWarehouseCode: selectedFromWarehouse,
            SerialNumbers: [],
            JournalMemo: journalMemo,
            Comment: remarks,
            BatchNumbers: [
              {
                BatchNumber: batchNumber,
                Quantity: enteredQuantity,
              },
            ],
            StockTransferLinesBinAllocations: [
              {
                BinAbsEntry: fromBinAbsCode,
                BinActionType: "batFromWarehouse",
                Quantity: enteredQuantity,
                SerialAndBatchNumbersBaseLine: 0,
              },
            ],
          },
        ],
      };
    }

    fetch("http://localhost:3005/api/stocktransfer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setTransferMessage(
            `Status code: ${response.status}. Transfer complete.`
          );
        } else {
          setTransferMessage(
            `Status code: ${response.status}. Transfer failed.`
          );
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));

    return;
  }

  const updateMaxQuantity = (
    selectedFromWarehouse,
    selectedFromBin,
    batchInBin
  ) => {
    if (
      selectedFromWarehouse === "" &&
      selectedFromBin === "" &&
      batchInBin &&
      batchInBin.length > 0
    ) {
      setMaxQuantity(batchInBin.reduce((acc, item) => acc + item.OnHandQty, 0));
      console.log(
        `updateMaxQuantity selectedFromWarehouse and selectedFromBin ${
          (selectedFromWarehouse, selectedFromBin)
        }`
      );
      return;
    }

    if (selectedFromBin !== "" && batchInBin && batchInBin.length > 0) {
      const bin = batchInBin.find((item) => item.BinCode === selectedFromBin);
      if (bin) {
        setMaxQuantity(bin.OnHandQty);
      }
      console.log(`updateMaxQuantity selectedFromBin ${selectedFromBin}`);

      return;
    }

    if (selectedFromWarehouse !== "" && batchInBin && batchInBin.length > 0) {
      const maxQuantity = batchInBin
        .filter((item) => item.whsCode === selectedFromWarehouse)
        .reduce((acc, item) => acc + item.OnHandQty, 0);
      setMaxQuantity(maxQuantity);
      console.log(
        `updateMaxQuantity selectedFromWarehouse ${selectedFromWarehouse}`
      );

      return;
    }
  };

  function startClean() {
    setErrorMessage({});
    setItemCode("");
    setItemDesciption("");
    setBatchStatus("");
    setUomName("");
    setMaxQuantity(0);
    setEnteredQuantity(0);
    setSelectedDate(new Date().toISOString().slice(0, 10));
    setEnteredRemark();
    setFromWarehouse([]);
    setSelectedFromWarehouse("");
    setSelectedFromWarehouseName("");
    setFromBin([]);
    setSelectedFromBin("");
    setToWarehouses([]);
    setSelectedToWarehouse("");
    setSelectedToBin("");
    setShowSummary(false);
  }

  const clearAll = () => {
    setErrorMessage({});
    setBatchNumber("");
    setInputBatchNumber("");
    setBatchInBin([]);
    setItemCode("");
    setItemDesciption("");
    setBatchStatus("");
    setUomName("");
    setMaxQuantity(0);
    setEnteredQuantity(0);
    setSelectedDate(new Date().toISOString().slice(0, 10));
    setEnteredRemark();
    setFromWarehouse([]);
    setSelectedFromWarehouse("");
    setSelectedFromWarehouseName("");
    setFromBin([]);
    setSelectedFromBin("");
    setToWarehouses([]);
    setSelectedToWarehouse("");
    setToBin([]);
    setSelectedToBin("");
    setShowSummary(false);
  };

  const updateJournalMemo = async () => {
    setJournalMemo("");
    try {
      const response = await fetch("http://localhost:3005/api/journalmemo");
      const data = await response.json();
      const jrnlMemo = data.value[0].JrnlMemo;
      const transferNo = jrnlMemo.split(":")[1];
      const transferDate = transferNo.slice(0, 8);
      const transferCount = parseInt(transferNo.slice(8));
      const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      if (transferDate !== today) {
        setJournalMemo(`WEB STOCK Transferno:${today}0001`);
      } else {
        const newCount = (transferCount + 1).toString().padStart(4, "0");
        setJournalMemo(`WEB STOCK Transferno:${today}${newCount}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    binLocations();
    setShowSummary(true);
  }, []);

  useEffect(() => {
    if (showSummary === true) {
      updateJournalMemo();
    }
  }, [showSummary]);

  useEffect(() => {
    setSelectedToBin("");
    changeToBinCode(selectedToWarehouse, toBinList);
  }, [selectedToWarehouse]);

  useEffect(() => {
    // startClean();
    handleSearchBatchInBin(batchNumber);
    findBatchNumber(batchNumber);
  }, [batchNumber]);

  useEffect(() => {
    setSelectedFromBin("");
    setSelectedToWarehouse("");
    setSelectedToBin("");

    if (selectedFromWarehouse !== "") {
      setFromBin(
        fromBinList.filter((bin) => bin.slice(0, 3) === selectedFromWarehouse)
      );
    }

    updateMaxQuantity(selectedFromWarehouse, selectedFromBin, batchInBin);

    if (selectedFromWarehouse !== "") {
      if (selectedToWarehouse === "WIQ") {
        setSelectedFromWarehouseName("Incoming Quarantine Warehouse");
      } else if (selectedFromWarehouse === "WCP") {
        setSelectedFromWarehouseName("Component Warehouse");
      } else if (selectedFromWarehouse === "WFP") {
        setSelectedFromWarehouseName("Finished Product Warehouse");
      } else if (selectedFromWarehouse === "WIQ") {
        setSelectedFromWarehouseName("Incoming Quarantine Warehouse");
      } else if (selectedFromWarehouse === "WPQ") {
        setSelectedFromWarehouseName("Production Quarantine Warehouse");
      } else if (selectedFromWarehouse === "WRJ") {
        setSelectedFromWarehouseName("Reject Warehouse");
      } else if (selectedFromWarehouse === "WRT") {
        setSelectedFromWarehouseName("Return Warehouse");
      } else if (selectedFromWarehouse === "WRV") {
        setSelectedFromWarehouseName("Review Warehouse");
      } else {
        setSelectedToWarehouseName("");
      }
      console.log(
        `useEffect From Selected Warehouse: ${selectedFromWarehouse}`
      );
    }
  }, [selectedFromWarehouse]);

  useEffect(() => {
    setSelectedToWarehouse("");
    setSelectedToBin("");
    updateMaxQuantity(selectedFromWarehouse, selectedFromBin, batchInBin);
    if (selectedFromBin !== "") {
      setToWarehouses(["WIQ", "W3Q", "WFP", "WPQ", "WRJ", "WRV", "WRT", "WCP"]);
    }
  }, [selectedFromBin]);

  useEffect(() => {
    if (selectedToWarehouse !== "") {
      if (selectedToWarehouse === "WIQ") {
        setSelectedToWarehouseName("Incoming Quarantine Warehouse");
      } else if (selectedToWarehouse === "WCP") {
        setSelectedToWarehouseName("Component Warehouse");
      } else if (selectedToWarehouse === "WFP") {
        setSelectedToWarehouseName("Finished Product Warehouse");
      } else if (selectedToWarehouse === "WIQ") {
        setSelectedToWarehouseName("Incoming Quarantine Warehouse");
      } else if (selectedToWarehouse === "WPQ") {
        setSelectedToWarehouseName("Production Quarantine Warehouse");
      } else if (selectedToWarehouse === "WRJ") {
        setSelectedToWarehouseName("Reject Warehouse");
      } else if (selectedToWarehouse === "WRT") {
        setSelectedToWarehouseName("Return Warehouse");
      } else if (selectedToWarehouse === "WRV") {
        setSelectedToWarehouseName("Review Warehouse");
      } else {
        setSelectedToWarehouseName("");
      }
    }
  }, [selectedToWarehouse]);

  return (
    <div className="flex-container">
      <div className="flex-item">
        <label>Logged in person: </label>
        <div>{username}</div>
        <div>DB: Homart_Live</div>
      </div>

      <div className="flex-item">
        <label>Batch Number: </label>
        <input
          type="text"
          onChange={(event) => setInputBatchNumber(event.target.value)}
        />
        <button
          className="ignore-button"
          onClick={() => setBatchNumber(inputBatchNumber)}
        >
          Search
        </button>
      </div>

      <div className="flex-item">
        <label>Item Code: </label>
        <label>{itemCode}</label>
      </div>

      <div className="flex-item">
        <label>ItemDescription: </label>
        <label>{itemDescription}</label>
      </div>

      <div className="flex-item">
        <label>BatchStatus: </label>
        <label>{batchStatus}</label>
      </div>

      <div className="flex-item">
        <label>UoM Name : </label>
        <label>{uomName}</label>
      </div>

      <div className="flex-item">
        <div>From Warehouse</div>
        <select
          value={selectedFromWarehouse}
          onChange={(e) => setSelectedFromWarehouse(e.target.value)}
        >
          <option value="" disabled selected>
            Select a warehouse
          </option>
          {fromWarehouse.map((fromWhs) => (
            <option key={fromWhs} value={fromWhs}>
              {fromWhs}
            </option>
          ))}
        </select>
        <div>{selectedFromWarehouseName}</div>
      </div>

      <div className="flex-item">
        <div>From Bin</div>
        <select
          value={selectedFromBin}
          onChange={(e) => setSelectedFromBin(e.target.value)}
        >
          <option value="">Select a bin</option>
          {fromBin.map((bin) => (
            <option key={bin} value={bin}>
              {bin}
            </option>
          ))}
        </select>
        <div>{selectedFromBin}</div>
      </div>

      <div className="flex-item">
        <div>To Warehouse</div>
        <select
          value={selectedToWarehouse}
          onChange={(e) => setSelectedToWarehouse(e.target.value)}
        >
          <option value="" disabled selected>
            Select a warehouse
          </option>
          {toWarehouses.map((toWhs) => (
            <option key={toWhs} value={toWhs}>
              {toWhs}
            </option>
          ))}
        </select>
        <div>{selectedToWarehouseName}</div>
      </div>

      <div className="flex-item">
        <div>To Bin</div>
        <select
          value={selectedToBin}
          onChange={(e) => setSelectedToBin(e.target.value)}
        >
          <option value="">Select a bin</option>
          {toBin.map((bin) => (
            <option key={bin} value={bin}>
              {bin}
            </option>
          ))}
        </select>
        <div>{selectedToBin}</div>
      </div>

      <div className="flex-item">
        <div>Quantity: </div>
        <input
          type="number"
          min="1"
          max={maxQuantity}
          onChange={(event) => {
            const value = parseInt(event.target.value);
            if (value > 0 && value <= maxQuantity) {
              setEnteredQuantity(value);
            }
          }}
        />
        <div>Max Quantity: {maxQuantity}</div>
      </div>

      <div className="flex-item">
        <label>Posting Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          max={new Date().toISOString().slice(0, 10)}
        />
      </div>

      <div className="flex-item">
        <label>Remarks:</label>
        <textarea
          onChange={(e) => setEnteredRemark(e.target.value || "")}
        ></textarea>
      </div>

      <div className="flex-item">
        <div></div>
        <button className="ignore-button" onClick={() => clearAll()}>
          Clear All
        </button>
        <button className="invisible-button">Add</button>
        <button className="ignore-button" onClick={() => setShowSummary(true)}>
          Transfer
        </button>
      </div>

      <div>
        {showSummary && (
          <>
            <div>Summary: </div>
            <div>Batch Number: {inputBatchNumber}</div>
            <div>From Warehouse: {selectedFromWarehouse}</div>
            <div>From Bin: {selectedFromBin}</div>
            <div>To Warehouse: {selectedToWarehouse}</div>
            <div>To Bin: {selectedToBin}</div>
            <div>Quantity: {enteredQuantity}</div>
            <div>Date: {selectedDate}</div>
            <div>Remark: {enteredRemark}</div>
            <div>JournalMemo: {journalMemo}</div>

            <button className="ignore-button" onClick={cancelTransfer}>
              Cancel
            </button>
            <button className="ignore-button" onClick={submitTransfer}>
              Submit
            </button>
          </>
        )}
      </div>

      <div>
        {transferMessage && (
          <>
            <div>{transferMessage}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default TransForm;
