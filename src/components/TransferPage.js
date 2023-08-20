import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransferPage.css";

const TransferPage = ({ username }) => {

    const [errorMessage, setErrorMessage] = useState([]);

    const [batchNumber, setBatchNumber] = useState("");
    const [itemCode, setItemCode] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [batchStatus, setBatchStatus] = useState("");
    const [uomName, setUomName] = useState("");

    const [remarks, setRemarks] = useState("");
    const [postingDate, setPostingDate] = useState("");

    const [maxQuantity, setMaxQuantity] = useState("");
    const [enteredQuantity, setEnteredQuantity] = useState("");

    const [batchInBin, setBatchInBin] = useState([]);
    const [fromWarehouses, setFromWarehouses] = useState([]);
    const [selectedFromWarehouse, setSelectedFromWarehouse] = useState("");
    const [selectedFromWarehouseName, setSelectedFromWarehouseName] = useState("");
    const [fromBins, setFromBins] = useState([]);
    const [selectedFromBin, setSelectedFromBin] = useState("");

    const [toWarehouses, setToWarehouses] = useState([
        "WIQ", "W3Q", "WFP", "WPQ", "WRJ", "WRV", "WRT", "WCP",
    ]);
    const [selectedToWarehouse, setSelectedToWarehouse] = useState("");
    const [selectedToWarehouseName, setSelectedToWarehouseName] = useState("");
    const [toBins, setToBins] = useState([]);
    const [selectedToBin, setSelectedToBin] = useState("");

    const [errorTransferMessage, setErrorTransferMessage] = useState([]);
    const [successTransferMessage, setSuccessTransferMessage] = useState("");
    const [showSummary, setShowSummary] = useState(false);
    const [transferDetailsSummary, setTransferDetailsSummary] = useState([]);


    const clearAll = () => {
        setErrorMessage([]);
        setBatchNumber("");
        setItemCode("");
        setItemDescription("");
        setBatchStatus("");
        setUomName("");
        setRemarks("");
        setPostingDate("");
        setMaxQuantity("");
        setEnteredQuantity("");
        setBatchInBin([]);
        setFromWarehouses([]);
        setSelectedFromWarehouse("");
        setFromBins([]);
        setSelectedFromBin("");
        setSelectedToWarehouse("");
        setSelectedToWarehouseName("");
        setToBins([]);
        setSelectedToBin("");
        setErrorTransferMessage([]);
        setSuccessTransferMessage("");
        setShowSummary(false);
        setTransferDetailsSummary([]);
    };




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
                setItemDescription(response.data.value[0].ItemDescription);
                if (response.data.value[0].Status.includes("_")) {
                    setBatchStatus(
                        response.data.value[0].Status.split("_")[1].toUpperCase()
                    );
                } else {
                    setBatchStatus(response.data.value[0].batchStatus);
                }
            } else {
                setErrorMessage(...errorMessage, "Batch number not found");
                setItemCode("");
                setItemDescription("");
                setBatchStatus("");
                setUomName("");
            }
        } catch (error) {
            // handle error here
            console.log(error);
        }
    };


    const handleItemNumberChange = async (itemCode) => {
        try {
            const response = await axios.post("http://localhost:3005/api/items", {
                ItemNumber: itemCode,
            });
            console.log(response.data);
            if (response.data.InventoryUOM) {
                setUomName(response.data.InventoryUOM);
            } else {
                setUomName("");
            }
        } catch (error) {
            setUomName("");
            console.log(error);
        }
    }

    const fetchBatchInBin = async (batchNumber) => {
        try {
            const response = await axios.post(
                "http://localhost:3005/api/batchinbin",
                {
                    BatchNumber: batchNumber,
                }
            );
            console.log(response.data);


            if (!response.data.value) {
                setErrorMessage(errorMessage, "Stock information not found for this batch number.");

            } else if (response.data.value.length === 0) {
                setErrorMessage(errorMessage, "No stock available for this batch number.");
            }

            setMaxQuantity("");
            setBatchInBin([]);
            setFromWarehouses([]);
            setSelectedFromWarehouse("");
            setFromBins([]);
            setSelectedFromBin("");
            setSelectedToWarehouse("");
            setSelectedToWarehouseName("");
            setToBins([]);
            setSelectedToBin("");
            setErrorTransferMessage([]);
            setSuccessTransferMessage("");
            setShowSummary(false);
            setTransferDetailsSummary([]);

            if (response.data && response.data.value) {
                setBatchInBin(response.data.value);
            }


        } catch (error) {
            console.log(error);
        }
    }

    const setSourceWarehouseAndBin = (batchInBinData) => {
        const newFromWarehouses = [...fromWarehouses];

        if (batchInBinData && Array.isArray(batchInBinData.value)) {
            batchInBinData.value.forEach((item) => {
                if (!newFromWarehouses.includes(item.WhsCode)) {
                    newFromWarehouses.push(item.WhsCode);
                }
            });
            setFromWarehouses(newFromWarehouses);

            const newFromBins = [...fromBins];
            batchInBinData.value.forEach((item) => {
                newFromBins.push(item.BinCode);
            });
            setFromBins(newFromBins);
        }
    };



    const fetchBinLocations = async () => {
        try {
            const warehouses = ["WIQ", "WRV", "WCP"];
            for (const warehouse of warehouses) {
                const response = await axios.post(
                    "http://localhost:3005/api/binlocations",
                    {
                        WarehouseCode: warehouse,
                    }
                );

                console.log(response.data);

                if (response.data && response.data.value) {
                    setToBins((prevToBins) => [
                        ...prevToBins,
                        ...response.data.value.map((item) => item.BinCode),
                    ]);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    const calculateMaxQty = (batchInBin) => {
        let maxQty = 0;
        batchInBin.forEach((item) => {
            maxQty += item.OnHandQty;
        });
        setMaxQuantity(maxQty);
    };

    const getSelectedBinQty = (binCode) => {
        let qty = 0;
        batchInBin.forEach((item) => {
            if (item.BinCode === binCode) {
                setMaxQuantity(qty);
            }
        });
    }

    const warehouseFullName = (warehouseCode, fromOrToWarehouse) => {
        let tempString;
        switch (warehouseCode) {
            case "WIQ":
                tempString = "Incoming Quarantine Warehouse";
                break;
            case "WCP":
                tempString = "Component Warehouse";
                break;
            case "WFP":
                tempString = "Finished Product Warehouse";
                break;
            case "WPQ":
                tempString = "Production Quarantine Warehouse";
                break;
            case "WRJ":
                tempString = "Reject Warehouse";
                break;
            case "WRT":
                tempString = "Return Warehouse";
                break;
            case "WRV":
                tempString = "Review Warehouse";
                break;
            default:
                tempString = "XXX";
        }

        if (fromOrToWarehouse === "from") {
            setSelectedFromWarehouseName(tempString);
        } else if (fromOrToWarehouse === "to") {
            setSelectedToWarehouseName(tempString);
        }

    }


    useEffect(() => {
        handleBatchNumberChange(batchNumber);
    }, [batchNumber]);

    useEffect(() => {
        fetchBatchInBin(batchNumber);
    }, [batchNumber]);

    useEffect(() => {
        fetchBinLocations(batchNumber);
    }, [batchNumber]);

    useEffect(() => {
        handleItemNumberChange(itemCode);
    }, [itemCode]);

    useEffect(() => {
        setSourceWarehouseAndBin(batchInBin);
    }, [batchInBin]);

    useEffect(() => {
        calculateMaxQty(batchInBin);
    }, [batchInBin]);

    useEffect(() => {
        getSelectedBinQty(selectedFromBin);
    }, [selectedFromBin]);

    useEffect(() => {
        warehouseFullName(selectedFromWarehouse, "from");
    }, [selectedFromWarehouse]);

    useEffect(() => {
        warehouseFullName(selectedToWarehouse, "to");
    }, [selectedToWarehouse]);

    return (
        <div className="form-container">
            <div className="input-group">
                <label>Database Name:</label>
                <input type="text" readOnly />
            </div>

            <div className="input-group">
                <label>Login Person:</label>
                <input type="text" readOnly />
            </div>

            <div className="input-group">
                <label>Item Code:</label>
                <input type="text" readOnly />
                <span>Status:</span>
            </div>

            <div className="input-group">
                <label>Item Description:</label>
                <input type="text" readOnly />
                <span>Status:</span>
            </div>

            <div className="input-group">
                <label>Batch Number:</label>
                <input type="text" />
                <button>Search</button>
            </div>

            <div className="input-group">
                <label>From Warehouse:</label>
                <select>
                    {/* Options for warehouses */}
                </select>
            </div>

            <div className="input-group">
                <label>From Bin:</label>
                <select>
                    {/* Options for bins */}
                </select>
            </div>

            <div className="input-group">
                <label>To Warehouse:</label>
                <select>
                    {/* Options for warehouses */}
                </select>
            </div>

            <div className="input-group">
                <label>To Bin:</label>
                <select>
                    {/* Options for bins */}
                </select>
            </div>

            <div className="input-group">
                <label>Quantity:</label>
                <input type="number" />
                <span>MaxQty:</span>
            </div>

            <div className="input-group">
                <label>UoM Name:</label>
                <input type="text" readOnly />
            </div>

            <div className="input-group">
                <label>Posting Date:</label>
                <input type="date" />
            </div>

            <div className="input-group">
                <label>Remarks:</label>
                <textarea></textarea>
            </div>
        </div>
    )
}

export default TransferPage