import React, { useState } from "react";
import axios from "axios";
import './TransferForm.css';

function TransferForm({ username }) {



    // Below is the list of variables that will be used in the Transfer Form
    const [batchNumber, setBatchNumber] = React.useState('');
    const [itemCode, setItemCode] = React.useState('');
    const [itemDescription, setItemDescription] = React.useState('');
    const [batchStatus, setBatchStatus] = React.useState('');
    const [warehouses, setWarehouses] = React.useState([]);
    const [selectedWarehouse, setSelectedWarehouse] = React.useState('');
    const [fromBins, setFromBins] = React.useState([]);
    const [selectedFromBin, setSelectedFromBin] = React.useState('');
    const [toWarehouses, setToWarehouses] = React.useState(["WIQ", "W3Q", "WFP", "WPQ", "WRJ", "WRV", "WRT", "WCP"]);
    const [selectedToWarehouse, setSelectedToWarehouse] = React.useState('');
    const [toBin, setToBin] = React.useState([]);
    const [selectedToBin, setSelectedToBin] = React.useState('');
    const [maxQuantity, setMaxQuantity] = React.useState('');
    const [enteredQuantity, setEnteredQuantity] = React.useState('');
    const [postingDate, setPostingDate] = React.useState('');
    const [remarks, setRemarks] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState([]);
    const [successMessage, setSuccessMessage] = React.useState('');
    const [showSummary, setShowSummary] = React.useState(false);
    const [transferDetails, setTransferDetails] = React.useState([]);
    const [transferStatus, setTransferStatus] = React.useState('');







    /*
    1. Login to SAP session
    2. Check if user account is valid
    3. Search for batch number
      3.1 If batch number is valid, get item code, item description, status
      3.2 If batch number is invalid, show error message
      3.3 If batch number is valid, get list of warehouse/bins that have stock
      3.4 If stock is 0 in all warehouses, show error message
      3.5 If stock is > 0 in at least 1 warehouse, show list of warehouses/bins
    4. Select warehouse
      4.1 If warehouse is selected, get list of bins in that warehouse
    5. Select bin
    6. Select destination warehouse
      6.1 If destination warehouse is selected, get list of bins in that warehouse
    7. Select destination bin
    8. Enter quantity
      8.1 If quantity is entered, check if quantity is valid
      8.2 If quantity is invalid, show error message
      8.3 If quantity is valid, check if quantity is less than or equal to stock
      8.4 If quantity is greater than stock, show error message
      8.5 If quantity is less than or equal to stock, show success message
    9. Enter posting date
      9.1 If posting date is entered, check if posting date is valid
      9.2 If posting date is invalid, show error message
      9.3 If posting date is valid, show success message  
    10. Enter remarks
    11. Click Clear All button
      11.1 If Clear All button is clicked, clear all fields
    12. Click Transfer button
      12.1 If Transfer button is clicked, check if all fields are valid
      12.2 If all fields are valid, show success message
      12.3 If all fields are invalid, show error message
    13. Show summary of transfer details
      13.1 Show Transfer or Abort button
      13.2 If Transfer button is clicked, submit Transfer
      13.3 If Abort button is clicked, hide summary of transfer details
    14. Show success/error message
    15. If Transfer is successful, clear all fields and hide summary of transfer details.
    */





    // Below are the functions that will be used in the Transfer Form
    // Below function will be used to search for batch number
    const handleSearchClick = async () => {
        try {
            const response = await axios.post(
                "http://localhost:3005/api/batchnumberdetail",
                {
                    BatchNumber: batchNumber,
                }
            );
            // If batch number is valid, get item code, item description, status
            if (
                response.data &&
                response.data.value &&
                response.data.value.length > 0
            ) {
                // Clear all fields
                setErrorMessage("");
                setWarehouses([]);
                setFromWarehouses("");
                setSelectedWarehouse("");
                setSelectedFromBin("");
                setSelectedFromBinID("");
                setSelectedToWarehouse("");
                setSelectedToBin("");
                setQuantity("");
                setMaxQuantity("");
                setUomName("");
                setBatchInBin([]);
                setBins([]);
                setWarehouseDestnation();
                setToBins([]);
                setToBinID([]);
                setDate(new Date().toISOString().slice(0, 10));
                setJournalMemo("");
                setRemarks("");
                setTransferObject([]);

                //Set the data from the response
                setItemCode(response.data.value[0].ItemCode);
                setItemDescription(response.data.value[0].ItemDescription);
                if (response.data.value[0].batchStatus.includes("_")) {
                    setBatchStatus(response.data.value[0].batchStatus.split("_")[1].toUpperCase());
                } else {
                    setBatchStatus(response.data.value[0].batchStatus);
                }
            } else {
                setErrorMessage("Batch number not found");
            }
        } catch (error) {

        }
    }


    // Below function will be used to get item code, item description, status



    // Below function will be used to get list of warehouse/bins that have stock



    // Below function will be used to get list of bins in that warehouse



    // Below function will be used to get list of bins in that warehouse



    // Below function will be used to check if quantity is valid



    // Below function will be used to check if quantity is less than or equal to stock



    // Below function will be used to check if posting date is valid



    // Below function will be used to clear all fields



    // Below function will be used to submit Transfer



    // Below function will be used to show summary of transfer details



    // Below function will be used to show success/error message



    // Below function will be used to clear all fields and hide summary of transfer details



    // Below function will be used to show Transfer or Abort button



    // Below function will be used to submit Transfer



    // Below function will be used to hide summary of transfer details






    return (
        <div className="flex-container">
            <h2>Transfer Page</h2>
            {errorMessage && <div className="error-message">{errorMessage}</div>}

            // Below row is current logged in user and database name
            <div className="row">
                <div className="cell">Login Person</div>
                <div className="cell">{username.toUpperCase()}</div>
                <div className="cell">DB:Homart_Live</div>
            </div>




            // Below row allows user to enter and search a batch number and display the batch details
            <div className="row">
                <div className="cell">Batch Number</div>
                <input
                    className="yellow-background cell"
                    type="text"
                    value={batchNumber}
                    onChange={(event) => setBatchNumber(event.target.value)}
                />
                <button className='cell' onClick={handleSearchClick}>Search</button>
            </div>



            // Below row displays the batch details
            <div className="row">
                <div className="cell">Item Code</div>
                <div className="cell">{itemCode}</div>
                <div className="cell">{batchStatus}</div>
            </div>


            // Below row displays the items details
            <div className="row">
                <div className="cell ">Item Description</div>
                <div className="cell grey-background">{itemDescription}</div>
                <div className="cell"></div>
            </div>


            // Below row allows user to select a warehouse
            <div className="row">
                <div className="cell">From Warehouse</div>

                <select
                    className="yellow-background cell"
                    value={selectedWarehouse}
                    onChange={(event) => setSelectedWarehouse(event.target.value)}
                >
                    <option value="">Source Warehouse</option>
                    {warehouses.map((warehouse) => (
                        <option
                            key={warehouse.WarehouseCode}
                            value={warehouse.WarehouseCode}
                        >
                            {/* Will need to change below to full warehouse house name. */}
                            {warehouse.WarehouseCode}
                        </option>
                    ))}
                </select>
                {selectedWarehouse && (
                    <input
                        className="cell"
                        type="text"
                        value={selectedWarehouse}
                        readOnly
                    />
                )}

            </div>


            // Below row allows user to select a bin
            <div className="row">
                <div className="cell">From Bin</div>
                <select
                    className="yellow-background cell"
                    value={selectedFromBin}
                    onChange={(event) => setSelectedFromBin(event.target.value)}
                >
                    <option value="">Source Bin</option>
                    {bins.map((bin) => (
                        <option key={bin} value={bin}>
                            {bin}
                        </option>
                    ))}
                </select>
                {selectedFromBin && (
                    <input
                        className="cell"
                        type="text"
                        value={selectedFromBin}
                        readOnly
                    />
                )}
            </div>



            // Below row allows user to select a destination warehouse
            <div className="row">
                <div className="cell">To Warehouse</div>
                <select
                    className="yellow-background cell"
                    value={selectedToWarehouse}
                    onChange={(event) => setSelectedToWarehouse(event.target.value)}
                >
                    <option value="">Destination Warehouse</option>
                    {toWarehouses.map((warehouse) => (
                        <option key={warehouse} value={warehouse}>
                            {warehouse}
                        </option>
                    ))}
                </select>
                {selectedToWarehouse && (
                    <input
                        className="cell"
                        type="text"
                        value={selectedToWarehouse}
                        readOnly
                    />
                )}
            </div>


            // Below row allows user to select a destination bin
            <div className="row">
                <div className="cell">To Bin</div>
                <select
                    className="yellow-background"
                    value={selectedToBin}
                    onChange={(event) => setSelectedToBin(event.target.value)}
                >
                    <option value="">Destination Bin</option>
                    {toBins.map((bin) => (
                        <option key={bin} value={bin}>
                            {bin}
                        </option>
                    ))}
                </select>
                {selectedToBin && (
                    <input
                        className="cell"
                        type="text"
                        value={selectedToBin}
                        readOnly
                    />
                )}
            </div>




        // Below row allows user to enter a quantity
            <div className="row">
                <div className="cell">Quantity</div>
                <div className="cell">
                    <input
                        className="yellow-background"
                        type="number"
                        step="1"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                </div>
                <div className="cell grey-background display-only">
                    Maximum Qty = {maxQuantity}
                </div>
            </div>


        // Below row displays the UoM name
            <div className="row">
                <div className="cell">UoM Name</div>
                <div className="cell grey-background display-only">{uomName}</div>
                <div className="cell"></div>
            </div>


        // Below row allows user to enter a posting date
            <div className="row">
                <div className="cell">Posting Date</div>
                <div className="cell">
                    <input
                        className="yellow-background"
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                    />
                    {/* <div>{formatDate(date)}</div> */}
                </div>
                <div className="cell"></div>
            </div>



        // Remarks field
            <div className="row">
                <div className="cell">Remarks</div>
                <div className="cell">
                    <textarea className="remarks yellow-background"></textarea>
                </div>
                <div className="cell"></div>
            </div>


            // Clear All, Add and Transfer buttons
            <div className="row">
                <button className="cell" onClick={clearAllClick}>Clear All</button>
                <button className="cell" onClick={addToQueue}>Add</button>
                <button className="cell" onClick={startTransfer}>Transfer</button>
            </div>






        </div>



    );
}

export default TransferForm;
