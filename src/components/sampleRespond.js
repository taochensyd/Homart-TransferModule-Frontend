
// Login
localhost:3005/api/login

{
    "CompanyDB": "Homart_TEST8",
    "UserName": "SAPCreatio",
    "Password": "Bold#By68"
}


// userAccount

localhost:3005/api/userAccount

{
    "sapusername": "it",
    "sappassword": "Homart2116"
}

{
    "count": 1
}


// batchnumberdetail

localhost:3005/api/batchnumberdetail

{
    "BatchNumber": "H35996"
}

{
    "odata.metadata": "https://192.168.0.44:50000/b1s/v1/$metadata#BatchNumberDetails",
    "value": [
        {
            "DocEntry": 18489,
            "ItemCode": "PKKEY-0005",
            "ItemDescription": "Carton 1KEY Osmolax 298g Powder Carton 13186",
            "Status": "bdsStatus_Released",
            "Batch": "H35996",
            "BatchAttribute1": "C00964-Key Pharmaceuticals Pty Ltd(O",
            "BatchAttribute2": "AUST L 196162",
            "AdmissionDate": "2022-10-31",
            "ManufacturingDate": null,
            "ExpirationDate": null,
            "Details": null,
            "SystemNumber": 32,
            "U_DateReleased": "2022-11-09",
            "U_DateProcessed": null,
            "U_PestReason": null,
            "U_PackingSign": null,
            "U_LabelSample": null,
            "U_MilkSign": null,
            "U_Origin": null,
            "U_AQISNo": null,
            "U_F03H": null,
            "U_TransDelReced": null,
            "U_TransDelAccept": null,
            "U_ClaimedQty": 29378,
            "U_ShipperDamaged": "P",
            "U_DamagedReason": null,
            "U_ShipperLabel": "P",
            "U_LabelReason": null,
            "U_PestCheck": "P",
            "U_COAWeight": null,
            "U_WarehouseComment": "2P*32c*250+30c*250+23c*250+125+3=29378",
            "U_SuppCatNum": null,
            "U_SupplierCode": "S00857-Key Pharmaceuticals Pty Ltd",
            "U_GRPO": "GRPO",
            "U_InventoryUoM": "each",
            "U_AllowBatchDup": "N",
            "U_Manufacturer": "Key Pharmaceuticals Pty Ltd",
            "U_DeliveryNo": null,
            "U_InventoryNotes": null,
            "U_TestBeforeUse": "N"
        }
    ]
}



// items

localhost:3005/api/items

{
    "ItemNumber": "PKKEY-0005"
}

{
    "odata.metadata": "https://192.168.0.44:50000/b1s/v1/$metadata#Items/@Element",
    "odata.etag": "W/\"356A192B7913B04C54574D18C28D46E6395428AB\"",
    "ItemCode": "PKKEY-0005",
    "ItemName": "Carton 1KEY Osmolax 298g Powder Carton 13186",
    "ForeignName": "Carton Osmolax 298g Powder Carton 13186",
    "ItemsGroupCode": 113,
    "CustomsGroupCode": -1,
    "SalesVATGroup": "S1",
    "BarCode": null,
    "VatLiable": "tYES",
    "PurchaseItem": "tYES",
    "SalesItem": "tNO",
    "InventoryItem": "tYES",
    "IncomeAccount": null,
    "ExemptIncomeAccount": null,
    "ExpanseAccount": null,
    "Mainsupplier": null,
    "SupplierCatalogNo": null,
    "DesiredInventory": 0,
    "MinInventory": 0,
    "Picture": null,
    "User_Text": null,
    "SerialNum": null,
    "CommissionPercent": 0,
    "CommissionSum": 0,
    "CommissionGroup": 0,
    "TreeType": "iNotATree",
    "AssetItem": "tNO",
    "DataExportCode": null,
    "Manufacturer": -1,
    "QuantityOnStock": 15219,
    "QuantityOrderedFromVendors": 23000,
    "QuantityOrderedByCustomers": 37074,
    "ManageSerialNumbers": "tNO",
    "ManageBatchNumbers": "tYES",
    "Valid": "tYES",
    "ValidFrom": null,
    "ValidTo": null,
    "ValidRemarks": null,
    "Frozen": "tNO",
    "FrozenFrom": null,
    "FrozenTo": null,
    "FrozenRemarks": null,
    "SalesUnit": "1000",
    "SalesItemsPerUnit": 1000,
    "SalesPackagingUnit": null,
    "SalesQtyPerPackUnit": 1,
    "SalesUnitLength": null,
    "SalesLengthUnit": null,
    "SalesUnitWidth": null,
    "SalesWidthUnit": null,
    "SalesUnitHeight": null,
    "SalesHeightUnit": null,
    "SalesUnitVolume": 0,
    "SalesVolumeUnit": 4,
    "SalesUnitWeight": null,
    "SalesWeightUnit": null,
    "PurchaseUnit": "1000",
    "PurchaseItemsPerUnit": 1000,
    "PurchasePackagingUnit": null,
    "PurchaseQtyPerPackUnit": 1,
    "PurchaseUnitLength": null,
    "PurchaseLengthUnit": null,
    "PurchaseUnitWidth": null,
    "PurchaseWidthUnit": null,
    "PurchaseUnitHeight": null,
    "PurchaseHeightUnit": null,
    "PurchaseUnitVolume": 0,
    "PurchaseVolumeUnit": 4,
    "PurchaseUnitWeight": null,
    "PurchaseWeightUnit": null,
    "PurchaseVATGroup": "P1",
    "SalesFactor1": 1,
    "SalesFactor2": 1,
    "SalesFactor3": 1,
    "SalesFactor4": 1,
    "PurchaseFactor1": 1,
    "PurchaseFactor2": 1,
    "PurchaseFactor3": 1,
    "PurchaseFactor4": 1,
    "MovingAveragePrice": 0.3135,
    "ForeignRevenuesAccount": null,
    "ECRevenuesAccount": null,
    "ForeignExpensesAccount": null,
    "ECExpensesAccount": null,
    "AvgStdPrice": 0.3135,
    "DefaultWarehouse": null,
    "ShipType": 19,
    "GLMethod": "glm_ItemClass",
    "TaxType": "tt_Yes",
    "MaxInventory": 0,
    "ManageStockByWarehouse": "tNO",
    "PurchaseHeightUnit1": null,
    "PurchaseUnitHeight1": null,
    "PurchaseLengthUnit1": null,
    "PurchaseUnitLength1": null,
    "PurchaseWeightUnit1": null,
    "PurchaseUnitWeight1": null,
    "PurchaseWidthUnit1": null,
    "PurchaseUnitWidth1": null,
    "SalesHeightUnit1": null,
    "SalesUnitHeight1": null,
    "SalesLengthUnit1": null,
    "SalesUnitLength1": null,
    "SalesWeightUnit1": null,
    "SalesUnitWeight1": null,
    "SalesWidthUnit1": null,
    "SalesUnitWidth1": null,
    "ForceSelectionOfSerialNumber": "tYES",
    "ManageSerialNumbersOnReleaseOnly": "tNO",
    "WTLiable": "tNO",
    "CostAccountingMethod": "bis_MovingAverage",
    "SWW": null,
    "WarrantyTemplate": "",
    "IndirectTax": "tNO",
    "ArTaxCode": null,
    "ApTaxCode": null,
    "BaseUnitName": null,
    "ItemCountryOrg": null,
    "IssueMethod": "im_Manual",
    "SRIAndBatchManageMethod": "bomm_OnEveryTransaction",
    "IsPhantom": "tNO",
    "InventoryUOM": "each",
    "PlanningSystem": "bop_MRP",
    "ProcurementMethod": "bom_Buy",
    "ComponentWarehouse": "bomcw_BOM",
    "OrderIntervals": null,
    "OrderMultiple": 0,
    "LeadTime": null,
    "MinOrderQuantity": 0,
    "ItemType": "itItems",
    "ItemClass": "itcMaterial",
    "OutgoingServiceCode": -1,
    "IncomingServiceCode": -1,
    "ServiceGroup": -1,
    "NCMCode": -1,
    "MaterialType": "mt_FinishedGoods",
    "MaterialGroup": -1,
    "ProductSource": "",
    "Properties1": "tNO",
    "Properties2": "tNO",
    "Properties3": "tNO",
    "Properties4": "tNO",
    "Properties5": "tNO",
    "Properties6": "tNO",
    "Properties7": "tNO",
    "Properties8": "tNO",
    "Properties9": "tNO",
    "Properties10": "tNO",
    "Properties11": "tNO",
    "Properties12": "tNO",
    "Properties13": "tNO",
    "Properties14": "tYES",
    "Properties15": "tNO",
    "Properties16": "tNO",
    "Properties17": "tNO",
    "Properties18": "tNO",
    "Properties19": "tNO",
    "Properties20": "tNO",
    "Properties21": "tNO",
    "Properties22": "tNO",
    "Properties23": "tNO",
    "Properties24": "tNO",
    "Properties25": "tNO",
    "Properties26": "tNO",
    "Properties27": "tNO",
    "Properties28": "tNO",
    "Properties29": "tNO",
    "Properties30": "tNO",
    "Properties31": "tNO",
    "Properties32": "tNO",
    "Properties33": "tNO",
    "Properties34": "tNO",
    "Properties35": "tNO",
    "Properties36": "tNO",
    "Properties37": "tNO",
    "Properties38": "tNO",
    "Properties39": "tNO",
    "Properties40": "tNO",
    "Properties41": "tNO",
    "Properties42": "tNO",
    "Properties43": "tNO",
    "Properties44": "tNO",
    "Properties45": "tNO",
    "Properties46": "tNO",
    "Properties47": "tNO",
    "Properties48": "tNO",
    "Properties49": "tNO",
    "Properties50": "tNO",
    "Properties51": "tNO",
    "Properties52": "tNO",
    "Properties53": "tNO",
    "Properties54": "tNO",
    "Properties55": "tNO",
    "Properties56": "tNO",
    "Properties57": "tNO",
    "Properties58": "tNO",
    "Properties59": "tNO",
    "Properties60": "tNO",
    "Properties61": "tNO",
    "Properties62": "tNO",
    "Properties63": "tNO",
    "Properties64": "tNO",
    "AutoCreateSerialNumbersOnRelease": "tNO",
    "DNFEntry": -1,
    "GTSItemSpec": null,
    "GTSItemTaxCategory": null,
    "FuelID": null,
    "BeverageTableCode": "",
    "BeverageGroupCode": "",
    "BeverageCommercialBrandCode": null,
    "Series": 3,
    "ToleranceDays": null,
    "TypeOfAdvancedRules": "toarGeneral",
    "IssuePrimarilyBy": "ipbSerialAndBatchNumbers",
    "NoDiscounts": "tNO",
    "AssetClass": "",
    "AssetGroup": "",
    "InventoryNumber": "",
    "Technician": null,
    "Employee": null,
    "Location": null,
    "AssetStatus": "New",
    "CapitalizationDate": null,
    "StatisticalAsset": "tNO",
    "Cession": "tNO",
    "DeactivateAfterUsefulLife": "tNO",
    "ManageByQuantity": "tNO",
    "UoMGroupEntry": -1,
    "InventoryUoMEntry": -1,
    "DefaultSalesUoMEntry": null,
    "DefaultPurchasingUoMEntry": null,
    "DepreciationGroup": null,
    "AssetSerialNumber": "",
    "InventoryWeight": null,
    "InventoryWeightUnit": null,
    "InventoryWeight1": null,
    "InventoryWeightUnit1": null,
    "DefaultCountingUnit": null,
    "CountingItemsPerUnit": 1,
    "DefaultCountingUoMEntry": null,
    "Excisable": "tNO",
    "ChapterID": -1,
    "ScsCode": null,
    "SpProdType": null,
    "ProdStdCost": 0,
    "InCostRollup": "tYES",
    "VirtualAssetItem": "tNO",
    "EnforceAssetSerialNumbers": "tNO",
    "AttachmentEntry": null,
    "LinkedResource": null,
    "UpdateDate": "2020-12-23",
    "UpdateTime": "12:03:55",
    "GSTRelevnt": "tNO",
    "SACEntry": -1,
    "GSTTaxCategory": "gtc_Regular",
    "ServiceCategoryEntry": -1,
    "CapitalGoodsOnHoldPercent": null,
    "CapitalGoodsOnHoldLimit": null,
    "AssessableValue": 0,
    "AssVal4WTR": 0,
    "SOIExcisable": "se_NotExcisable",
    "TNVED": null,
    "ImportedItem": "tNO",
    "PricingUnit": -1,
    "CreateDate": "2017-05-18",
    "CreateTime": "10:54:17",
    "NVECode": null,
    "CtrSealQty": null,
    "CESTCode": -1,
    "LegalText": null,
    "DataVersion": 1,
    "CreateQRCodeFrom": null,
    "TraceableItem": "tNO",
    "U_MYOBItemCode": null,
    "U_WFPLocation": null,
    "U_Compatiable": "0",
    "U_QAVersion": null,
    "U_Manufacturers": "236",
    "ItemPrices": [
        {
            "PriceList": 1,
            "Price": 0,
            "Currency": "",
            "AdditionalPrice1": 0,
            "AdditionalCurrency1": "",
            "AdditionalPrice2": 0,
            "AdditionalCurrency2": "",
            "BasePriceList": 1,
            "Factor": 1,
            "UoMPrices": []
        },
        {
            "PriceList": 2,
            "Price": 0,
            "Currency": "",
            "AdditionalPrice1": 0,
            "AdditionalCurrency1": "",
            "AdditionalPrice2": 0,
            "AdditionalCurrency2": "",
            "BasePriceList": 2,
            "Factor": 1,
            "UoMPrices": []
        },
        {
            "PriceList": 3,
            "Price": 0,
            "Currency": "",
            "AdditionalPrice1": 0,
            "AdditionalCurrency1": "",
            "AdditionalPrice2": 0,
            "AdditionalCurrency2": "",
            "BasePriceList": 3,
            "Factor": 1,
            "UoMPrices": []
        },
        {
            "PriceList": 4,
            "Price": 0,
            "Currency": "",
            "AdditionalPrice1": 0,
            "AdditionalCurrency1": "",
            "AdditionalPrice2": 0,
            "AdditionalCurrency2": "",
            "BasePriceList": 4,
            "Factor": 1,
            "UoMPrices": []
        },
        {
            "PriceList": 5,
            "Price": 0,
            "Currency": "",
            "AdditionalPrice1": 0,
            "AdditionalCurrency1": "",
            "AdditionalPrice2": 0,
            "AdditionalCurrency2": "",
            "BasePriceList": 5,
            "Factor": 1,
            "UoMPrices": []
        },
        {
            "PriceList": 6,
            "Price": 0,
            "Currency": "",
            "AdditionalPrice1": 0,
            "AdditionalCurrency1": "",
            "AdditionalPrice2": 0,
            "AdditionalCurrency2": "",
            "BasePriceList": 6,
            "Factor": 1,
            "UoMPrices": []
        }
    ],
    "ItemWarehouseInfoCollection": [
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "W3P",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 1,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "W3Q",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 1,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WCP",
            "InStock": 15219,
            "Committed": 37074,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 20,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WCS",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 20,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WFP",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 20,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WIQ",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 23000,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 20,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WPQ",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 20,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WPR",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 20,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WRJ",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 20,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WRT",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 20,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WRV",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 1,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WS1",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 1,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WS2",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 1,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WSE",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 20,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        },
        {
            "MinimalStock": 0,
            "MaximalStock": 0,
            "MinimalOrder": 0,
            "StandardAveragePrice": 0,
            "Locked": "tNO",
            "InventoryAccount": null,
            "CostAccount": null,
            "TransferAccount": null,
            "RevenuesAccount": null,
            "VarienceAccount": null,
            "DecreasingAccount": null,
            "IncreasingAccount": null,
            "ReturningAccount": null,
            "ExpensesAccount": null,
            "EURevenuesAccount": null,
            "EUExpensesAccount": null,
            "ForeignRevenueAcc": null,
            "ForeignExpensAcc": null,
            "ExemptIncomeAcc": null,
            "PriceDifferenceAcc": null,
            "WarehouseCode": "WSP",
            "InStock": 0,
            "Committed": 0,
            "Ordered": 0,
            "CountedQuantity": 0,
            "WasCounted": "tNO",
            "UserSignature": 20,
            "Counted": 0,
            "ExpenseClearingAct": null,
            "PurchaseCreditAcc": null,
            "EUPurchaseCreditAcc": null,
            "ForeignPurchaseCreditAcc": null,
            "SalesCreditAcc": null,
            "SalesCreditEUAcc": null,
            "ExemptedCredits": null,
            "SalesCreditForeignAcc": null,
            "ExpenseOffsettingAccount": null,
            "WipAccount": null,
            "ExchangeRateDifferencesAcct": null,
            "GoodsClearingAcct": null,
            "NegativeInventoryAdjustmentAccount": null,
            "CostInflationOffsetAccount": null,
            "GLDecreaseAcct": null,
            "GLIncreaseAcct": null,
            "PAReturnAcct": null,
            "PurchaseAcct": null,
            "PurchaseOffsetAcct": null,
            "ShippedGoodsAccount": null,
            "StockInflationOffsetAccount": null,
            "StockInflationAdjustAccount": null,
            "VATInRevenueAccount": null,
            "WipVarianceAccount": null,
            "CostInflationAccount": null,
            "WHIncomingCenvatAccount": null,
            "WHOutgoingCenvatAccount": null,
            "StockInTransitAccount": null,
            "WipOffsetProfitAndLossAccount": null,
            "InventoryOffsetProfitAndLossAccount": null,
            "DefaultBin": null,
            "DefaultBinEnforced": "tNO",
            "PurchaseBalanceAccount": null,
            "ItemCode": "PKKEY-0005",
            "IndEscala": "tYES",
            "CNJPMan": null,
            "ItemCycleCounts": []
        }
    ],
    "ItemPreferredVendors": [],
    "ItemLocalizationInfos": [],
    "ItemProjects": [],
    "ItemDistributionRules": [],
    "ItemAttributeGroups": [],
    "ItemDepreciationParameters": [],
    "ItemPeriodControls": [],
    "ItemUnitOfMeasurementCollection": [],
    "ItemBarCodeCollection": [],
    "ItemIntrastatExtension": {}
}


bin locations

localhost:3005/api/binlocations


[
    {
        "AbsEntry": 1,
        "Warehouse": "WCS",
        "BinCode": "WCS-SYSTEM-BIN-LOCATION"
    },
    {
        "AbsEntry": 2,
        "Warehouse": "WCS",
        "BinCode": "WCS-C01338"
    },
    {
        "AbsEntry": 3,
        "Warehouse": "WCS",
        "BinCode": "WCS-C00855"
    },
    {
        "AbsEntry": 4,
        "Warehouse": "WCS",
        "BinCode": "WCS-C01721"
    },
    {
        "AbsEntry": 5,
        "Warehouse": "WCS",
        "BinCode": "WCS-C00059"
    },
    {
        "AbsEntry": 6,
        "Warehouse": "WCS",
        "BinCode": "WCS-C01991"
    },
    {
        "AbsEntry": 7,
        "Warehouse": "WCS",
        "BinCode": "WCS-C01209"
    },
    {
        "AbsEntry": 8,
        "Warehouse": "WCS",
        "BinCode": "WCS-C01210"
    },
    {
        "AbsEntry": 9,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02001"
    },
    {
        "AbsEntry": 10,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02012"
    },
    {
        "AbsEntry": 11,
        "Warehouse": "WCS",
        "BinCode": "WCS-C01670"
    },
    {
        "AbsEntry": 12,
        "Warehouse": "WCS",
        "BinCode": "WCS-C01324"
    },
    {
        "AbsEntry": 13,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02049"
    },
    {
        "AbsEntry": 14,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02111"
    },
    {
        "AbsEntry": 15,
        "Warehouse": "WCS",
        "BinCode": "WCS-C00205"
    },
    {
        "AbsEntry": 16,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02050"
    },
    {
        "AbsEntry": 17,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02117"
    },
    {
        "AbsEntry": 18,
        "Warehouse": "WCP",
        "BinCode": "WCP-SYSTEM-BIN-LOCATION"
    },
    {
        "AbsEntry": 19,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-SYSTEM-BIN-LOCATION"
    },
    {
        "AbsEntry": 20,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A00-0"
    },
    {
        "AbsEntry": 21,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A01-1"
    },
    {
        "AbsEntry": 22,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A01-2"
    },
    {
        "AbsEntry": 23,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A01-3"
    },
    {
        "AbsEntry": 24,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A01-4"
    },
    {
        "AbsEntry": 25,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A02-1"
    },
    {
        "AbsEntry": 26,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A02-2"
    },
    {
        "AbsEntry": 27,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A02-3"
    },
    {
        "AbsEntry": 28,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A02-4"
    },
    {
        "AbsEntry": 29,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A03-1"
    },
    {
        "AbsEntry": 30,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A03-2"
    },
    {
        "AbsEntry": 31,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A03-3"
    },
    {
        "AbsEntry": 32,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A03-4"
    },
    {
        "AbsEntry": 33,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A04-1"
    },
    {
        "AbsEntry": 34,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A04-2"
    },
    {
        "AbsEntry": 35,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A04-3"
    },
    {
        "AbsEntry": 36,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A04-4"
    },
    {
        "AbsEntry": 37,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A05-1"
    },
    {
        "AbsEntry": 38,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A05-2"
    },
    {
        "AbsEntry": 39,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A05-3"
    },
    {
        "AbsEntry": 40,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A05-4"
    },
    {
        "AbsEntry": 45,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A07-1"
    },
    {
        "AbsEntry": 46,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A07-2"
    },
    {
        "AbsEntry": 47,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A07-3"
    },
    {
        "AbsEntry": 48,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A07-4"
    },
    {
        "AbsEntry": 49,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A08-1"
    },
    {
        "AbsEntry": 50,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A08-2"
    },
    {
        "AbsEntry": 51,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A08-3"
    },
    {
        "AbsEntry": 52,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A08-4"
    },
    {
        "AbsEntry": 53,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A09-1"
    },
    {
        "AbsEntry": 54,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A09-2"
    },
    {
        "AbsEntry": 55,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A09-3"
    },
    {
        "AbsEntry": 56,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A09-4"
    },
    {
        "AbsEntry": 57,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A10-1"
    },
    {
        "AbsEntry": 58,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A10-2"
    },
    {
        "AbsEntry": 59,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A10-3"
    },
    {
        "AbsEntry": 60,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A10-4"
    },
    {
        "AbsEntry": 61,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A11-1"
    },
    {
        "AbsEntry": 62,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A11-2"
    },
    {
        "AbsEntry": 63,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A11-3"
    },
    {
        "AbsEntry": 64,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A11-4"
    },
    {
        "AbsEntry": 65,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A12-1"
    },
    {
        "AbsEntry": 66,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A12-2"
    },
    {
        "AbsEntry": 67,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A12-3"
    },
    {
        "AbsEntry": 68,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A12-4"
    },
    {
        "AbsEntry": 69,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A13-1"
    },
    {
        "AbsEntry": 70,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A13-2"
    },
    {
        "AbsEntry": 71,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A13-3"
    },
    {
        "AbsEntry": 72,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A13-4"
    },
    {
        "AbsEntry": 73,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A14-1"
    },
    {
        "AbsEntry": 74,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A14-2"
    },
    {
        "AbsEntry": 75,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A14-3"
    },
    {
        "AbsEntry": 76,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A14-4"
    },
    {
        "AbsEntry": 77,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A15-1"
    },
    {
        "AbsEntry": 78,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A15-2"
    },
    {
        "AbsEntry": 79,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A15-3"
    },
    {
        "AbsEntry": 80,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A15-4"
    },
    {
        "AbsEntry": 81,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A16-1"
    },
    {
        "AbsEntry": 82,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A16-2"
    },
    {
        "AbsEntry": 83,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A16-3"
    },
    {
        "AbsEntry": 84,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A16-4"
    },
    {
        "AbsEntry": 85,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A17-1"
    },
    {
        "AbsEntry": 86,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A17-2"
    },
    {
        "AbsEntry": 87,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A17-3"
    },
    {
        "AbsEntry": 88,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A17-4"
    },
    {
        "AbsEntry": 89,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A18-1"
    },
    {
        "AbsEntry": 90,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A18-2"
    },
    {
        "AbsEntry": 91,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A18-3"
    },
    {
        "AbsEntry": 92,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A18-4"
    },
    {
        "AbsEntry": 93,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A19-1"
    },
    {
        "AbsEntry": 94,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A19-2"
    },
    {
        "AbsEntry": 95,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A19-3"
    },
    {
        "AbsEntry": 96,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A19-4"
    },
    {
        "AbsEntry": 97,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A20-1"
    },
    {
        "AbsEntry": 98,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A20-2"
    },
    {
        "AbsEntry": 99,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A20-3"
    },
    {
        "AbsEntry": 100,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A20-4"
    },
    {
        "AbsEntry": 101,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A21-1"
    },
    {
        "AbsEntry": 102,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A21-2"
    },
    {
        "AbsEntry": 103,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A21-3"
    },
    {
        "AbsEntry": 104,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A21-4"
    },
    {
        "AbsEntry": 105,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A22-1"
    },
    {
        "AbsEntry": 106,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A22-2"
    },
    {
        "AbsEntry": 107,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A22-3"
    },
    {
        "AbsEntry": 108,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A22-4"
    },
    {
        "AbsEntry": 109,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A23-1"
    },
    {
        "AbsEntry": 110,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A23-2"
    },
    {
        "AbsEntry": 111,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A23-3"
    },
    {
        "AbsEntry": 112,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A23-4"
    },
    {
        "AbsEntry": 113,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A24-1"
    },
    {
        "AbsEntry": 114,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A24-2"
    },
    {
        "AbsEntry": 115,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A24-3"
    },
    {
        "AbsEntry": 116,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A24-4"
    },
    {
        "AbsEntry": 117,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B01-1"
    },
    {
        "AbsEntry": 118,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B01-2"
    },
    {
        "AbsEntry": 119,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B01-3"
    },
    {
        "AbsEntry": 120,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B01-4"
    },
    {
        "AbsEntry": 121,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B02-1"
    },
    {
        "AbsEntry": 122,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B02-2"
    },
    {
        "AbsEntry": 123,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B02-3"
    },
    {
        "AbsEntry": 124,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B02-4"
    },
    {
        "AbsEntry": 125,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B03-1"
    },
    {
        "AbsEntry": 126,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B03-2"
    },
    {
        "AbsEntry": 127,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B03-3"
    },
    {
        "AbsEntry": 128,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B03-4"
    },
    {
        "AbsEntry": 129,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B04-1"
    },
    {
        "AbsEntry": 130,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B04-2"
    },
    {
        "AbsEntry": 131,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B04-3"
    },
    {
        "AbsEntry": 132,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B04-4"
    },
    {
        "AbsEntry": 133,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B05-1"
    },
    {
        "AbsEntry": 134,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B05-2"
    },
    {
        "AbsEntry": 135,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B05-3"
    },
    {
        "AbsEntry": 136,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B05-4"
    },
    {
        "AbsEntry": 137,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B06-1"
    },
    {
        "AbsEntry": 138,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B06-2"
    },
    {
        "AbsEntry": 139,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B06-3"
    },
    {
        "AbsEntry": 140,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B06-4"
    },
    {
        "AbsEntry": 141,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B07-1"
    },
    {
        "AbsEntry": 142,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B07-2"
    },
    {
        "AbsEntry": 143,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B07-3"
    },
    {
        "AbsEntry": 144,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B07-4"
    },
    {
        "AbsEntry": 145,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B08-1"
    },
    {
        "AbsEntry": 146,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B08-2"
    },
    {
        "AbsEntry": 147,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B08-3"
    },
    {
        "AbsEntry": 148,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B08-4"
    },
    {
        "AbsEntry": 149,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B09-1"
    },
    {
        "AbsEntry": 150,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B09-2"
    },
    {
        "AbsEntry": 151,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B09-3"
    },
    {
        "AbsEntry": 152,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B09-4"
    },
    {
        "AbsEntry": 153,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B10-1"
    },
    {
        "AbsEntry": 154,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B10-2"
    },
    {
        "AbsEntry": 155,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B10-3"
    },
    {
        "AbsEntry": 156,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B10-4"
    },
    {
        "AbsEntry": 157,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B11-1"
    },
    {
        "AbsEntry": 158,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B11-2"
    },
    {
        "AbsEntry": 159,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B11-3"
    },
    {
        "AbsEntry": 160,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B11-4"
    },
    {
        "AbsEntry": 161,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B12-1"
    },
    {
        "AbsEntry": 162,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B12-2"
    },
    {
        "AbsEntry": 163,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B12-3"
    },
    {
        "AbsEntry": 164,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B12-4"
    },
    {
        "AbsEntry": 165,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B13-1"
    },
    {
        "AbsEntry": 166,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B13-2"
    },
    {
        "AbsEntry": 167,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B13-3"
    },
    {
        "AbsEntry": 168,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B13-4"
    },
    {
        "AbsEntry": 169,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B14-1"
    },
    {
        "AbsEntry": 170,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B14-2"
    },
    {
        "AbsEntry": 171,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B14-3"
    },
    {
        "AbsEntry": 172,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B14-4"
    },
    {
        "AbsEntry": 173,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B15-1"
    },
    {
        "AbsEntry": 174,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B15-2"
    },
    {
        "AbsEntry": 175,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B15-3"
    },
    {
        "AbsEntry": 176,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B15-4"
    },
    {
        "AbsEntry": 177,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B16-1"
    },
    {
        "AbsEntry": 178,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B16-2"
    },
    {
        "AbsEntry": 179,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B16-3"
    },
    {
        "AbsEntry": 180,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B16-4"
    },
    {
        "AbsEntry": 181,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B17-1"
    },
    {
        "AbsEntry": 182,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B17-2"
    },
    {
        "AbsEntry": 183,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B17-3"
    },
    {
        "AbsEntry": 184,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B17-4"
    },
    {
        "AbsEntry": 185,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B18-1"
    },
    {
        "AbsEntry": 186,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B18-2"
    },
    {
        "AbsEntry": 187,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B18-3"
    },
    {
        "AbsEntry": 188,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B18-4"
    },
    {
        "AbsEntry": 189,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B19-1"
    },
    {
        "AbsEntry": 190,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B19-2"
    },
    {
        "AbsEntry": 191,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B19-3"
    },
    {
        "AbsEntry": 192,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B19-4"
    },
    {
        "AbsEntry": 193,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B20-1"
    },
    {
        "AbsEntry": 194,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B20-2"
    },
    {
        "AbsEntry": 195,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B20-3"
    },
    {
        "AbsEntry": 196,
        "Warehouse": "WCP",
        "BinCode": "WCP-1B20-4"
    },
    {
        "AbsEntry": 197,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C01-1"
    },
    {
        "AbsEntry": 198,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C01-2"
    },
    {
        "AbsEntry": 199,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C01-3"
    },
    {
        "AbsEntry": 200,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C01-4"
    },
    {
        "AbsEntry": 201,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C01-5"
    },
    {
        "AbsEntry": 202,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C02-1"
    },
    {
        "AbsEntry": 203,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C02-2"
    },
    {
        "AbsEntry": 204,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C02-3"
    },
    {
        "AbsEntry": 205,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C02-4"
    },
    {
        "AbsEntry": 206,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C02-5"
    },
    {
        "AbsEntry": 207,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C03-1"
    },
    {
        "AbsEntry": 208,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C03-2"
    },
    {
        "AbsEntry": 209,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C03-3"
    },
    {
        "AbsEntry": 210,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C03-4"
    },
    {
        "AbsEntry": 211,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C03-5"
    },
    {
        "AbsEntry": 212,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C04-1"
    },
    {
        "AbsEntry": 213,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C04-2"
    },
    {
        "AbsEntry": 214,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C04-3"
    },
    {
        "AbsEntry": 215,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C04-4"
    },
    {
        "AbsEntry": 216,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C04-5"
    },
    {
        "AbsEntry": 217,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C05-1"
    },
    {
        "AbsEntry": 218,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C05-2"
    },
    {
        "AbsEntry": 219,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C05-3"
    },
    {
        "AbsEntry": 220,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C05-4"
    },
    {
        "AbsEntry": 221,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C05-5"
    },
    {
        "AbsEntry": 222,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C06-1"
    },
    {
        "AbsEntry": 223,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C06-2"
    },
    {
        "AbsEntry": 224,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C06-3"
    },
    {
        "AbsEntry": 225,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C06-4"
    },
    {
        "AbsEntry": 226,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C06-5"
    },
    {
        "AbsEntry": 227,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C07-1"
    },
    {
        "AbsEntry": 228,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C07-2"
    },
    {
        "AbsEntry": 229,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C07-3"
    },
    {
        "AbsEntry": 230,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C07-4"
    },
    {
        "AbsEntry": 231,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C07-5"
    },
    {
        "AbsEntry": 232,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C08-1"
    },
    {
        "AbsEntry": 233,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C08-2"
    },
    {
        "AbsEntry": 234,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C08-3"
    },
    {
        "AbsEntry": 235,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C08-4"
    },
    {
        "AbsEntry": 236,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C08-5"
    },
    {
        "AbsEntry": 237,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C09-1"
    },
    {
        "AbsEntry": 238,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C09-2"
    },
    {
        "AbsEntry": 239,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C09-3"
    },
    {
        "AbsEntry": 240,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C09-4"
    },
    {
        "AbsEntry": 241,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C09-5"
    },
    {
        "AbsEntry": 242,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C10-1"
    },
    {
        "AbsEntry": 243,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C10-2"
    },
    {
        "AbsEntry": 244,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C10-3"
    },
    {
        "AbsEntry": 245,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C10-4"
    },
    {
        "AbsEntry": 246,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C10-5"
    },
    {
        "AbsEntry": 247,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C11-1"
    },
    {
        "AbsEntry": 248,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C11-2"
    },
    {
        "AbsEntry": 249,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C11-3"
    },
    {
        "AbsEntry": 250,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C11-4"
    },
    {
        "AbsEntry": 251,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C11-5"
    },
    {
        "AbsEntry": 252,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C12-1"
    },
    {
        "AbsEntry": 253,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C12-2"
    },
    {
        "AbsEntry": 254,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C12-3"
    },
    {
        "AbsEntry": 255,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C12-4"
    },
    {
        "AbsEntry": 256,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C12-5"
    },
    {
        "AbsEntry": 257,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C13-1"
    },
    {
        "AbsEntry": 258,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C13-2"
    },
    {
        "AbsEntry": 259,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C13-3"
    },
    {
        "AbsEntry": 260,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C13-4"
    },
    {
        "AbsEntry": 261,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C13-5"
    },
    {
        "AbsEntry": 262,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C14-1"
    },
    {
        "AbsEntry": 263,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C14-2"
    },
    {
        "AbsEntry": 264,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C14-3"
    },
    {
        "AbsEntry": 265,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C14-4"
    },
    {
        "AbsEntry": 266,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C14-5"
    },
    {
        "AbsEntry": 267,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C15-1"
    },
    {
        "AbsEntry": 268,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C15-2"
    },
    {
        "AbsEntry": 269,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C15-3"
    },
    {
        "AbsEntry": 270,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C15-4"
    },
    {
        "AbsEntry": 271,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C15-5"
    },
    {
        "AbsEntry": 272,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C16-1"
    },
    {
        "AbsEntry": 273,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C16-2"
    },
    {
        "AbsEntry": 274,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C16-3"
    },
    {
        "AbsEntry": 275,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C16-4"
    },
    {
        "AbsEntry": 276,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C16-5"
    },
    {
        "AbsEntry": 277,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C17-1"
    },
    {
        "AbsEntry": 278,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C17-2"
    },
    {
        "AbsEntry": 279,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C17-3"
    },
    {
        "AbsEntry": 280,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C17-4"
    },
    {
        "AbsEntry": 281,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C17-5"
    },
    {
        "AbsEntry": 282,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C18-1"
    },
    {
        "AbsEntry": 283,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C18-2"
    },
    {
        "AbsEntry": 284,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C18-3"
    },
    {
        "AbsEntry": 285,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C18-4"
    },
    {
        "AbsEntry": 286,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C18-5"
    },
    {
        "AbsEntry": 287,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C19-1"
    },
    {
        "AbsEntry": 288,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C19-2"
    },
    {
        "AbsEntry": 289,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C19-3"
    },
    {
        "AbsEntry": 290,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C19-4"
    },
    {
        "AbsEntry": 291,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C19-5"
    },
    {
        "AbsEntry": 292,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C20-1"
    },
    {
        "AbsEntry": 293,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C20-2"
    },
    {
        "AbsEntry": 294,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C20-3"
    },
    {
        "AbsEntry": 295,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C20-4"
    },
    {
        "AbsEntry": 296,
        "Warehouse": "WCP",
        "BinCode": "WCP-1C20-5"
    },
    {
        "AbsEntry": 297,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D01-1"
    },
    {
        "AbsEntry": 298,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D01-2"
    },
    {
        "AbsEntry": 299,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D01-3"
    },
    {
        "AbsEntry": 300,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D01-4"
    },
    {
        "AbsEntry": 301,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D01-5"
    },
    {
        "AbsEntry": 302,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D02-1"
    },
    {
        "AbsEntry": 303,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D02-2"
    },
    {
        "AbsEntry": 304,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D02-3"
    },
    {
        "AbsEntry": 305,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D02-4"
    },
    {
        "AbsEntry": 306,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D02-5"
    },
    {
        "AbsEntry": 307,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D03-1"
    },
    {
        "AbsEntry": 308,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D03-2"
    },
    {
        "AbsEntry": 309,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D03-3"
    },
    {
        "AbsEntry": 310,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D03-4"
    },
    {
        "AbsEntry": 311,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D03-5"
    },
    {
        "AbsEntry": 312,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D04-1"
    },
    {
        "AbsEntry": 313,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D04-2"
    },
    {
        "AbsEntry": 314,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D04-3"
    },
    {
        "AbsEntry": 315,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D04-4"
    },
    {
        "AbsEntry": 316,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D04-5"
    },
    {
        "AbsEntry": 317,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D05-1"
    },
    {
        "AbsEntry": 318,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D05-2"
    },
    {
        "AbsEntry": 319,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D05-3"
    },
    {
        "AbsEntry": 320,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D05-4"
    },
    {
        "AbsEntry": 321,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D05-5"
    },
    {
        "AbsEntry": 322,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D06-1"
    },
    {
        "AbsEntry": 323,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D06-2"
    },
    {
        "AbsEntry": 324,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D06-3"
    },
    {
        "AbsEntry": 325,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D06-4"
    },
    {
        "AbsEntry": 326,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D06-5"
    },
    {
        "AbsEntry": 327,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D07-1"
    },
    {
        "AbsEntry": 328,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D07-2"
    },
    {
        "AbsEntry": 329,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D07-3"
    },
    {
        "AbsEntry": 330,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D07-4"
    },
    {
        "AbsEntry": 331,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D07-5"
    },
    {
        "AbsEntry": 332,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D08-1"
    },
    {
        "AbsEntry": 333,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D08-2"
    },
    {
        "AbsEntry": 334,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D08-3"
    },
    {
        "AbsEntry": 335,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D08-4"
    },
    {
        "AbsEntry": 336,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D08-5"
    },
    {
        "AbsEntry": 337,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D09-1"
    },
    {
        "AbsEntry": 338,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D09-2"
    },
    {
        "AbsEntry": 339,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D09-3"
    },
    {
        "AbsEntry": 340,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D09-4"
    },
    {
        "AbsEntry": 341,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D09-5"
    },
    {
        "AbsEntry": 342,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D10-1"
    },
    {
        "AbsEntry": 343,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D10-2"
    },
    {
        "AbsEntry": 344,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D10-3"
    },
    {
        "AbsEntry": 345,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D10-4"
    },
    {
        "AbsEntry": 346,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D10-5"
    },
    {
        "AbsEntry": 347,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D11-1"
    },
    {
        "AbsEntry": 348,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D11-2"
    },
    {
        "AbsEntry": 349,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D11-3"
    },
    {
        "AbsEntry": 350,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D11-4"
    },
    {
        "AbsEntry": 351,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D11-5"
    },
    {
        "AbsEntry": 352,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D12-1"
    },
    {
        "AbsEntry": 353,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D12-2"
    },
    {
        "AbsEntry": 354,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D12-3"
    },
    {
        "AbsEntry": 355,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D12-4"
    },
    {
        "AbsEntry": 356,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D12-5"
    },
    {
        "AbsEntry": 357,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D13-1"
    },
    {
        "AbsEntry": 358,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D13-2"
    },
    {
        "AbsEntry": 359,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D13-3"
    },
    {
        "AbsEntry": 360,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D13-4"
    },
    {
        "AbsEntry": 361,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D13-5"
    },
    {
        "AbsEntry": 362,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D14-1"
    },
    {
        "AbsEntry": 363,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D14-2"
    },
    {
        "AbsEntry": 364,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D14-3"
    },
    {
        "AbsEntry": 365,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D14-4"
    },
    {
        "AbsEntry": 366,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D14-5"
    },
    {
        "AbsEntry": 367,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D15-1"
    },
    {
        "AbsEntry": 368,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D15-2"
    },
    {
        "AbsEntry": 369,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D15-3"
    },
    {
        "AbsEntry": 370,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D15-4"
    },
    {
        "AbsEntry": 371,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D15-5"
    },
    {
        "AbsEntry": 372,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D16-1"
    },
    {
        "AbsEntry": 373,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D16-2"
    },
    {
        "AbsEntry": 374,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D16-3"
    },
    {
        "AbsEntry": 375,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D16-4"
    },
    {
        "AbsEntry": 376,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D16-5"
    },
    {
        "AbsEntry": 377,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D17-1"
    },
    {
        "AbsEntry": 378,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D17-2"
    },
    {
        "AbsEntry": 379,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D17-3"
    },
    {
        "AbsEntry": 380,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D17-4"
    },
    {
        "AbsEntry": 381,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D17-5"
    },
    {
        "AbsEntry": 382,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D18-1"
    },
    {
        "AbsEntry": 383,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D18-2"
    },
    {
        "AbsEntry": 384,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D18-3"
    },
    {
        "AbsEntry": 385,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D18-4"
    },
    {
        "AbsEntry": 386,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D18-5"
    },
    {
        "AbsEntry": 387,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D19-1"
    },
    {
        "AbsEntry": 388,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D19-2"
    },
    {
        "AbsEntry": 389,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D19-3"
    },
    {
        "AbsEntry": 390,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D19-4"
    },
    {
        "AbsEntry": 391,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D19-5"
    },
    {
        "AbsEntry": 392,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D20-1"
    },
    {
        "AbsEntry": 393,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D20-2"
    },
    {
        "AbsEntry": 394,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D20-3"
    },
    {
        "AbsEntry": 395,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D20-4"
    },
    {
        "AbsEntry": 396,
        "Warehouse": "WCP",
        "BinCode": "WCP-1D20-5"
    },
    {
        "AbsEntry": 397,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E01-1"
    },
    {
        "AbsEntry": 398,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E01-2"
    },
    {
        "AbsEntry": 399,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E01-3"
    },
    {
        "AbsEntry": 400,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E01-4"
    },
    {
        "AbsEntry": 401,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E02-1"
    },
    {
        "AbsEntry": 402,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E02-2"
    },
    {
        "AbsEntry": 403,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E02-3"
    },
    {
        "AbsEntry": 404,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E02-4"
    },
    {
        "AbsEntry": 405,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E03-1"
    },
    {
        "AbsEntry": 406,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E03-2"
    },
    {
        "AbsEntry": 407,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E03-3"
    },
    {
        "AbsEntry": 408,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E03-4"
    },
    {
        "AbsEntry": 409,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E04-1"
    },
    {
        "AbsEntry": 410,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E04-2"
    },
    {
        "AbsEntry": 411,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E04-3"
    },
    {
        "AbsEntry": 412,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E04-4"
    },
    {
        "AbsEntry": 413,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E05-1"
    },
    {
        "AbsEntry": 414,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E05-2"
    },
    {
        "AbsEntry": 415,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E05-3"
    },
    {
        "AbsEntry": 416,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E05-4"
    },
    {
        "AbsEntry": 417,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E06-1"
    },
    {
        "AbsEntry": 418,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E06-2"
    },
    {
        "AbsEntry": 419,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E06-3"
    },
    {
        "AbsEntry": 420,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E06-4"
    },
    {
        "AbsEntry": 421,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E07-1"
    },
    {
        "AbsEntry": 422,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E07-2"
    },
    {
        "AbsEntry": 423,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E07-3"
    },
    {
        "AbsEntry": 424,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E07-4"
    },
    {
        "AbsEntry": 425,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E08-1"
    },
    {
        "AbsEntry": 426,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E08-2"
    },
    {
        "AbsEntry": 427,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E08-3"
    },
    {
        "AbsEntry": 428,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E08-4"
    },
    {
        "AbsEntry": 429,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E09-1"
    },
    {
        "AbsEntry": 430,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E09-2"
    },
    {
        "AbsEntry": 431,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E09-3"
    },
    {
        "AbsEntry": 432,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E09-4"
    },
    {
        "AbsEntry": 433,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E10-1"
    },
    {
        "AbsEntry": 434,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E10-2"
    },
    {
        "AbsEntry": 435,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E10-3"
    },
    {
        "AbsEntry": 436,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E10-4"
    },
    {
        "AbsEntry": 437,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E11-1"
    },
    {
        "AbsEntry": 438,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E11-2"
    },
    {
        "AbsEntry": 439,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E11-3"
    },
    {
        "AbsEntry": 440,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E11-4"
    },
    {
        "AbsEntry": 441,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E12-1"
    },
    {
        "AbsEntry": 442,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E12-2"
    },
    {
        "AbsEntry": 443,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E12-3"
    },
    {
        "AbsEntry": 444,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E12-4"
    },
    {
        "AbsEntry": 445,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E13-1"
    },
    {
        "AbsEntry": 446,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E13-2"
    },
    {
        "AbsEntry": 447,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E13-3"
    },
    {
        "AbsEntry": 448,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E13-4"
    },
    {
        "AbsEntry": 449,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F01-1"
    },
    {
        "AbsEntry": 450,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F01-2"
    },
    {
        "AbsEntry": 451,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F01-3"
    },
    {
        "AbsEntry": 452,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F01-4"
    },
    {
        "AbsEntry": 453,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F02-1"
    },
    {
        "AbsEntry": 454,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F02-2"
    },
    {
        "AbsEntry": 455,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F02-3"
    },
    {
        "AbsEntry": 456,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F02-4"
    },
    {
        "AbsEntry": 457,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F03-1"
    },
    {
        "AbsEntry": 458,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F03-2"
    },
    {
        "AbsEntry": 459,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F03-3"
    },
    {
        "AbsEntry": 460,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F03-4"
    },
    {
        "AbsEntry": 461,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F04-1"
    },
    {
        "AbsEntry": 462,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F04-2"
    },
    {
        "AbsEntry": 463,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F04-3"
    },
    {
        "AbsEntry": 464,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F04-4"
    },
    {
        "AbsEntry": 465,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F05-1"
    },
    {
        "AbsEntry": 466,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F05-2"
    },
    {
        "AbsEntry": 467,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F05-3"
    },
    {
        "AbsEntry": 468,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F05-4"
    },
    {
        "AbsEntry": 469,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F06-1"
    },
    {
        "AbsEntry": 470,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F06-2"
    },
    {
        "AbsEntry": 471,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F06-3"
    },
    {
        "AbsEntry": 472,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F06-4"
    },
    {
        "AbsEntry": 473,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F07-1"
    },
    {
        "AbsEntry": 474,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F07-2"
    },
    {
        "AbsEntry": 475,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F07-3"
    },
    {
        "AbsEntry": 476,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F07-4"
    },
    {
        "AbsEntry": 477,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F08-1"
    },
    {
        "AbsEntry": 478,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F08-2"
    },
    {
        "AbsEntry": 479,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F08-3"
    },
    {
        "AbsEntry": 480,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F08-4"
    },
    {
        "AbsEntry": 481,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F09-1"
    },
    {
        "AbsEntry": 482,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F09-2"
    },
    {
        "AbsEntry": 483,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F09-3"
    },
    {
        "AbsEntry": 484,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F09-4"
    },
    {
        "AbsEntry": 485,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F10-1"
    },
    {
        "AbsEntry": 486,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F10-2"
    },
    {
        "AbsEntry": 487,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F10-3"
    },
    {
        "AbsEntry": 488,
        "Warehouse": "WCP",
        "BinCode": "WCP-1F10-4"
    },
    {
        "AbsEntry": 489,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G01-1"
    },
    {
        "AbsEntry": 490,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G01-2"
    },
    {
        "AbsEntry": 491,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G01-3"
    },
    {
        "AbsEntry": 492,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G01-4"
    },
    {
        "AbsEntry": 493,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G01-5"
    },
    {
        "AbsEntry": 494,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G02-1"
    },
    {
        "AbsEntry": 495,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G02-2"
    },
    {
        "AbsEntry": 496,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G02-3"
    },
    {
        "AbsEntry": 497,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G02-4"
    },
    {
        "AbsEntry": 498,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G02-5"
    },
    {
        "AbsEntry": 499,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G03-1"
    },
    {
        "AbsEntry": 500,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G03-2"
    },
    {
        "AbsEntry": 501,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G03-3"
    },
    {
        "AbsEntry": 502,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G03-4"
    },
    {
        "AbsEntry": 503,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G03-5"
    },
    {
        "AbsEntry": 504,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G04-1"
    },
    {
        "AbsEntry": 505,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G04-2"
    },
    {
        "AbsEntry": 506,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G04-3"
    },
    {
        "AbsEntry": 507,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G04-4"
    },
    {
        "AbsEntry": 508,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G04-5"
    },
    {
        "AbsEntry": 509,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G05-1"
    },
    {
        "AbsEntry": 510,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G05-2"
    },
    {
        "AbsEntry": 511,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G05-3"
    },
    {
        "AbsEntry": 512,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G05-4"
    },
    {
        "AbsEntry": 513,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G05-5"
    },
    {
        "AbsEntry": 514,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G06-1"
    },
    {
        "AbsEntry": 515,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G06-2"
    },
    {
        "AbsEntry": 516,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G06-3"
    },
    {
        "AbsEntry": 517,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G06-4"
    },
    {
        "AbsEntry": 518,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G06-5"
    },
    {
        "AbsEntry": 519,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G07-1"
    },
    {
        "AbsEntry": 520,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G07-2"
    },
    {
        "AbsEntry": 521,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G07-3"
    },
    {
        "AbsEntry": 522,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G07-4"
    },
    {
        "AbsEntry": 523,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G07-5"
    },
    {
        "AbsEntry": 524,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G08-1"
    },
    {
        "AbsEntry": 525,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G08-2"
    },
    {
        "AbsEntry": 526,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G08-3"
    },
    {
        "AbsEntry": 527,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G08-4"
    },
    {
        "AbsEntry": 528,
        "Warehouse": "WCP",
        "BinCode": "WCP-1G08-5"
    },
    {
        "AbsEntry": 529,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H01-1"
    },
    {
        "AbsEntry": 530,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H01-2"
    },
    {
        "AbsEntry": 531,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H02-1"
    },
    {
        "AbsEntry": 532,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H02-2"
    },
    {
        "AbsEntry": 533,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H03-1"
    },
    {
        "AbsEntry": 534,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H03-2"
    },
    {
        "AbsEntry": 535,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H04-1"
    },
    {
        "AbsEntry": 536,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H04-2"
    },
    {
        "AbsEntry": 537,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H05-1"
    },
    {
        "AbsEntry": 538,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H05-2"
    },
    {
        "AbsEntry": 539,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H06-1"
    },
    {
        "AbsEntry": 540,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H06-2"
    },
    {
        "AbsEntry": 541,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H07-1"
    },
    {
        "AbsEntry": 542,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H07-2"
    },
    {
        "AbsEntry": 543,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H08-1"
    },
    {
        "AbsEntry": 544,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H08-2"
    },
    {
        "AbsEntry": 545,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H09-1"
    },
    {
        "AbsEntry": 546,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H09-2"
    },
    {
        "AbsEntry": 547,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H10-1"
    },
    {
        "AbsEntry": 548,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H10-2"
    },
    {
        "AbsEntry": 549,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H11-1"
    },
    {
        "AbsEntry": 550,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H11-2"
    },
    {
        "AbsEntry": 551,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H12-1"
    },
    {
        "AbsEntry": 552,
        "Warehouse": "WCP",
        "BinCode": "WCP-1H12-2"
    },
    {
        "AbsEntry": 553,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I01-1"
    },
    {
        "AbsEntry": 554,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I01-2"
    },
    {
        "AbsEntry": 555,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I02-1"
    },
    {
        "AbsEntry": 556,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I02-2"
    },
    {
        "AbsEntry": 557,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I03-1"
    },
    {
        "AbsEntry": 558,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I03-2"
    },
    {
        "AbsEntry": 559,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I04-1"
    },
    {
        "AbsEntry": 560,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I04-2"
    },
    {
        "AbsEntry": 561,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I05-1"
    },
    {
        "AbsEntry": 562,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I05-2"
    },
    {
        "AbsEntry": 563,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I06-1"
    },
    {
        "AbsEntry": 564,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I06-2"
    },
    {
        "AbsEntry": 565,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I07-1"
    },
    {
        "AbsEntry": 566,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I07-2"
    },
    {
        "AbsEntry": 567,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I08-1"
    },
    {
        "AbsEntry": 568,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I08-2"
    },
    {
        "AbsEntry": 569,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I09-1"
    },
    {
        "AbsEntry": 570,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I09-2"
    },
    {
        "AbsEntry": 571,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I10-1"
    },
    {
        "AbsEntry": 572,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I10-2"
    },
    {
        "AbsEntry": 573,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I11-1"
    },
    {
        "AbsEntry": 574,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I11-2"
    },
    {
        "AbsEntry": 575,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I12-1"
    },
    {
        "AbsEntry": 576,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I12-2"
    },
    {
        "AbsEntry": 577,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I13-1"
    },
    {
        "AbsEntry": 578,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I13-2"
    },
    {
        "AbsEntry": 579,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I14-1"
    },
    {
        "AbsEntry": 580,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I14-2"
    },
    {
        "AbsEntry": 581,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I15-1"
    },
    {
        "AbsEntry": 582,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I15-2"
    },
    {
        "AbsEntry": 583,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I16-1"
    },
    {
        "AbsEntry": 584,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I16-2"
    },
    {
        "AbsEntry": 585,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I17-1"
    },
    {
        "AbsEntry": 586,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I17-2"
    },
    {
        "AbsEntry": 587,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I18-1"
    },
    {
        "AbsEntry": 588,
        "Warehouse": "WCP",
        "BinCode": "WCP-1I18-2"
    },
    {
        "AbsEntry": 589,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J01-1"
    },
    {
        "AbsEntry": 590,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J01-2"
    },
    {
        "AbsEntry": 591,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J02-1"
    },
    {
        "AbsEntry": 592,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J02-2"
    },
    {
        "AbsEntry": 593,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J03-1"
    },
    {
        "AbsEntry": 594,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J03-2"
    },
    {
        "AbsEntry": 595,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J04-1"
    },
    {
        "AbsEntry": 596,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J04-2"
    },
    {
        "AbsEntry": 597,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J05-1"
    },
    {
        "AbsEntry": 598,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J05-2"
    },
    {
        "AbsEntry": 599,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J06-1"
    },
    {
        "AbsEntry": 600,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J06-2"
    },
    {
        "AbsEntry": 601,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J07-1"
    },
    {
        "AbsEntry": 602,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J07-2"
    },
    {
        "AbsEntry": 603,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J08-1"
    },
    {
        "AbsEntry": 604,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J08-2"
    },
    {
        "AbsEntry": 605,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J09-1"
    },
    {
        "AbsEntry": 606,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J09-2"
    },
    {
        "AbsEntry": 607,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J10-1"
    },
    {
        "AbsEntry": 608,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J10-2"
    },
    {
        "AbsEntry": 609,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J11-1"
    },
    {
        "AbsEntry": 610,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J11-2"
    },
    {
        "AbsEntry": 611,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J12-1"
    },
    {
        "AbsEntry": 612,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J12-2"
    },
    {
        "AbsEntry": 613,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J13-1"
    },
    {
        "AbsEntry": 614,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J13-2"
    },
    {
        "AbsEntry": 615,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J14-1"
    },
    {
        "AbsEntry": 616,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J14-2"
    },
    {
        "AbsEntry": 617,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J15-1"
    },
    {
        "AbsEntry": 618,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J15-2"
    },
    {
        "AbsEntry": 619,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J16-1"
    },
    {
        "AbsEntry": 620,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J16-2"
    },
    {
        "AbsEntry": 621,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J17-1"
    },
    {
        "AbsEntry": 622,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J17-2"
    },
    {
        "AbsEntry": 623,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J18-1"
    },
    {
        "AbsEntry": 624,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J18-2"
    },
    {
        "AbsEntry": 625,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J19-1"
    },
    {
        "AbsEntry": 626,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J19-2"
    },
    {
        "AbsEntry": 627,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J20-1"
    },
    {
        "AbsEntry": 628,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J20-2"
    },
    {
        "AbsEntry": 629,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J21-1"
    },
    {
        "AbsEntry": 630,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J21-2"
    },
    {
        "AbsEntry": 631,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J22-1"
    },
    {
        "AbsEntry": 632,
        "Warehouse": "WCP",
        "BinCode": "WCP-1J22-2"
    },
    {
        "AbsEntry": 633,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K01-1"
    },
    {
        "AbsEntry": 634,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K01-2"
    },
    {
        "AbsEntry": 635,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K02-1"
    },
    {
        "AbsEntry": 636,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K02-2"
    },
    {
        "AbsEntry": 637,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K03-1"
    },
    {
        "AbsEntry": 638,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K03-2"
    },
    {
        "AbsEntry": 639,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K04-1"
    },
    {
        "AbsEntry": 640,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K04-2"
    },
    {
        "AbsEntry": 641,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K05-1"
    },
    {
        "AbsEntry": 642,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K05-2"
    },
    {
        "AbsEntry": 643,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K06-1"
    },
    {
        "AbsEntry": 644,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K06-2"
    },
    {
        "AbsEntry": 645,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K07-1"
    },
    {
        "AbsEntry": 646,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K07-2"
    },
    {
        "AbsEntry": 647,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K08-1"
    },
    {
        "AbsEntry": 648,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K08-2"
    },
    {
        "AbsEntry": 649,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K09-1"
    },
    {
        "AbsEntry": 650,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K09-2"
    },
    {
        "AbsEntry": 651,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K10-1"
    },
    {
        "AbsEntry": 652,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K10-2"
    },
    {
        "AbsEntry": 653,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K11-1"
    },
    {
        "AbsEntry": 654,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K11-2"
    },
    {
        "AbsEntry": 655,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K12-1"
    },
    {
        "AbsEntry": 656,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K12-2"
    },
    {
        "AbsEntry": 657,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K13-1"
    },
    {
        "AbsEntry": 658,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K13-2"
    },
    {
        "AbsEntry": 659,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K14-1"
    },
    {
        "AbsEntry": 660,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K14-2"
    },
    {
        "AbsEntry": 661,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K15-1"
    },
    {
        "AbsEntry": 662,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K15-2"
    },
    {
        "AbsEntry": 663,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K16-1"
    },
    {
        "AbsEntry": 664,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K16-2"
    },
    {
        "AbsEntry": 665,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K17-1"
    },
    {
        "AbsEntry": 666,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K17-2"
    },
    {
        "AbsEntry": 667,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K18-1"
    },
    {
        "AbsEntry": 668,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K18-2"
    },
    {
        "AbsEntry": 669,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K19-1"
    },
    {
        "AbsEntry": 670,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K19-2"
    },
    {
        "AbsEntry": 671,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K20-1"
    },
    {
        "AbsEntry": 672,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K20-2"
    },
    {
        "AbsEntry": 673,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K21-1"
    },
    {
        "AbsEntry": 674,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K21-2"
    },
    {
        "AbsEntry": 675,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K22-1"
    },
    {
        "AbsEntry": 676,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K22-2"
    },
    {
        "AbsEntry": 677,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K23-1"
    },
    {
        "AbsEntry": 678,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K23-2"
    },
    {
        "AbsEntry": 679,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K24-1"
    },
    {
        "AbsEntry": 680,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K24-2"
    },
    {
        "AbsEntry": 681,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K25-1"
    },
    {
        "AbsEntry": 682,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K25-2"
    },
    {
        "AbsEntry": 683,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K26-1"
    },
    {
        "AbsEntry": 684,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K26-2"
    },
    {
        "AbsEntry": 685,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K27-1"
    },
    {
        "AbsEntry": 686,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K27-2"
    },
    {
        "AbsEntry": 687,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K28-1"
    },
    {
        "AbsEntry": 688,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K28-2"
    },
    {
        "AbsEntry": 689,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K29-1"
    },
    {
        "AbsEntry": 690,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K29-2"
    },
    {
        "AbsEntry": 691,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K30-1"
    },
    {
        "AbsEntry": 692,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K30-2"
    },
    {
        "AbsEntry": 693,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K31-1"
    },
    {
        "AbsEntry": 694,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K31-2"
    },
    {
        "AbsEntry": 695,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K32-1"
    },
    {
        "AbsEntry": 696,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K32-2"
    },
    {
        "AbsEntry": 697,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K33-1"
    },
    {
        "AbsEntry": 698,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K33-2"
    },
    {
        "AbsEntry": 699,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K34-1"
    },
    {
        "AbsEntry": 700,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K34-2"
    },
    {
        "AbsEntry": 701,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K35-1"
    },
    {
        "AbsEntry": 702,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K35-2"
    },
    {
        "AbsEntry": 703,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K36-1"
    },
    {
        "AbsEntry": 704,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K36-2"
    },
    {
        "AbsEntry": 705,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K37-1"
    },
    {
        "AbsEntry": 706,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K37-2"
    },
    {
        "AbsEntry": 707,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K38-1"
    },
    {
        "AbsEntry": 708,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K38-2"
    },
    {
        "AbsEntry": 709,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K39-1"
    },
    {
        "AbsEntry": 710,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K39-2"
    },
    {
        "AbsEntry": 711,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K40-1"
    },
    {
        "AbsEntry": 712,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K40-2"
    },
    {
        "AbsEntry": 713,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K41-1"
    },
    {
        "AbsEntry": 714,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K41-2"
    },
    {
        "AbsEntry": 715,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K42-1"
    },
    {
        "AbsEntry": 716,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K42-2"
    },
    {
        "AbsEntry": 717,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K43-1"
    },
    {
        "AbsEntry": 718,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K43-2"
    },
    {
        "AbsEntry": 719,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K44-1"
    },
    {
        "AbsEntry": 720,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K44-2"
    },
    {
        "AbsEntry": 721,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K45-1"
    },
    {
        "AbsEntry": 722,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K45-2"
    },
    {
        "AbsEntry": 723,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K46-1"
    },
    {
        "AbsEntry": 724,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K46-2"
    },
    {
        "AbsEntry": 725,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K47-1"
    },
    {
        "AbsEntry": 726,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K47-2"
    },
    {
        "AbsEntry": 727,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K48-1"
    },
    {
        "AbsEntry": 728,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K48-2"
    },
    {
        "AbsEntry": 729,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K49-1"
    },
    {
        "AbsEntry": 730,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K49-2"
    },
    {
        "AbsEntry": 731,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K50-1"
    },
    {
        "AbsEntry": 732,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K50-2"
    },
    {
        "AbsEntry": 733,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K51-1"
    },
    {
        "AbsEntry": 734,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K51-2"
    },
    {
        "AbsEntry": 735,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K52-1"
    },
    {
        "AbsEntry": 736,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K52-2"
    },
    {
        "AbsEntry": 737,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K53-1"
    },
    {
        "AbsEntry": 738,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K53-2"
    },
    {
        "AbsEntry": 739,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K54-1"
    },
    {
        "AbsEntry": 740,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K54-2"
    },
    {
        "AbsEntry": 741,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K55-1"
    },
    {
        "AbsEntry": 742,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K55-2"
    },
    {
        "AbsEntry": 743,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K56-1"
    },
    {
        "AbsEntry": 744,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K56-2"
    },
    {
        "AbsEntry": 745,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K57-1"
    },
    {
        "AbsEntry": 746,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K57-2"
    },
    {
        "AbsEntry": 747,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K58-1"
    },
    {
        "AbsEntry": 748,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K58-2"
    },
    {
        "AbsEntry": 749,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K59-1"
    },
    {
        "AbsEntry": 750,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K59-2"
    },
    {
        "AbsEntry": 751,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K60-1"
    },
    {
        "AbsEntry": 752,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K60-2"
    },
    {
        "AbsEntry": 753,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K61-1"
    },
    {
        "AbsEntry": 754,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K61-2"
    },
    {
        "AbsEntry": 755,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K62-1"
    },
    {
        "AbsEntry": 756,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K62-2"
    },
    {
        "AbsEntry": 757,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K63-1"
    },
    {
        "AbsEntry": 758,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K63-2"
    },
    {
        "AbsEntry": 759,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K64-1"
    },
    {
        "AbsEntry": 760,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K64-2"
    },
    {
        "AbsEntry": 761,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K65-1"
    },
    {
        "AbsEntry": 762,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K65-2"
    },
    {
        "AbsEntry": 763,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K66-1"
    },
    {
        "AbsEntry": 764,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K66-2"
    },
    {
        "AbsEntry": 765,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K67-1"
    },
    {
        "AbsEntry": 766,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K67-2"
    },
    {
        "AbsEntry": 767,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K68-1"
    },
    {
        "AbsEntry": 768,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K68-2"
    },
    {
        "AbsEntry": 769,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K69-1"
    },
    {
        "AbsEntry": 770,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K69-2"
    },
    {
        "AbsEntry": 771,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K70-1"
    },
    {
        "AbsEntry": 772,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K70-2"
    },
    {
        "AbsEntry": 773,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K71-1"
    },
    {
        "AbsEntry": 774,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K71-2"
    },
    {
        "AbsEntry": 775,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K72-1"
    },
    {
        "AbsEntry": 776,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K72-2"
    },
    {
        "AbsEntry": 777,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K73-1"
    },
    {
        "AbsEntry": 778,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K73-2"
    },
    {
        "AbsEntry": 779,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K74-1"
    },
    {
        "AbsEntry": 780,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K74-2"
    },
    {
        "AbsEntry": 781,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K75-1"
    },
    {
        "AbsEntry": 782,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K75-2"
    },
    {
        "AbsEntry": 783,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K76-1"
    },
    {
        "AbsEntry": 784,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K76-2"
    },
    {
        "AbsEntry": 785,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K77-1"
    },
    {
        "AbsEntry": 786,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K77-2"
    },
    {
        "AbsEntry": 787,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K78-1"
    },
    {
        "AbsEntry": 788,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K78-2"
    },
    {
        "AbsEntry": 789,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K79-1"
    },
    {
        "AbsEntry": 790,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K79-2"
    },
    {
        "AbsEntry": 791,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K80-1"
    },
    {
        "AbsEntry": 792,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K80-2"
    },
    {
        "AbsEntry": 793,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K81-1"
    },
    {
        "AbsEntry": 794,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K81-2"
    },
    {
        "AbsEntry": 795,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K82-1"
    },
    {
        "AbsEntry": 796,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K82-2"
    },
    {
        "AbsEntry": 797,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K83-1"
    },
    {
        "AbsEntry": 798,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K83-2"
    },
    {
        "AbsEntry": 799,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K84-1"
    },
    {
        "AbsEntry": 800,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K84-2"
    },
    {
        "AbsEntry": 801,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K85-1"
    },
    {
        "AbsEntry": 802,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K85-2"
    },
    {
        "AbsEntry": 803,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K86-1"
    },
    {
        "AbsEntry": 804,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K86-2"
    },
    {
        "AbsEntry": 805,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K87-1"
    },
    {
        "AbsEntry": 806,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K87-2"
    },
    {
        "AbsEntry": 807,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K88-1"
    },
    {
        "AbsEntry": 808,
        "Warehouse": "WCP",
        "BinCode": "WCP-1K88-2"
    },
    {
        "AbsEntry": 809,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L01-1"
    },
    {
        "AbsEntry": 810,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L01-2"
    },
    {
        "AbsEntry": 811,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L02-1"
    },
    {
        "AbsEntry": 812,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L02-2"
    },
    {
        "AbsEntry": 813,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L03-1"
    },
    {
        "AbsEntry": 814,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L03-2"
    },
    {
        "AbsEntry": 815,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L04-1"
    },
    {
        "AbsEntry": 816,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L04-2"
    },
    {
        "AbsEntry": 817,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L05-1"
    },
    {
        "AbsEntry": 818,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L05-2"
    },
    {
        "AbsEntry": 819,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L06-1"
    },
    {
        "AbsEntry": 820,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L06-2"
    },
    {
        "AbsEntry": 821,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L07-1"
    },
    {
        "AbsEntry": 822,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L07-2"
    },
    {
        "AbsEntry": 823,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L08-1"
    },
    {
        "AbsEntry": 824,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L08-2"
    },
    {
        "AbsEntry": 825,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L09-1"
    },
    {
        "AbsEntry": 826,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L09-2"
    },
    {
        "AbsEntry": 827,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L10-1"
    },
    {
        "AbsEntry": 828,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L10-2"
    },
    {
        "AbsEntry": 829,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L11-1"
    },
    {
        "AbsEntry": 830,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L11-2"
    },
    {
        "AbsEntry": 831,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L12-1"
    },
    {
        "AbsEntry": 832,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L12-2"
    },
    {
        "AbsEntry": 833,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L13-1"
    },
    {
        "AbsEntry": 834,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L13-2"
    },
    {
        "AbsEntry": 835,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L14-1"
    },
    {
        "AbsEntry": 836,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L14-2"
    },
    {
        "AbsEntry": 837,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L14-3"
    },
    {
        "AbsEntry": 838,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L15-1"
    },
    {
        "AbsEntry": 839,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L15-2"
    },
    {
        "AbsEntry": 840,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L15-3"
    },
    {
        "AbsEntry": 841,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L16-1"
    },
    {
        "AbsEntry": 842,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L16-2"
    },
    {
        "AbsEntry": 843,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L16-3"
    },
    {
        "AbsEntry": 844,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L17-1"
    },
    {
        "AbsEntry": 845,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L17-2"
    },
    {
        "AbsEntry": 846,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L17-3"
    },
    {
        "AbsEntry": 847,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L18-1"
    },
    {
        "AbsEntry": 848,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L18-2"
    },
    {
        "AbsEntry": 849,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L19-1"
    },
    {
        "AbsEntry": 850,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L19-2"
    },
    {
        "AbsEntry": 851,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L20-1"
    },
    {
        "AbsEntry": 852,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L20-2"
    },
    {
        "AbsEntry": 853,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L21-1"
    },
    {
        "AbsEntry": 854,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L21-2"
    },
    {
        "AbsEntry": 855,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L22-1"
    },
    {
        "AbsEntry": 856,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L22-2"
    },
    {
        "AbsEntry": 857,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L23-1"
    },
    {
        "AbsEntry": 858,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L23-2"
    },
    {
        "AbsEntry": 859,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L24-1"
    },
    {
        "AbsEntry": 860,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L24-2"
    },
    {
        "AbsEntry": 861,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L25-1"
    },
    {
        "AbsEntry": 862,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L25-2"
    },
    {
        "AbsEntry": 863,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L26-1"
    },
    {
        "AbsEntry": 864,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L26-2"
    },
    {
        "AbsEntry": 865,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L26-3"
    },
    {
        "AbsEntry": 866,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L27-1"
    },
    {
        "AbsEntry": 867,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L27-2"
    },
    {
        "AbsEntry": 868,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L27-3"
    },
    {
        "AbsEntry": 869,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L28-1"
    },
    {
        "AbsEntry": 870,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L28-2"
    },
    {
        "AbsEntry": 871,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L28-3"
    },
    {
        "AbsEntry": 872,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L29-1"
    },
    {
        "AbsEntry": 873,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L29-2"
    },
    {
        "AbsEntry": 874,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L29-3"
    },
    {
        "AbsEntry": 875,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L30-1"
    },
    {
        "AbsEntry": 876,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L30-2"
    },
    {
        "AbsEntry": 877,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L30-3"
    },
    {
        "AbsEntry": 878,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L31-1"
    },
    {
        "AbsEntry": 879,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L31-2"
    },
    {
        "AbsEntry": 880,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L31-3"
    },
    {
        "AbsEntry": 881,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L32-1"
    },
    {
        "AbsEntry": 882,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L32-2"
    },
    {
        "AbsEntry": 883,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L32-3"
    },
    {
        "AbsEntry": 884,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L33-1"
    },
    {
        "AbsEntry": 885,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L33-2"
    },
    {
        "AbsEntry": 886,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L33-3"
    },
    {
        "AbsEntry": 887,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L34-1"
    },
    {
        "AbsEntry": 888,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L34-2"
    },
    {
        "AbsEntry": 889,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L34-3"
    },
    {
        "AbsEntry": 890,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L35-1"
    },
    {
        "AbsEntry": 891,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L35-2"
    },
    {
        "AbsEntry": 892,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L35-3"
    },
    {
        "AbsEntry": 893,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L36-1"
    },
    {
        "AbsEntry": 894,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L36-2"
    },
    {
        "AbsEntry": 895,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L37-1"
    },
    {
        "AbsEntry": 896,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L37-2"
    },
    {
        "AbsEntry": 897,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L38-1"
    },
    {
        "AbsEntry": 898,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L38-2"
    },
    {
        "AbsEntry": 899,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L39-1"
    },
    {
        "AbsEntry": 900,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L39-2"
    },
    {
        "AbsEntry": 901,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L40-1"
    },
    {
        "AbsEntry": 902,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L40-2"
    },
    {
        "AbsEntry": 903,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L41-1"
    },
    {
        "AbsEntry": 904,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L41-2"
    },
    {
        "AbsEntry": 905,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L42-1"
    },
    {
        "AbsEntry": 906,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L42-2"
    },
    {
        "AbsEntry": 907,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L43-1"
    },
    {
        "AbsEntry": 908,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L43-2"
    },
    {
        "AbsEntry": 909,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L44-1"
    },
    {
        "AbsEntry": 910,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L44-2"
    },
    {
        "AbsEntry": 911,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L45-1"
    },
    {
        "AbsEntry": 912,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L45-2"
    },
    {
        "AbsEntry": 913,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L46-1"
    },
    {
        "AbsEntry": 914,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L46-2"
    },
    {
        "AbsEntry": 915,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L47-1"
    },
    {
        "AbsEntry": 916,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L47-2"
    },
    {
        "AbsEntry": 917,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L48-1"
    },
    {
        "AbsEntry": 918,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L48-2"
    },
    {
        "AbsEntry": 919,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L49-1"
    },
    {
        "AbsEntry": 920,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L49-2"
    },
    {
        "AbsEntry": 921,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L50-1"
    },
    {
        "AbsEntry": 922,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L50-2"
    },
    {
        "AbsEntry": 923,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L51-1"
    },
    {
        "AbsEntry": 924,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L51-2"
    },
    {
        "AbsEntry": 925,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L52-1"
    },
    {
        "AbsEntry": 926,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L52-2"
    },
    {
        "AbsEntry": 927,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L53-1"
    },
    {
        "AbsEntry": 928,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L53-2"
    },
    {
        "AbsEntry": 929,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L54-1"
    },
    {
        "AbsEntry": 930,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L54-2"
    },
    {
        "AbsEntry": 931,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L55-1"
    },
    {
        "AbsEntry": 932,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L55-2"
    },
    {
        "AbsEntry": 933,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L56-1"
    },
    {
        "AbsEntry": 934,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L56-2"
    },
    {
        "AbsEntry": 935,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L57-1"
    },
    {
        "AbsEntry": 936,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L57-2"
    },
    {
        "AbsEntry": 937,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L58-1"
    },
    {
        "AbsEntry": 938,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L58-2"
    },
    {
        "AbsEntry": 939,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L59-1"
    },
    {
        "AbsEntry": 940,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L59-2"
    },
    {
        "AbsEntry": 941,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L60-1"
    },
    {
        "AbsEntry": 942,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L60-2"
    },
    {
        "AbsEntry": 943,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L61-1"
    },
    {
        "AbsEntry": 944,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L61-2"
    },
    {
        "AbsEntry": 945,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L62-1"
    },
    {
        "AbsEntry": 946,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L62-2"
    },
    {
        "AbsEntry": 947,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L63-1"
    },
    {
        "AbsEntry": 948,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L63-2"
    },
    {
        "AbsEntry": 949,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L64-1"
    },
    {
        "AbsEntry": 950,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L64-2"
    },
    {
        "AbsEntry": 951,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L65-1"
    },
    {
        "AbsEntry": 952,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L65-2"
    },
    {
        "AbsEntry": 953,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L66-1"
    },
    {
        "AbsEntry": 954,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L66-2"
    },
    {
        "AbsEntry": 955,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L67-1"
    },
    {
        "AbsEntry": 956,
        "Warehouse": "WCP",
        "BinCode": "WCP-1L67-2"
    },
    {
        "AbsEntry": 957,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M01-1"
    },
    {
        "AbsEntry": 958,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M02-1"
    },
    {
        "AbsEntry": 959,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M03-1"
    },
    {
        "AbsEntry": 960,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M04-1"
    },
    {
        "AbsEntry": 961,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M05-1"
    },
    {
        "AbsEntry": 962,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M06-1"
    },
    {
        "AbsEntry": 963,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M07-1"
    },
    {
        "AbsEntry": 964,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M08-1"
    },
    {
        "AbsEntry": 965,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M09-1"
    },
    {
        "AbsEntry": 966,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M10-1"
    },
    {
        "AbsEntry": 967,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M11-1"
    },
    {
        "AbsEntry": 968,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M12-1"
    },
    {
        "AbsEntry": 969,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M13-1"
    },
    {
        "AbsEntry": 970,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M14-1"
    },
    {
        "AbsEntry": 971,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M15-1"
    },
    {
        "AbsEntry": 972,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M16-1"
    },
    {
        "AbsEntry": 973,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M17-1"
    },
    {
        "AbsEntry": 974,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M18-1"
    },
    {
        "AbsEntry": 975,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M19-1"
    },
    {
        "AbsEntry": 976,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M20-1"
    },
    {
        "AbsEntry": 977,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M21-1"
    },
    {
        "AbsEntry": 978,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M22-1"
    },
    {
        "AbsEntry": 979,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M23-1"
    },
    {
        "AbsEntry": 980,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M24-1"
    },
    {
        "AbsEntry": 981,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M25-1"
    },
    {
        "AbsEntry": 982,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M26-1"
    },
    {
        "AbsEntry": 983,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M27-1"
    },
    {
        "AbsEntry": 984,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M28-1"
    },
    {
        "AbsEntry": 985,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M29-1"
    },
    {
        "AbsEntry": 986,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M30-1"
    },
    {
        "AbsEntry": 987,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M31-1"
    },
    {
        "AbsEntry": 988,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M32-1"
    },
    {
        "AbsEntry": 989,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M33-1"
    },
    {
        "AbsEntry": 990,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M34-1"
    },
    {
        "AbsEntry": 991,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M35-1"
    },
    {
        "AbsEntry": 992,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M36-1"
    },
    {
        "AbsEntry": 993,
        "Warehouse": "WCP",
        "BinCode": "WCP-1M37-1"
    },
    {
        "AbsEntry": 994,
        "Warehouse": "WCP",
        "BinCode": "WCP-1R01-1"
    },
    {
        "AbsEntry": 995,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z01-1"
    },
    {
        "AbsEntry": 996,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z01-2"
    },
    {
        "AbsEntry": 997,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z02-1"
    },
    {
        "AbsEntry": 998,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z02-2"
    },
    {
        "AbsEntry": 999,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z03-1"
    },
    {
        "AbsEntry": 1000,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z03-2"
    },
    {
        "AbsEntry": 1001,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z04-1"
    },
    {
        "AbsEntry": 1002,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z04-2"
    },
    {
        "AbsEntry": 1003,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z05-1"
    },
    {
        "AbsEntry": 1004,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z05-2"
    },
    {
        "AbsEntry": 1005,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z06-1"
    },
    {
        "AbsEntry": 1006,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z06-2"
    },
    {
        "AbsEntry": 1007,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z07-1"
    },
    {
        "AbsEntry": 1008,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z07-2"
    },
    {
        "AbsEntry": 1009,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z08-1"
    },
    {
        "AbsEntry": 1010,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z08-2"
    },
    {
        "AbsEntry": 1011,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z09-1"
    },
    {
        "AbsEntry": 1012,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z09-2"
    },
    {
        "AbsEntry": 1013,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z10-1"
    },
    {
        "AbsEntry": 1014,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z10-2"
    },
    {
        "AbsEntry": 1015,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z11-1"
    },
    {
        "AbsEntry": 1016,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z11-2"
    },
    {
        "AbsEntry": 1017,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z12-1"
    },
    {
        "AbsEntry": 1018,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Z12-2"
    },
    {
        "AbsEntry": 1019,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A01-1"
    },
    {
        "AbsEntry": 1020,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A02-1"
    },
    {
        "AbsEntry": 1021,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A03-1"
    },
    {
        "AbsEntry": 1022,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A04-1"
    },
    {
        "AbsEntry": 1023,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A05-1"
    },
    {
        "AbsEntry": 1024,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A06-1"
    },
    {
        "AbsEntry": 1025,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A07-1"
    },
    {
        "AbsEntry": 1026,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A08-1"
    },
    {
        "AbsEntry": 1027,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A09-1"
    },
    {
        "AbsEntry": 1028,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A10-1"
    },
    {
        "AbsEntry": 1029,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A11-1"
    },
    {
        "AbsEntry": 1030,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A12-1"
    },
    {
        "AbsEntry": 1031,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A13-1"
    },
    {
        "AbsEntry": 1032,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A14-1"
    },
    {
        "AbsEntry": 1033,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A15-1"
    },
    {
        "AbsEntry": 1034,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A16-1"
    },
    {
        "AbsEntry": 1035,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A17-1"
    },
    {
        "AbsEntry": 1036,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A18-1"
    },
    {
        "AbsEntry": 1037,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A19-1"
    },
    {
        "AbsEntry": 1038,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A20-1"
    },
    {
        "AbsEntry": 1039,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A21-1"
    },
    {
        "AbsEntry": 1040,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A22-1"
    },
    {
        "AbsEntry": 1041,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A23-1"
    },
    {
        "AbsEntry": 1042,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A24-1"
    },
    {
        "AbsEntry": 1043,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A25-1"
    },
    {
        "AbsEntry": 1044,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A26-1"
    },
    {
        "AbsEntry": 1045,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A27-1"
    },
    {
        "AbsEntry": 1046,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A28-1"
    },
    {
        "AbsEntry": 1047,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A29-1"
    },
    {
        "AbsEntry": 1048,
        "Warehouse": "WCP",
        "BinCode": "WCP-2A30-1"
    },
    {
        "AbsEntry": 1049,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B11-1"
    },
    {
        "AbsEntry": 1050,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B12-1"
    },
    {
        "AbsEntry": 1051,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B13-1"
    },
    {
        "AbsEntry": 1052,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B14-1"
    },
    {
        "AbsEntry": 1053,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B15-1"
    },
    {
        "AbsEntry": 1054,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B16-1"
    },
    {
        "AbsEntry": 1055,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B17-1"
    },
    {
        "AbsEntry": 1056,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B18-1"
    },
    {
        "AbsEntry": 1057,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B19-1"
    },
    {
        "AbsEntry": 1058,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B20-1"
    },
    {
        "AbsEntry": 1059,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B21-1"
    },
    {
        "AbsEntry": 1060,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B22-1"
    },
    {
        "AbsEntry": 1061,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B23-1"
    },
    {
        "AbsEntry": 1062,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B24-1"
    },
    {
        "AbsEntry": 1063,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B25-1"
    },
    {
        "AbsEntry": 1064,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B26-1"
    },
    {
        "AbsEntry": 1065,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B27-1"
    },
    {
        "AbsEntry": 1066,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B28-1"
    },
    {
        "AbsEntry": 1067,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B29-1"
    },
    {
        "AbsEntry": 1068,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B30-1"
    },
    {
        "AbsEntry": 1069,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C11-1"
    },
    {
        "AbsEntry": 1070,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C12-1"
    },
    {
        "AbsEntry": 1071,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C13-1"
    },
    {
        "AbsEntry": 1072,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C14-1"
    },
    {
        "AbsEntry": 1073,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C15-1"
    },
    {
        "AbsEntry": 1074,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C16-1"
    },
    {
        "AbsEntry": 1075,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C17-1"
    },
    {
        "AbsEntry": 1076,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C18-1"
    },
    {
        "AbsEntry": 1077,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C19-1"
    },
    {
        "AbsEntry": 1078,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C20-1"
    },
    {
        "AbsEntry": 1079,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C21-1"
    },
    {
        "AbsEntry": 1080,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C22-1"
    },
    {
        "AbsEntry": 1081,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C23-1"
    },
    {
        "AbsEntry": 1082,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C24-1"
    },
    {
        "AbsEntry": 1083,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C25-1"
    },
    {
        "AbsEntry": 1084,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C26-1"
    },
    {
        "AbsEntry": 1085,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C27-1"
    },
    {
        "AbsEntry": 1086,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C28-1"
    },
    {
        "AbsEntry": 1087,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C29-1"
    },
    {
        "AbsEntry": 1088,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C30-1"
    },
    {
        "AbsEntry": 1089,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D11-1"
    },
    {
        "AbsEntry": 1090,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D12-1"
    },
    {
        "AbsEntry": 1091,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D13-1"
    },
    {
        "AbsEntry": 1092,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D14-1"
    },
    {
        "AbsEntry": 1093,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D15-1"
    },
    {
        "AbsEntry": 1094,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D16-1"
    },
    {
        "AbsEntry": 1095,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D17-1"
    },
    {
        "AbsEntry": 1096,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D18-1"
    },
    {
        "AbsEntry": 1097,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D19-1"
    },
    {
        "AbsEntry": 1098,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D20-1"
    },
    {
        "AbsEntry": 1099,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D21-1"
    },
    {
        "AbsEntry": 1100,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D22-1"
    },
    {
        "AbsEntry": 1101,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D23-1"
    },
    {
        "AbsEntry": 1102,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D24-1"
    },
    {
        "AbsEntry": 1103,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D25-1"
    },
    {
        "AbsEntry": 1104,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D26-1"
    },
    {
        "AbsEntry": 1105,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D27-1"
    },
    {
        "AbsEntry": 1106,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D28-1"
    },
    {
        "AbsEntry": 1107,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D29-1"
    },
    {
        "AbsEntry": 1108,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D30-1"
    },
    {
        "AbsEntry": 1109,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E11-1"
    },
    {
        "AbsEntry": 1110,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E12-1"
    },
    {
        "AbsEntry": 1111,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E13-1"
    },
    {
        "AbsEntry": 1112,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E14-1"
    },
    {
        "AbsEntry": 1113,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E15-1"
    },
    {
        "AbsEntry": 1114,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E16-1"
    },
    {
        "AbsEntry": 1115,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E17-1"
    },
    {
        "AbsEntry": 1116,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E18-1"
    },
    {
        "AbsEntry": 1117,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E19-1"
    },
    {
        "AbsEntry": 1118,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E20-1"
    },
    {
        "AbsEntry": 1119,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E21-1"
    },
    {
        "AbsEntry": 1120,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E22-1"
    },
    {
        "AbsEntry": 1121,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E23-1"
    },
    {
        "AbsEntry": 1122,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E24-1"
    },
    {
        "AbsEntry": 1123,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E25-1"
    },
    {
        "AbsEntry": 1124,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E26-1"
    },
    {
        "AbsEntry": 1125,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E27-1"
    },
    {
        "AbsEntry": 1126,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E28-1"
    },
    {
        "AbsEntry": 1127,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E29-1"
    },
    {
        "AbsEntry": 1128,
        "Warehouse": "WCP",
        "BinCode": "WCP-2E30-1"
    },
    {
        "AbsEntry": 1129,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F11-1"
    },
    {
        "AbsEntry": 1130,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F12-1"
    },
    {
        "AbsEntry": 1131,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F13-1"
    },
    {
        "AbsEntry": 1132,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F14-1"
    },
    {
        "AbsEntry": 1133,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F15-1"
    },
    {
        "AbsEntry": 1134,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F16-1"
    },
    {
        "AbsEntry": 1135,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F17-1"
    },
    {
        "AbsEntry": 1136,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F18-1"
    },
    {
        "AbsEntry": 1137,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F19-1"
    },
    {
        "AbsEntry": 1138,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F20-1"
    },
    {
        "AbsEntry": 1139,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F21-1"
    },
    {
        "AbsEntry": 1140,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F22-1"
    },
    {
        "AbsEntry": 1141,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F23-1"
    },
    {
        "AbsEntry": 1142,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F24-1"
    },
    {
        "AbsEntry": 1143,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F25-1"
    },
    {
        "AbsEntry": 1144,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F26-1"
    },
    {
        "AbsEntry": 1145,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F27-1"
    },
    {
        "AbsEntry": 1146,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F28-1"
    },
    {
        "AbsEntry": 1147,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F29-1"
    },
    {
        "AbsEntry": 1148,
        "Warehouse": "WCP",
        "BinCode": "WCP-2F30-1"
    },
    {
        "AbsEntry": 1149,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G01-1"
    },
    {
        "AbsEntry": 1150,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G02-1"
    },
    {
        "AbsEntry": 1151,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G03-1"
    },
    {
        "AbsEntry": 1152,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G04-1"
    },
    {
        "AbsEntry": 1153,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G05-1"
    },
    {
        "AbsEntry": 1154,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G06-1"
    },
    {
        "AbsEntry": 1155,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G07-1"
    },
    {
        "AbsEntry": 1156,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G08-1"
    },
    {
        "AbsEntry": 1157,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G09-1"
    },
    {
        "AbsEntry": 1158,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G10-1"
    },
    {
        "AbsEntry": 1159,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G11-1"
    },
    {
        "AbsEntry": 1160,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G12-1"
    },
    {
        "AbsEntry": 1161,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G13-1"
    },
    {
        "AbsEntry": 1162,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G14-1"
    },
    {
        "AbsEntry": 1163,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G15-1"
    },
    {
        "AbsEntry": 1164,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G16-1"
    },
    {
        "AbsEntry": 1165,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G17-1"
    },
    {
        "AbsEntry": 1166,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G18-1"
    },
    {
        "AbsEntry": 1167,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G19-1"
    },
    {
        "AbsEntry": 1168,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G20-1"
    },
    {
        "AbsEntry": 1169,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G21-1"
    },
    {
        "AbsEntry": 1170,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G22-1"
    },
    {
        "AbsEntry": 1171,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G23-1"
    },
    {
        "AbsEntry": 1172,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G24-1"
    },
    {
        "AbsEntry": 1173,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G25-1"
    },
    {
        "AbsEntry": 1174,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G26-1"
    },
    {
        "AbsEntry": 1175,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G27-1"
    },
    {
        "AbsEntry": 1176,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G28-1"
    },
    {
        "AbsEntry": 1177,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G29-1"
    },
    {
        "AbsEntry": 1178,
        "Warehouse": "WCP",
        "BinCode": "WCP-2G30-1"
    },
    {
        "AbsEntry": 1179,
        "Warehouse": "WCP",
        "BinCode": "WCP-2H01-1"
    },
    {
        "AbsEntry": 1180,
        "Warehouse": "WCP",
        "BinCode": "WCP-2H02-1"
    },
    {
        "AbsEntry": 1181,
        "Warehouse": "WCP",
        "BinCode": "WCP-2H03-1"
    },
    {
        "AbsEntry": 1182,
        "Warehouse": "WCP",
        "BinCode": "WCP-2H04-1"
    },
    {
        "AbsEntry": 1183,
        "Warehouse": "WCP",
        "BinCode": "WCP-2H05-1"
    },
    {
        "AbsEntry": 1184,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z01-1"
    },
    {
        "AbsEntry": 1185,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z01-2"
    },
    {
        "AbsEntry": 1186,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z02-1"
    },
    {
        "AbsEntry": 1187,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z02-2"
    },
    {
        "AbsEntry": 1188,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z03-1"
    },
    {
        "AbsEntry": 1189,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z03-2"
    },
    {
        "AbsEntry": 1190,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z04-1"
    },
    {
        "AbsEntry": 1191,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z04-2"
    },
    {
        "AbsEntry": 1192,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z05-1"
    },
    {
        "AbsEntry": 1193,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z05-2"
    },
    {
        "AbsEntry": 1194,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z06-1"
    },
    {
        "AbsEntry": 1195,
        "Warehouse": "WCP",
        "BinCode": "WCP-2Z06-2"
    },
    {
        "AbsEntry": 1196,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A01-1"
    },
    {
        "AbsEntry": 1197,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A01-2"
    },
    {
        "AbsEntry": 1198,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A01-3"
    },
    {
        "AbsEntry": 1199,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A01-4"
    },
    {
        "AbsEntry": 1200,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A02-1"
    },
    {
        "AbsEntry": 1201,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A02-2"
    },
    {
        "AbsEntry": 1202,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A02-3"
    },
    {
        "AbsEntry": 1203,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A02-4"
    },
    {
        "AbsEntry": 1204,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A03-1"
    },
    {
        "AbsEntry": 1205,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A03-2"
    },
    {
        "AbsEntry": 1206,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A03-3"
    },
    {
        "AbsEntry": 1207,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A03-4"
    },
    {
        "AbsEntry": 1208,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A04-1"
    },
    {
        "AbsEntry": 1209,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A04-2"
    },
    {
        "AbsEntry": 1210,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A04-3"
    },
    {
        "AbsEntry": 1211,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A04-4"
    },
    {
        "AbsEntry": 1212,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A05-1"
    },
    {
        "AbsEntry": 1213,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A05-2"
    },
    {
        "AbsEntry": 1214,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A05-3"
    },
    {
        "AbsEntry": 1215,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A05-4"
    },
    {
        "AbsEntry": 1220,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A07-1"
    },
    {
        "AbsEntry": 1221,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A07-2"
    },
    {
        "AbsEntry": 1222,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A07-3"
    },
    {
        "AbsEntry": 1223,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A07-4"
    },
    {
        "AbsEntry": 1224,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A08-1"
    },
    {
        "AbsEntry": 1225,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A08-2"
    },
    {
        "AbsEntry": 1226,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A08-3"
    },
    {
        "AbsEntry": 1227,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A08-4"
    },
    {
        "AbsEntry": 1228,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A09-1"
    },
    {
        "AbsEntry": 1229,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A09-2"
    },
    {
        "AbsEntry": 1230,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A09-3"
    },
    {
        "AbsEntry": 1231,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A09-4"
    },
    {
        "AbsEntry": 1232,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A10-1"
    },
    {
        "AbsEntry": 1233,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A10-2"
    },
    {
        "AbsEntry": 1234,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A10-3"
    },
    {
        "AbsEntry": 1235,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A10-4"
    },
    {
        "AbsEntry": 1236,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A11-1"
    },
    {
        "AbsEntry": 1237,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A11-2"
    },
    {
        "AbsEntry": 1238,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A11-3"
    },
    {
        "AbsEntry": 1239,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A11-4"
    },
    {
        "AbsEntry": 1240,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A12-1"
    },
    {
        "AbsEntry": 1241,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A12-2"
    },
    {
        "AbsEntry": 1242,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A12-3"
    },
    {
        "AbsEntry": 1243,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A12-4"
    },
    {
        "AbsEntry": 1244,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A13-1"
    },
    {
        "AbsEntry": 1245,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A13-2"
    },
    {
        "AbsEntry": 1246,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A13-3"
    },
    {
        "AbsEntry": 1247,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A13-4"
    },
    {
        "AbsEntry": 1248,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A14-1"
    },
    {
        "AbsEntry": 1249,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A14-2"
    },
    {
        "AbsEntry": 1250,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A14-3"
    },
    {
        "AbsEntry": 1251,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A14-4"
    },
    {
        "AbsEntry": 1252,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A15-1"
    },
    {
        "AbsEntry": 1253,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A15-2"
    },
    {
        "AbsEntry": 1254,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A15-3"
    },
    {
        "AbsEntry": 1255,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A15-4"
    },
    {
        "AbsEntry": 1256,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A16-1"
    },
    {
        "AbsEntry": 1257,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A16-2"
    },
    {
        "AbsEntry": 1258,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A16-3"
    },
    {
        "AbsEntry": 1259,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A16-4"
    },
    {
        "AbsEntry": 1260,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A17-1"
    },
    {
        "AbsEntry": 1261,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A17-2"
    },
    {
        "AbsEntry": 1262,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A17-3"
    },
    {
        "AbsEntry": 1263,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A17-4"
    },
    {
        "AbsEntry": 1264,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A18-1"
    },
    {
        "AbsEntry": 1265,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A18-2"
    },
    {
        "AbsEntry": 1266,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A18-3"
    },
    {
        "AbsEntry": 1267,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A18-4"
    },
    {
        "AbsEntry": 1268,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A19-1"
    },
    {
        "AbsEntry": 1269,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A19-2"
    },
    {
        "AbsEntry": 1270,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A19-3"
    },
    {
        "AbsEntry": 1271,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A19-4"
    },
    {
        "AbsEntry": 1272,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A20-1"
    },
    {
        "AbsEntry": 1273,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A20-2"
    },
    {
        "AbsEntry": 1274,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A20-3"
    },
    {
        "AbsEntry": 1275,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A20-4"
    },
    {
        "AbsEntry": 1276,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A21-1"
    },
    {
        "AbsEntry": 1277,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A21-2"
    },
    {
        "AbsEntry": 1278,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A21-3"
    },
    {
        "AbsEntry": 1279,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A21-4"
    },
    {
        "AbsEntry": 1280,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A22-1"
    },
    {
        "AbsEntry": 1281,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A22-2"
    },
    {
        "AbsEntry": 1282,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A22-3"
    },
    {
        "AbsEntry": 1283,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A22-4"
    },
    {
        "AbsEntry": 1284,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A23-1"
    },
    {
        "AbsEntry": 1285,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A23-2"
    },
    {
        "AbsEntry": 1286,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A23-3"
    },
    {
        "AbsEntry": 1287,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A23-4"
    },
    {
        "AbsEntry": 1288,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A24-1"
    },
    {
        "AbsEntry": 1289,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A24-2"
    },
    {
        "AbsEntry": 1290,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A24-3"
    },
    {
        "AbsEntry": 1291,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A24-4"
    },
    {
        "AbsEntry": 1292,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B01-1"
    },
    {
        "AbsEntry": 1293,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B01-2"
    },
    {
        "AbsEntry": 1294,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B01-3"
    },
    {
        "AbsEntry": 1295,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B01-4"
    },
    {
        "AbsEntry": 1296,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B02-1"
    },
    {
        "AbsEntry": 1297,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B02-2"
    },
    {
        "AbsEntry": 1298,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B02-3"
    },
    {
        "AbsEntry": 1299,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B02-4"
    },
    {
        "AbsEntry": 1300,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B03-1"
    },
    {
        "AbsEntry": 1301,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B03-2"
    },
    {
        "AbsEntry": 1302,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B03-3"
    },
    {
        "AbsEntry": 1303,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B03-4"
    },
    {
        "AbsEntry": 1304,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B04-1"
    },
    {
        "AbsEntry": 1305,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B04-2"
    },
    {
        "AbsEntry": 1306,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B04-3"
    },
    {
        "AbsEntry": 1307,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B04-4"
    },
    {
        "AbsEntry": 1308,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B05-1"
    },
    {
        "AbsEntry": 1309,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B05-2"
    },
    {
        "AbsEntry": 1310,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B05-3"
    },
    {
        "AbsEntry": 1311,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B05-4"
    },
    {
        "AbsEntry": 1312,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B06-1"
    },
    {
        "AbsEntry": 1313,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B06-2"
    },
    {
        "AbsEntry": 1314,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B06-3"
    },
    {
        "AbsEntry": 1315,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B06-4"
    },
    {
        "AbsEntry": 1316,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B07-1"
    },
    {
        "AbsEntry": 1317,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B07-2"
    },
    {
        "AbsEntry": 1318,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B07-3"
    },
    {
        "AbsEntry": 1319,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B07-4"
    },
    {
        "AbsEntry": 1320,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B08-1"
    },
    {
        "AbsEntry": 1321,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B08-2"
    },
    {
        "AbsEntry": 1322,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B08-3"
    },
    {
        "AbsEntry": 1323,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B08-4"
    },
    {
        "AbsEntry": 1324,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B09-1"
    },
    {
        "AbsEntry": 1325,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B09-2"
    },
    {
        "AbsEntry": 1326,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B09-3"
    },
    {
        "AbsEntry": 1327,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B09-4"
    },
    {
        "AbsEntry": 1328,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B10-1"
    },
    {
        "AbsEntry": 1329,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B10-2"
    },
    {
        "AbsEntry": 1330,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B10-3"
    },
    {
        "AbsEntry": 1331,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B10-4"
    },
    {
        "AbsEntry": 1332,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B11-1"
    },
    {
        "AbsEntry": 1333,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B11-2"
    },
    {
        "AbsEntry": 1334,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B11-3"
    },
    {
        "AbsEntry": 1335,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B11-4"
    },
    {
        "AbsEntry": 1336,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B12-1"
    },
    {
        "AbsEntry": 1337,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B12-2"
    },
    {
        "AbsEntry": 1338,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B12-3"
    },
    {
        "AbsEntry": 1339,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B12-4"
    },
    {
        "AbsEntry": 1340,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B13-1"
    },
    {
        "AbsEntry": 1341,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B13-2"
    },
    {
        "AbsEntry": 1342,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B13-3"
    },
    {
        "AbsEntry": 1343,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B13-4"
    },
    {
        "AbsEntry": 1344,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B14-1"
    },
    {
        "AbsEntry": 1345,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B14-2"
    },
    {
        "AbsEntry": 1346,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B14-3"
    },
    {
        "AbsEntry": 1347,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B14-4"
    },
    {
        "AbsEntry": 1348,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B15-1"
    },
    {
        "AbsEntry": 1349,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B15-2"
    },
    {
        "AbsEntry": 1350,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B15-3"
    },
    {
        "AbsEntry": 1351,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B15-4"
    },
    {
        "AbsEntry": 1352,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B16-1"
    },
    {
        "AbsEntry": 1353,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B16-2"
    },
    {
        "AbsEntry": 1354,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B16-3"
    },
    {
        "AbsEntry": 1355,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B16-4"
    },
    {
        "AbsEntry": 1356,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B17-1"
    },
    {
        "AbsEntry": 1357,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B17-2"
    },
    {
        "AbsEntry": 1358,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B17-3"
    },
    {
        "AbsEntry": 1359,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B17-4"
    },
    {
        "AbsEntry": 1360,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B18-1"
    },
    {
        "AbsEntry": 1361,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B18-2"
    },
    {
        "AbsEntry": 1362,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B18-3"
    },
    {
        "AbsEntry": 1363,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B18-4"
    },
    {
        "AbsEntry": 1364,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B19-1"
    },
    {
        "AbsEntry": 1365,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B19-2"
    },
    {
        "AbsEntry": 1366,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B19-3"
    },
    {
        "AbsEntry": 1367,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B19-4"
    },
    {
        "AbsEntry": 1368,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B20-1"
    },
    {
        "AbsEntry": 1369,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B20-2"
    },
    {
        "AbsEntry": 1370,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B20-3"
    },
    {
        "AbsEntry": 1371,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1B20-4"
    },
    {
        "AbsEntry": 1372,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C01-1"
    },
    {
        "AbsEntry": 1373,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C01-2"
    },
    {
        "AbsEntry": 1374,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C01-3"
    },
    {
        "AbsEntry": 1375,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C01-4"
    },
    {
        "AbsEntry": 1376,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C01-5"
    },
    {
        "AbsEntry": 1377,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C02-1"
    },
    {
        "AbsEntry": 1378,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C02-2"
    },
    {
        "AbsEntry": 1379,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C02-3"
    },
    {
        "AbsEntry": 1380,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C02-4"
    },
    {
        "AbsEntry": 1381,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C02-5"
    },
    {
        "AbsEntry": 1382,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C03-1"
    },
    {
        "AbsEntry": 1383,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C03-2"
    },
    {
        "AbsEntry": 1384,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C03-3"
    },
    {
        "AbsEntry": 1385,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C03-4"
    },
    {
        "AbsEntry": 1386,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C03-5"
    },
    {
        "AbsEntry": 1387,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C04-1"
    },
    {
        "AbsEntry": 1388,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C04-2"
    },
    {
        "AbsEntry": 1389,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C04-3"
    },
    {
        "AbsEntry": 1390,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C04-4"
    },
    {
        "AbsEntry": 1391,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C04-5"
    },
    {
        "AbsEntry": 1392,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C05-1"
    },
    {
        "AbsEntry": 1393,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C05-2"
    },
    {
        "AbsEntry": 1394,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C05-3"
    },
    {
        "AbsEntry": 1395,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C05-4"
    },
    {
        "AbsEntry": 1396,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C05-5"
    },
    {
        "AbsEntry": 1397,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C06-1"
    },
    {
        "AbsEntry": 1398,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C06-2"
    },
    {
        "AbsEntry": 1399,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C06-3"
    },
    {
        "AbsEntry": 1400,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C06-4"
    },
    {
        "AbsEntry": 1401,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C06-5"
    },
    {
        "AbsEntry": 1402,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C07-1"
    },
    {
        "AbsEntry": 1403,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C07-2"
    },
    {
        "AbsEntry": 1404,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C07-3"
    },
    {
        "AbsEntry": 1405,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C07-4"
    },
    {
        "AbsEntry": 1406,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C07-5"
    },
    {
        "AbsEntry": 1407,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C08-1"
    },
    {
        "AbsEntry": 1408,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C08-2"
    },
    {
        "AbsEntry": 1409,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C08-3"
    },
    {
        "AbsEntry": 1410,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C08-4"
    },
    {
        "AbsEntry": 1411,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C08-5"
    },
    {
        "AbsEntry": 1412,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C09-1"
    },
    {
        "AbsEntry": 1413,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C09-2"
    },
    {
        "AbsEntry": 1414,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C09-3"
    },
    {
        "AbsEntry": 1415,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C09-4"
    },
    {
        "AbsEntry": 1416,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C09-5"
    },
    {
        "AbsEntry": 1417,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C10-1"
    },
    {
        "AbsEntry": 1418,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C10-2"
    },
    {
        "AbsEntry": 1419,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C10-3"
    },
    {
        "AbsEntry": 1420,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C10-4"
    },
    {
        "AbsEntry": 1421,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C10-5"
    },
    {
        "AbsEntry": 1422,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C11-1"
    },
    {
        "AbsEntry": 1423,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C11-2"
    },
    {
        "AbsEntry": 1424,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C11-3"
    },
    {
        "AbsEntry": 1425,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C11-4"
    },
    {
        "AbsEntry": 1426,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C11-5"
    },
    {
        "AbsEntry": 1427,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C12-1"
    },
    {
        "AbsEntry": 1428,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C12-2"
    },
    {
        "AbsEntry": 1429,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C12-3"
    },
    {
        "AbsEntry": 1430,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C12-4"
    },
    {
        "AbsEntry": 1431,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C12-5"
    },
    {
        "AbsEntry": 1432,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C13-1"
    },
    {
        "AbsEntry": 1433,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C13-2"
    },
    {
        "AbsEntry": 1434,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C13-3"
    },
    {
        "AbsEntry": 1435,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C13-4"
    },
    {
        "AbsEntry": 1436,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C13-5"
    },
    {
        "AbsEntry": 1437,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C14-1"
    },
    {
        "AbsEntry": 1438,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C14-2"
    },
    {
        "AbsEntry": 1439,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C14-3"
    },
    {
        "AbsEntry": 1440,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C14-4"
    },
    {
        "AbsEntry": 1441,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C14-5"
    },
    {
        "AbsEntry": 1442,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C15-1"
    },
    {
        "AbsEntry": 1443,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C15-2"
    },
    {
        "AbsEntry": 1444,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C15-3"
    },
    {
        "AbsEntry": 1445,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C15-4"
    },
    {
        "AbsEntry": 1446,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C15-5"
    },
    {
        "AbsEntry": 1447,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C16-1"
    },
    {
        "AbsEntry": 1448,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C16-2"
    },
    {
        "AbsEntry": 1449,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C16-3"
    },
    {
        "AbsEntry": 1450,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C16-4"
    },
    {
        "AbsEntry": 1451,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C16-5"
    },
    {
        "AbsEntry": 1452,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C17-1"
    },
    {
        "AbsEntry": 1453,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C17-2"
    },
    {
        "AbsEntry": 1454,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C17-3"
    },
    {
        "AbsEntry": 1455,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C17-4"
    },
    {
        "AbsEntry": 1456,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C17-5"
    },
    {
        "AbsEntry": 1457,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C18-1"
    },
    {
        "AbsEntry": 1458,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C18-2"
    },
    {
        "AbsEntry": 1459,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C18-3"
    },
    {
        "AbsEntry": 1460,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C18-4"
    },
    {
        "AbsEntry": 1461,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C18-5"
    },
    {
        "AbsEntry": 1462,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C19-1"
    },
    {
        "AbsEntry": 1463,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C19-2"
    },
    {
        "AbsEntry": 1464,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C19-3"
    },
    {
        "AbsEntry": 1465,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C19-4"
    },
    {
        "AbsEntry": 1466,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C19-5"
    },
    {
        "AbsEntry": 1467,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C20-1"
    },
    {
        "AbsEntry": 1468,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C20-2"
    },
    {
        "AbsEntry": 1469,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C20-3"
    },
    {
        "AbsEntry": 1470,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C20-4"
    },
    {
        "AbsEntry": 1471,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1C20-5"
    },
    {
        "AbsEntry": 1472,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D01-1"
    },
    {
        "AbsEntry": 1473,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D01-2"
    },
    {
        "AbsEntry": 1474,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D01-3"
    },
    {
        "AbsEntry": 1475,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D01-4"
    },
    {
        "AbsEntry": 1476,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D01-5"
    },
    {
        "AbsEntry": 1477,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D02-1"
    },
    {
        "AbsEntry": 1478,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D02-2"
    },
    {
        "AbsEntry": 1479,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D02-3"
    },
    {
        "AbsEntry": 1480,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D02-4"
    },
    {
        "AbsEntry": 1481,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D02-5"
    },
    {
        "AbsEntry": 1482,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D03-1"
    },
    {
        "AbsEntry": 1483,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D03-2"
    },
    {
        "AbsEntry": 1484,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D03-3"
    },
    {
        "AbsEntry": 1485,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D03-4"
    },
    {
        "AbsEntry": 1486,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D03-5"
    },
    {
        "AbsEntry": 1487,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D04-1"
    },
    {
        "AbsEntry": 1488,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D04-2"
    },
    {
        "AbsEntry": 1489,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D04-3"
    },
    {
        "AbsEntry": 1490,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D04-4"
    },
    {
        "AbsEntry": 1491,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D04-5"
    },
    {
        "AbsEntry": 1492,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D05-1"
    },
    {
        "AbsEntry": 1493,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D05-2"
    },
    {
        "AbsEntry": 1494,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D05-3"
    },
    {
        "AbsEntry": 1495,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D05-4"
    },
    {
        "AbsEntry": 1496,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D05-5"
    },
    {
        "AbsEntry": 1497,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D06-1"
    },
    {
        "AbsEntry": 1498,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D06-2"
    },
    {
        "AbsEntry": 1499,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D06-3"
    },
    {
        "AbsEntry": 1500,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D06-4"
    },
    {
        "AbsEntry": 1501,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D06-5"
    },
    {
        "AbsEntry": 1502,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D07-1"
    },
    {
        "AbsEntry": 1503,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D07-2"
    },
    {
        "AbsEntry": 1504,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D07-3"
    },
    {
        "AbsEntry": 1505,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D07-4"
    },
    {
        "AbsEntry": 1506,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D07-5"
    },
    {
        "AbsEntry": 1507,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D08-1"
    },
    {
        "AbsEntry": 1508,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D08-2"
    },
    {
        "AbsEntry": 1509,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D08-3"
    },
    {
        "AbsEntry": 1510,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D08-4"
    },
    {
        "AbsEntry": 1511,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D08-5"
    },
    {
        "AbsEntry": 1512,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D09-1"
    },
    {
        "AbsEntry": 1513,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D09-2"
    },
    {
        "AbsEntry": 1514,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D09-3"
    },
    {
        "AbsEntry": 1515,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D09-4"
    },
    {
        "AbsEntry": 1516,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D09-5"
    },
    {
        "AbsEntry": 1517,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D10-1"
    },
    {
        "AbsEntry": 1518,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D10-2"
    },
    {
        "AbsEntry": 1519,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D10-3"
    },
    {
        "AbsEntry": 1520,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D10-4"
    },
    {
        "AbsEntry": 1521,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D10-5"
    },
    {
        "AbsEntry": 1522,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D11-1"
    },
    {
        "AbsEntry": 1523,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D11-2"
    },
    {
        "AbsEntry": 1524,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D11-3"
    },
    {
        "AbsEntry": 1525,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D11-4"
    },
    {
        "AbsEntry": 1526,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D11-5"
    },
    {
        "AbsEntry": 1527,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D12-1"
    },
    {
        "AbsEntry": 1528,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D12-2"
    },
    {
        "AbsEntry": 1529,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D12-3"
    },
    {
        "AbsEntry": 1530,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D12-4"
    },
    {
        "AbsEntry": 1531,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D12-5"
    },
    {
        "AbsEntry": 1532,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D13-1"
    },
    {
        "AbsEntry": 1533,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D13-2"
    },
    {
        "AbsEntry": 1534,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D13-3"
    },
    {
        "AbsEntry": 1535,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D13-4"
    },
    {
        "AbsEntry": 1536,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D13-5"
    },
    {
        "AbsEntry": 1537,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D14-1"
    },
    {
        "AbsEntry": 1538,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D14-2"
    },
    {
        "AbsEntry": 1539,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D14-3"
    },
    {
        "AbsEntry": 1540,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D14-4"
    },
    {
        "AbsEntry": 1541,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D14-5"
    },
    {
        "AbsEntry": 1542,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D15-1"
    },
    {
        "AbsEntry": 1543,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D15-2"
    },
    {
        "AbsEntry": 1544,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D15-3"
    },
    {
        "AbsEntry": 1545,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D15-4"
    },
    {
        "AbsEntry": 1546,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D15-5"
    },
    {
        "AbsEntry": 1547,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D16-1"
    },
    {
        "AbsEntry": 1548,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D16-2"
    },
    {
        "AbsEntry": 1549,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D16-3"
    },
    {
        "AbsEntry": 1550,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D16-4"
    },
    {
        "AbsEntry": 1551,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D16-5"
    },
    {
        "AbsEntry": 1552,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D17-1"
    },
    {
        "AbsEntry": 1553,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D17-2"
    },
    {
        "AbsEntry": 1554,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D17-3"
    },
    {
        "AbsEntry": 1555,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D17-4"
    },
    {
        "AbsEntry": 1556,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D17-5"
    },
    {
        "AbsEntry": 1557,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D18-1"
    },
    {
        "AbsEntry": 1558,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D18-2"
    },
    {
        "AbsEntry": 1559,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D18-3"
    },
    {
        "AbsEntry": 1560,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D18-4"
    },
    {
        "AbsEntry": 1561,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D18-5"
    },
    {
        "AbsEntry": 1562,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D19-1"
    },
    {
        "AbsEntry": 1563,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D19-2"
    },
    {
        "AbsEntry": 1564,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D19-3"
    },
    {
        "AbsEntry": 1565,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D19-4"
    },
    {
        "AbsEntry": 1566,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D19-5"
    },
    {
        "AbsEntry": 1567,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D20-1"
    },
    {
        "AbsEntry": 1568,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D20-2"
    },
    {
        "AbsEntry": 1569,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D20-3"
    },
    {
        "AbsEntry": 1570,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D20-4"
    },
    {
        "AbsEntry": 1571,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1D20-5"
    },
    {
        "AbsEntry": 1572,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E01-1"
    },
    {
        "AbsEntry": 1573,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E01-2"
    },
    {
        "AbsEntry": 1574,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E01-3"
    },
    {
        "AbsEntry": 1575,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E01-4"
    },
    {
        "AbsEntry": 1576,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E02-1"
    },
    {
        "AbsEntry": 1577,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E02-2"
    },
    {
        "AbsEntry": 1578,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E02-3"
    },
    {
        "AbsEntry": 1579,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E02-4"
    },
    {
        "AbsEntry": 1580,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E03-1"
    },
    {
        "AbsEntry": 1581,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E03-2"
    },
    {
        "AbsEntry": 1582,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E03-3"
    },
    {
        "AbsEntry": 1583,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E03-4"
    },
    {
        "AbsEntry": 1584,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E04-1"
    },
    {
        "AbsEntry": 1585,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E04-2"
    },
    {
        "AbsEntry": 1586,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E04-3"
    },
    {
        "AbsEntry": 1587,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E04-4"
    },
    {
        "AbsEntry": 1588,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E05-1"
    },
    {
        "AbsEntry": 1589,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E05-2"
    },
    {
        "AbsEntry": 1590,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E05-3"
    },
    {
        "AbsEntry": 1591,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E05-4"
    },
    {
        "AbsEntry": 1592,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E06-1"
    },
    {
        "AbsEntry": 1593,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E06-2"
    },
    {
        "AbsEntry": 1594,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E06-3"
    },
    {
        "AbsEntry": 1595,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E06-4"
    },
    {
        "AbsEntry": 1596,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E07-1"
    },
    {
        "AbsEntry": 1597,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E07-2"
    },
    {
        "AbsEntry": 1598,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E07-3"
    },
    {
        "AbsEntry": 1599,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E07-4"
    },
    {
        "AbsEntry": 1600,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E08-1"
    },
    {
        "AbsEntry": 1601,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E08-2"
    },
    {
        "AbsEntry": 1602,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E08-3"
    },
    {
        "AbsEntry": 1603,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E08-4"
    },
    {
        "AbsEntry": 1604,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E09-1"
    },
    {
        "AbsEntry": 1605,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E09-2"
    },
    {
        "AbsEntry": 1606,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E09-3"
    },
    {
        "AbsEntry": 1607,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E09-4"
    },
    {
        "AbsEntry": 1608,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E10-1"
    },
    {
        "AbsEntry": 1609,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E10-2"
    },
    {
        "AbsEntry": 1610,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E10-3"
    },
    {
        "AbsEntry": 1611,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E10-4"
    },
    {
        "AbsEntry": 1612,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E11-1"
    },
    {
        "AbsEntry": 1613,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E11-2"
    },
    {
        "AbsEntry": 1614,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E11-3"
    },
    {
        "AbsEntry": 1615,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E11-4"
    },
    {
        "AbsEntry": 1616,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E12-1"
    },
    {
        "AbsEntry": 1617,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E12-2"
    },
    {
        "AbsEntry": 1618,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E12-3"
    },
    {
        "AbsEntry": 1619,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E12-4"
    },
    {
        "AbsEntry": 1620,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E13-1"
    },
    {
        "AbsEntry": 1621,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E13-2"
    },
    {
        "AbsEntry": 1622,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E13-3"
    },
    {
        "AbsEntry": 1623,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E13-4"
    },
    {
        "AbsEntry": 1624,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F01-1"
    },
    {
        "AbsEntry": 1625,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F01-2"
    },
    {
        "AbsEntry": 1626,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F01-3"
    },
    {
        "AbsEntry": 1627,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F01-4"
    },
    {
        "AbsEntry": 1628,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F02-1"
    },
    {
        "AbsEntry": 1629,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F02-2"
    },
    {
        "AbsEntry": 1630,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F02-3"
    },
    {
        "AbsEntry": 1631,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F02-4"
    },
    {
        "AbsEntry": 1632,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F03-1"
    },
    {
        "AbsEntry": 1633,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F03-2"
    },
    {
        "AbsEntry": 1634,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F03-3"
    },
    {
        "AbsEntry": 1635,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F03-4"
    },
    {
        "AbsEntry": 1636,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F04-1"
    },
    {
        "AbsEntry": 1637,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F04-2"
    },
    {
        "AbsEntry": 1638,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F04-3"
    },
    {
        "AbsEntry": 1639,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F04-4"
    },
    {
        "AbsEntry": 1640,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F05-1"
    },
    {
        "AbsEntry": 1641,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F05-2"
    },
    {
        "AbsEntry": 1642,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F05-3"
    },
    {
        "AbsEntry": 1643,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F05-4"
    },
    {
        "AbsEntry": 1644,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F06-1"
    },
    {
        "AbsEntry": 1645,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F06-2"
    },
    {
        "AbsEntry": 1646,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F06-3"
    },
    {
        "AbsEntry": 1647,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F06-4"
    },
    {
        "AbsEntry": 1648,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F07-1"
    },
    {
        "AbsEntry": 1649,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F07-2"
    },
    {
        "AbsEntry": 1650,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F07-3"
    },
    {
        "AbsEntry": 1651,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F07-4"
    },
    {
        "AbsEntry": 1652,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F08-1"
    },
    {
        "AbsEntry": 1653,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F08-2"
    },
    {
        "AbsEntry": 1654,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F08-3"
    },
    {
        "AbsEntry": 1655,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F08-4"
    },
    {
        "AbsEntry": 1656,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F09-1"
    },
    {
        "AbsEntry": 1657,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F09-2"
    },
    {
        "AbsEntry": 1658,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F09-3"
    },
    {
        "AbsEntry": 1659,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F09-4"
    },
    {
        "AbsEntry": 1660,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F10-1"
    },
    {
        "AbsEntry": 1661,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F10-2"
    },
    {
        "AbsEntry": 1662,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F10-3"
    },
    {
        "AbsEntry": 1663,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1F10-4"
    },
    {
        "AbsEntry": 1664,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G01-1"
    },
    {
        "AbsEntry": 1665,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G01-2"
    },
    {
        "AbsEntry": 1666,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G01-3"
    },
    {
        "AbsEntry": 1667,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G01-4"
    },
    {
        "AbsEntry": 1668,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G01-5"
    },
    {
        "AbsEntry": 1669,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G02-1"
    },
    {
        "AbsEntry": 1670,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G02-2"
    },
    {
        "AbsEntry": 1671,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G02-3"
    },
    {
        "AbsEntry": 1672,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G02-4"
    },
    {
        "AbsEntry": 1673,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G02-5"
    },
    {
        "AbsEntry": 1674,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G03-1"
    },
    {
        "AbsEntry": 1675,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G03-2"
    },
    {
        "AbsEntry": 1676,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G03-3"
    },
    {
        "AbsEntry": 1677,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G03-4"
    },
    {
        "AbsEntry": 1678,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G03-5"
    },
    {
        "AbsEntry": 1679,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G04-1"
    },
    {
        "AbsEntry": 1680,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G04-2"
    },
    {
        "AbsEntry": 1681,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G04-3"
    },
    {
        "AbsEntry": 1682,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G04-4"
    },
    {
        "AbsEntry": 1683,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G04-5"
    },
    {
        "AbsEntry": 1684,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G05-1"
    },
    {
        "AbsEntry": 1685,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G05-2"
    },
    {
        "AbsEntry": 1686,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G05-3"
    },
    {
        "AbsEntry": 1687,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G05-4"
    },
    {
        "AbsEntry": 1688,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G05-5"
    },
    {
        "AbsEntry": 1689,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G06-1"
    },
    {
        "AbsEntry": 1690,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G06-2"
    },
    {
        "AbsEntry": 1691,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G06-3"
    },
    {
        "AbsEntry": 1692,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G06-4"
    },
    {
        "AbsEntry": 1693,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G06-5"
    },
    {
        "AbsEntry": 1694,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G07-1"
    },
    {
        "AbsEntry": 1695,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G07-2"
    },
    {
        "AbsEntry": 1696,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G07-3"
    },
    {
        "AbsEntry": 1697,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G07-4"
    },
    {
        "AbsEntry": 1698,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G07-5"
    },
    {
        "AbsEntry": 1699,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G08-1"
    },
    {
        "AbsEntry": 1700,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G08-2"
    },
    {
        "AbsEntry": 1701,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G08-3"
    },
    {
        "AbsEntry": 1702,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G08-4"
    },
    {
        "AbsEntry": 1703,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1G08-5"
    },
    {
        "AbsEntry": 1704,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H01-1"
    },
    {
        "AbsEntry": 1705,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H01-2"
    },
    {
        "AbsEntry": 1706,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H02-1"
    },
    {
        "AbsEntry": 1707,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H02-2"
    },
    {
        "AbsEntry": 1708,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H03-1"
    },
    {
        "AbsEntry": 1709,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H03-2"
    },
    {
        "AbsEntry": 1710,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H04-1"
    },
    {
        "AbsEntry": 1711,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H04-2"
    },
    {
        "AbsEntry": 1712,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H05-1"
    },
    {
        "AbsEntry": 1713,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H05-2"
    },
    {
        "AbsEntry": 1714,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H06-1"
    },
    {
        "AbsEntry": 1715,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H06-2"
    },
    {
        "AbsEntry": 1716,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H07-1"
    },
    {
        "AbsEntry": 1717,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H07-2"
    },
    {
        "AbsEntry": 1718,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H08-1"
    },
    {
        "AbsEntry": 1719,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H08-2"
    },
    {
        "AbsEntry": 1720,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H09-1"
    },
    {
        "AbsEntry": 1721,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H09-2"
    },
    {
        "AbsEntry": 1722,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H10-1"
    },
    {
        "AbsEntry": 1723,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H10-2"
    },
    {
        "AbsEntry": 1724,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H11-1"
    },
    {
        "AbsEntry": 1725,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H11-2"
    },
    {
        "AbsEntry": 1726,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H12-1"
    },
    {
        "AbsEntry": 1727,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1H12-2"
    },
    {
        "AbsEntry": 1728,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I01-1"
    },
    {
        "AbsEntry": 1729,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I01-2"
    },
    {
        "AbsEntry": 1730,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I02-1"
    },
    {
        "AbsEntry": 1731,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I02-2"
    },
    {
        "AbsEntry": 1732,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I03-1"
    },
    {
        "AbsEntry": 1733,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I03-2"
    },
    {
        "AbsEntry": 1734,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I04-1"
    },
    {
        "AbsEntry": 1735,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I04-2"
    },
    {
        "AbsEntry": 1736,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I05-1"
    },
    {
        "AbsEntry": 1737,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I05-2"
    },
    {
        "AbsEntry": 1738,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I06-1"
    },
    {
        "AbsEntry": 1739,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I06-2"
    },
    {
        "AbsEntry": 1740,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I07-1"
    },
    {
        "AbsEntry": 1741,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I07-2"
    },
    {
        "AbsEntry": 1742,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I08-1"
    },
    {
        "AbsEntry": 1743,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I08-2"
    },
    {
        "AbsEntry": 1744,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I09-1"
    },
    {
        "AbsEntry": 1745,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I09-2"
    },
    {
        "AbsEntry": 1746,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I10-1"
    },
    {
        "AbsEntry": 1747,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I10-2"
    },
    {
        "AbsEntry": 1748,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I11-1"
    },
    {
        "AbsEntry": 1749,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I11-2"
    },
    {
        "AbsEntry": 1750,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I12-1"
    },
    {
        "AbsEntry": 1751,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I12-2"
    },
    {
        "AbsEntry": 1752,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I13-1"
    },
    {
        "AbsEntry": 1753,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I13-2"
    },
    {
        "AbsEntry": 1754,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I14-1"
    },
    {
        "AbsEntry": 1755,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I14-2"
    },
    {
        "AbsEntry": 1756,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I15-1"
    },
    {
        "AbsEntry": 1757,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I15-2"
    },
    {
        "AbsEntry": 1758,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I16-1"
    },
    {
        "AbsEntry": 1759,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I16-2"
    },
    {
        "AbsEntry": 1760,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I17-1"
    },
    {
        "AbsEntry": 1761,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I17-2"
    },
    {
        "AbsEntry": 1762,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I18-1"
    },
    {
        "AbsEntry": 1763,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1I18-2"
    },
    {
        "AbsEntry": 1764,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J01-1"
    },
    {
        "AbsEntry": 1765,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J01-2"
    },
    {
        "AbsEntry": 1766,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J02-1"
    },
    {
        "AbsEntry": 1767,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J02-2"
    },
    {
        "AbsEntry": 1768,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J03-1"
    },
    {
        "AbsEntry": 1769,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J03-2"
    },
    {
        "AbsEntry": 1770,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J04-1"
    },
    {
        "AbsEntry": 1771,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J04-2"
    },
    {
        "AbsEntry": 1772,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J05-1"
    },
    {
        "AbsEntry": 1773,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J05-2"
    },
    {
        "AbsEntry": 1774,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J06-1"
    },
    {
        "AbsEntry": 1775,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J06-2"
    },
    {
        "AbsEntry": 1776,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J07-1"
    },
    {
        "AbsEntry": 1777,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J07-2"
    },
    {
        "AbsEntry": 1778,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J08-1"
    },
    {
        "AbsEntry": 1779,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J08-2"
    },
    {
        "AbsEntry": 1780,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J09-1"
    },
    {
        "AbsEntry": 1781,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J09-2"
    },
    {
        "AbsEntry": 1782,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J10-1"
    },
    {
        "AbsEntry": 1783,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J10-2"
    },
    {
        "AbsEntry": 1784,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J11-1"
    },
    {
        "AbsEntry": 1785,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J11-2"
    },
    {
        "AbsEntry": 1786,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J12-1"
    },
    {
        "AbsEntry": 1787,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J12-2"
    },
    {
        "AbsEntry": 1788,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J13-1"
    },
    {
        "AbsEntry": 1789,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J13-2"
    },
    {
        "AbsEntry": 1790,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J14-1"
    },
    {
        "AbsEntry": 1791,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J14-2"
    },
    {
        "AbsEntry": 1792,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J15-1"
    },
    {
        "AbsEntry": 1793,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J15-2"
    },
    {
        "AbsEntry": 1794,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J16-1"
    },
    {
        "AbsEntry": 1795,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J16-2"
    },
    {
        "AbsEntry": 1796,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J17-1"
    },
    {
        "AbsEntry": 1797,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J17-2"
    },
    {
        "AbsEntry": 1798,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J18-1"
    },
    {
        "AbsEntry": 1799,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J18-2"
    },
    {
        "AbsEntry": 1800,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J19-1"
    },
    {
        "AbsEntry": 1801,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J19-2"
    },
    {
        "AbsEntry": 1802,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J20-1"
    },
    {
        "AbsEntry": 1803,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J20-2"
    },
    {
        "AbsEntry": 1804,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J21-1"
    },
    {
        "AbsEntry": 1805,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J21-2"
    },
    {
        "AbsEntry": 1806,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J22-1"
    },
    {
        "AbsEntry": 1807,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1J22-2"
    },
    {
        "AbsEntry": 1808,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K01-1"
    },
    {
        "AbsEntry": 1809,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K01-2"
    },
    {
        "AbsEntry": 1810,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K02-1"
    },
    {
        "AbsEntry": 1811,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K02-2"
    },
    {
        "AbsEntry": 1812,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K03-1"
    },
    {
        "AbsEntry": 1813,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K03-2"
    },
    {
        "AbsEntry": 1814,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K04-1"
    },
    {
        "AbsEntry": 1815,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K04-2"
    },
    {
        "AbsEntry": 1816,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K05-1"
    },
    {
        "AbsEntry": 1817,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K05-2"
    },
    {
        "AbsEntry": 1818,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K06-1"
    },
    {
        "AbsEntry": 1819,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K06-2"
    },
    {
        "AbsEntry": 1820,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K07-1"
    },
    {
        "AbsEntry": 1821,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K07-2"
    },
    {
        "AbsEntry": 1822,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K08-1"
    },
    {
        "AbsEntry": 1823,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K08-2"
    },
    {
        "AbsEntry": 1824,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K09-1"
    },
    {
        "AbsEntry": 1825,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K09-2"
    },
    {
        "AbsEntry": 1826,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K10-1"
    },
    {
        "AbsEntry": 1827,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K10-2"
    },
    {
        "AbsEntry": 1828,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K11-1"
    },
    {
        "AbsEntry": 1829,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K11-2"
    },
    {
        "AbsEntry": 1830,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K12-1"
    },
    {
        "AbsEntry": 1831,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K12-2"
    },
    {
        "AbsEntry": 1832,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K13-1"
    },
    {
        "AbsEntry": 1833,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K13-2"
    },
    {
        "AbsEntry": 1834,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K14-1"
    },
    {
        "AbsEntry": 1835,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K14-2"
    },
    {
        "AbsEntry": 1836,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K15-1"
    },
    {
        "AbsEntry": 1837,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K15-2"
    },
    {
        "AbsEntry": 1838,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K16-1"
    },
    {
        "AbsEntry": 1839,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K16-2"
    },
    {
        "AbsEntry": 1840,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K17-1"
    },
    {
        "AbsEntry": 1841,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K17-2"
    },
    {
        "AbsEntry": 1842,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K18-1"
    },
    {
        "AbsEntry": 1843,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K18-2"
    },
    {
        "AbsEntry": 1844,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K19-1"
    },
    {
        "AbsEntry": 1845,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K19-2"
    },
    {
        "AbsEntry": 1846,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K20-1"
    },
    {
        "AbsEntry": 1847,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K20-2"
    },
    {
        "AbsEntry": 1848,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K21-1"
    },
    {
        "AbsEntry": 1849,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K21-2"
    },
    {
        "AbsEntry": 1850,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K22-1"
    },
    {
        "AbsEntry": 1851,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K22-2"
    },
    {
        "AbsEntry": 1852,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K23-1"
    },
    {
        "AbsEntry": 1853,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K23-2"
    },
    {
        "AbsEntry": 1854,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K24-1"
    },
    {
        "AbsEntry": 1855,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K24-2"
    },
    {
        "AbsEntry": 1856,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K25-1"
    },
    {
        "AbsEntry": 1857,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K25-2"
    },
    {
        "AbsEntry": 1858,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K26-1"
    },
    {
        "AbsEntry": 1859,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K26-2"
    },
    {
        "AbsEntry": 1860,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K27-1"
    },
    {
        "AbsEntry": 1861,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K27-2"
    },
    {
        "AbsEntry": 1862,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K28-1"
    },
    {
        "AbsEntry": 1863,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K28-2"
    },
    {
        "AbsEntry": 1864,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K29-1"
    },
    {
        "AbsEntry": 1865,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K29-2"
    },
    {
        "AbsEntry": 1866,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K30-1"
    },
    {
        "AbsEntry": 1867,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K30-2"
    },
    {
        "AbsEntry": 1868,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K31-1"
    },
    {
        "AbsEntry": 1869,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K31-2"
    },
    {
        "AbsEntry": 1870,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K32-1"
    },
    {
        "AbsEntry": 1871,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K32-2"
    },
    {
        "AbsEntry": 1872,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K33-1"
    },
    {
        "AbsEntry": 1873,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K33-2"
    },
    {
        "AbsEntry": 1874,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K34-1"
    },
    {
        "AbsEntry": 1875,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K34-2"
    },
    {
        "AbsEntry": 1876,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K35-1"
    },
    {
        "AbsEntry": 1877,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K35-2"
    },
    {
        "AbsEntry": 1878,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K36-1"
    },
    {
        "AbsEntry": 1879,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K36-2"
    },
    {
        "AbsEntry": 1880,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K37-1"
    },
    {
        "AbsEntry": 1881,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K37-2"
    },
    {
        "AbsEntry": 1882,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K38-1"
    },
    {
        "AbsEntry": 1883,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K38-2"
    },
    {
        "AbsEntry": 1884,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K39-1"
    },
    {
        "AbsEntry": 1885,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K39-2"
    },
    {
        "AbsEntry": 1886,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K40-1"
    },
    {
        "AbsEntry": 1887,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K40-2"
    },
    {
        "AbsEntry": 1888,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K41-1"
    },
    {
        "AbsEntry": 1889,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K41-2"
    },
    {
        "AbsEntry": 1890,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K42-1"
    },
    {
        "AbsEntry": 1891,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K42-2"
    },
    {
        "AbsEntry": 1892,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K43-1"
    },
    {
        "AbsEntry": 1893,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K43-2"
    },
    {
        "AbsEntry": 1894,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K44-1"
    },
    {
        "AbsEntry": 1895,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K44-2"
    },
    {
        "AbsEntry": 1896,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K45-1"
    },
    {
        "AbsEntry": 1897,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K45-2"
    },
    {
        "AbsEntry": 1898,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K46-1"
    },
    {
        "AbsEntry": 1899,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K46-2"
    },
    {
        "AbsEntry": 1900,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K47-1"
    },
    {
        "AbsEntry": 1901,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K47-2"
    },
    {
        "AbsEntry": 1902,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K48-1"
    },
    {
        "AbsEntry": 1903,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K48-2"
    },
    {
        "AbsEntry": 1904,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K49-1"
    },
    {
        "AbsEntry": 1905,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K49-2"
    },
    {
        "AbsEntry": 1906,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K50-1"
    },
    {
        "AbsEntry": 1907,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K50-2"
    },
    {
        "AbsEntry": 1908,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K51-1"
    },
    {
        "AbsEntry": 1909,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K51-2"
    },
    {
        "AbsEntry": 1910,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K52-1"
    },
    {
        "AbsEntry": 1911,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K52-2"
    },
    {
        "AbsEntry": 1912,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K53-1"
    },
    {
        "AbsEntry": 1913,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K53-2"
    },
    {
        "AbsEntry": 1914,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K54-1"
    },
    {
        "AbsEntry": 1915,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K54-2"
    },
    {
        "AbsEntry": 1916,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K55-1"
    },
    {
        "AbsEntry": 1917,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K55-2"
    },
    {
        "AbsEntry": 1918,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K56-1"
    },
    {
        "AbsEntry": 1919,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K56-2"
    },
    {
        "AbsEntry": 1920,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K57-1"
    },
    {
        "AbsEntry": 1921,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K57-2"
    },
    {
        "AbsEntry": 1922,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K58-1"
    },
    {
        "AbsEntry": 1923,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K58-2"
    },
    {
        "AbsEntry": 1924,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K59-1"
    },
    {
        "AbsEntry": 1925,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K59-2"
    },
    {
        "AbsEntry": 1926,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K60-1"
    },
    {
        "AbsEntry": 1927,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K60-2"
    },
    {
        "AbsEntry": 1928,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K61-1"
    },
    {
        "AbsEntry": 1929,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K61-2"
    },
    {
        "AbsEntry": 1930,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K62-1"
    },
    {
        "AbsEntry": 1931,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K62-2"
    },
    {
        "AbsEntry": 1932,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K63-1"
    },
    {
        "AbsEntry": 1933,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K63-2"
    },
    {
        "AbsEntry": 1934,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K64-1"
    },
    {
        "AbsEntry": 1935,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K64-2"
    },
    {
        "AbsEntry": 1936,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K65-1"
    },
    {
        "AbsEntry": 1937,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K65-2"
    },
    {
        "AbsEntry": 1938,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K66-1"
    },
    {
        "AbsEntry": 1939,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K66-2"
    },
    {
        "AbsEntry": 1940,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K67-1"
    },
    {
        "AbsEntry": 1941,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K67-2"
    },
    {
        "AbsEntry": 1942,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K68-1"
    },
    {
        "AbsEntry": 1943,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K68-2"
    },
    {
        "AbsEntry": 1944,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K69-1"
    },
    {
        "AbsEntry": 1945,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K69-2"
    },
    {
        "AbsEntry": 1946,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K70-1"
    },
    {
        "AbsEntry": 1947,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K70-2"
    },
    {
        "AbsEntry": 1948,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K71-1"
    },
    {
        "AbsEntry": 1949,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K71-2"
    },
    {
        "AbsEntry": 1950,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K72-1"
    },
    {
        "AbsEntry": 1951,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K72-2"
    },
    {
        "AbsEntry": 1952,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K73-1"
    },
    {
        "AbsEntry": 1953,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K73-2"
    },
    {
        "AbsEntry": 1954,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K74-1"
    },
    {
        "AbsEntry": 1955,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K74-2"
    },
    {
        "AbsEntry": 1956,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K75-1"
    },
    {
        "AbsEntry": 1957,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K75-2"
    },
    {
        "AbsEntry": 1958,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K76-1"
    },
    {
        "AbsEntry": 1959,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K76-2"
    },
    {
        "AbsEntry": 1960,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K77-1"
    },
    {
        "AbsEntry": 1961,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K77-2"
    },
    {
        "AbsEntry": 1962,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K78-1"
    },
    {
        "AbsEntry": 1963,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K78-2"
    },
    {
        "AbsEntry": 1964,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K79-1"
    },
    {
        "AbsEntry": 1965,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K79-2"
    },
    {
        "AbsEntry": 1966,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K80-1"
    },
    {
        "AbsEntry": 1967,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K80-2"
    },
    {
        "AbsEntry": 1968,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K81-1"
    },
    {
        "AbsEntry": 1969,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K81-2"
    },
    {
        "AbsEntry": 1970,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K82-1"
    },
    {
        "AbsEntry": 1971,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K82-2"
    },
    {
        "AbsEntry": 1972,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K83-1"
    },
    {
        "AbsEntry": 1973,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K83-2"
    },
    {
        "AbsEntry": 1974,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K84-1"
    },
    {
        "AbsEntry": 1975,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K84-2"
    },
    {
        "AbsEntry": 1976,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K85-1"
    },
    {
        "AbsEntry": 1977,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K85-2"
    },
    {
        "AbsEntry": 1978,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K86-1"
    },
    {
        "AbsEntry": 1979,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K86-2"
    },
    {
        "AbsEntry": 1980,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K87-1"
    },
    {
        "AbsEntry": 1981,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K87-2"
    },
    {
        "AbsEntry": 1982,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K88-1"
    },
    {
        "AbsEntry": 1983,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1K88-2"
    },
    {
        "AbsEntry": 1984,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L01-1"
    },
    {
        "AbsEntry": 1985,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L01-2"
    },
    {
        "AbsEntry": 1986,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L02-1"
    },
    {
        "AbsEntry": 1987,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L02-2"
    },
    {
        "AbsEntry": 1988,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L03-1"
    },
    {
        "AbsEntry": 1989,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L03-2"
    },
    {
        "AbsEntry": 1990,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L04-1"
    },
    {
        "AbsEntry": 1991,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L04-2"
    },
    {
        "AbsEntry": 1992,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L05-1"
    },
    {
        "AbsEntry": 1993,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L05-2"
    },
    {
        "AbsEntry": 1994,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L06-1"
    },
    {
        "AbsEntry": 1995,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L06-2"
    },
    {
        "AbsEntry": 1996,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L07-1"
    },
    {
        "AbsEntry": 1997,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L07-2"
    },
    {
        "AbsEntry": 1998,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L08-1"
    },
    {
        "AbsEntry": 1999,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L08-2"
    },
    {
        "AbsEntry": 2000,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L09-1"
    },
    {
        "AbsEntry": 2001,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L09-2"
    },
    {
        "AbsEntry": 2002,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L10-1"
    },
    {
        "AbsEntry": 2003,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L10-2"
    },
    {
        "AbsEntry": 2004,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L11-1"
    },
    {
        "AbsEntry": 2005,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L11-2"
    },
    {
        "AbsEntry": 2006,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L12-1"
    },
    {
        "AbsEntry": 2007,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L12-2"
    },
    {
        "AbsEntry": 2008,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L13-1"
    },
    {
        "AbsEntry": 2009,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L13-2"
    },
    {
        "AbsEntry": 2010,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L14-1"
    },
    {
        "AbsEntry": 2011,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L14-2"
    },
    {
        "AbsEntry": 2012,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L14-3"
    },
    {
        "AbsEntry": 2013,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L15-1"
    },
    {
        "AbsEntry": 2014,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L15-2"
    },
    {
        "AbsEntry": 2015,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L15-3"
    },
    {
        "AbsEntry": 2016,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L16-1"
    },
    {
        "AbsEntry": 2017,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L16-2"
    },
    {
        "AbsEntry": 2018,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L16-3"
    },
    {
        "AbsEntry": 2019,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L17-1"
    },
    {
        "AbsEntry": 2020,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L17-2"
    },
    {
        "AbsEntry": 2021,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L17-3"
    },
    {
        "AbsEntry": 2022,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L18-1"
    },
    {
        "AbsEntry": 2023,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L18-2"
    },
    {
        "AbsEntry": 2024,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L19-1"
    },
    {
        "AbsEntry": 2025,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L19-2"
    },
    {
        "AbsEntry": 2026,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L20-1"
    },
    {
        "AbsEntry": 2027,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L20-2"
    },
    {
        "AbsEntry": 2028,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L21-1"
    },
    {
        "AbsEntry": 2029,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L21-2"
    },
    {
        "AbsEntry": 2030,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L22-1"
    },
    {
        "AbsEntry": 2031,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L22-2"
    },
    {
        "AbsEntry": 2032,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L23-1"
    },
    {
        "AbsEntry": 2033,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L23-2"
    },
    {
        "AbsEntry": 2034,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L24-1"
    },
    {
        "AbsEntry": 2035,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L24-2"
    },
    {
        "AbsEntry": 2036,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L25-1"
    },
    {
        "AbsEntry": 2037,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L25-2"
    },
    {
        "AbsEntry": 2038,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L26-1"
    },
    {
        "AbsEntry": 2039,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L26-2"
    },
    {
        "AbsEntry": 2040,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L26-3"
    },
    {
        "AbsEntry": 2041,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L27-1"
    },
    {
        "AbsEntry": 2042,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L27-2"
    },
    {
        "AbsEntry": 2043,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L27-3"
    },
    {
        "AbsEntry": 2044,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L28-1"
    },
    {
        "AbsEntry": 2045,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L28-2"
    },
    {
        "AbsEntry": 2046,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L28-3"
    },
    {
        "AbsEntry": 2047,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L29-1"
    },
    {
        "AbsEntry": 2048,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L29-2"
    },
    {
        "AbsEntry": 2049,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L29-3"
    },
    {
        "AbsEntry": 2050,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L30-1"
    },
    {
        "AbsEntry": 2051,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L30-2"
    },
    {
        "AbsEntry": 2052,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L30-3"
    },
    {
        "AbsEntry": 2053,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L31-1"
    },
    {
        "AbsEntry": 2054,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L31-2"
    },
    {
        "AbsEntry": 2055,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L31-3"
    },
    {
        "AbsEntry": 2056,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L32-1"
    },
    {
        "AbsEntry": 2057,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L32-2"
    },
    {
        "AbsEntry": 2058,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L32-3"
    },
    {
        "AbsEntry": 2059,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L33-1"
    },
    {
        "AbsEntry": 2060,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L33-2"
    },
    {
        "AbsEntry": 2061,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L33-3"
    },
    {
        "AbsEntry": 2062,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L34-1"
    },
    {
        "AbsEntry": 2063,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L34-2"
    },
    {
        "AbsEntry": 2064,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L34-3"
    },
    {
        "AbsEntry": 2065,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L35-1"
    },
    {
        "AbsEntry": 2066,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L35-2"
    },
    {
        "AbsEntry": 2067,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L35-3"
    },
    {
        "AbsEntry": 2068,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L36-1"
    },
    {
        "AbsEntry": 2069,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L36-2"
    },
    {
        "AbsEntry": 2070,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L37-1"
    },
    {
        "AbsEntry": 2071,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L37-2"
    },
    {
        "AbsEntry": 2072,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L38-1"
    },
    {
        "AbsEntry": 2073,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L38-2"
    },
    {
        "AbsEntry": 2074,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L39-1"
    },
    {
        "AbsEntry": 2075,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L39-2"
    },
    {
        "AbsEntry": 2076,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L40-1"
    },
    {
        "AbsEntry": 2077,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L40-2"
    },
    {
        "AbsEntry": 2078,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L41-1"
    },
    {
        "AbsEntry": 2079,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L41-2"
    },
    {
        "AbsEntry": 2080,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L42-1"
    },
    {
        "AbsEntry": 2081,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L42-2"
    },
    {
        "AbsEntry": 2082,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L43-1"
    },
    {
        "AbsEntry": 2083,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L43-2"
    },
    {
        "AbsEntry": 2084,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L44-1"
    },
    {
        "AbsEntry": 2085,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L44-2"
    },
    {
        "AbsEntry": 2086,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L45-1"
    },
    {
        "AbsEntry": 2087,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L45-2"
    },
    {
        "AbsEntry": 2088,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L46-1"
    },
    {
        "AbsEntry": 2089,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L46-2"
    },
    {
        "AbsEntry": 2090,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L47-1"
    },
    {
        "AbsEntry": 2091,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L47-2"
    },
    {
        "AbsEntry": 2092,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L48-1"
    },
    {
        "AbsEntry": 2093,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L48-2"
    },
    {
        "AbsEntry": 2094,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L49-1"
    },
    {
        "AbsEntry": 2095,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L49-2"
    },
    {
        "AbsEntry": 2096,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L50-1"
    },
    {
        "AbsEntry": 2097,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L50-2"
    },
    {
        "AbsEntry": 2098,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L51-1"
    },
    {
        "AbsEntry": 2099,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L51-2"
    },
    {
        "AbsEntry": 2100,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L52-1"
    },
    {
        "AbsEntry": 2101,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L52-2"
    },
    {
        "AbsEntry": 2102,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L53-1"
    },
    {
        "AbsEntry": 2103,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L53-2"
    },
    {
        "AbsEntry": 2104,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L54-1"
    },
    {
        "AbsEntry": 2105,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L54-2"
    },
    {
        "AbsEntry": 2106,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L55-1"
    },
    {
        "AbsEntry": 2107,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L55-2"
    },
    {
        "AbsEntry": 2108,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L56-1"
    },
    {
        "AbsEntry": 2109,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L56-2"
    },
    {
        "AbsEntry": 2110,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L57-1"
    },
    {
        "AbsEntry": 2111,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L57-2"
    },
    {
        "AbsEntry": 2112,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L58-1"
    },
    {
        "AbsEntry": 2113,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L58-2"
    },
    {
        "AbsEntry": 2114,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L59-1"
    },
    {
        "AbsEntry": 2115,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L59-2"
    },
    {
        "AbsEntry": 2116,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L60-1"
    },
    {
        "AbsEntry": 2117,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L60-2"
    },
    {
        "AbsEntry": 2118,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L61-1"
    },
    {
        "AbsEntry": 2119,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L61-2"
    },
    {
        "AbsEntry": 2120,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L62-1"
    },
    {
        "AbsEntry": 2121,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L62-2"
    },
    {
        "AbsEntry": 2122,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L63-1"
    },
    {
        "AbsEntry": 2123,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L63-2"
    },
    {
        "AbsEntry": 2124,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L64-1"
    },
    {
        "AbsEntry": 2125,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L64-2"
    },
    {
        "AbsEntry": 2126,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L65-1"
    },
    {
        "AbsEntry": 2127,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L65-2"
    },
    {
        "AbsEntry": 2128,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L66-1"
    },
    {
        "AbsEntry": 2129,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L66-2"
    },
    {
        "AbsEntry": 2130,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L67-1"
    },
    {
        "AbsEntry": 2131,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1L67-2"
    },
    {
        "AbsEntry": 2132,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M01-1"
    },
    {
        "AbsEntry": 2133,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M02-1"
    },
    {
        "AbsEntry": 2134,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M03-1"
    },
    {
        "AbsEntry": 2135,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M04-1"
    },
    {
        "AbsEntry": 2136,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M05-1"
    },
    {
        "AbsEntry": 2137,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M06-1"
    },
    {
        "AbsEntry": 2138,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M07-1"
    },
    {
        "AbsEntry": 2139,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M08-1"
    },
    {
        "AbsEntry": 2140,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M09-1"
    },
    {
        "AbsEntry": 2141,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M10-1"
    },
    {
        "AbsEntry": 2142,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M11-1"
    },
    {
        "AbsEntry": 2143,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M12-1"
    },
    {
        "AbsEntry": 2144,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M13-1"
    },
    {
        "AbsEntry": 2145,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M14-1"
    },
    {
        "AbsEntry": 2146,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M15-1"
    },
    {
        "AbsEntry": 2147,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M16-1"
    },
    {
        "AbsEntry": 2148,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M17-1"
    },
    {
        "AbsEntry": 2149,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M18-1"
    },
    {
        "AbsEntry": 2150,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M19-1"
    },
    {
        "AbsEntry": 2151,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M20-1"
    },
    {
        "AbsEntry": 2152,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M21-1"
    },
    {
        "AbsEntry": 2153,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M22-1"
    },
    {
        "AbsEntry": 2154,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M23-1"
    },
    {
        "AbsEntry": 2155,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M24-1"
    },
    {
        "AbsEntry": 2156,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M25-1"
    },
    {
        "AbsEntry": 2157,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M26-1"
    },
    {
        "AbsEntry": 2158,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M27-1"
    },
    {
        "AbsEntry": 2159,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M28-1"
    },
    {
        "AbsEntry": 2160,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M29-1"
    },
    {
        "AbsEntry": 2161,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M30-1"
    },
    {
        "AbsEntry": 2162,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M31-1"
    },
    {
        "AbsEntry": 2163,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M32-1"
    },
    {
        "AbsEntry": 2164,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M33-1"
    },
    {
        "AbsEntry": 2165,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M34-1"
    },
    {
        "AbsEntry": 2166,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M35-1"
    },
    {
        "AbsEntry": 2167,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M36-1"
    },
    {
        "AbsEntry": 2168,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1M37-1"
    },
    {
        "AbsEntry": 2169,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1R01-1"
    },
    {
        "AbsEntry": 2170,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z01-1"
    },
    {
        "AbsEntry": 2171,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z01-2"
    },
    {
        "AbsEntry": 2172,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z02-1"
    },
    {
        "AbsEntry": 2173,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z02-2"
    },
    {
        "AbsEntry": 2174,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z03-1"
    },
    {
        "AbsEntry": 2175,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z03-2"
    },
    {
        "AbsEntry": 2176,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z04-1"
    },
    {
        "AbsEntry": 2177,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z04-2"
    },
    {
        "AbsEntry": 2178,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z05-1"
    },
    {
        "AbsEntry": 2179,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z05-2"
    },
    {
        "AbsEntry": 2180,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z06-1"
    },
    {
        "AbsEntry": 2181,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z06-2"
    },
    {
        "AbsEntry": 2182,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z07-1"
    },
    {
        "AbsEntry": 2183,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z07-2"
    },
    {
        "AbsEntry": 2184,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z08-1"
    },
    {
        "AbsEntry": 2185,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z08-2"
    },
    {
        "AbsEntry": 2186,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z09-1"
    },
    {
        "AbsEntry": 2187,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z09-2"
    },
    {
        "AbsEntry": 2188,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z10-1"
    },
    {
        "AbsEntry": 2189,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z10-2"
    },
    {
        "AbsEntry": 2190,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z11-1"
    },
    {
        "AbsEntry": 2191,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z11-2"
    },
    {
        "AbsEntry": 2192,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z12-1"
    },
    {
        "AbsEntry": 2193,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Z12-2"
    },
    {
        "AbsEntry": 2194,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-0A00-0"
    },
    {
        "AbsEntry": 2195,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Y01-1"
    },
    {
        "AbsEntry": 2196,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Y01-1"
    },
    {
        "AbsEntry": 2197,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Y20-1"
    },
    {
        "AbsEntry": 2198,
        "Warehouse": "WCP",
        "BinCode": "WCP-1Y30-1"
    },
    {
        "AbsEntry": 2199,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Y20-1"
    },
    {
        "AbsEntry": 2200,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1Y30-1"
    },
    {
        "AbsEntry": 2201,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E14-1"
    },
    {
        "AbsEntry": 2202,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E15-1"
    },
    {
        "AbsEntry": 2203,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E16-1"
    },
    {
        "AbsEntry": 2204,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1E17-1"
    },
    {
        "AbsEntry": 2205,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E14-1"
    },
    {
        "AbsEntry": 2206,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E15-1"
    },
    {
        "AbsEntry": 2207,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E16-1"
    },
    {
        "AbsEntry": 2208,
        "Warehouse": "WCP",
        "BinCode": "WCP-1E17-1"
    },
    {
        "AbsEntry": 2209,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A05-5"
    },
    {
        "AbsEntry": 2210,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A05-6"
    },
    {
        "AbsEntry": 2211,
        "Warehouse": "WCP",
        "BinCode": "WCP-1A05-7"
    },
    {
        "AbsEntry": 2212,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A05-5"
    },
    {
        "AbsEntry": 2213,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A05-6"
    },
    {
        "AbsEntry": 2214,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-1A05-7"
    },
    {
        "AbsEntry": 2215,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A01-1"
    },
    {
        "AbsEntry": 2216,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A02-1"
    },
    {
        "AbsEntry": 2217,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A03-1"
    },
    {
        "AbsEntry": 2218,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A04-1"
    },
    {
        "AbsEntry": 2219,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A05-1"
    },
    {
        "AbsEntry": 2220,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A06-1"
    },
    {
        "AbsEntry": 2221,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A07-1"
    },
    {
        "AbsEntry": 2222,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A08-1"
    },
    {
        "AbsEntry": 2223,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A09-1"
    },
    {
        "AbsEntry": 2224,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A10-1"
    },
    {
        "AbsEntry": 2225,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A11-1"
    },
    {
        "AbsEntry": 2226,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A12-1"
    },
    {
        "AbsEntry": 2227,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A13-1"
    },
    {
        "AbsEntry": 2228,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A14-1"
    },
    {
        "AbsEntry": 2229,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A15-1"
    },
    {
        "AbsEntry": 2230,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A16-1"
    },
    {
        "AbsEntry": 2231,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A17-1"
    },
    {
        "AbsEntry": 2232,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A18-1"
    },
    {
        "AbsEntry": 2233,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A19-1"
    },
    {
        "AbsEntry": 2234,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A20-1"
    },
    {
        "AbsEntry": 2235,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A21-1"
    },
    {
        "AbsEntry": 2236,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A22-1"
    },
    {
        "AbsEntry": 2237,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A23-1"
    },
    {
        "AbsEntry": 2238,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A24-1"
    },
    {
        "AbsEntry": 2239,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A25-1"
    },
    {
        "AbsEntry": 2240,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A26-1"
    },
    {
        "AbsEntry": 2241,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A27-1"
    },
    {
        "AbsEntry": 2242,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A28-1"
    },
    {
        "AbsEntry": 2243,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A29-1"
    },
    {
        "AbsEntry": 2244,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2A30-1"
    },
    {
        "AbsEntry": 2245,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B11-1"
    },
    {
        "AbsEntry": 2246,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B12-1"
    },
    {
        "AbsEntry": 2247,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B13-1"
    },
    {
        "AbsEntry": 2248,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B14-1"
    },
    {
        "AbsEntry": 2249,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B15-1"
    },
    {
        "AbsEntry": 2250,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B16-1"
    },
    {
        "AbsEntry": 2251,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B17-1"
    },
    {
        "AbsEntry": 2252,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B18-1"
    },
    {
        "AbsEntry": 2253,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B19-1"
    },
    {
        "AbsEntry": 2254,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B20-1"
    },
    {
        "AbsEntry": 2255,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B21-1"
    },
    {
        "AbsEntry": 2256,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B22-1"
    },
    {
        "AbsEntry": 2257,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B23-1"
    },
    {
        "AbsEntry": 2258,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B24-1"
    },
    {
        "AbsEntry": 2259,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B25-1"
    },
    {
        "AbsEntry": 2260,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B26-1"
    },
    {
        "AbsEntry": 2261,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B27-1"
    },
    {
        "AbsEntry": 2262,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B28-1"
    },
    {
        "AbsEntry": 2263,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B29-1"
    },
    {
        "AbsEntry": 2264,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2B30-1"
    },
    {
        "AbsEntry": 2265,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C11-1"
    },
    {
        "AbsEntry": 2266,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C12-1"
    },
    {
        "AbsEntry": 2267,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C13-1"
    },
    {
        "AbsEntry": 2268,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C14-1"
    },
    {
        "AbsEntry": 2269,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C15-1"
    },
    {
        "AbsEntry": 2270,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C16-1"
    },
    {
        "AbsEntry": 2271,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C17-1"
    },
    {
        "AbsEntry": 2272,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C18-1"
    },
    {
        "AbsEntry": 2273,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C19-1"
    },
    {
        "AbsEntry": 2274,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C20-1"
    },
    {
        "AbsEntry": 2275,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C21-1"
    },
    {
        "AbsEntry": 2276,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C22-1"
    },
    {
        "AbsEntry": 2277,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C23-1"
    },
    {
        "AbsEntry": 2278,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C24-1"
    },
    {
        "AbsEntry": 2279,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C25-1"
    },
    {
        "AbsEntry": 2280,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C26-1"
    },
    {
        "AbsEntry": 2281,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C27-1"
    },
    {
        "AbsEntry": 2282,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C28-1"
    },
    {
        "AbsEntry": 2283,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C29-1"
    },
    {
        "AbsEntry": 2284,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2C30-1"
    },
    {
        "AbsEntry": 2285,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D11-1"
    },
    {
        "AbsEntry": 2286,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D12-1"
    },
    {
        "AbsEntry": 2287,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D13-1"
    },
    {
        "AbsEntry": 2288,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D14-1"
    },
    {
        "AbsEntry": 2289,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D15-1"
    },
    {
        "AbsEntry": 2290,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D16-1"
    },
    {
        "AbsEntry": 2291,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D17-1"
    },
    {
        "AbsEntry": 2292,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D18-1"
    },
    {
        "AbsEntry": 2293,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D19-1"
    },
    {
        "AbsEntry": 2294,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D20-1"
    },
    {
        "AbsEntry": 2295,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D21-1"
    },
    {
        "AbsEntry": 2296,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D22-1"
    },
    {
        "AbsEntry": 2297,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D23-1"
    },
    {
        "AbsEntry": 2298,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D24-1"
    },
    {
        "AbsEntry": 2299,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D25-1"
    },
    {
        "AbsEntry": 2300,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D26-1"
    },
    {
        "AbsEntry": 2301,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D27-1"
    },
    {
        "AbsEntry": 2302,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D28-1"
    },
    {
        "AbsEntry": 2303,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D29-1"
    },
    {
        "AbsEntry": 2304,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2D30-1"
    },
    {
        "AbsEntry": 2305,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E11-1"
    },
    {
        "AbsEntry": 2306,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E12-1"
    },
    {
        "AbsEntry": 2307,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E13-1"
    },
    {
        "AbsEntry": 2308,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E14-1"
    },
    {
        "AbsEntry": 2309,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E15-1"
    },
    {
        "AbsEntry": 2310,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E16-1"
    },
    {
        "AbsEntry": 2311,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E17-1"
    },
    {
        "AbsEntry": 2312,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E18-1"
    },
    {
        "AbsEntry": 2313,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E19-1"
    },
    {
        "AbsEntry": 2314,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E20-1"
    },
    {
        "AbsEntry": 2315,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E21-1"
    },
    {
        "AbsEntry": 2316,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E22-1"
    },
    {
        "AbsEntry": 2317,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E23-1"
    },
    {
        "AbsEntry": 2318,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E24-1"
    },
    {
        "AbsEntry": 2319,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E25-1"
    },
    {
        "AbsEntry": 2320,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E26-1"
    },
    {
        "AbsEntry": 2321,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E27-1"
    },
    {
        "AbsEntry": 2322,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E28-1"
    },
    {
        "AbsEntry": 2323,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E29-1"
    },
    {
        "AbsEntry": 2324,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2E30-1"
    },
    {
        "AbsEntry": 2325,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F11-1"
    },
    {
        "AbsEntry": 2326,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F12-1"
    },
    {
        "AbsEntry": 2327,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F13-1"
    },
    {
        "AbsEntry": 2328,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F14-1"
    },
    {
        "AbsEntry": 2329,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F15-1"
    },
    {
        "AbsEntry": 2330,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F16-1"
    },
    {
        "AbsEntry": 2331,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F17-1"
    },
    {
        "AbsEntry": 2332,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F18-1"
    },
    {
        "AbsEntry": 2333,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F19-1"
    },
    {
        "AbsEntry": 2334,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F20-1"
    },
    {
        "AbsEntry": 2335,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F21-1"
    },
    {
        "AbsEntry": 2336,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F22-1"
    },
    {
        "AbsEntry": 2337,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F23-1"
    },
    {
        "AbsEntry": 2338,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F24-1"
    },
    {
        "AbsEntry": 2339,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F25-1"
    },
    {
        "AbsEntry": 2340,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F26-1"
    },
    {
        "AbsEntry": 2341,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F27-1"
    },
    {
        "AbsEntry": 2342,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F28-1"
    },
    {
        "AbsEntry": 2343,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F29-1"
    },
    {
        "AbsEntry": 2344,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2F30-1"
    },
    {
        "AbsEntry": 2345,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G01-1"
    },
    {
        "AbsEntry": 2346,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G02-1"
    },
    {
        "AbsEntry": 2347,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G03-1"
    },
    {
        "AbsEntry": 2348,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G04-1"
    },
    {
        "AbsEntry": 2349,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G05-1"
    },
    {
        "AbsEntry": 2350,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G06-1"
    },
    {
        "AbsEntry": 2351,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G07-1"
    },
    {
        "AbsEntry": 2352,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G08-1"
    },
    {
        "AbsEntry": 2353,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G09-1"
    },
    {
        "AbsEntry": 2354,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G10-1"
    },
    {
        "AbsEntry": 2355,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G11-1"
    },
    {
        "AbsEntry": 2356,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G12-1"
    },
    {
        "AbsEntry": 2357,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G13-1"
    },
    {
        "AbsEntry": 2358,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G14-1"
    },
    {
        "AbsEntry": 2359,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G15-1"
    },
    {
        "AbsEntry": 2360,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G16-1"
    },
    {
        "AbsEntry": 2361,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G17-1"
    },
    {
        "AbsEntry": 2362,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G18-1"
    },
    {
        "AbsEntry": 2363,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G19-1"
    },
    {
        "AbsEntry": 2364,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G20-1"
    },
    {
        "AbsEntry": 2365,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G21-1"
    },
    {
        "AbsEntry": 2366,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G22-1"
    },
    {
        "AbsEntry": 2367,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G23-1"
    },
    {
        "AbsEntry": 2368,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G24-1"
    },
    {
        "AbsEntry": 2369,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G25-1"
    },
    {
        "AbsEntry": 2370,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G26-1"
    },
    {
        "AbsEntry": 2371,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G27-1"
    },
    {
        "AbsEntry": 2372,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G28-1"
    },
    {
        "AbsEntry": 2373,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G29-1"
    },
    {
        "AbsEntry": 2374,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2G30-1"
    },
    {
        "AbsEntry": 2375,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2H01-1"
    },
    {
        "AbsEntry": 2376,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2H02-1"
    },
    {
        "AbsEntry": 2377,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2H03-1"
    },
    {
        "AbsEntry": 2378,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2H04-1"
    },
    {
        "AbsEntry": 2379,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2H05-1"
    },
    {
        "AbsEntry": 2380,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z01-1"
    },
    {
        "AbsEntry": 2381,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z01-2"
    },
    {
        "AbsEntry": 2382,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z02-1"
    },
    {
        "AbsEntry": 2383,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z02-2"
    },
    {
        "AbsEntry": 2384,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z03-1"
    },
    {
        "AbsEntry": 2385,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z03-2"
    },
    {
        "AbsEntry": 2386,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z04-1"
    },
    {
        "AbsEntry": 2387,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z04-2"
    },
    {
        "AbsEntry": 2388,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z05-1"
    },
    {
        "AbsEntry": 2389,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z05-2"
    },
    {
        "AbsEntry": 2390,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z06-1"
    },
    {
        "AbsEntry": 2391,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-2Z06-2"
    },
    {
        "AbsEntry": 2392,
        "Warehouse": "WCP",
        "BinCode": "WCP-0-CAR"
    },
    {
        "AbsEntry": 2393,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-0-59LOAD"
    },
    {
        "AbsEntry": 2394,
        "Warehouse": "WCP",
        "BinCode": "WCP-0-33LOAD"
    },
    {
        "AbsEntry": 2395,
        "Warehouse": "WCP",
        "BinCode": "WCP-0-59GMP"
    },
    {
        "AbsEntry": 2396,
        "Warehouse": "WCP",
        "BinCode": "WCP-0-59LOAD"
    },
    {
        "AbsEntry": 2397,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-0-33LOAD"
    },
    {
        "AbsEntry": 2406,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02212"
    },
    {
        "AbsEntry": 2407,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-0-59GMP"
    },
    {
        "AbsEntry": 2408,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-0-CAR"
    },
    {
        "AbsEntry": 2409,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02263"
    },
    {
        "AbsEntry": 2410,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02281"
    },
    {
        "AbsEntry": 2411,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B01-1"
    },
    {
        "AbsEntry": 2412,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B02-1"
    },
    {
        "AbsEntry": 2413,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B03-1"
    },
    {
        "AbsEntry": 2414,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B04-1"
    },
    {
        "AbsEntry": 2415,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B05-1"
    },
    {
        "AbsEntry": 2416,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B06-1"
    },
    {
        "AbsEntry": 2417,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B07-1"
    },
    {
        "AbsEntry": 2418,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B08-1"
    },
    {
        "AbsEntry": 2419,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B09-1"
    },
    {
        "AbsEntry": 2420,
        "Warehouse": "WCP",
        "BinCode": "WCP-2B10-1"
    },
    {
        "AbsEntry": 2421,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C01-1"
    },
    {
        "AbsEntry": 2422,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C02-1"
    },
    {
        "AbsEntry": 2423,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C03-1"
    },
    {
        "AbsEntry": 2424,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C04-1"
    },
    {
        "AbsEntry": 2425,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C05-1"
    },
    {
        "AbsEntry": 2426,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C06-1"
    },
    {
        "AbsEntry": 2427,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C07-1"
    },
    {
        "AbsEntry": 2428,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C08-1"
    },
    {
        "AbsEntry": 2429,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C09-1"
    },
    {
        "AbsEntry": 2430,
        "Warehouse": "WCP",
        "BinCode": "WCP-2C10-1"
    },
    {
        "AbsEntry": 2431,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D01-1"
    },
    {
        "AbsEntry": 2432,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D02-1"
    },
    {
        "AbsEntry": 2433,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D03-1"
    },
    {
        "AbsEntry": 2434,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D04-1"
    },
    {
        "AbsEntry": 2435,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D05-1"
    },
    {
        "AbsEntry": 2436,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D06-1"
    },
    {
        "AbsEntry": 2437,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D07-1"
    },
    {
        "AbsEntry": 2438,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D08-1"
    },
    {
        "AbsEntry": 2439,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D09-1"
    },
    {
        "AbsEntry": 2440,
        "Warehouse": "WCP",
        "BinCode": "WCP-2D10-1"
    },
    {
        "AbsEntry": 2441,
        "Warehouse": "WRV",
        "BinCode": "WRV-SYSTEM-BIN-LOCATION"
    },
    {
        "AbsEntry": 2442,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02308"
    },
    {
        "AbsEntry": 2443,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02072"
    },
    {
        "AbsEntry": 2444,
        "Warehouse": "WCP",
        "BinCode": "WCP-0-04LOAD"
    },
    {
        "AbsEntry": 2445,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-0-04LOAD"
    },
    {
        "AbsEntry": 2446,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A01-1"
    },
    {
        "AbsEntry": 2447,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A01-2"
    },
    {
        "AbsEntry": 2448,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A01-3"
    },
    {
        "AbsEntry": 2450,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A02-1"
    },
    {
        "AbsEntry": 2451,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A02-2"
    },
    {
        "AbsEntry": 2452,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A02-3"
    },
    {
        "AbsEntry": 2454,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A03-1"
    },
    {
        "AbsEntry": 2455,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A03-2"
    },
    {
        "AbsEntry": 2456,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A03-3"
    },
    {
        "AbsEntry": 2458,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A04-1"
    },
    {
        "AbsEntry": 2459,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A04-2"
    },
    {
        "AbsEntry": 2460,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A04-3"
    },
    {
        "AbsEntry": 2462,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A05-1"
    },
    {
        "AbsEntry": 2463,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A05-2"
    },
    {
        "AbsEntry": 2464,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A05-3"
    },
    {
        "AbsEntry": 2466,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A06-1"
    },
    {
        "AbsEntry": 2467,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A06-2"
    },
    {
        "AbsEntry": 2468,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A06-3"
    },
    {
        "AbsEntry": 2470,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A07-1"
    },
    {
        "AbsEntry": 2471,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A07-2"
    },
    {
        "AbsEntry": 2472,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A07-3"
    },
    {
        "AbsEntry": 2474,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A08-1"
    },
    {
        "AbsEntry": 2475,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A08-2"
    },
    {
        "AbsEntry": 2476,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A08-3"
    },
    {
        "AbsEntry": 2478,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A09-1"
    },
    {
        "AbsEntry": 2479,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A09-2"
    },
    {
        "AbsEntry": 2480,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A09-3"
    },
    {
        "AbsEntry": 2482,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A10-1"
    },
    {
        "AbsEntry": 2483,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A10-2"
    },
    {
        "AbsEntry": 2484,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A10-3"
    },
    {
        "AbsEntry": 2486,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A11-1"
    },
    {
        "AbsEntry": 2487,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A11-2"
    },
    {
        "AbsEntry": 2488,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A11-3"
    },
    {
        "AbsEntry": 2490,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A12-1"
    },
    {
        "AbsEntry": 2491,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A12-2"
    },
    {
        "AbsEntry": 2492,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A12-3"
    },
    {
        "AbsEntry": 2494,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A13-1"
    },
    {
        "AbsEntry": 2495,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A13-2"
    },
    {
        "AbsEntry": 2496,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A13-3"
    },
    {
        "AbsEntry": 2498,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A14-1"
    },
    {
        "AbsEntry": 2499,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A14-2"
    },
    {
        "AbsEntry": 2500,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A14-3"
    },
    {
        "AbsEntry": 2502,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A15-1"
    },
    {
        "AbsEntry": 2503,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A15-2"
    },
    {
        "AbsEntry": 2504,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A15-3"
    },
    {
        "AbsEntry": 2506,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A16-1"
    },
    {
        "AbsEntry": 2507,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A16-2"
    },
    {
        "AbsEntry": 2508,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A16-3"
    },
    {
        "AbsEntry": 2510,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A17-1"
    },
    {
        "AbsEntry": 2511,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A17-2"
    },
    {
        "AbsEntry": 2512,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A17-3"
    },
    {
        "AbsEntry": 2514,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A18-1"
    },
    {
        "AbsEntry": 2515,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A18-2"
    },
    {
        "AbsEntry": 2516,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A18-3"
    },
    {
        "AbsEntry": 2518,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A19-1"
    },
    {
        "AbsEntry": 2519,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A19-2"
    },
    {
        "AbsEntry": 2520,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A19-3"
    },
    {
        "AbsEntry": 2522,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A20-1"
    },
    {
        "AbsEntry": 2523,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A20-2"
    },
    {
        "AbsEntry": 2524,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A20-3"
    },
    {
        "AbsEntry": 2526,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A21-1"
    },
    {
        "AbsEntry": 2527,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A21-2"
    },
    {
        "AbsEntry": 2528,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A21-3"
    },
    {
        "AbsEntry": 2530,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A22-1"
    },
    {
        "AbsEntry": 2531,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A22-2"
    },
    {
        "AbsEntry": 2532,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A22-3"
    },
    {
        "AbsEntry": 2534,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A23-1"
    },
    {
        "AbsEntry": 2535,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A23-2"
    },
    {
        "AbsEntry": 2536,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A23-3"
    },
    {
        "AbsEntry": 2538,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A24-1"
    },
    {
        "AbsEntry": 2539,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A24-2"
    },
    {
        "AbsEntry": 2540,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A24-3"
    },
    {
        "AbsEntry": 2542,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A25-1"
    },
    {
        "AbsEntry": 2543,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A25-2"
    },
    {
        "AbsEntry": 2544,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A25-3"
    },
    {
        "AbsEntry": 2546,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A26-1"
    },
    {
        "AbsEntry": 2547,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A26-2"
    },
    {
        "AbsEntry": 2548,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A26-3"
    },
    {
        "AbsEntry": 2550,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A27-1"
    },
    {
        "AbsEntry": 2551,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A27-2"
    },
    {
        "AbsEntry": 2552,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A27-3"
    },
    {
        "AbsEntry": 2554,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A28-1"
    },
    {
        "AbsEntry": 2555,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A28-2"
    },
    {
        "AbsEntry": 2556,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A28-3"
    },
    {
        "AbsEntry": 2558,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A29-1"
    },
    {
        "AbsEntry": 2559,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A29-2"
    },
    {
        "AbsEntry": 2560,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A29-3"
    },
    {
        "AbsEntry": 2562,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A30-1"
    },
    {
        "AbsEntry": 2563,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A30-2"
    },
    {
        "AbsEntry": 2564,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A30-3"
    },
    {
        "AbsEntry": 2566,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A31-1"
    },
    {
        "AbsEntry": 2567,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A31-2"
    },
    {
        "AbsEntry": 2568,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A31-3"
    },
    {
        "AbsEntry": 2570,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A32-1"
    },
    {
        "AbsEntry": 2571,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A32-2"
    },
    {
        "AbsEntry": 2572,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A32-3"
    },
    {
        "AbsEntry": 2574,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A33-1"
    },
    {
        "AbsEntry": 2575,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A33-2"
    },
    {
        "AbsEntry": 2576,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A33-3"
    },
    {
        "AbsEntry": 2578,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A34-1"
    },
    {
        "AbsEntry": 2579,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A34-2"
    },
    {
        "AbsEntry": 2580,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A34-3"
    },
    {
        "AbsEntry": 2582,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A35-1"
    },
    {
        "AbsEntry": 2583,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A35-2"
    },
    {
        "AbsEntry": 2584,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A35-3"
    },
    {
        "AbsEntry": 2586,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A36-1"
    },
    {
        "AbsEntry": 2587,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A36-2"
    },
    {
        "AbsEntry": 2588,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A36-3"
    },
    {
        "AbsEntry": 2590,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A37-1"
    },
    {
        "AbsEntry": 2591,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A37-2"
    },
    {
        "AbsEntry": 2592,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A37-3"
    },
    {
        "AbsEntry": 2594,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A38-1"
    },
    {
        "AbsEntry": 2595,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A38-2"
    },
    {
        "AbsEntry": 2596,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A38-3"
    },
    {
        "AbsEntry": 2598,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A39-1"
    },
    {
        "AbsEntry": 2599,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A39-2"
    },
    {
        "AbsEntry": 2600,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A39-3"
    },
    {
        "AbsEntry": 2602,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A40-1"
    },
    {
        "AbsEntry": 2603,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A40-2"
    },
    {
        "AbsEntry": 2604,
        "Warehouse": "WCP",
        "BinCode": "WCP-3A40-3"
    },
    {
        "AbsEntry": 2606,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B01-1"
    },
    {
        "AbsEntry": 2607,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B01-2"
    },
    {
        "AbsEntry": 2608,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B01-3"
    },
    {
        "AbsEntry": 2610,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B02-1"
    },
    {
        "AbsEntry": 2611,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B02-2"
    },
    {
        "AbsEntry": 2612,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B02-3"
    },
    {
        "AbsEntry": 2614,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B03-1"
    },
    {
        "AbsEntry": 2615,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B03-2"
    },
    {
        "AbsEntry": 2616,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B03-3"
    },
    {
        "AbsEntry": 2618,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B04-1"
    },
    {
        "AbsEntry": 2619,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B04-2"
    },
    {
        "AbsEntry": 2620,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B04-3"
    },
    {
        "AbsEntry": 2622,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B05-1"
    },
    {
        "AbsEntry": 2623,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B05-2"
    },
    {
        "AbsEntry": 2624,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B05-3"
    },
    {
        "AbsEntry": 2626,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B06-1"
    },
    {
        "AbsEntry": 2627,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B06-2"
    },
    {
        "AbsEntry": 2628,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B06-3"
    },
    {
        "AbsEntry": 2630,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B07-1"
    },
    {
        "AbsEntry": 2631,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B07-2"
    },
    {
        "AbsEntry": 2632,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B07-3"
    },
    {
        "AbsEntry": 2634,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B08-1"
    },
    {
        "AbsEntry": 2635,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B08-2"
    },
    {
        "AbsEntry": 2636,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B08-3"
    },
    {
        "AbsEntry": 2638,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B09-1"
    },
    {
        "AbsEntry": 2639,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B09-2"
    },
    {
        "AbsEntry": 2640,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B09-3"
    },
    {
        "AbsEntry": 2642,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B10-1"
    },
    {
        "AbsEntry": 2643,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B10-2"
    },
    {
        "AbsEntry": 2644,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B10-3"
    },
    {
        "AbsEntry": 2646,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B11-1"
    },
    {
        "AbsEntry": 2647,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B11-2"
    },
    {
        "AbsEntry": 2648,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B11-3"
    },
    {
        "AbsEntry": 2650,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B12-1"
    },
    {
        "AbsEntry": 2651,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B12-2"
    },
    {
        "AbsEntry": 2652,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B12-3"
    },
    {
        "AbsEntry": 2654,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B13-1"
    },
    {
        "AbsEntry": 2655,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B13-2"
    },
    {
        "AbsEntry": 2656,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B13-3"
    },
    {
        "AbsEntry": 2658,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B14-1"
    },
    {
        "AbsEntry": 2659,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B14-2"
    },
    {
        "AbsEntry": 2660,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B14-3"
    },
    {
        "AbsEntry": 2662,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B15-1"
    },
    {
        "AbsEntry": 2663,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B15-2"
    },
    {
        "AbsEntry": 2664,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B15-3"
    },
    {
        "AbsEntry": 2666,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B16-1"
    },
    {
        "AbsEntry": 2667,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B16-2"
    },
    {
        "AbsEntry": 2668,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B16-3"
    },
    {
        "AbsEntry": 2670,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B17-1"
    },
    {
        "AbsEntry": 2671,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B17-2"
    },
    {
        "AbsEntry": 2672,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B17-3"
    },
    {
        "AbsEntry": 2674,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B18-1"
    },
    {
        "AbsEntry": 2675,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B18-2"
    },
    {
        "AbsEntry": 2676,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B18-3"
    },
    {
        "AbsEntry": 2678,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B19-1"
    },
    {
        "AbsEntry": 2679,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B19-2"
    },
    {
        "AbsEntry": 2680,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B19-3"
    },
    {
        "AbsEntry": 2682,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B20-1"
    },
    {
        "AbsEntry": 2683,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B20-2"
    },
    {
        "AbsEntry": 2684,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B20-3"
    },
    {
        "AbsEntry": 2686,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B21-1"
    },
    {
        "AbsEntry": 2687,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B21-2"
    },
    {
        "AbsEntry": 2688,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B21-3"
    },
    {
        "AbsEntry": 2690,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B22-1"
    },
    {
        "AbsEntry": 2691,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B22-2"
    },
    {
        "AbsEntry": 2692,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B22-3"
    },
    {
        "AbsEntry": 2694,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B23-1"
    },
    {
        "AbsEntry": 2695,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B23-2"
    },
    {
        "AbsEntry": 2696,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B23-3"
    },
    {
        "AbsEntry": 2698,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B24-1"
    },
    {
        "AbsEntry": 2699,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B24-2"
    },
    {
        "AbsEntry": 2700,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B24-3"
    },
    {
        "AbsEntry": 2702,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B25-1"
    },
    {
        "AbsEntry": 2703,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B25-2"
    },
    {
        "AbsEntry": 2704,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B25-3"
    },
    {
        "AbsEntry": 2706,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B26-1"
    },
    {
        "AbsEntry": 2707,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B26-2"
    },
    {
        "AbsEntry": 2708,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B26-3"
    },
    {
        "AbsEntry": 2710,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B27-1"
    },
    {
        "AbsEntry": 2711,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B27-2"
    },
    {
        "AbsEntry": 2712,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B27-3"
    },
    {
        "AbsEntry": 2714,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B28-1"
    },
    {
        "AbsEntry": 2715,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B28-2"
    },
    {
        "AbsEntry": 2716,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B28-3"
    },
    {
        "AbsEntry": 2718,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B29-1"
    },
    {
        "AbsEntry": 2719,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B29-2"
    },
    {
        "AbsEntry": 2720,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B29-3"
    },
    {
        "AbsEntry": 2722,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B30-1"
    },
    {
        "AbsEntry": 2723,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B30-2"
    },
    {
        "AbsEntry": 2724,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B30-3"
    },
    {
        "AbsEntry": 2726,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B31-1"
    },
    {
        "AbsEntry": 2727,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B31-2"
    },
    {
        "AbsEntry": 2728,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B31-3"
    },
    {
        "AbsEntry": 2730,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B32-1"
    },
    {
        "AbsEntry": 2731,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B32-2"
    },
    {
        "AbsEntry": 2732,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B32-3"
    },
    {
        "AbsEntry": 2734,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B33-1"
    },
    {
        "AbsEntry": 2735,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B33-2"
    },
    {
        "AbsEntry": 2736,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B33-3"
    },
    {
        "AbsEntry": 2738,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B34-1"
    },
    {
        "AbsEntry": 2739,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B34-2"
    },
    {
        "AbsEntry": 2740,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B34-3"
    },
    {
        "AbsEntry": 2742,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B35-1"
    },
    {
        "AbsEntry": 2743,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B35-2"
    },
    {
        "AbsEntry": 2744,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B35-3"
    },
    {
        "AbsEntry": 2746,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B36-1"
    },
    {
        "AbsEntry": 2747,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B36-2"
    },
    {
        "AbsEntry": 2748,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B36-3"
    },
    {
        "AbsEntry": 2750,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B37-1"
    },
    {
        "AbsEntry": 2751,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B37-2"
    },
    {
        "AbsEntry": 2752,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B37-3"
    },
    {
        "AbsEntry": 2754,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B38-1"
    },
    {
        "AbsEntry": 2755,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B38-2"
    },
    {
        "AbsEntry": 2756,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B38-3"
    },
    {
        "AbsEntry": 2758,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B39-1"
    },
    {
        "AbsEntry": 2759,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B39-2"
    },
    {
        "AbsEntry": 2760,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B39-3"
    },
    {
        "AbsEntry": 2762,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B40-1"
    },
    {
        "AbsEntry": 2763,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B40-2"
    },
    {
        "AbsEntry": 2764,
        "Warehouse": "WCP",
        "BinCode": "WCP-3B40-3"
    },
    {
        "AbsEntry": 2766,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C01-1"
    },
    {
        "AbsEntry": 2767,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C01-2"
    },
    {
        "AbsEntry": 2768,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C01-3"
    },
    {
        "AbsEntry": 2770,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C02-1"
    },
    {
        "AbsEntry": 2771,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C02-2"
    },
    {
        "AbsEntry": 2772,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C02-3"
    },
    {
        "AbsEntry": 2774,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C03-1"
    },
    {
        "AbsEntry": 2775,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C03-2"
    },
    {
        "AbsEntry": 2776,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C03-3"
    },
    {
        "AbsEntry": 2778,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C04-1"
    },
    {
        "AbsEntry": 2779,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C04-2"
    },
    {
        "AbsEntry": 2780,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C04-3"
    },
    {
        "AbsEntry": 2782,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C05-1"
    },
    {
        "AbsEntry": 2783,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C05-2"
    },
    {
        "AbsEntry": 2784,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C05-3"
    },
    {
        "AbsEntry": 2786,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C06-1"
    },
    {
        "AbsEntry": 2787,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C06-2"
    },
    {
        "AbsEntry": 2788,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C06-3"
    },
    {
        "AbsEntry": 2790,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C07-1"
    },
    {
        "AbsEntry": 2791,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C07-2"
    },
    {
        "AbsEntry": 2792,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C07-3"
    },
    {
        "AbsEntry": 2794,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C08-1"
    },
    {
        "AbsEntry": 2795,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C08-2"
    },
    {
        "AbsEntry": 2796,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C08-3"
    },
    {
        "AbsEntry": 2798,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C09-1"
    },
    {
        "AbsEntry": 2799,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C09-2"
    },
    {
        "AbsEntry": 2800,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C09-3"
    },
    {
        "AbsEntry": 2802,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C10-1"
    },
    {
        "AbsEntry": 2803,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C10-2"
    },
    {
        "AbsEntry": 2804,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C10-3"
    },
    {
        "AbsEntry": 2806,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C11-1"
    },
    {
        "AbsEntry": 2807,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C11-2"
    },
    {
        "AbsEntry": 2808,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C11-3"
    },
    {
        "AbsEntry": 2810,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C12-1"
    },
    {
        "AbsEntry": 2811,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C12-2"
    },
    {
        "AbsEntry": 2812,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C12-3"
    },
    {
        "AbsEntry": 2814,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C13-1"
    },
    {
        "AbsEntry": 2815,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C13-2"
    },
    {
        "AbsEntry": 2816,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C13-3"
    },
    {
        "AbsEntry": 2818,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C14-1"
    },
    {
        "AbsEntry": 2819,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C14-2"
    },
    {
        "AbsEntry": 2820,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C14-3"
    },
    {
        "AbsEntry": 2822,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C15-1"
    },
    {
        "AbsEntry": 2823,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C15-2"
    },
    {
        "AbsEntry": 2824,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C15-3"
    },
    {
        "AbsEntry": 2826,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C16-1"
    },
    {
        "AbsEntry": 2827,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C16-2"
    },
    {
        "AbsEntry": 2828,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C16-3"
    },
    {
        "AbsEntry": 2830,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C17-1"
    },
    {
        "AbsEntry": 2831,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C17-2"
    },
    {
        "AbsEntry": 2832,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C17-3"
    },
    {
        "AbsEntry": 2834,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C18-1"
    },
    {
        "AbsEntry": 2835,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C18-2"
    },
    {
        "AbsEntry": 2836,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C18-3"
    },
    {
        "AbsEntry": 2838,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C19-1"
    },
    {
        "AbsEntry": 2839,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C19-2"
    },
    {
        "AbsEntry": 2840,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C19-3"
    },
    {
        "AbsEntry": 2842,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C20-1"
    },
    {
        "AbsEntry": 2843,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C20-2"
    },
    {
        "AbsEntry": 2844,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C20-3"
    },
    {
        "AbsEntry": 2846,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C21-1"
    },
    {
        "AbsEntry": 2847,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C21-2"
    },
    {
        "AbsEntry": 2848,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C21-3"
    },
    {
        "AbsEntry": 2850,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C22-1"
    },
    {
        "AbsEntry": 2851,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C22-2"
    },
    {
        "AbsEntry": 2852,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C22-3"
    },
    {
        "AbsEntry": 2854,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C23-1"
    },
    {
        "AbsEntry": 2855,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C23-2"
    },
    {
        "AbsEntry": 2856,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C23-3"
    },
    {
        "AbsEntry": 2858,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C24-1"
    },
    {
        "AbsEntry": 2859,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C24-2"
    },
    {
        "AbsEntry": 2860,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C24-3"
    },
    {
        "AbsEntry": 2862,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C25-1"
    },
    {
        "AbsEntry": 2863,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C25-2"
    },
    {
        "AbsEntry": 2864,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C25-3"
    },
    {
        "AbsEntry": 2866,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C26-1"
    },
    {
        "AbsEntry": 2867,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C26-2"
    },
    {
        "AbsEntry": 2868,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C26-3"
    },
    {
        "AbsEntry": 2870,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C27-1"
    },
    {
        "AbsEntry": 2871,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C27-2"
    },
    {
        "AbsEntry": 2872,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C27-3"
    },
    {
        "AbsEntry": 2874,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C28-1"
    },
    {
        "AbsEntry": 2875,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C28-2"
    },
    {
        "AbsEntry": 2876,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C28-3"
    },
    {
        "AbsEntry": 2878,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C29-1"
    },
    {
        "AbsEntry": 2879,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C29-2"
    },
    {
        "AbsEntry": 2880,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C29-3"
    },
    {
        "AbsEntry": 2882,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C30-1"
    },
    {
        "AbsEntry": 2883,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C30-2"
    },
    {
        "AbsEntry": 2884,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C30-3"
    },
    {
        "AbsEntry": 2886,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C31-1"
    },
    {
        "AbsEntry": 2887,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C31-2"
    },
    {
        "AbsEntry": 2888,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C31-3"
    },
    {
        "AbsEntry": 2890,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C32-1"
    },
    {
        "AbsEntry": 2891,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C32-2"
    },
    {
        "AbsEntry": 2892,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C32-3"
    },
    {
        "AbsEntry": 2894,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C33-1"
    },
    {
        "AbsEntry": 2895,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C33-2"
    },
    {
        "AbsEntry": 2896,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C33-3"
    },
    {
        "AbsEntry": 2898,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C34-1"
    },
    {
        "AbsEntry": 2899,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C34-2"
    },
    {
        "AbsEntry": 2900,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C34-3"
    },
    {
        "AbsEntry": 2902,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C35-1"
    },
    {
        "AbsEntry": 2903,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C35-2"
    },
    {
        "AbsEntry": 2904,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C35-3"
    },
    {
        "AbsEntry": 2906,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C36-1"
    },
    {
        "AbsEntry": 2907,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C36-2"
    },
    {
        "AbsEntry": 2908,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C36-3"
    },
    {
        "AbsEntry": 2910,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C37-1"
    },
    {
        "AbsEntry": 2911,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C37-2"
    },
    {
        "AbsEntry": 2912,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C37-3"
    },
    {
        "AbsEntry": 2914,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C38-1"
    },
    {
        "AbsEntry": 2915,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C38-2"
    },
    {
        "AbsEntry": 2916,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C38-3"
    },
    {
        "AbsEntry": 2918,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C39-1"
    },
    {
        "AbsEntry": 2919,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C39-2"
    },
    {
        "AbsEntry": 2920,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C39-3"
    },
    {
        "AbsEntry": 2922,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C40-1"
    },
    {
        "AbsEntry": 2923,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C40-2"
    },
    {
        "AbsEntry": 2924,
        "Warehouse": "WCP",
        "BinCode": "WCP-3C40-3"
    },
    {
        "AbsEntry": 2926,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D01-1"
    },
    {
        "AbsEntry": 2927,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D01-2"
    },
    {
        "AbsEntry": 2928,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D01-3"
    },
    {
        "AbsEntry": 2930,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D02-1"
    },
    {
        "AbsEntry": 2931,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D02-2"
    },
    {
        "AbsEntry": 2932,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D02-3"
    },
    {
        "AbsEntry": 2934,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D03-1"
    },
    {
        "AbsEntry": 2935,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D03-2"
    },
    {
        "AbsEntry": 2936,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D03-3"
    },
    {
        "AbsEntry": 2938,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D04-1"
    },
    {
        "AbsEntry": 2939,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D04-2"
    },
    {
        "AbsEntry": 2940,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D04-3"
    },
    {
        "AbsEntry": 2942,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D05-1"
    },
    {
        "AbsEntry": 2943,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D05-2"
    },
    {
        "AbsEntry": 2944,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D05-3"
    },
    {
        "AbsEntry": 2946,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D06-1"
    },
    {
        "AbsEntry": 2947,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D06-2"
    },
    {
        "AbsEntry": 2948,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D06-3"
    },
    {
        "AbsEntry": 2950,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D07-1"
    },
    {
        "AbsEntry": 2951,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D07-2"
    },
    {
        "AbsEntry": 2952,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D07-3"
    },
    {
        "AbsEntry": 2954,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D08-1"
    },
    {
        "AbsEntry": 2955,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D08-2"
    },
    {
        "AbsEntry": 2956,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D08-3"
    },
    {
        "AbsEntry": 2958,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D09-1"
    },
    {
        "AbsEntry": 2959,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D09-2"
    },
    {
        "AbsEntry": 2960,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D09-3"
    },
    {
        "AbsEntry": 2962,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D10-1"
    },
    {
        "AbsEntry": 2963,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D10-2"
    },
    {
        "AbsEntry": 2964,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D10-3"
    },
    {
        "AbsEntry": 2966,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D11-1"
    },
    {
        "AbsEntry": 2967,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D11-2"
    },
    {
        "AbsEntry": 2968,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D11-3"
    },
    {
        "AbsEntry": 2970,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D12-1"
    },
    {
        "AbsEntry": 2971,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D12-2"
    },
    {
        "AbsEntry": 2972,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D12-3"
    },
    {
        "AbsEntry": 2974,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D13-1"
    },
    {
        "AbsEntry": 2975,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D13-2"
    },
    {
        "AbsEntry": 2976,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D13-3"
    },
    {
        "AbsEntry": 2978,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D14-1"
    },
    {
        "AbsEntry": 2979,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D14-2"
    },
    {
        "AbsEntry": 2980,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D14-3"
    },
    {
        "AbsEntry": 2982,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D15-1"
    },
    {
        "AbsEntry": 2983,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D15-2"
    },
    {
        "AbsEntry": 2984,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D15-3"
    },
    {
        "AbsEntry": 2986,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D16-1"
    },
    {
        "AbsEntry": 2987,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D16-2"
    },
    {
        "AbsEntry": 2988,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D16-3"
    },
    {
        "AbsEntry": 2990,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D17-1"
    },
    {
        "AbsEntry": 2991,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D17-2"
    },
    {
        "AbsEntry": 2992,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D17-3"
    },
    {
        "AbsEntry": 2994,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D18-1"
    },
    {
        "AbsEntry": 2995,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D18-2"
    },
    {
        "AbsEntry": 2996,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D18-3"
    },
    {
        "AbsEntry": 2998,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D19-1"
    },
    {
        "AbsEntry": 2999,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D19-2"
    },
    {
        "AbsEntry": 3000,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D19-3"
    },
    {
        "AbsEntry": 3002,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D20-1"
    },
    {
        "AbsEntry": 3003,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D20-2"
    },
    {
        "AbsEntry": 3004,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D20-3"
    },
    {
        "AbsEntry": 3006,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D21-1"
    },
    {
        "AbsEntry": 3007,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D21-2"
    },
    {
        "AbsEntry": 3008,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D21-3"
    },
    {
        "AbsEntry": 3010,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D22-1"
    },
    {
        "AbsEntry": 3011,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D22-2"
    },
    {
        "AbsEntry": 3012,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D22-3"
    },
    {
        "AbsEntry": 3014,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D23-1"
    },
    {
        "AbsEntry": 3015,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D23-2"
    },
    {
        "AbsEntry": 3016,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D23-3"
    },
    {
        "AbsEntry": 3018,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D24-1"
    },
    {
        "AbsEntry": 3019,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D24-2"
    },
    {
        "AbsEntry": 3020,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D24-3"
    },
    {
        "AbsEntry": 3022,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D25-1"
    },
    {
        "AbsEntry": 3023,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D25-2"
    },
    {
        "AbsEntry": 3024,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D25-3"
    },
    {
        "AbsEntry": 3026,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D26-1"
    },
    {
        "AbsEntry": 3027,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D26-2"
    },
    {
        "AbsEntry": 3028,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D26-3"
    },
    {
        "AbsEntry": 3030,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D27-1"
    },
    {
        "AbsEntry": 3031,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D27-2"
    },
    {
        "AbsEntry": 3032,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D27-3"
    },
    {
        "AbsEntry": 3034,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D28-1"
    },
    {
        "AbsEntry": 3035,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D28-2"
    },
    {
        "AbsEntry": 3036,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D28-3"
    },
    {
        "AbsEntry": 3038,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D29-1"
    },
    {
        "AbsEntry": 3039,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D29-2"
    },
    {
        "AbsEntry": 3040,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D29-3"
    },
    {
        "AbsEntry": 3042,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D30-1"
    },
    {
        "AbsEntry": 3043,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D30-2"
    },
    {
        "AbsEntry": 3044,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D30-3"
    },
    {
        "AbsEntry": 3046,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D31-1"
    },
    {
        "AbsEntry": 3047,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D31-2"
    },
    {
        "AbsEntry": 3048,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D31-3"
    },
    {
        "AbsEntry": 3050,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D32-1"
    },
    {
        "AbsEntry": 3051,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D32-2"
    },
    {
        "AbsEntry": 3052,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D32-3"
    },
    {
        "AbsEntry": 3054,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D33-1"
    },
    {
        "AbsEntry": 3055,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D33-2"
    },
    {
        "AbsEntry": 3056,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D33-3"
    },
    {
        "AbsEntry": 3058,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D34-1"
    },
    {
        "AbsEntry": 3059,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D34-2"
    },
    {
        "AbsEntry": 3060,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D34-3"
    },
    {
        "AbsEntry": 3062,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D35-1"
    },
    {
        "AbsEntry": 3063,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D35-2"
    },
    {
        "AbsEntry": 3064,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D35-3"
    },
    {
        "AbsEntry": 3066,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D36-1"
    },
    {
        "AbsEntry": 3067,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D36-2"
    },
    {
        "AbsEntry": 3068,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D36-3"
    },
    {
        "AbsEntry": 3070,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D37-1"
    },
    {
        "AbsEntry": 3071,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D37-2"
    },
    {
        "AbsEntry": 3072,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D37-3"
    },
    {
        "AbsEntry": 3074,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D38-1"
    },
    {
        "AbsEntry": 3075,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D38-2"
    },
    {
        "AbsEntry": 3076,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D38-3"
    },
    {
        "AbsEntry": 3078,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D39-1"
    },
    {
        "AbsEntry": 3079,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D39-2"
    },
    {
        "AbsEntry": 3080,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D39-3"
    },
    {
        "AbsEntry": 3082,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D40-1"
    },
    {
        "AbsEntry": 3083,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D40-2"
    },
    {
        "AbsEntry": 3084,
        "Warehouse": "WCP",
        "BinCode": "WCP-3D40-3"
    },
    {
        "AbsEntry": 3086,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E01-1"
    },
    {
        "AbsEntry": 3087,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E01-2"
    },
    {
        "AbsEntry": 3088,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E01-3"
    },
    {
        "AbsEntry": 3090,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E02-1"
    },
    {
        "AbsEntry": 3091,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E02-2"
    },
    {
        "AbsEntry": 3092,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E02-3"
    },
    {
        "AbsEntry": 3094,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E03-1"
    },
    {
        "AbsEntry": 3095,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E03-2"
    },
    {
        "AbsEntry": 3096,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E03-3"
    },
    {
        "AbsEntry": 3098,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E04-1"
    },
    {
        "AbsEntry": 3099,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E04-2"
    },
    {
        "AbsEntry": 3100,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E04-3"
    },
    {
        "AbsEntry": 3102,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E05-1"
    },
    {
        "AbsEntry": 3103,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E05-2"
    },
    {
        "AbsEntry": 3104,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E05-3"
    },
    {
        "AbsEntry": 3106,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E06-1"
    },
    {
        "AbsEntry": 3107,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E06-2"
    },
    {
        "AbsEntry": 3108,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E06-3"
    },
    {
        "AbsEntry": 3110,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E07-1"
    },
    {
        "AbsEntry": 3111,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E07-2"
    },
    {
        "AbsEntry": 3112,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E07-3"
    },
    {
        "AbsEntry": 3114,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E08-1"
    },
    {
        "AbsEntry": 3115,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E08-2"
    },
    {
        "AbsEntry": 3116,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E08-3"
    },
    {
        "AbsEntry": 3118,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E09-1"
    },
    {
        "AbsEntry": 3119,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E09-2"
    },
    {
        "AbsEntry": 3120,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E09-3"
    },
    {
        "AbsEntry": 3122,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E10-1"
    },
    {
        "AbsEntry": 3123,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E10-2"
    },
    {
        "AbsEntry": 3124,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E10-3"
    },
    {
        "AbsEntry": 3126,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E11-1"
    },
    {
        "AbsEntry": 3127,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E11-2"
    },
    {
        "AbsEntry": 3128,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E11-3"
    },
    {
        "AbsEntry": 3130,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E12-1"
    },
    {
        "AbsEntry": 3131,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E12-2"
    },
    {
        "AbsEntry": 3132,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E12-3"
    },
    {
        "AbsEntry": 3134,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E13-1"
    },
    {
        "AbsEntry": 3135,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E13-2"
    },
    {
        "AbsEntry": 3136,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E13-3"
    },
    {
        "AbsEntry": 3138,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E14-1"
    },
    {
        "AbsEntry": 3139,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E14-2"
    },
    {
        "AbsEntry": 3140,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E14-3"
    },
    {
        "AbsEntry": 3142,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E15-1"
    },
    {
        "AbsEntry": 3143,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E15-2"
    },
    {
        "AbsEntry": 3144,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E15-3"
    },
    {
        "AbsEntry": 3146,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E16-1"
    },
    {
        "AbsEntry": 3147,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E16-2"
    },
    {
        "AbsEntry": 3148,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E16-3"
    },
    {
        "AbsEntry": 3150,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E17-1"
    },
    {
        "AbsEntry": 3151,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E17-2"
    },
    {
        "AbsEntry": 3152,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E17-3"
    },
    {
        "AbsEntry": 3154,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E18-1"
    },
    {
        "AbsEntry": 3155,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E18-2"
    },
    {
        "AbsEntry": 3156,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E18-3"
    },
    {
        "AbsEntry": 3158,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E19-1"
    },
    {
        "AbsEntry": 3159,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E19-2"
    },
    {
        "AbsEntry": 3160,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E19-3"
    },
    {
        "AbsEntry": 3162,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E20-1"
    },
    {
        "AbsEntry": 3163,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E20-2"
    },
    {
        "AbsEntry": 3164,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E20-3"
    },
    {
        "AbsEntry": 3166,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E21-1"
    },
    {
        "AbsEntry": 3167,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E21-2"
    },
    {
        "AbsEntry": 3168,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E21-3"
    },
    {
        "AbsEntry": 3170,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E22-1"
    },
    {
        "AbsEntry": 3171,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E22-2"
    },
    {
        "AbsEntry": 3172,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E22-3"
    },
    {
        "AbsEntry": 3174,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E23-1"
    },
    {
        "AbsEntry": 3175,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E23-2"
    },
    {
        "AbsEntry": 3176,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E23-3"
    },
    {
        "AbsEntry": 3178,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E24-1"
    },
    {
        "AbsEntry": 3179,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E24-2"
    },
    {
        "AbsEntry": 3180,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E24-3"
    },
    {
        "AbsEntry": 3182,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E25-1"
    },
    {
        "AbsEntry": 3183,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E25-2"
    },
    {
        "AbsEntry": 3184,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E25-3"
    },
    {
        "AbsEntry": 3186,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E26-1"
    },
    {
        "AbsEntry": 3187,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E26-2"
    },
    {
        "AbsEntry": 3188,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E26-3"
    },
    {
        "AbsEntry": 3190,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E27-1"
    },
    {
        "AbsEntry": 3191,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E27-2"
    },
    {
        "AbsEntry": 3192,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E27-3"
    },
    {
        "AbsEntry": 3194,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E28-1"
    },
    {
        "AbsEntry": 3195,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E28-2"
    },
    {
        "AbsEntry": 3196,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E28-3"
    },
    {
        "AbsEntry": 3198,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E29-1"
    },
    {
        "AbsEntry": 3199,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E29-2"
    },
    {
        "AbsEntry": 3200,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E29-3"
    },
    {
        "AbsEntry": 3202,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E30-1"
    },
    {
        "AbsEntry": 3203,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E30-2"
    },
    {
        "AbsEntry": 3204,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E30-3"
    },
    {
        "AbsEntry": 3206,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E31-1"
    },
    {
        "AbsEntry": 3207,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E31-2"
    },
    {
        "AbsEntry": 3208,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E31-3"
    },
    {
        "AbsEntry": 3210,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E32-1"
    },
    {
        "AbsEntry": 3211,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E32-2"
    },
    {
        "AbsEntry": 3212,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E32-3"
    },
    {
        "AbsEntry": 3214,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E33-1"
    },
    {
        "AbsEntry": 3215,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E33-2"
    },
    {
        "AbsEntry": 3216,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E33-3"
    },
    {
        "AbsEntry": 3218,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E34-1"
    },
    {
        "AbsEntry": 3219,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E34-2"
    },
    {
        "AbsEntry": 3220,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E34-3"
    },
    {
        "AbsEntry": 3222,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E35-1"
    },
    {
        "AbsEntry": 3223,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E35-2"
    },
    {
        "AbsEntry": 3224,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E35-3"
    },
    {
        "AbsEntry": 3226,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E36-1"
    },
    {
        "AbsEntry": 3227,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E36-2"
    },
    {
        "AbsEntry": 3228,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E36-3"
    },
    {
        "AbsEntry": 3230,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E37-1"
    },
    {
        "AbsEntry": 3231,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E37-2"
    },
    {
        "AbsEntry": 3232,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E37-3"
    },
    {
        "AbsEntry": 3234,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E38-1"
    },
    {
        "AbsEntry": 3235,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E38-2"
    },
    {
        "AbsEntry": 3236,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E38-3"
    },
    {
        "AbsEntry": 3238,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E39-1"
    },
    {
        "AbsEntry": 3239,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E39-2"
    },
    {
        "AbsEntry": 3240,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E39-3"
    },
    {
        "AbsEntry": 3242,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E40-1"
    },
    {
        "AbsEntry": 3243,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E40-2"
    },
    {
        "AbsEntry": 3244,
        "Warehouse": "WCP",
        "BinCode": "WCP-3E40-3"
    },
    {
        "AbsEntry": 3246,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F01-1"
    },
    {
        "AbsEntry": 3247,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F01-2"
    },
    {
        "AbsEntry": 3248,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F01-3"
    },
    {
        "AbsEntry": 3250,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F02-1"
    },
    {
        "AbsEntry": 3251,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F02-2"
    },
    {
        "AbsEntry": 3252,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F02-3"
    },
    {
        "AbsEntry": 3254,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F03-1"
    },
    {
        "AbsEntry": 3255,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F03-2"
    },
    {
        "AbsEntry": 3256,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F03-3"
    },
    {
        "AbsEntry": 3258,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F04-1"
    },
    {
        "AbsEntry": 3259,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F04-2"
    },
    {
        "AbsEntry": 3260,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F04-3"
    },
    {
        "AbsEntry": 3262,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F05-1"
    },
    {
        "AbsEntry": 3263,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F05-2"
    },
    {
        "AbsEntry": 3264,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F05-3"
    },
    {
        "AbsEntry": 3266,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F06-1"
    },
    {
        "AbsEntry": 3267,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F06-2"
    },
    {
        "AbsEntry": 3268,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F06-3"
    },
    {
        "AbsEntry": 3270,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F07-1"
    },
    {
        "AbsEntry": 3271,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F07-2"
    },
    {
        "AbsEntry": 3272,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F07-3"
    },
    {
        "AbsEntry": 3274,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F08-1"
    },
    {
        "AbsEntry": 3275,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F08-2"
    },
    {
        "AbsEntry": 3276,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F08-3"
    },
    {
        "AbsEntry": 3278,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F09-1"
    },
    {
        "AbsEntry": 3279,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F09-2"
    },
    {
        "AbsEntry": 3280,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F09-3"
    },
    {
        "AbsEntry": 3282,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F10-1"
    },
    {
        "AbsEntry": 3283,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F10-2"
    },
    {
        "AbsEntry": 3284,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F10-3"
    },
    {
        "AbsEntry": 3286,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F11-1"
    },
    {
        "AbsEntry": 3287,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F11-2"
    },
    {
        "AbsEntry": 3288,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F11-3"
    },
    {
        "AbsEntry": 3290,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F12-1"
    },
    {
        "AbsEntry": 3291,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F12-2"
    },
    {
        "AbsEntry": 3292,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F12-3"
    },
    {
        "AbsEntry": 3294,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F13-1"
    },
    {
        "AbsEntry": 3295,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F13-2"
    },
    {
        "AbsEntry": 3296,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F13-3"
    },
    {
        "AbsEntry": 3298,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F14-1"
    },
    {
        "AbsEntry": 3299,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F14-2"
    },
    {
        "AbsEntry": 3300,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F14-3"
    },
    {
        "AbsEntry": 3302,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F15-1"
    },
    {
        "AbsEntry": 3303,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F15-2"
    },
    {
        "AbsEntry": 3304,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F15-3"
    },
    {
        "AbsEntry": 3306,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F16-1"
    },
    {
        "AbsEntry": 3307,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F16-2"
    },
    {
        "AbsEntry": 3308,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F16-3"
    },
    {
        "AbsEntry": 3310,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F17-1"
    },
    {
        "AbsEntry": 3311,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F17-2"
    },
    {
        "AbsEntry": 3312,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F17-3"
    },
    {
        "AbsEntry": 3314,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F18-1"
    },
    {
        "AbsEntry": 3315,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F18-2"
    },
    {
        "AbsEntry": 3316,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F18-3"
    },
    {
        "AbsEntry": 3318,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F19-1"
    },
    {
        "AbsEntry": 3319,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F19-2"
    },
    {
        "AbsEntry": 3320,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F19-3"
    },
    {
        "AbsEntry": 3322,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F20-1"
    },
    {
        "AbsEntry": 3323,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F20-2"
    },
    {
        "AbsEntry": 3324,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F20-3"
    },
    {
        "AbsEntry": 3326,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F21-1"
    },
    {
        "AbsEntry": 3327,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F21-2"
    },
    {
        "AbsEntry": 3328,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F21-3"
    },
    {
        "AbsEntry": 3330,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F22-1"
    },
    {
        "AbsEntry": 3331,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F22-2"
    },
    {
        "AbsEntry": 3332,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F22-3"
    },
    {
        "AbsEntry": 3334,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F23-1"
    },
    {
        "AbsEntry": 3335,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F23-2"
    },
    {
        "AbsEntry": 3336,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F23-3"
    },
    {
        "AbsEntry": 3338,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F24-1"
    },
    {
        "AbsEntry": 3339,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F24-2"
    },
    {
        "AbsEntry": 3340,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F24-3"
    },
    {
        "AbsEntry": 3342,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F25-1"
    },
    {
        "AbsEntry": 3343,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F25-2"
    },
    {
        "AbsEntry": 3344,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F25-3"
    },
    {
        "AbsEntry": 3346,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F26-1"
    },
    {
        "AbsEntry": 3347,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F26-2"
    },
    {
        "AbsEntry": 3348,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F26-3"
    },
    {
        "AbsEntry": 3350,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F27-1"
    },
    {
        "AbsEntry": 3351,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F27-2"
    },
    {
        "AbsEntry": 3352,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F27-3"
    },
    {
        "AbsEntry": 3354,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F28-1"
    },
    {
        "AbsEntry": 3355,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F28-2"
    },
    {
        "AbsEntry": 3356,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F28-3"
    },
    {
        "AbsEntry": 3358,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F29-1"
    },
    {
        "AbsEntry": 3359,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F29-2"
    },
    {
        "AbsEntry": 3360,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F29-3"
    },
    {
        "AbsEntry": 3362,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F30-1"
    },
    {
        "AbsEntry": 3363,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F30-2"
    },
    {
        "AbsEntry": 3364,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F30-3"
    },
    {
        "AbsEntry": 3366,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F31-1"
    },
    {
        "AbsEntry": 3367,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F31-2"
    },
    {
        "AbsEntry": 3368,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F31-3"
    },
    {
        "AbsEntry": 3370,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F32-1"
    },
    {
        "AbsEntry": 3371,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F32-2"
    },
    {
        "AbsEntry": 3372,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F32-3"
    },
    {
        "AbsEntry": 3374,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F33-1"
    },
    {
        "AbsEntry": 3375,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F33-2"
    },
    {
        "AbsEntry": 3376,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F33-3"
    },
    {
        "AbsEntry": 3378,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F34-1"
    },
    {
        "AbsEntry": 3379,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F34-2"
    },
    {
        "AbsEntry": 3380,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F34-3"
    },
    {
        "AbsEntry": 3382,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F35-1"
    },
    {
        "AbsEntry": 3383,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F35-2"
    },
    {
        "AbsEntry": 3384,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F35-3"
    },
    {
        "AbsEntry": 3386,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F36-1"
    },
    {
        "AbsEntry": 3387,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F36-2"
    },
    {
        "AbsEntry": 3388,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F36-3"
    },
    {
        "AbsEntry": 3390,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F37-1"
    },
    {
        "AbsEntry": 3391,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F37-2"
    },
    {
        "AbsEntry": 3392,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F37-3"
    },
    {
        "AbsEntry": 3394,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F38-1"
    },
    {
        "AbsEntry": 3395,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F38-2"
    },
    {
        "AbsEntry": 3396,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F38-3"
    },
    {
        "AbsEntry": 3398,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F39-1"
    },
    {
        "AbsEntry": 3399,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F39-2"
    },
    {
        "AbsEntry": 3400,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F39-3"
    },
    {
        "AbsEntry": 3402,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F40-1"
    },
    {
        "AbsEntry": 3403,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F40-2"
    },
    {
        "AbsEntry": 3404,
        "Warehouse": "WCP",
        "BinCode": "WCP-3F40-3"
    },
    {
        "AbsEntry": 3406,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G01-1"
    },
    {
        "AbsEntry": 3407,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G01-2"
    },
    {
        "AbsEntry": 3408,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G01-3"
    },
    {
        "AbsEntry": 3410,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G02-1"
    },
    {
        "AbsEntry": 3411,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G02-2"
    },
    {
        "AbsEntry": 3412,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G02-3"
    },
    {
        "AbsEntry": 3414,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G03-1"
    },
    {
        "AbsEntry": 3415,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G03-2"
    },
    {
        "AbsEntry": 3416,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G03-3"
    },
    {
        "AbsEntry": 3418,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G04-1"
    },
    {
        "AbsEntry": 3419,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G04-2"
    },
    {
        "AbsEntry": 3420,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G04-3"
    },
    {
        "AbsEntry": 3422,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G05-1"
    },
    {
        "AbsEntry": 3423,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G05-2"
    },
    {
        "AbsEntry": 3424,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G05-3"
    },
    {
        "AbsEntry": 3426,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G06-1"
    },
    {
        "AbsEntry": 3427,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G06-2"
    },
    {
        "AbsEntry": 3428,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G06-3"
    },
    {
        "AbsEntry": 3430,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G07-1"
    },
    {
        "AbsEntry": 3431,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G07-2"
    },
    {
        "AbsEntry": 3432,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G07-3"
    },
    {
        "AbsEntry": 3434,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G08-1"
    },
    {
        "AbsEntry": 3435,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G08-2"
    },
    {
        "AbsEntry": 3436,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G08-3"
    },
    {
        "AbsEntry": 3438,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G09-1"
    },
    {
        "AbsEntry": 3439,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G09-2"
    },
    {
        "AbsEntry": 3440,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G09-3"
    },
    {
        "AbsEntry": 3442,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G10-1"
    },
    {
        "AbsEntry": 3443,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G10-2"
    },
    {
        "AbsEntry": 3444,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G10-3"
    },
    {
        "AbsEntry": 3446,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G11-1"
    },
    {
        "AbsEntry": 3447,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G11-2"
    },
    {
        "AbsEntry": 3448,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G11-3"
    },
    {
        "AbsEntry": 3450,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G12-1"
    },
    {
        "AbsEntry": 3451,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G12-2"
    },
    {
        "AbsEntry": 3452,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G12-3"
    },
    {
        "AbsEntry": 3454,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G13-1"
    },
    {
        "AbsEntry": 3455,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G13-2"
    },
    {
        "AbsEntry": 3456,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G13-3"
    },
    {
        "AbsEntry": 3458,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G14-1"
    },
    {
        "AbsEntry": 3459,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G14-2"
    },
    {
        "AbsEntry": 3460,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G14-3"
    },
    {
        "AbsEntry": 3462,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G15-1"
    },
    {
        "AbsEntry": 3463,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G15-2"
    },
    {
        "AbsEntry": 3464,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G15-3"
    },
    {
        "AbsEntry": 3466,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G16-1"
    },
    {
        "AbsEntry": 3467,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G16-2"
    },
    {
        "AbsEntry": 3468,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G16-3"
    },
    {
        "AbsEntry": 3470,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G17-1"
    },
    {
        "AbsEntry": 3471,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G17-2"
    },
    {
        "AbsEntry": 3472,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G17-3"
    },
    {
        "AbsEntry": 3474,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G18-1"
    },
    {
        "AbsEntry": 3475,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G18-2"
    },
    {
        "AbsEntry": 3476,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G18-3"
    },
    {
        "AbsEntry": 3478,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G19-1"
    },
    {
        "AbsEntry": 3479,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G19-2"
    },
    {
        "AbsEntry": 3480,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G19-3"
    },
    {
        "AbsEntry": 3482,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G20-1"
    },
    {
        "AbsEntry": 3483,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G20-2"
    },
    {
        "AbsEntry": 3484,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G20-3"
    },
    {
        "AbsEntry": 3486,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G21-1"
    },
    {
        "AbsEntry": 3487,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G21-2"
    },
    {
        "AbsEntry": 3488,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G21-3"
    },
    {
        "AbsEntry": 3490,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G22-1"
    },
    {
        "AbsEntry": 3491,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G22-2"
    },
    {
        "AbsEntry": 3492,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G22-3"
    },
    {
        "AbsEntry": 3494,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G23-1"
    },
    {
        "AbsEntry": 3495,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G23-2"
    },
    {
        "AbsEntry": 3496,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G23-3"
    },
    {
        "AbsEntry": 3498,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G24-1"
    },
    {
        "AbsEntry": 3499,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G24-2"
    },
    {
        "AbsEntry": 3500,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G24-3"
    },
    {
        "AbsEntry": 3502,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G25-1"
    },
    {
        "AbsEntry": 3503,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G25-2"
    },
    {
        "AbsEntry": 3504,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G25-3"
    },
    {
        "AbsEntry": 3506,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G26-1"
    },
    {
        "AbsEntry": 3507,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G26-2"
    },
    {
        "AbsEntry": 3508,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G26-3"
    },
    {
        "AbsEntry": 3510,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G27-1"
    },
    {
        "AbsEntry": 3511,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G27-2"
    },
    {
        "AbsEntry": 3512,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G27-3"
    },
    {
        "AbsEntry": 3514,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G28-1"
    },
    {
        "AbsEntry": 3515,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G28-2"
    },
    {
        "AbsEntry": 3516,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G28-3"
    },
    {
        "AbsEntry": 3518,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G29-1"
    },
    {
        "AbsEntry": 3519,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G29-2"
    },
    {
        "AbsEntry": 3520,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G29-3"
    },
    {
        "AbsEntry": 3522,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G30-1"
    },
    {
        "AbsEntry": 3523,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G30-2"
    },
    {
        "AbsEntry": 3524,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G30-3"
    },
    {
        "AbsEntry": 3526,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G31-1"
    },
    {
        "AbsEntry": 3527,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G31-2"
    },
    {
        "AbsEntry": 3528,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G31-3"
    },
    {
        "AbsEntry": 3530,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G32-1"
    },
    {
        "AbsEntry": 3531,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G32-2"
    },
    {
        "AbsEntry": 3532,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G32-3"
    },
    {
        "AbsEntry": 3534,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G33-1"
    },
    {
        "AbsEntry": 3535,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G33-2"
    },
    {
        "AbsEntry": 3536,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G33-3"
    },
    {
        "AbsEntry": 3538,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G34-1"
    },
    {
        "AbsEntry": 3539,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G34-2"
    },
    {
        "AbsEntry": 3540,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G34-3"
    },
    {
        "AbsEntry": 3542,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G35-1"
    },
    {
        "AbsEntry": 3543,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G35-2"
    },
    {
        "AbsEntry": 3544,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G35-3"
    },
    {
        "AbsEntry": 3546,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G36-1"
    },
    {
        "AbsEntry": 3547,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G36-2"
    },
    {
        "AbsEntry": 3548,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G36-3"
    },
    {
        "AbsEntry": 3550,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G37-1"
    },
    {
        "AbsEntry": 3551,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G37-2"
    },
    {
        "AbsEntry": 3552,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G37-3"
    },
    {
        "AbsEntry": 3554,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G38-1"
    },
    {
        "AbsEntry": 3555,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G38-2"
    },
    {
        "AbsEntry": 3556,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G38-3"
    },
    {
        "AbsEntry": 3558,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G39-1"
    },
    {
        "AbsEntry": 3559,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G39-2"
    },
    {
        "AbsEntry": 3560,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G39-3"
    },
    {
        "AbsEntry": 3562,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G40-1"
    },
    {
        "AbsEntry": 3563,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G40-2"
    },
    {
        "AbsEntry": 3564,
        "Warehouse": "WCP",
        "BinCode": "WCP-3G40-3"
    },
    {
        "AbsEntry": 3566,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H01-1"
    },
    {
        "AbsEntry": 3567,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H01-2"
    },
    {
        "AbsEntry": 3568,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H01-3"
    },
    {
        "AbsEntry": 3570,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H02-1"
    },
    {
        "AbsEntry": 3571,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H02-2"
    },
    {
        "AbsEntry": 3572,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H02-3"
    },
    {
        "AbsEntry": 3574,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H03-1"
    },
    {
        "AbsEntry": 3575,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H03-2"
    },
    {
        "AbsEntry": 3576,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H03-3"
    },
    {
        "AbsEntry": 3578,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H04-1"
    },
    {
        "AbsEntry": 3579,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H04-2"
    },
    {
        "AbsEntry": 3580,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H04-3"
    },
    {
        "AbsEntry": 3582,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H05-1"
    },
    {
        "AbsEntry": 3583,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H05-2"
    },
    {
        "AbsEntry": 3584,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H05-3"
    },
    {
        "AbsEntry": 3586,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H06-1"
    },
    {
        "AbsEntry": 3587,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H06-2"
    },
    {
        "AbsEntry": 3588,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H06-3"
    },
    {
        "AbsEntry": 3590,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H07-1"
    },
    {
        "AbsEntry": 3591,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H07-2"
    },
    {
        "AbsEntry": 3592,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H07-3"
    },
    {
        "AbsEntry": 3594,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H08-1"
    },
    {
        "AbsEntry": 3595,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H08-2"
    },
    {
        "AbsEntry": 3596,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H08-3"
    },
    {
        "AbsEntry": 3598,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H09-1"
    },
    {
        "AbsEntry": 3599,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H09-2"
    },
    {
        "AbsEntry": 3600,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H09-3"
    },
    {
        "AbsEntry": 3602,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H10-1"
    },
    {
        "AbsEntry": 3603,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H10-2"
    },
    {
        "AbsEntry": 3604,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H10-3"
    },
    {
        "AbsEntry": 3606,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H11-1"
    },
    {
        "AbsEntry": 3607,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H11-2"
    },
    {
        "AbsEntry": 3608,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H11-3"
    },
    {
        "AbsEntry": 3610,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H12-1"
    },
    {
        "AbsEntry": 3611,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H12-2"
    },
    {
        "AbsEntry": 3612,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H12-3"
    },
    {
        "AbsEntry": 3614,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H13-1"
    },
    {
        "AbsEntry": 3615,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H13-2"
    },
    {
        "AbsEntry": 3616,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H13-3"
    },
    {
        "AbsEntry": 3618,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H14-1"
    },
    {
        "AbsEntry": 3619,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H14-2"
    },
    {
        "AbsEntry": 3620,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H14-3"
    },
    {
        "AbsEntry": 3622,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H15-1"
    },
    {
        "AbsEntry": 3623,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H15-2"
    },
    {
        "AbsEntry": 3624,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H15-3"
    },
    {
        "AbsEntry": 3626,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H16-1"
    },
    {
        "AbsEntry": 3627,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H16-2"
    },
    {
        "AbsEntry": 3628,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H16-3"
    },
    {
        "AbsEntry": 3630,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H17-1"
    },
    {
        "AbsEntry": 3631,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H17-2"
    },
    {
        "AbsEntry": 3632,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H17-3"
    },
    {
        "AbsEntry": 3634,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H18-1"
    },
    {
        "AbsEntry": 3635,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H18-2"
    },
    {
        "AbsEntry": 3636,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H18-3"
    },
    {
        "AbsEntry": 3638,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H19-1"
    },
    {
        "AbsEntry": 3639,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H19-2"
    },
    {
        "AbsEntry": 3640,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H19-3"
    },
    {
        "AbsEntry": 3642,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H20-1"
    },
    {
        "AbsEntry": 3643,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H20-2"
    },
    {
        "AbsEntry": 3644,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H20-3"
    },
    {
        "AbsEntry": 3646,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H21-1"
    },
    {
        "AbsEntry": 3647,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H21-2"
    },
    {
        "AbsEntry": 3648,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H21-3"
    },
    {
        "AbsEntry": 3650,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H22-1"
    },
    {
        "AbsEntry": 3651,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H22-2"
    },
    {
        "AbsEntry": 3652,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H22-3"
    },
    {
        "AbsEntry": 3654,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H23-1"
    },
    {
        "AbsEntry": 3655,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H23-2"
    },
    {
        "AbsEntry": 3656,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H23-3"
    },
    {
        "AbsEntry": 3658,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H24-1"
    },
    {
        "AbsEntry": 3659,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H24-2"
    },
    {
        "AbsEntry": 3660,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H24-3"
    },
    {
        "AbsEntry": 3662,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H25-1"
    },
    {
        "AbsEntry": 3663,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H25-2"
    },
    {
        "AbsEntry": 3664,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H25-3"
    },
    {
        "AbsEntry": 3666,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H26-1"
    },
    {
        "AbsEntry": 3667,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H26-2"
    },
    {
        "AbsEntry": 3668,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H26-3"
    },
    {
        "AbsEntry": 3670,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H27-1"
    },
    {
        "AbsEntry": 3671,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H27-2"
    },
    {
        "AbsEntry": 3672,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H27-3"
    },
    {
        "AbsEntry": 3674,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H28-1"
    },
    {
        "AbsEntry": 3675,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H28-2"
    },
    {
        "AbsEntry": 3676,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H28-3"
    },
    {
        "AbsEntry": 3678,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H29-1"
    },
    {
        "AbsEntry": 3679,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H29-2"
    },
    {
        "AbsEntry": 3680,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H29-3"
    },
    {
        "AbsEntry": 3682,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H30-1"
    },
    {
        "AbsEntry": 3683,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H30-2"
    },
    {
        "AbsEntry": 3684,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H30-3"
    },
    {
        "AbsEntry": 3686,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H31-1"
    },
    {
        "AbsEntry": 3687,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H31-2"
    },
    {
        "AbsEntry": 3688,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H31-3"
    },
    {
        "AbsEntry": 3690,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H32-1"
    },
    {
        "AbsEntry": 3691,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H32-2"
    },
    {
        "AbsEntry": 3692,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H32-3"
    },
    {
        "AbsEntry": 3694,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H33-1"
    },
    {
        "AbsEntry": 3695,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H33-2"
    },
    {
        "AbsEntry": 3696,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H33-3"
    },
    {
        "AbsEntry": 3698,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H34-1"
    },
    {
        "AbsEntry": 3699,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H34-2"
    },
    {
        "AbsEntry": 3700,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H34-3"
    },
    {
        "AbsEntry": 3702,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H35-1"
    },
    {
        "AbsEntry": 3703,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H35-2"
    },
    {
        "AbsEntry": 3704,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H35-3"
    },
    {
        "AbsEntry": 3706,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H36-1"
    },
    {
        "AbsEntry": 3707,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H36-2"
    },
    {
        "AbsEntry": 3708,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H36-3"
    },
    {
        "AbsEntry": 3710,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H37-1"
    },
    {
        "AbsEntry": 3711,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H37-2"
    },
    {
        "AbsEntry": 3712,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H37-3"
    },
    {
        "AbsEntry": 3714,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H38-1"
    },
    {
        "AbsEntry": 3715,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H38-2"
    },
    {
        "AbsEntry": 3716,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H38-3"
    },
    {
        "AbsEntry": 3718,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H39-1"
    },
    {
        "AbsEntry": 3719,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H39-2"
    },
    {
        "AbsEntry": 3720,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H39-3"
    },
    {
        "AbsEntry": 3722,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H40-1"
    },
    {
        "AbsEntry": 3723,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H40-2"
    },
    {
        "AbsEntry": 3724,
        "Warehouse": "WCP",
        "BinCode": "WCP-3H40-3"
    },
    {
        "AbsEntry": 3726,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I01-1"
    },
    {
        "AbsEntry": 3727,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I01-2"
    },
    {
        "AbsEntry": 3728,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I01-3"
    },
    {
        "AbsEntry": 3730,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I02-1"
    },
    {
        "AbsEntry": 3731,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I02-2"
    },
    {
        "AbsEntry": 3732,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I02-3"
    },
    {
        "AbsEntry": 3734,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I03-1"
    },
    {
        "AbsEntry": 3735,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I03-2"
    },
    {
        "AbsEntry": 3736,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I03-3"
    },
    {
        "AbsEntry": 3738,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I04-1"
    },
    {
        "AbsEntry": 3739,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I04-2"
    },
    {
        "AbsEntry": 3740,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I04-3"
    },
    {
        "AbsEntry": 3742,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I05-1"
    },
    {
        "AbsEntry": 3743,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I05-2"
    },
    {
        "AbsEntry": 3744,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I05-3"
    },
    {
        "AbsEntry": 3746,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I06-1"
    },
    {
        "AbsEntry": 3747,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I06-2"
    },
    {
        "AbsEntry": 3748,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I06-3"
    },
    {
        "AbsEntry": 3750,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I07-1"
    },
    {
        "AbsEntry": 3751,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I07-2"
    },
    {
        "AbsEntry": 3752,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I07-3"
    },
    {
        "AbsEntry": 3754,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I08-1"
    },
    {
        "AbsEntry": 3755,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I08-2"
    },
    {
        "AbsEntry": 3756,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I08-3"
    },
    {
        "AbsEntry": 3758,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I09-1"
    },
    {
        "AbsEntry": 3759,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I09-2"
    },
    {
        "AbsEntry": 3760,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I09-3"
    },
    {
        "AbsEntry": 3762,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I10-1"
    },
    {
        "AbsEntry": 3763,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I10-2"
    },
    {
        "AbsEntry": 3764,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I10-3"
    },
    {
        "AbsEntry": 3766,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I11-1"
    },
    {
        "AbsEntry": 3767,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I11-2"
    },
    {
        "AbsEntry": 3768,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I11-3"
    },
    {
        "AbsEntry": 3770,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I12-1"
    },
    {
        "AbsEntry": 3771,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I12-2"
    },
    {
        "AbsEntry": 3772,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I12-3"
    },
    {
        "AbsEntry": 3774,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I13-1"
    },
    {
        "AbsEntry": 3775,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I13-2"
    },
    {
        "AbsEntry": 3776,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I13-3"
    },
    {
        "AbsEntry": 3778,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I14-1"
    },
    {
        "AbsEntry": 3779,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I14-2"
    },
    {
        "AbsEntry": 3780,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I14-3"
    },
    {
        "AbsEntry": 3782,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I15-1"
    },
    {
        "AbsEntry": 3783,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I15-2"
    },
    {
        "AbsEntry": 3784,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I15-3"
    },
    {
        "AbsEntry": 3786,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I16-1"
    },
    {
        "AbsEntry": 3787,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I16-2"
    },
    {
        "AbsEntry": 3788,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I16-3"
    },
    {
        "AbsEntry": 3790,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I17-1"
    },
    {
        "AbsEntry": 3791,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I17-2"
    },
    {
        "AbsEntry": 3792,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I17-3"
    },
    {
        "AbsEntry": 3794,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I18-1"
    },
    {
        "AbsEntry": 3795,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I18-2"
    },
    {
        "AbsEntry": 3796,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I18-3"
    },
    {
        "AbsEntry": 3798,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I19-1"
    },
    {
        "AbsEntry": 3799,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I19-2"
    },
    {
        "AbsEntry": 3800,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I19-3"
    },
    {
        "AbsEntry": 3802,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I20-1"
    },
    {
        "AbsEntry": 3803,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I20-2"
    },
    {
        "AbsEntry": 3804,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I20-3"
    },
    {
        "AbsEntry": 3806,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I21-1"
    },
    {
        "AbsEntry": 3807,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I21-2"
    },
    {
        "AbsEntry": 3808,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I21-3"
    },
    {
        "AbsEntry": 3810,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I22-1"
    },
    {
        "AbsEntry": 3811,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I22-2"
    },
    {
        "AbsEntry": 3812,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I22-3"
    },
    {
        "AbsEntry": 3814,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I23-1"
    },
    {
        "AbsEntry": 3815,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I23-2"
    },
    {
        "AbsEntry": 3816,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I23-3"
    },
    {
        "AbsEntry": 3818,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I24-1"
    },
    {
        "AbsEntry": 3819,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I24-2"
    },
    {
        "AbsEntry": 3820,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I24-3"
    },
    {
        "AbsEntry": 3822,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I25-1"
    },
    {
        "AbsEntry": 3823,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I25-2"
    },
    {
        "AbsEntry": 3824,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I25-3"
    },
    {
        "AbsEntry": 3826,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I26-1"
    },
    {
        "AbsEntry": 3827,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I26-2"
    },
    {
        "AbsEntry": 3828,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I26-3"
    },
    {
        "AbsEntry": 3830,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I27-1"
    },
    {
        "AbsEntry": 3831,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I27-2"
    },
    {
        "AbsEntry": 3832,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I27-3"
    },
    {
        "AbsEntry": 3834,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I28-1"
    },
    {
        "AbsEntry": 3835,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I28-2"
    },
    {
        "AbsEntry": 3836,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I28-3"
    },
    {
        "AbsEntry": 3838,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I29-1"
    },
    {
        "AbsEntry": 3839,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I29-2"
    },
    {
        "AbsEntry": 3840,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I29-3"
    },
    {
        "AbsEntry": 3842,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I30-1"
    },
    {
        "AbsEntry": 3843,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I30-2"
    },
    {
        "AbsEntry": 3844,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I30-3"
    },
    {
        "AbsEntry": 3846,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I31-1"
    },
    {
        "AbsEntry": 3847,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I31-2"
    },
    {
        "AbsEntry": 3848,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I31-3"
    },
    {
        "AbsEntry": 3850,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I32-1"
    },
    {
        "AbsEntry": 3851,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I32-2"
    },
    {
        "AbsEntry": 3852,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I32-3"
    },
    {
        "AbsEntry": 3854,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I33-1"
    },
    {
        "AbsEntry": 3855,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I33-2"
    },
    {
        "AbsEntry": 3856,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I33-3"
    },
    {
        "AbsEntry": 3858,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I34-1"
    },
    {
        "AbsEntry": 3859,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I34-2"
    },
    {
        "AbsEntry": 3860,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I34-3"
    },
    {
        "AbsEntry": 3862,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I35-1"
    },
    {
        "AbsEntry": 3863,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I35-2"
    },
    {
        "AbsEntry": 3864,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I35-3"
    },
    {
        "AbsEntry": 3866,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I36-1"
    },
    {
        "AbsEntry": 3867,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I36-2"
    },
    {
        "AbsEntry": 3868,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I36-3"
    },
    {
        "AbsEntry": 3870,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I37-1"
    },
    {
        "AbsEntry": 3871,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I37-2"
    },
    {
        "AbsEntry": 3872,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I37-3"
    },
    {
        "AbsEntry": 3874,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I38-1"
    },
    {
        "AbsEntry": 3875,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I38-2"
    },
    {
        "AbsEntry": 3876,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I38-3"
    },
    {
        "AbsEntry": 3878,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I39-1"
    },
    {
        "AbsEntry": 3879,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I39-2"
    },
    {
        "AbsEntry": 3880,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I39-3"
    },
    {
        "AbsEntry": 3882,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I40-1"
    },
    {
        "AbsEntry": 3883,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I40-2"
    },
    {
        "AbsEntry": 3884,
        "Warehouse": "WCP",
        "BinCode": "WCP-3I40-3"
    },
    {
        "AbsEntry": 3886,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J01-1"
    },
    {
        "AbsEntry": 3887,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J01-2"
    },
    {
        "AbsEntry": 3888,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J01-3"
    },
    {
        "AbsEntry": 3890,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J02-1"
    },
    {
        "AbsEntry": 3891,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J02-2"
    },
    {
        "AbsEntry": 3892,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J02-3"
    },
    {
        "AbsEntry": 3894,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J03-1"
    },
    {
        "AbsEntry": 3895,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J03-2"
    },
    {
        "AbsEntry": 3896,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J03-3"
    },
    {
        "AbsEntry": 3898,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J04-1"
    },
    {
        "AbsEntry": 3899,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J04-2"
    },
    {
        "AbsEntry": 3900,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J04-3"
    },
    {
        "AbsEntry": 3902,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J05-1"
    },
    {
        "AbsEntry": 3903,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J05-2"
    },
    {
        "AbsEntry": 3904,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J05-3"
    },
    {
        "AbsEntry": 3906,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J06-1"
    },
    {
        "AbsEntry": 3907,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J06-2"
    },
    {
        "AbsEntry": 3908,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J06-3"
    },
    {
        "AbsEntry": 3910,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J07-1"
    },
    {
        "AbsEntry": 3911,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J07-2"
    },
    {
        "AbsEntry": 3912,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J07-3"
    },
    {
        "AbsEntry": 3914,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J08-1"
    },
    {
        "AbsEntry": 3915,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J08-2"
    },
    {
        "AbsEntry": 3916,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J08-3"
    },
    {
        "AbsEntry": 3918,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J09-1"
    },
    {
        "AbsEntry": 3919,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J09-2"
    },
    {
        "AbsEntry": 3920,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J09-3"
    },
    {
        "AbsEntry": 3922,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J10-1"
    },
    {
        "AbsEntry": 3923,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J10-2"
    },
    {
        "AbsEntry": 3924,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J10-3"
    },
    {
        "AbsEntry": 3926,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J11-1"
    },
    {
        "AbsEntry": 3927,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J11-2"
    },
    {
        "AbsEntry": 3928,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J11-3"
    },
    {
        "AbsEntry": 3930,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J12-1"
    },
    {
        "AbsEntry": 3931,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J12-2"
    },
    {
        "AbsEntry": 3932,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J12-3"
    },
    {
        "AbsEntry": 3934,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J13-1"
    },
    {
        "AbsEntry": 3935,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J13-2"
    },
    {
        "AbsEntry": 3936,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J13-3"
    },
    {
        "AbsEntry": 3938,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J14-1"
    },
    {
        "AbsEntry": 3939,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J14-2"
    },
    {
        "AbsEntry": 3940,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J14-3"
    },
    {
        "AbsEntry": 3942,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J15-1"
    },
    {
        "AbsEntry": 3943,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J15-2"
    },
    {
        "AbsEntry": 3944,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J15-3"
    },
    {
        "AbsEntry": 3946,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J16-1"
    },
    {
        "AbsEntry": 3947,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J16-2"
    },
    {
        "AbsEntry": 3948,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J16-3"
    },
    {
        "AbsEntry": 3950,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J17-1"
    },
    {
        "AbsEntry": 3951,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J17-2"
    },
    {
        "AbsEntry": 3952,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J17-3"
    },
    {
        "AbsEntry": 3954,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J18-1"
    },
    {
        "AbsEntry": 3955,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J18-2"
    },
    {
        "AbsEntry": 3956,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J18-3"
    },
    {
        "AbsEntry": 3958,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J19-1"
    },
    {
        "AbsEntry": 3959,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J19-2"
    },
    {
        "AbsEntry": 3960,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J19-3"
    },
    {
        "AbsEntry": 3962,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J20-1"
    },
    {
        "AbsEntry": 3963,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J20-2"
    },
    {
        "AbsEntry": 3964,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J20-3"
    },
    {
        "AbsEntry": 3966,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J21-1"
    },
    {
        "AbsEntry": 3967,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J21-2"
    },
    {
        "AbsEntry": 3968,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J21-3"
    },
    {
        "AbsEntry": 3970,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J22-1"
    },
    {
        "AbsEntry": 3971,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J22-2"
    },
    {
        "AbsEntry": 3972,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J22-3"
    },
    {
        "AbsEntry": 3974,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J23-1"
    },
    {
        "AbsEntry": 3975,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J23-2"
    },
    {
        "AbsEntry": 3976,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J23-3"
    },
    {
        "AbsEntry": 3978,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J24-1"
    },
    {
        "AbsEntry": 3979,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J24-2"
    },
    {
        "AbsEntry": 3980,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J24-3"
    },
    {
        "AbsEntry": 3982,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J25-1"
    },
    {
        "AbsEntry": 3983,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J25-2"
    },
    {
        "AbsEntry": 3984,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J25-3"
    },
    {
        "AbsEntry": 3986,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J26-1"
    },
    {
        "AbsEntry": 3987,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J26-2"
    },
    {
        "AbsEntry": 3988,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J26-3"
    },
    {
        "AbsEntry": 3990,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J27-1"
    },
    {
        "AbsEntry": 3991,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J27-2"
    },
    {
        "AbsEntry": 3992,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J27-3"
    },
    {
        "AbsEntry": 3994,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J28-1"
    },
    {
        "AbsEntry": 3995,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J28-2"
    },
    {
        "AbsEntry": 3996,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J28-3"
    },
    {
        "AbsEntry": 3998,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J29-1"
    },
    {
        "AbsEntry": 3999,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J29-2"
    },
    {
        "AbsEntry": 4000,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J29-3"
    },
    {
        "AbsEntry": 4002,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J30-1"
    },
    {
        "AbsEntry": 4003,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J30-2"
    },
    {
        "AbsEntry": 4004,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J30-3"
    },
    {
        "AbsEntry": 4006,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J31-1"
    },
    {
        "AbsEntry": 4007,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J31-2"
    },
    {
        "AbsEntry": 4008,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J31-3"
    },
    {
        "AbsEntry": 4010,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J32-1"
    },
    {
        "AbsEntry": 4011,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J32-2"
    },
    {
        "AbsEntry": 4012,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J32-3"
    },
    {
        "AbsEntry": 4014,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J33-1"
    },
    {
        "AbsEntry": 4015,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J33-2"
    },
    {
        "AbsEntry": 4016,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J33-3"
    },
    {
        "AbsEntry": 4018,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J34-1"
    },
    {
        "AbsEntry": 4019,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J34-2"
    },
    {
        "AbsEntry": 4020,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J34-3"
    },
    {
        "AbsEntry": 4022,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J35-1"
    },
    {
        "AbsEntry": 4023,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J35-2"
    },
    {
        "AbsEntry": 4024,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J35-3"
    },
    {
        "AbsEntry": 4026,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J36-1"
    },
    {
        "AbsEntry": 4027,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J36-2"
    },
    {
        "AbsEntry": 4028,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J36-3"
    },
    {
        "AbsEntry": 4030,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J37-1"
    },
    {
        "AbsEntry": 4031,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J37-2"
    },
    {
        "AbsEntry": 4032,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J37-3"
    },
    {
        "AbsEntry": 4034,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J38-1"
    },
    {
        "AbsEntry": 4035,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J38-2"
    },
    {
        "AbsEntry": 4036,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J38-3"
    },
    {
        "AbsEntry": 4038,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J39-1"
    },
    {
        "AbsEntry": 4039,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J39-2"
    },
    {
        "AbsEntry": 4040,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J39-3"
    },
    {
        "AbsEntry": 4042,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J40-1"
    },
    {
        "AbsEntry": 4043,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J40-2"
    },
    {
        "AbsEntry": 4044,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J40-3"
    },
    {
        "AbsEntry": 4046,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J41-1"
    },
    {
        "AbsEntry": 4047,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J41-2"
    },
    {
        "AbsEntry": 4048,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J41-3"
    },
    {
        "AbsEntry": 4050,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J42-1"
    },
    {
        "AbsEntry": 4051,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J42-2"
    },
    {
        "AbsEntry": 4052,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J42-3"
    },
    {
        "AbsEntry": 4054,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J43-1"
    },
    {
        "AbsEntry": 4055,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J43-2"
    },
    {
        "AbsEntry": 4056,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J43-3"
    },
    {
        "AbsEntry": 4058,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J44-1"
    },
    {
        "AbsEntry": 4059,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J44-2"
    },
    {
        "AbsEntry": 4060,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J44-3"
    },
    {
        "AbsEntry": 4062,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J45-1"
    },
    {
        "AbsEntry": 4063,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J45-2"
    },
    {
        "AbsEntry": 4064,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J45-3"
    },
    {
        "AbsEntry": 4066,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J46-1"
    },
    {
        "AbsEntry": 4067,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J46-2"
    },
    {
        "AbsEntry": 4068,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J46-3"
    },
    {
        "AbsEntry": 4070,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J47-1"
    },
    {
        "AbsEntry": 4071,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J47-2"
    },
    {
        "AbsEntry": 4072,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J47-3"
    },
    {
        "AbsEntry": 4074,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J48-1"
    },
    {
        "AbsEntry": 4075,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J48-2"
    },
    {
        "AbsEntry": 4076,
        "Warehouse": "WCP",
        "BinCode": "WCP-3J48-3"
    },
    {
        "AbsEntry": 4078,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K01-1"
    },
    {
        "AbsEntry": 4079,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K01-2"
    },
    {
        "AbsEntry": 4080,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K01-3"
    },
    {
        "AbsEntry": 4082,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K02-1"
    },
    {
        "AbsEntry": 4083,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K02-2"
    },
    {
        "AbsEntry": 4084,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K02-3"
    },
    {
        "AbsEntry": 4086,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K03-1"
    },
    {
        "AbsEntry": 4087,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K03-2"
    },
    {
        "AbsEntry": 4088,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K03-3"
    },
    {
        "AbsEntry": 4090,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K04-1"
    },
    {
        "AbsEntry": 4091,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K04-2"
    },
    {
        "AbsEntry": 4092,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K04-3"
    },
    {
        "AbsEntry": 4094,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K05-1"
    },
    {
        "AbsEntry": 4095,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K05-2"
    },
    {
        "AbsEntry": 4096,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K05-3"
    },
    {
        "AbsEntry": 4098,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K06-1"
    },
    {
        "AbsEntry": 4099,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K06-2"
    },
    {
        "AbsEntry": 4100,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K06-3"
    },
    {
        "AbsEntry": 4102,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K07-1"
    },
    {
        "AbsEntry": 4103,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K07-2"
    },
    {
        "AbsEntry": 4104,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K07-3"
    },
    {
        "AbsEntry": 4106,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K08-1"
    },
    {
        "AbsEntry": 4107,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K08-2"
    },
    {
        "AbsEntry": 4108,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K08-3"
    },
    {
        "AbsEntry": 4110,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K09-1"
    },
    {
        "AbsEntry": 4111,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K09-2"
    },
    {
        "AbsEntry": 4112,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K09-3"
    },
    {
        "AbsEntry": 4114,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K10-1"
    },
    {
        "AbsEntry": 4115,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K10-2"
    },
    {
        "AbsEntry": 4116,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K10-3"
    },
    {
        "AbsEntry": 4118,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K11-1"
    },
    {
        "AbsEntry": 4119,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K11-2"
    },
    {
        "AbsEntry": 4120,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K11-3"
    },
    {
        "AbsEntry": 4122,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K12-1"
    },
    {
        "AbsEntry": 4123,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K12-2"
    },
    {
        "AbsEntry": 4124,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K12-3"
    },
    {
        "AbsEntry": 4126,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K13-1"
    },
    {
        "AbsEntry": 4127,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K13-2"
    },
    {
        "AbsEntry": 4128,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K13-3"
    },
    {
        "AbsEntry": 4130,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K14-1"
    },
    {
        "AbsEntry": 4131,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K14-2"
    },
    {
        "AbsEntry": 4132,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K14-3"
    },
    {
        "AbsEntry": 4134,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K15-1"
    },
    {
        "AbsEntry": 4135,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K15-2"
    },
    {
        "AbsEntry": 4136,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K15-3"
    },
    {
        "AbsEntry": 4138,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K16-1"
    },
    {
        "AbsEntry": 4139,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K16-2"
    },
    {
        "AbsEntry": 4140,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K16-3"
    },
    {
        "AbsEntry": 4142,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K17-1"
    },
    {
        "AbsEntry": 4143,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K17-2"
    },
    {
        "AbsEntry": 4144,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K17-3"
    },
    {
        "AbsEntry": 4146,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K18-1"
    },
    {
        "AbsEntry": 4147,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K18-2"
    },
    {
        "AbsEntry": 4148,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K18-3"
    },
    {
        "AbsEntry": 4150,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K19-1"
    },
    {
        "AbsEntry": 4151,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K19-2"
    },
    {
        "AbsEntry": 4152,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K19-3"
    },
    {
        "AbsEntry": 4154,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K20-1"
    },
    {
        "AbsEntry": 4155,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K20-2"
    },
    {
        "AbsEntry": 4156,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K20-3"
    },
    {
        "AbsEntry": 4158,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K21-1"
    },
    {
        "AbsEntry": 4159,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K21-2"
    },
    {
        "AbsEntry": 4160,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K21-3"
    },
    {
        "AbsEntry": 4162,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K22-1"
    },
    {
        "AbsEntry": 4163,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K22-2"
    },
    {
        "AbsEntry": 4164,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K22-3"
    },
    {
        "AbsEntry": 4166,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K23-1"
    },
    {
        "AbsEntry": 4167,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K23-2"
    },
    {
        "AbsEntry": 4168,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K23-3"
    },
    {
        "AbsEntry": 4170,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K24-1"
    },
    {
        "AbsEntry": 4171,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K24-2"
    },
    {
        "AbsEntry": 4172,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K24-3"
    },
    {
        "AbsEntry": 4174,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K25-1"
    },
    {
        "AbsEntry": 4175,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K25-2"
    },
    {
        "AbsEntry": 4176,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K25-3"
    },
    {
        "AbsEntry": 4178,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K26-1"
    },
    {
        "AbsEntry": 4179,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K26-2"
    },
    {
        "AbsEntry": 4180,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K26-3"
    },
    {
        "AbsEntry": 4182,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K27-1"
    },
    {
        "AbsEntry": 4183,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K27-2"
    },
    {
        "AbsEntry": 4184,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K27-3"
    },
    {
        "AbsEntry": 4186,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K28-1"
    },
    {
        "AbsEntry": 4187,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K28-2"
    },
    {
        "AbsEntry": 4188,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K28-3"
    },
    {
        "AbsEntry": 4190,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K29-1"
    },
    {
        "AbsEntry": 4191,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K29-2"
    },
    {
        "AbsEntry": 4192,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K29-3"
    },
    {
        "AbsEntry": 4194,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K30-1"
    },
    {
        "AbsEntry": 4195,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K30-2"
    },
    {
        "AbsEntry": 4196,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K30-3"
    },
    {
        "AbsEntry": 4198,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K31-1"
    },
    {
        "AbsEntry": 4199,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K31-2"
    },
    {
        "AbsEntry": 4200,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K31-3"
    },
    {
        "AbsEntry": 4202,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K32-1"
    },
    {
        "AbsEntry": 4203,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K32-2"
    },
    {
        "AbsEntry": 4204,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K32-3"
    },
    {
        "AbsEntry": 4206,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K33-1"
    },
    {
        "AbsEntry": 4207,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K33-2"
    },
    {
        "AbsEntry": 4208,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K33-3"
    },
    {
        "AbsEntry": 4210,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K34-1"
    },
    {
        "AbsEntry": 4211,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K34-2"
    },
    {
        "AbsEntry": 4212,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K34-3"
    },
    {
        "AbsEntry": 4214,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K35-1"
    },
    {
        "AbsEntry": 4215,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K35-2"
    },
    {
        "AbsEntry": 4216,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K35-3"
    },
    {
        "AbsEntry": 4218,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K36-1"
    },
    {
        "AbsEntry": 4219,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K36-2"
    },
    {
        "AbsEntry": 4220,
        "Warehouse": "WCP",
        "BinCode": "WCP-3K36-3"
    },
    {
        "AbsEntry": 4222,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A01-1"
    },
    {
        "AbsEntry": 4223,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A01-2"
    },
    {
        "AbsEntry": 4224,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A01-3"
    },
    {
        "AbsEntry": 4226,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A02-1"
    },
    {
        "AbsEntry": 4227,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A02-2"
    },
    {
        "AbsEntry": 4228,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A02-3"
    },
    {
        "AbsEntry": 4230,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A03-1"
    },
    {
        "AbsEntry": 4231,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A03-2"
    },
    {
        "AbsEntry": 4232,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A03-3"
    },
    {
        "AbsEntry": 4234,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A04-1"
    },
    {
        "AbsEntry": 4235,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A04-2"
    },
    {
        "AbsEntry": 4236,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A04-3"
    },
    {
        "AbsEntry": 4238,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A05-1"
    },
    {
        "AbsEntry": 4239,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A05-2"
    },
    {
        "AbsEntry": 4240,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A05-3"
    },
    {
        "AbsEntry": 4242,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A06-1"
    },
    {
        "AbsEntry": 4243,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A06-2"
    },
    {
        "AbsEntry": 4244,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A06-3"
    },
    {
        "AbsEntry": 4246,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A07-1"
    },
    {
        "AbsEntry": 4247,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A07-2"
    },
    {
        "AbsEntry": 4248,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A07-3"
    },
    {
        "AbsEntry": 4250,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A08-1"
    },
    {
        "AbsEntry": 4251,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A08-2"
    },
    {
        "AbsEntry": 4252,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A08-3"
    },
    {
        "AbsEntry": 4254,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A09-1"
    },
    {
        "AbsEntry": 4255,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A09-2"
    },
    {
        "AbsEntry": 4256,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A09-3"
    },
    {
        "AbsEntry": 4258,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A10-1"
    },
    {
        "AbsEntry": 4259,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A10-2"
    },
    {
        "AbsEntry": 4260,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A10-3"
    },
    {
        "AbsEntry": 4262,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A11-1"
    },
    {
        "AbsEntry": 4263,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A11-2"
    },
    {
        "AbsEntry": 4264,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A11-3"
    },
    {
        "AbsEntry": 4266,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A12-1"
    },
    {
        "AbsEntry": 4267,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A12-2"
    },
    {
        "AbsEntry": 4268,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A12-3"
    },
    {
        "AbsEntry": 4270,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A13-1"
    },
    {
        "AbsEntry": 4271,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A13-2"
    },
    {
        "AbsEntry": 4272,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A13-3"
    },
    {
        "AbsEntry": 4274,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A14-1"
    },
    {
        "AbsEntry": 4275,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A14-2"
    },
    {
        "AbsEntry": 4276,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A14-3"
    },
    {
        "AbsEntry": 4278,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A15-1"
    },
    {
        "AbsEntry": 4279,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A15-2"
    },
    {
        "AbsEntry": 4280,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A15-3"
    },
    {
        "AbsEntry": 4282,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A16-1"
    },
    {
        "AbsEntry": 4283,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A16-2"
    },
    {
        "AbsEntry": 4284,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A16-3"
    },
    {
        "AbsEntry": 4286,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A17-1"
    },
    {
        "AbsEntry": 4287,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A17-2"
    },
    {
        "AbsEntry": 4288,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A17-3"
    },
    {
        "AbsEntry": 4290,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A18-1"
    },
    {
        "AbsEntry": 4291,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A18-2"
    },
    {
        "AbsEntry": 4292,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A18-3"
    },
    {
        "AbsEntry": 4294,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A19-1"
    },
    {
        "AbsEntry": 4295,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A19-2"
    },
    {
        "AbsEntry": 4296,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A19-3"
    },
    {
        "AbsEntry": 4298,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A20-1"
    },
    {
        "AbsEntry": 4299,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A20-2"
    },
    {
        "AbsEntry": 4300,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A20-3"
    },
    {
        "AbsEntry": 4302,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A21-1"
    },
    {
        "AbsEntry": 4303,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A21-2"
    },
    {
        "AbsEntry": 4304,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A21-3"
    },
    {
        "AbsEntry": 4306,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A22-1"
    },
    {
        "AbsEntry": 4307,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A22-2"
    },
    {
        "AbsEntry": 4308,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A22-3"
    },
    {
        "AbsEntry": 4310,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A23-1"
    },
    {
        "AbsEntry": 4311,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A23-2"
    },
    {
        "AbsEntry": 4312,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A23-3"
    },
    {
        "AbsEntry": 4314,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A24-1"
    },
    {
        "AbsEntry": 4315,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A24-2"
    },
    {
        "AbsEntry": 4316,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A24-3"
    },
    {
        "AbsEntry": 4318,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A25-1"
    },
    {
        "AbsEntry": 4319,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A25-2"
    },
    {
        "AbsEntry": 4320,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A25-3"
    },
    {
        "AbsEntry": 4322,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A26-1"
    },
    {
        "AbsEntry": 4323,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A26-2"
    },
    {
        "AbsEntry": 4324,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A26-3"
    },
    {
        "AbsEntry": 4326,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A27-1"
    },
    {
        "AbsEntry": 4327,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A27-2"
    },
    {
        "AbsEntry": 4328,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A27-3"
    },
    {
        "AbsEntry": 4330,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A28-1"
    },
    {
        "AbsEntry": 4331,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A28-2"
    },
    {
        "AbsEntry": 4332,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A28-3"
    },
    {
        "AbsEntry": 4334,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A29-1"
    },
    {
        "AbsEntry": 4335,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A29-2"
    },
    {
        "AbsEntry": 4336,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A29-3"
    },
    {
        "AbsEntry": 4338,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A30-1"
    },
    {
        "AbsEntry": 4339,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A30-2"
    },
    {
        "AbsEntry": 4340,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A30-3"
    },
    {
        "AbsEntry": 4342,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A31-1"
    },
    {
        "AbsEntry": 4343,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A31-2"
    },
    {
        "AbsEntry": 4344,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A31-3"
    },
    {
        "AbsEntry": 4346,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A32-1"
    },
    {
        "AbsEntry": 4347,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A32-2"
    },
    {
        "AbsEntry": 4348,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A32-3"
    },
    {
        "AbsEntry": 4350,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A33-1"
    },
    {
        "AbsEntry": 4351,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A33-2"
    },
    {
        "AbsEntry": 4352,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A33-3"
    },
    {
        "AbsEntry": 4354,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A34-1"
    },
    {
        "AbsEntry": 4355,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A34-2"
    },
    {
        "AbsEntry": 4356,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A34-3"
    },
    {
        "AbsEntry": 4358,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A35-1"
    },
    {
        "AbsEntry": 4359,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A35-2"
    },
    {
        "AbsEntry": 4360,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A35-3"
    },
    {
        "AbsEntry": 4362,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A36-1"
    },
    {
        "AbsEntry": 4363,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A36-2"
    },
    {
        "AbsEntry": 4364,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A36-3"
    },
    {
        "AbsEntry": 4366,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A37-1"
    },
    {
        "AbsEntry": 4367,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A37-2"
    },
    {
        "AbsEntry": 4368,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A37-3"
    },
    {
        "AbsEntry": 4370,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A38-1"
    },
    {
        "AbsEntry": 4371,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A38-2"
    },
    {
        "AbsEntry": 4372,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A38-3"
    },
    {
        "AbsEntry": 4374,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A39-1"
    },
    {
        "AbsEntry": 4375,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A39-2"
    },
    {
        "AbsEntry": 4376,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A39-3"
    },
    {
        "AbsEntry": 4378,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A40-1"
    },
    {
        "AbsEntry": 4379,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A40-2"
    },
    {
        "AbsEntry": 4380,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3A40-3"
    },
    {
        "AbsEntry": 4382,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B01-1"
    },
    {
        "AbsEntry": 4383,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B01-2"
    },
    {
        "AbsEntry": 4384,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B01-3"
    },
    {
        "AbsEntry": 4386,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B02-1"
    },
    {
        "AbsEntry": 4387,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B02-2"
    },
    {
        "AbsEntry": 4388,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B02-3"
    },
    {
        "AbsEntry": 4390,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B03-1"
    },
    {
        "AbsEntry": 4391,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B03-2"
    },
    {
        "AbsEntry": 4392,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B03-3"
    },
    {
        "AbsEntry": 4394,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B04-1"
    },
    {
        "AbsEntry": 4395,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B04-2"
    },
    {
        "AbsEntry": 4396,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B04-3"
    },
    {
        "AbsEntry": 4398,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B05-1"
    },
    {
        "AbsEntry": 4399,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B05-2"
    },
    {
        "AbsEntry": 4400,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B05-3"
    },
    {
        "AbsEntry": 4402,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B06-1"
    },
    {
        "AbsEntry": 4403,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B06-2"
    },
    {
        "AbsEntry": 4404,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B06-3"
    },
    {
        "AbsEntry": 4406,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B07-1"
    },
    {
        "AbsEntry": 4407,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B07-2"
    },
    {
        "AbsEntry": 4408,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B07-3"
    },
    {
        "AbsEntry": 4410,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B08-1"
    },
    {
        "AbsEntry": 4411,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B08-2"
    },
    {
        "AbsEntry": 4412,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B08-3"
    },
    {
        "AbsEntry": 4414,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B09-1"
    },
    {
        "AbsEntry": 4415,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B09-2"
    },
    {
        "AbsEntry": 4416,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B09-3"
    },
    {
        "AbsEntry": 4418,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B10-1"
    },
    {
        "AbsEntry": 4419,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B10-2"
    },
    {
        "AbsEntry": 4420,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B10-3"
    },
    {
        "AbsEntry": 4422,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B11-1"
    },
    {
        "AbsEntry": 4423,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B11-2"
    },
    {
        "AbsEntry": 4424,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B11-3"
    },
    {
        "AbsEntry": 4426,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B12-1"
    },
    {
        "AbsEntry": 4427,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B12-2"
    },
    {
        "AbsEntry": 4428,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B12-3"
    },
    {
        "AbsEntry": 4430,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B13-1"
    },
    {
        "AbsEntry": 4431,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B13-2"
    },
    {
        "AbsEntry": 4432,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B13-3"
    },
    {
        "AbsEntry": 4434,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B14-1"
    },
    {
        "AbsEntry": 4435,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B14-2"
    },
    {
        "AbsEntry": 4436,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B14-3"
    },
    {
        "AbsEntry": 4438,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B15-1"
    },
    {
        "AbsEntry": 4439,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B15-2"
    },
    {
        "AbsEntry": 4440,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B15-3"
    },
    {
        "AbsEntry": 4442,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B16-1"
    },
    {
        "AbsEntry": 4443,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B16-2"
    },
    {
        "AbsEntry": 4444,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B16-3"
    },
    {
        "AbsEntry": 4446,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B17-1"
    },
    {
        "AbsEntry": 4447,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B17-2"
    },
    {
        "AbsEntry": 4448,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B17-3"
    },
    {
        "AbsEntry": 4450,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B18-1"
    },
    {
        "AbsEntry": 4451,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B18-2"
    },
    {
        "AbsEntry": 4452,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B18-3"
    },
    {
        "AbsEntry": 4454,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B19-1"
    },
    {
        "AbsEntry": 4455,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B19-2"
    },
    {
        "AbsEntry": 4456,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B19-3"
    },
    {
        "AbsEntry": 4458,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B20-1"
    },
    {
        "AbsEntry": 4459,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B20-2"
    },
    {
        "AbsEntry": 4460,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B20-3"
    },
    {
        "AbsEntry": 4462,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B21-1"
    },
    {
        "AbsEntry": 4463,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B21-2"
    },
    {
        "AbsEntry": 4464,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B21-3"
    },
    {
        "AbsEntry": 4466,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B22-1"
    },
    {
        "AbsEntry": 4467,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B22-2"
    },
    {
        "AbsEntry": 4468,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B22-3"
    },
    {
        "AbsEntry": 4470,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B23-1"
    },
    {
        "AbsEntry": 4471,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B23-2"
    },
    {
        "AbsEntry": 4472,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B23-3"
    },
    {
        "AbsEntry": 4474,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B24-1"
    },
    {
        "AbsEntry": 4475,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B24-2"
    },
    {
        "AbsEntry": 4476,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B24-3"
    },
    {
        "AbsEntry": 4478,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B25-1"
    },
    {
        "AbsEntry": 4479,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B25-2"
    },
    {
        "AbsEntry": 4480,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B25-3"
    },
    {
        "AbsEntry": 4482,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B26-1"
    },
    {
        "AbsEntry": 4483,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B26-2"
    },
    {
        "AbsEntry": 4484,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B26-3"
    },
    {
        "AbsEntry": 4486,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B27-1"
    },
    {
        "AbsEntry": 4487,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B27-2"
    },
    {
        "AbsEntry": 4488,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B27-3"
    },
    {
        "AbsEntry": 4490,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B28-1"
    },
    {
        "AbsEntry": 4491,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B28-2"
    },
    {
        "AbsEntry": 4492,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B28-3"
    },
    {
        "AbsEntry": 4494,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B29-1"
    },
    {
        "AbsEntry": 4495,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B29-2"
    },
    {
        "AbsEntry": 4496,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B29-3"
    },
    {
        "AbsEntry": 4498,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B30-1"
    },
    {
        "AbsEntry": 4499,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B30-2"
    },
    {
        "AbsEntry": 4500,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B30-3"
    },
    {
        "AbsEntry": 4502,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B31-1"
    },
    {
        "AbsEntry": 4503,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B31-2"
    },
    {
        "AbsEntry": 4504,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B31-3"
    },
    {
        "AbsEntry": 4506,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B32-1"
    },
    {
        "AbsEntry": 4507,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B32-2"
    },
    {
        "AbsEntry": 4508,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B32-3"
    },
    {
        "AbsEntry": 4510,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B33-1"
    },
    {
        "AbsEntry": 4511,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B33-2"
    },
    {
        "AbsEntry": 4512,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B33-3"
    },
    {
        "AbsEntry": 4514,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B34-1"
    },
    {
        "AbsEntry": 4515,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B34-2"
    },
    {
        "AbsEntry": 4516,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B34-3"
    },
    {
        "AbsEntry": 4518,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B35-1"
    },
    {
        "AbsEntry": 4519,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B35-2"
    },
    {
        "AbsEntry": 4520,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B35-3"
    },
    {
        "AbsEntry": 4522,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B36-1"
    },
    {
        "AbsEntry": 4523,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B36-2"
    },
    {
        "AbsEntry": 4524,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B36-3"
    },
    {
        "AbsEntry": 4526,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B37-1"
    },
    {
        "AbsEntry": 4527,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B37-2"
    },
    {
        "AbsEntry": 4528,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B37-3"
    },
    {
        "AbsEntry": 4530,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B38-1"
    },
    {
        "AbsEntry": 4531,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B38-2"
    },
    {
        "AbsEntry": 4532,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B38-3"
    },
    {
        "AbsEntry": 4534,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B39-1"
    },
    {
        "AbsEntry": 4535,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B39-2"
    },
    {
        "AbsEntry": 4536,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B39-3"
    },
    {
        "AbsEntry": 4538,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B40-1"
    },
    {
        "AbsEntry": 4539,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B40-2"
    },
    {
        "AbsEntry": 4540,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3B40-3"
    },
    {
        "AbsEntry": 4542,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C01-1"
    },
    {
        "AbsEntry": 4543,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C01-2"
    },
    {
        "AbsEntry": 4544,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C01-3"
    },
    {
        "AbsEntry": 4546,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C02-1"
    },
    {
        "AbsEntry": 4547,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C02-2"
    },
    {
        "AbsEntry": 4548,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C02-3"
    },
    {
        "AbsEntry": 4550,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C03-1"
    },
    {
        "AbsEntry": 4551,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C03-2"
    },
    {
        "AbsEntry": 4552,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C03-3"
    },
    {
        "AbsEntry": 4554,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C04-1"
    },
    {
        "AbsEntry": 4555,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C04-2"
    },
    {
        "AbsEntry": 4556,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C04-3"
    },
    {
        "AbsEntry": 4558,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C05-1"
    },
    {
        "AbsEntry": 4559,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C05-2"
    },
    {
        "AbsEntry": 4560,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C05-3"
    },
    {
        "AbsEntry": 4562,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C06-1"
    },
    {
        "AbsEntry": 4563,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C06-2"
    },
    {
        "AbsEntry": 4564,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C06-3"
    },
    {
        "AbsEntry": 4566,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C07-1"
    },
    {
        "AbsEntry": 4567,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C07-2"
    },
    {
        "AbsEntry": 4568,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C07-3"
    },
    {
        "AbsEntry": 4570,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C08-1"
    },
    {
        "AbsEntry": 4571,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C08-2"
    },
    {
        "AbsEntry": 4572,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C08-3"
    },
    {
        "AbsEntry": 4574,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C09-1"
    },
    {
        "AbsEntry": 4575,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C09-2"
    },
    {
        "AbsEntry": 4576,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C09-3"
    },
    {
        "AbsEntry": 4578,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C10-1"
    },
    {
        "AbsEntry": 4579,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C10-2"
    },
    {
        "AbsEntry": 4580,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C10-3"
    },
    {
        "AbsEntry": 4582,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C11-1"
    },
    {
        "AbsEntry": 4583,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C11-2"
    },
    {
        "AbsEntry": 4584,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C11-3"
    },
    {
        "AbsEntry": 4586,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C12-1"
    },
    {
        "AbsEntry": 4587,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C12-2"
    },
    {
        "AbsEntry": 4588,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C12-3"
    },
    {
        "AbsEntry": 4590,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C13-1"
    },
    {
        "AbsEntry": 4591,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C13-2"
    },
    {
        "AbsEntry": 4592,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C13-3"
    },
    {
        "AbsEntry": 4594,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C14-1"
    },
    {
        "AbsEntry": 4595,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C14-2"
    },
    {
        "AbsEntry": 4596,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C14-3"
    },
    {
        "AbsEntry": 4598,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C15-1"
    },
    {
        "AbsEntry": 4599,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C15-2"
    },
    {
        "AbsEntry": 4600,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C15-3"
    },
    {
        "AbsEntry": 4602,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C16-1"
    },
    {
        "AbsEntry": 4603,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C16-2"
    },
    {
        "AbsEntry": 4604,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C16-3"
    },
    {
        "AbsEntry": 4606,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C17-1"
    },
    {
        "AbsEntry": 4607,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C17-2"
    },
    {
        "AbsEntry": 4608,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C17-3"
    },
    {
        "AbsEntry": 4610,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C18-1"
    },
    {
        "AbsEntry": 4611,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C18-2"
    },
    {
        "AbsEntry": 4612,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C18-3"
    },
    {
        "AbsEntry": 4614,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C19-1"
    },
    {
        "AbsEntry": 4615,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C19-2"
    },
    {
        "AbsEntry": 4616,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C19-3"
    },
    {
        "AbsEntry": 4618,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C20-1"
    },
    {
        "AbsEntry": 4619,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C20-2"
    },
    {
        "AbsEntry": 4620,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C20-3"
    },
    {
        "AbsEntry": 4622,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C21-1"
    },
    {
        "AbsEntry": 4623,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C21-2"
    },
    {
        "AbsEntry": 4624,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C21-3"
    },
    {
        "AbsEntry": 4626,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C22-1"
    },
    {
        "AbsEntry": 4627,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C22-2"
    },
    {
        "AbsEntry": 4628,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C22-3"
    },
    {
        "AbsEntry": 4630,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C23-1"
    },
    {
        "AbsEntry": 4631,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C23-2"
    },
    {
        "AbsEntry": 4632,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C23-3"
    },
    {
        "AbsEntry": 4634,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C24-1"
    },
    {
        "AbsEntry": 4635,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C24-2"
    },
    {
        "AbsEntry": 4636,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C24-3"
    },
    {
        "AbsEntry": 4638,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C25-1"
    },
    {
        "AbsEntry": 4639,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C25-2"
    },
    {
        "AbsEntry": 4640,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C25-3"
    },
    {
        "AbsEntry": 4642,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C26-1"
    },
    {
        "AbsEntry": 4643,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C26-2"
    },
    {
        "AbsEntry": 4644,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C26-3"
    },
    {
        "AbsEntry": 4646,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C27-1"
    },
    {
        "AbsEntry": 4647,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C27-2"
    },
    {
        "AbsEntry": 4648,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C27-3"
    },
    {
        "AbsEntry": 4650,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C28-1"
    },
    {
        "AbsEntry": 4651,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C28-2"
    },
    {
        "AbsEntry": 4652,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C28-3"
    },
    {
        "AbsEntry": 4654,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C29-1"
    },
    {
        "AbsEntry": 4655,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C29-2"
    },
    {
        "AbsEntry": 4656,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C29-3"
    },
    {
        "AbsEntry": 4658,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C30-1"
    },
    {
        "AbsEntry": 4659,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C30-2"
    },
    {
        "AbsEntry": 4660,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C30-3"
    },
    {
        "AbsEntry": 4662,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C31-1"
    },
    {
        "AbsEntry": 4663,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C31-2"
    },
    {
        "AbsEntry": 4664,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C31-3"
    },
    {
        "AbsEntry": 4666,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C32-1"
    },
    {
        "AbsEntry": 4667,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C32-2"
    },
    {
        "AbsEntry": 4668,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C32-3"
    },
    {
        "AbsEntry": 4670,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C33-1"
    },
    {
        "AbsEntry": 4671,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C33-2"
    },
    {
        "AbsEntry": 4672,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C33-3"
    },
    {
        "AbsEntry": 4674,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C34-1"
    },
    {
        "AbsEntry": 4675,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C34-2"
    },
    {
        "AbsEntry": 4676,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C34-3"
    },
    {
        "AbsEntry": 4678,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C35-1"
    },
    {
        "AbsEntry": 4679,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C35-2"
    },
    {
        "AbsEntry": 4680,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C35-3"
    },
    {
        "AbsEntry": 4682,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C36-1"
    },
    {
        "AbsEntry": 4683,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C36-2"
    },
    {
        "AbsEntry": 4684,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C36-3"
    },
    {
        "AbsEntry": 4686,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C37-1"
    },
    {
        "AbsEntry": 4687,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C37-2"
    },
    {
        "AbsEntry": 4688,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C37-3"
    },
    {
        "AbsEntry": 4690,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C38-1"
    },
    {
        "AbsEntry": 4691,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C38-2"
    },
    {
        "AbsEntry": 4692,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C38-3"
    },
    {
        "AbsEntry": 4694,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C39-1"
    },
    {
        "AbsEntry": 4695,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C39-2"
    },
    {
        "AbsEntry": 4696,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C39-3"
    },
    {
        "AbsEntry": 4698,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C40-1"
    },
    {
        "AbsEntry": 4699,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C40-2"
    },
    {
        "AbsEntry": 4700,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3C40-3"
    },
    {
        "AbsEntry": 4702,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D01-1"
    },
    {
        "AbsEntry": 4703,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D01-2"
    },
    {
        "AbsEntry": 4704,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D01-3"
    },
    {
        "AbsEntry": 4706,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D02-1"
    },
    {
        "AbsEntry": 4707,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D02-2"
    },
    {
        "AbsEntry": 4708,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D02-3"
    },
    {
        "AbsEntry": 4710,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D03-1"
    },
    {
        "AbsEntry": 4711,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D03-2"
    },
    {
        "AbsEntry": 4712,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D03-3"
    },
    {
        "AbsEntry": 4714,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D04-1"
    },
    {
        "AbsEntry": 4715,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D04-2"
    },
    {
        "AbsEntry": 4716,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D04-3"
    },
    {
        "AbsEntry": 4718,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D05-1"
    },
    {
        "AbsEntry": 4719,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D05-2"
    },
    {
        "AbsEntry": 4720,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D05-3"
    },
    {
        "AbsEntry": 4722,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D06-1"
    },
    {
        "AbsEntry": 4723,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D06-2"
    },
    {
        "AbsEntry": 4724,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D06-3"
    },
    {
        "AbsEntry": 4726,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D07-1"
    },
    {
        "AbsEntry": 4727,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D07-2"
    },
    {
        "AbsEntry": 4728,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D07-3"
    },
    {
        "AbsEntry": 4730,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D08-1"
    },
    {
        "AbsEntry": 4731,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D08-2"
    },
    {
        "AbsEntry": 4732,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D08-3"
    },
    {
        "AbsEntry": 4734,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D09-1"
    },
    {
        "AbsEntry": 4735,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D09-2"
    },
    {
        "AbsEntry": 4736,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D09-3"
    },
    {
        "AbsEntry": 4738,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D10-1"
    },
    {
        "AbsEntry": 4739,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D10-2"
    },
    {
        "AbsEntry": 4740,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D10-3"
    },
    {
        "AbsEntry": 4742,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D11-1"
    },
    {
        "AbsEntry": 4743,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D11-2"
    },
    {
        "AbsEntry": 4744,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D11-3"
    },
    {
        "AbsEntry": 4746,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D12-1"
    },
    {
        "AbsEntry": 4747,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D12-2"
    },
    {
        "AbsEntry": 4748,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D12-3"
    },
    {
        "AbsEntry": 4750,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D13-1"
    },
    {
        "AbsEntry": 4751,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D13-2"
    },
    {
        "AbsEntry": 4752,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D13-3"
    },
    {
        "AbsEntry": 4754,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D14-1"
    },
    {
        "AbsEntry": 4755,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D14-2"
    },
    {
        "AbsEntry": 4756,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D14-3"
    },
    {
        "AbsEntry": 4758,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D15-1"
    },
    {
        "AbsEntry": 4759,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D15-2"
    },
    {
        "AbsEntry": 4760,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D15-3"
    },
    {
        "AbsEntry": 4762,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D16-1"
    },
    {
        "AbsEntry": 4763,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D16-2"
    },
    {
        "AbsEntry": 4764,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D16-3"
    },
    {
        "AbsEntry": 4766,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D17-1"
    },
    {
        "AbsEntry": 4767,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D17-2"
    },
    {
        "AbsEntry": 4768,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D17-3"
    },
    {
        "AbsEntry": 4770,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D18-1"
    },
    {
        "AbsEntry": 4771,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D18-2"
    },
    {
        "AbsEntry": 4772,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D18-3"
    },
    {
        "AbsEntry": 4774,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D19-1"
    },
    {
        "AbsEntry": 4775,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D19-2"
    },
    {
        "AbsEntry": 4776,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D19-3"
    },
    {
        "AbsEntry": 4778,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D20-1"
    },
    {
        "AbsEntry": 4779,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D20-2"
    },
    {
        "AbsEntry": 4780,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D20-3"
    },
    {
        "AbsEntry": 4782,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D21-1"
    },
    {
        "AbsEntry": 4783,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D21-2"
    },
    {
        "AbsEntry": 4784,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D21-3"
    },
    {
        "AbsEntry": 4786,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D22-1"
    },
    {
        "AbsEntry": 4787,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D22-2"
    },
    {
        "AbsEntry": 4788,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D22-3"
    },
    {
        "AbsEntry": 4790,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D23-1"
    },
    {
        "AbsEntry": 4791,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D23-2"
    },
    {
        "AbsEntry": 4792,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D23-3"
    },
    {
        "AbsEntry": 4794,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D24-1"
    },
    {
        "AbsEntry": 4795,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D24-2"
    },
    {
        "AbsEntry": 4796,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D24-3"
    },
    {
        "AbsEntry": 4798,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D25-1"
    },
    {
        "AbsEntry": 4799,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D25-2"
    },
    {
        "AbsEntry": 4800,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D25-3"
    },
    {
        "AbsEntry": 4802,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D26-1"
    },
    {
        "AbsEntry": 4803,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D26-2"
    },
    {
        "AbsEntry": 4804,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D26-3"
    },
    {
        "AbsEntry": 4806,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D27-1"
    },
    {
        "AbsEntry": 4807,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D27-2"
    },
    {
        "AbsEntry": 4808,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D27-3"
    },
    {
        "AbsEntry": 4810,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D28-1"
    },
    {
        "AbsEntry": 4811,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D28-2"
    },
    {
        "AbsEntry": 4812,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D28-3"
    },
    {
        "AbsEntry": 4814,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D29-1"
    },
    {
        "AbsEntry": 4815,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D29-2"
    },
    {
        "AbsEntry": 4816,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D29-3"
    },
    {
        "AbsEntry": 4818,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D30-1"
    },
    {
        "AbsEntry": 4819,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D30-2"
    },
    {
        "AbsEntry": 4820,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D30-3"
    },
    {
        "AbsEntry": 4822,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D31-1"
    },
    {
        "AbsEntry": 4823,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D31-2"
    },
    {
        "AbsEntry": 4824,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D31-3"
    },
    {
        "AbsEntry": 4826,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D32-1"
    },
    {
        "AbsEntry": 4827,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D32-2"
    },
    {
        "AbsEntry": 4828,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D32-3"
    },
    {
        "AbsEntry": 4830,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D33-1"
    },
    {
        "AbsEntry": 4831,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D33-2"
    },
    {
        "AbsEntry": 4832,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D33-3"
    },
    {
        "AbsEntry": 4834,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D34-1"
    },
    {
        "AbsEntry": 4835,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D34-2"
    },
    {
        "AbsEntry": 4836,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D34-3"
    },
    {
        "AbsEntry": 4838,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D35-1"
    },
    {
        "AbsEntry": 4839,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D35-2"
    },
    {
        "AbsEntry": 4840,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D35-3"
    },
    {
        "AbsEntry": 4842,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D36-1"
    },
    {
        "AbsEntry": 4843,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D36-2"
    },
    {
        "AbsEntry": 4844,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D36-3"
    },
    {
        "AbsEntry": 4846,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D37-1"
    },
    {
        "AbsEntry": 4847,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D37-2"
    },
    {
        "AbsEntry": 4848,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D37-3"
    },
    {
        "AbsEntry": 4850,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D38-1"
    },
    {
        "AbsEntry": 4851,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D38-2"
    },
    {
        "AbsEntry": 4852,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D38-3"
    },
    {
        "AbsEntry": 4854,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D39-1"
    },
    {
        "AbsEntry": 4855,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D39-2"
    },
    {
        "AbsEntry": 4856,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D39-3"
    },
    {
        "AbsEntry": 4858,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D40-1"
    },
    {
        "AbsEntry": 4859,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D40-2"
    },
    {
        "AbsEntry": 4860,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3D40-3"
    },
    {
        "AbsEntry": 4862,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E01-1"
    },
    {
        "AbsEntry": 4863,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E01-2"
    },
    {
        "AbsEntry": 4864,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E01-3"
    },
    {
        "AbsEntry": 4866,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E02-1"
    },
    {
        "AbsEntry": 4867,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E02-2"
    },
    {
        "AbsEntry": 4868,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E02-3"
    },
    {
        "AbsEntry": 4870,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E03-1"
    },
    {
        "AbsEntry": 4871,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E03-2"
    },
    {
        "AbsEntry": 4872,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E03-3"
    },
    {
        "AbsEntry": 4874,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E04-1"
    },
    {
        "AbsEntry": 4875,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E04-2"
    },
    {
        "AbsEntry": 4876,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E04-3"
    },
    {
        "AbsEntry": 4878,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E05-1"
    },
    {
        "AbsEntry": 4879,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E05-2"
    },
    {
        "AbsEntry": 4880,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E05-3"
    },
    {
        "AbsEntry": 4882,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E06-1"
    },
    {
        "AbsEntry": 4883,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E06-2"
    },
    {
        "AbsEntry": 4884,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E06-3"
    },
    {
        "AbsEntry": 4886,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E07-1"
    },
    {
        "AbsEntry": 4887,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E07-2"
    },
    {
        "AbsEntry": 4888,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E07-3"
    },
    {
        "AbsEntry": 4890,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E08-1"
    },
    {
        "AbsEntry": 4891,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E08-2"
    },
    {
        "AbsEntry": 4892,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E08-3"
    },
    {
        "AbsEntry": 4894,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E09-1"
    },
    {
        "AbsEntry": 4895,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E09-2"
    },
    {
        "AbsEntry": 4896,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E09-3"
    },
    {
        "AbsEntry": 4898,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E10-1"
    },
    {
        "AbsEntry": 4899,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E10-2"
    },
    {
        "AbsEntry": 4900,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E10-3"
    },
    {
        "AbsEntry": 4902,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E11-1"
    },
    {
        "AbsEntry": 4903,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E11-2"
    },
    {
        "AbsEntry": 4904,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E11-3"
    },
    {
        "AbsEntry": 4906,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E12-1"
    },
    {
        "AbsEntry": 4907,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E12-2"
    },
    {
        "AbsEntry": 4908,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E12-3"
    },
    {
        "AbsEntry": 4910,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E13-1"
    },
    {
        "AbsEntry": 4911,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E13-2"
    },
    {
        "AbsEntry": 4912,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E13-3"
    },
    {
        "AbsEntry": 4914,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E14-1"
    },
    {
        "AbsEntry": 4915,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E14-2"
    },
    {
        "AbsEntry": 4916,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E14-3"
    },
    {
        "AbsEntry": 4918,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E15-1"
    },
    {
        "AbsEntry": 4919,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E15-2"
    },
    {
        "AbsEntry": 4920,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E15-3"
    },
    {
        "AbsEntry": 4922,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E16-1"
    },
    {
        "AbsEntry": 4923,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E16-2"
    },
    {
        "AbsEntry": 4924,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E16-3"
    },
    {
        "AbsEntry": 4926,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E17-1"
    },
    {
        "AbsEntry": 4927,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E17-2"
    },
    {
        "AbsEntry": 4928,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E17-3"
    },
    {
        "AbsEntry": 4930,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E18-1"
    },
    {
        "AbsEntry": 4931,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E18-2"
    },
    {
        "AbsEntry": 4932,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E18-3"
    },
    {
        "AbsEntry": 4934,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E19-1"
    },
    {
        "AbsEntry": 4935,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E19-2"
    },
    {
        "AbsEntry": 4936,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E19-3"
    },
    {
        "AbsEntry": 4938,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E20-1"
    },
    {
        "AbsEntry": 4939,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E20-2"
    },
    {
        "AbsEntry": 4940,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E20-3"
    },
    {
        "AbsEntry": 4942,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E21-1"
    },
    {
        "AbsEntry": 4943,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E21-2"
    },
    {
        "AbsEntry": 4944,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E21-3"
    },
    {
        "AbsEntry": 4946,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E22-1"
    },
    {
        "AbsEntry": 4947,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E22-2"
    },
    {
        "AbsEntry": 4948,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E22-3"
    },
    {
        "AbsEntry": 4950,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E23-1"
    },
    {
        "AbsEntry": 4951,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E23-2"
    },
    {
        "AbsEntry": 4952,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E23-3"
    },
    {
        "AbsEntry": 4954,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E24-1"
    },
    {
        "AbsEntry": 4955,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E24-2"
    },
    {
        "AbsEntry": 4956,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E24-3"
    },
    {
        "AbsEntry": 4958,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E25-1"
    },
    {
        "AbsEntry": 4959,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E25-2"
    },
    {
        "AbsEntry": 4960,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E25-3"
    },
    {
        "AbsEntry": 4962,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E26-1"
    },
    {
        "AbsEntry": 4963,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E26-2"
    },
    {
        "AbsEntry": 4964,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E26-3"
    },
    {
        "AbsEntry": 4966,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E27-1"
    },
    {
        "AbsEntry": 4967,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E27-2"
    },
    {
        "AbsEntry": 4968,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E27-3"
    },
    {
        "AbsEntry": 4970,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E28-1"
    },
    {
        "AbsEntry": 4971,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E28-2"
    },
    {
        "AbsEntry": 4972,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E28-3"
    },
    {
        "AbsEntry": 4974,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E29-1"
    },
    {
        "AbsEntry": 4975,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E29-2"
    },
    {
        "AbsEntry": 4976,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E29-3"
    },
    {
        "AbsEntry": 4978,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E30-1"
    },
    {
        "AbsEntry": 4979,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E30-2"
    },
    {
        "AbsEntry": 4980,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E30-3"
    },
    {
        "AbsEntry": 4982,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E31-1"
    },
    {
        "AbsEntry": 4983,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E31-2"
    },
    {
        "AbsEntry": 4984,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E31-3"
    },
    {
        "AbsEntry": 4986,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E32-1"
    },
    {
        "AbsEntry": 4987,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E32-2"
    },
    {
        "AbsEntry": 4988,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E32-3"
    },
    {
        "AbsEntry": 4990,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E33-1"
    },
    {
        "AbsEntry": 4991,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E33-2"
    },
    {
        "AbsEntry": 4992,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E33-3"
    },
    {
        "AbsEntry": 4994,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E34-1"
    },
    {
        "AbsEntry": 4995,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E34-2"
    },
    {
        "AbsEntry": 4996,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E34-3"
    },
    {
        "AbsEntry": 4998,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E35-1"
    },
    {
        "AbsEntry": 4999,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E35-2"
    },
    {
        "AbsEntry": 5000,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E35-3"
    },
    {
        "AbsEntry": 5002,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E36-1"
    },
    {
        "AbsEntry": 5003,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E36-2"
    },
    {
        "AbsEntry": 5004,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E36-3"
    },
    {
        "AbsEntry": 5006,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E37-1"
    },
    {
        "AbsEntry": 5007,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E37-2"
    },
    {
        "AbsEntry": 5008,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E37-3"
    },
    {
        "AbsEntry": 5010,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E38-1"
    },
    {
        "AbsEntry": 5011,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E38-2"
    },
    {
        "AbsEntry": 5012,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E38-3"
    },
    {
        "AbsEntry": 5014,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E39-1"
    },
    {
        "AbsEntry": 5015,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E39-2"
    },
    {
        "AbsEntry": 5016,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E39-3"
    },
    {
        "AbsEntry": 5018,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E40-1"
    },
    {
        "AbsEntry": 5019,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E40-2"
    },
    {
        "AbsEntry": 5020,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3E40-3"
    },
    {
        "AbsEntry": 5022,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F01-1"
    },
    {
        "AbsEntry": 5023,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F01-2"
    },
    {
        "AbsEntry": 5024,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F01-3"
    },
    {
        "AbsEntry": 5026,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F02-1"
    },
    {
        "AbsEntry": 5027,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F02-2"
    },
    {
        "AbsEntry": 5028,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F02-3"
    },
    {
        "AbsEntry": 5030,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F03-1"
    },
    {
        "AbsEntry": 5031,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F03-2"
    },
    {
        "AbsEntry": 5032,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F03-3"
    },
    {
        "AbsEntry": 5034,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F04-1"
    },
    {
        "AbsEntry": 5035,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F04-2"
    },
    {
        "AbsEntry": 5036,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F04-3"
    },
    {
        "AbsEntry": 5038,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F05-1"
    },
    {
        "AbsEntry": 5039,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F05-2"
    },
    {
        "AbsEntry": 5040,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F05-3"
    },
    {
        "AbsEntry": 5042,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F06-1"
    },
    {
        "AbsEntry": 5043,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F06-2"
    },
    {
        "AbsEntry": 5044,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F06-3"
    },
    {
        "AbsEntry": 5046,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F07-1"
    },
    {
        "AbsEntry": 5047,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F07-2"
    },
    {
        "AbsEntry": 5048,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F07-3"
    },
    {
        "AbsEntry": 5050,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F08-1"
    },
    {
        "AbsEntry": 5051,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F08-2"
    },
    {
        "AbsEntry": 5052,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F08-3"
    },
    {
        "AbsEntry": 5054,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F09-1"
    },
    {
        "AbsEntry": 5055,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F09-2"
    },
    {
        "AbsEntry": 5056,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F09-3"
    },
    {
        "AbsEntry": 5058,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F10-1"
    },
    {
        "AbsEntry": 5059,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F10-2"
    },
    {
        "AbsEntry": 5060,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F10-3"
    },
    {
        "AbsEntry": 5062,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F11-1"
    },
    {
        "AbsEntry": 5063,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F11-2"
    },
    {
        "AbsEntry": 5064,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F11-3"
    },
    {
        "AbsEntry": 5066,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F12-1"
    },
    {
        "AbsEntry": 5067,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F12-2"
    },
    {
        "AbsEntry": 5068,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F12-3"
    },
    {
        "AbsEntry": 5070,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F13-1"
    },
    {
        "AbsEntry": 5071,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F13-2"
    },
    {
        "AbsEntry": 5072,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F13-3"
    },
    {
        "AbsEntry": 5074,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F14-1"
    },
    {
        "AbsEntry": 5075,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F14-2"
    },
    {
        "AbsEntry": 5076,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F14-3"
    },
    {
        "AbsEntry": 5078,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F15-1"
    },
    {
        "AbsEntry": 5079,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F15-2"
    },
    {
        "AbsEntry": 5080,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F15-3"
    },
    {
        "AbsEntry": 5082,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F16-1"
    },
    {
        "AbsEntry": 5083,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F16-2"
    },
    {
        "AbsEntry": 5084,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F16-3"
    },
    {
        "AbsEntry": 5086,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F17-1"
    },
    {
        "AbsEntry": 5087,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F17-2"
    },
    {
        "AbsEntry": 5088,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F17-3"
    },
    {
        "AbsEntry": 5090,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F18-1"
    },
    {
        "AbsEntry": 5091,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F18-2"
    },
    {
        "AbsEntry": 5092,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F18-3"
    },
    {
        "AbsEntry": 5094,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F19-1"
    },
    {
        "AbsEntry": 5095,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F19-2"
    },
    {
        "AbsEntry": 5096,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F19-3"
    },
    {
        "AbsEntry": 5098,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F20-1"
    },
    {
        "AbsEntry": 5099,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F20-2"
    },
    {
        "AbsEntry": 5100,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F20-3"
    },
    {
        "AbsEntry": 5102,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F21-1"
    },
    {
        "AbsEntry": 5103,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F21-2"
    },
    {
        "AbsEntry": 5104,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F21-3"
    },
    {
        "AbsEntry": 5106,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F22-1"
    },
    {
        "AbsEntry": 5107,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F22-2"
    },
    {
        "AbsEntry": 5108,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F22-3"
    },
    {
        "AbsEntry": 5110,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F23-1"
    },
    {
        "AbsEntry": 5111,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F23-2"
    },
    {
        "AbsEntry": 5112,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F23-3"
    },
    {
        "AbsEntry": 5114,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F24-1"
    },
    {
        "AbsEntry": 5115,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F24-2"
    },
    {
        "AbsEntry": 5116,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F24-3"
    },
    {
        "AbsEntry": 5118,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F25-1"
    },
    {
        "AbsEntry": 5119,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F25-2"
    },
    {
        "AbsEntry": 5120,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F25-3"
    },
    {
        "AbsEntry": 5122,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F26-1"
    },
    {
        "AbsEntry": 5123,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F26-2"
    },
    {
        "AbsEntry": 5124,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F26-3"
    },
    {
        "AbsEntry": 5126,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F27-1"
    },
    {
        "AbsEntry": 5127,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F27-2"
    },
    {
        "AbsEntry": 5128,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F27-3"
    },
    {
        "AbsEntry": 5130,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F28-1"
    },
    {
        "AbsEntry": 5131,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F28-2"
    },
    {
        "AbsEntry": 5132,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F28-3"
    },
    {
        "AbsEntry": 5134,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F29-1"
    },
    {
        "AbsEntry": 5135,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F29-2"
    },
    {
        "AbsEntry": 5136,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F29-3"
    },
    {
        "AbsEntry": 5138,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F30-1"
    },
    {
        "AbsEntry": 5139,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F30-2"
    },
    {
        "AbsEntry": 5140,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F30-3"
    },
    {
        "AbsEntry": 5142,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F31-1"
    },
    {
        "AbsEntry": 5143,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F31-2"
    },
    {
        "AbsEntry": 5144,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F31-3"
    },
    {
        "AbsEntry": 5146,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F32-1"
    },
    {
        "AbsEntry": 5147,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F32-2"
    },
    {
        "AbsEntry": 5148,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F32-3"
    },
    {
        "AbsEntry": 5150,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F33-1"
    },
    {
        "AbsEntry": 5151,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F33-2"
    },
    {
        "AbsEntry": 5152,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F33-3"
    },
    {
        "AbsEntry": 5154,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F34-1"
    },
    {
        "AbsEntry": 5155,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F34-2"
    },
    {
        "AbsEntry": 5156,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F34-3"
    },
    {
        "AbsEntry": 5158,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F35-1"
    },
    {
        "AbsEntry": 5159,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F35-2"
    },
    {
        "AbsEntry": 5160,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F35-3"
    },
    {
        "AbsEntry": 5162,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F36-1"
    },
    {
        "AbsEntry": 5163,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F36-2"
    },
    {
        "AbsEntry": 5164,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F36-3"
    },
    {
        "AbsEntry": 5166,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F37-1"
    },
    {
        "AbsEntry": 5167,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F37-2"
    },
    {
        "AbsEntry": 5168,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F37-3"
    },
    {
        "AbsEntry": 5170,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F38-1"
    },
    {
        "AbsEntry": 5171,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F38-2"
    },
    {
        "AbsEntry": 5172,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F38-3"
    },
    {
        "AbsEntry": 5174,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F39-1"
    },
    {
        "AbsEntry": 5175,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F39-2"
    },
    {
        "AbsEntry": 5176,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F39-3"
    },
    {
        "AbsEntry": 5178,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F40-1"
    },
    {
        "AbsEntry": 5179,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F40-2"
    },
    {
        "AbsEntry": 5180,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3F40-3"
    },
    {
        "AbsEntry": 5182,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G01-1"
    },
    {
        "AbsEntry": 5183,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G01-2"
    },
    {
        "AbsEntry": 5184,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G01-3"
    },
    {
        "AbsEntry": 5186,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G02-1"
    },
    {
        "AbsEntry": 5187,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G02-2"
    },
    {
        "AbsEntry": 5188,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G02-3"
    },
    {
        "AbsEntry": 5190,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G03-1"
    },
    {
        "AbsEntry": 5191,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G03-2"
    },
    {
        "AbsEntry": 5192,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G03-3"
    },
    {
        "AbsEntry": 5194,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G04-1"
    },
    {
        "AbsEntry": 5195,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G04-2"
    },
    {
        "AbsEntry": 5196,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G04-3"
    },
    {
        "AbsEntry": 5198,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G05-1"
    },
    {
        "AbsEntry": 5199,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G05-2"
    },
    {
        "AbsEntry": 5200,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G05-3"
    },
    {
        "AbsEntry": 5202,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G06-1"
    },
    {
        "AbsEntry": 5203,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G06-2"
    },
    {
        "AbsEntry": 5204,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G06-3"
    },
    {
        "AbsEntry": 5206,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G07-1"
    },
    {
        "AbsEntry": 5207,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G07-2"
    },
    {
        "AbsEntry": 5208,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G07-3"
    },
    {
        "AbsEntry": 5210,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G08-1"
    },
    {
        "AbsEntry": 5211,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G08-2"
    },
    {
        "AbsEntry": 5212,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G08-3"
    },
    {
        "AbsEntry": 5214,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G09-1"
    },
    {
        "AbsEntry": 5215,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G09-2"
    },
    {
        "AbsEntry": 5216,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G09-3"
    },
    {
        "AbsEntry": 5218,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G10-1"
    },
    {
        "AbsEntry": 5219,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G10-2"
    },
    {
        "AbsEntry": 5220,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G10-3"
    },
    {
        "AbsEntry": 5222,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G11-1"
    },
    {
        "AbsEntry": 5223,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G11-2"
    },
    {
        "AbsEntry": 5224,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G11-3"
    },
    {
        "AbsEntry": 5226,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G12-1"
    },
    {
        "AbsEntry": 5227,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G12-2"
    },
    {
        "AbsEntry": 5228,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G12-3"
    },
    {
        "AbsEntry": 5230,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G13-1"
    },
    {
        "AbsEntry": 5231,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G13-2"
    },
    {
        "AbsEntry": 5232,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G13-3"
    },
    {
        "AbsEntry": 5234,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G14-1"
    },
    {
        "AbsEntry": 5235,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G14-2"
    },
    {
        "AbsEntry": 5236,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G14-3"
    },
    {
        "AbsEntry": 5238,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G15-1"
    },
    {
        "AbsEntry": 5239,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G15-2"
    },
    {
        "AbsEntry": 5240,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G15-3"
    },
    {
        "AbsEntry": 5242,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G16-1"
    },
    {
        "AbsEntry": 5243,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G16-2"
    },
    {
        "AbsEntry": 5244,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G16-3"
    },
    {
        "AbsEntry": 5246,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G17-1"
    },
    {
        "AbsEntry": 5247,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G17-2"
    },
    {
        "AbsEntry": 5248,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G17-3"
    },
    {
        "AbsEntry": 5250,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G18-1"
    },
    {
        "AbsEntry": 5251,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G18-2"
    },
    {
        "AbsEntry": 5252,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G18-3"
    },
    {
        "AbsEntry": 5254,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G19-1"
    },
    {
        "AbsEntry": 5255,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G19-2"
    },
    {
        "AbsEntry": 5256,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G19-3"
    },
    {
        "AbsEntry": 5258,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G20-1"
    },
    {
        "AbsEntry": 5259,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G20-2"
    },
    {
        "AbsEntry": 5260,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G20-3"
    },
    {
        "AbsEntry": 5262,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G21-1"
    },
    {
        "AbsEntry": 5263,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G21-2"
    },
    {
        "AbsEntry": 5264,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G21-3"
    },
    {
        "AbsEntry": 5266,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G22-1"
    },
    {
        "AbsEntry": 5267,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G22-2"
    },
    {
        "AbsEntry": 5268,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G22-3"
    },
    {
        "AbsEntry": 5270,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G23-1"
    },
    {
        "AbsEntry": 5271,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G23-2"
    },
    {
        "AbsEntry": 5272,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G23-3"
    },
    {
        "AbsEntry": 5274,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G24-1"
    },
    {
        "AbsEntry": 5275,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G24-2"
    },
    {
        "AbsEntry": 5276,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G24-3"
    },
    {
        "AbsEntry": 5278,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G25-1"
    },
    {
        "AbsEntry": 5279,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G25-2"
    },
    {
        "AbsEntry": 5280,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G25-3"
    },
    {
        "AbsEntry": 5282,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G26-1"
    },
    {
        "AbsEntry": 5283,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G26-2"
    },
    {
        "AbsEntry": 5284,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G26-3"
    },
    {
        "AbsEntry": 5286,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G27-1"
    },
    {
        "AbsEntry": 5287,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G27-2"
    },
    {
        "AbsEntry": 5288,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G27-3"
    },
    {
        "AbsEntry": 5290,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G28-1"
    },
    {
        "AbsEntry": 5291,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G28-2"
    },
    {
        "AbsEntry": 5292,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G28-3"
    },
    {
        "AbsEntry": 5294,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G29-1"
    },
    {
        "AbsEntry": 5295,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G29-2"
    },
    {
        "AbsEntry": 5296,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G29-3"
    },
    {
        "AbsEntry": 5298,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G30-1"
    },
    {
        "AbsEntry": 5299,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G30-2"
    },
    {
        "AbsEntry": 5300,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G30-3"
    },
    {
        "AbsEntry": 5302,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G31-1"
    },
    {
        "AbsEntry": 5303,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G31-2"
    },
    {
        "AbsEntry": 5304,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G31-3"
    },
    {
        "AbsEntry": 5306,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G32-1"
    },
    {
        "AbsEntry": 5307,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G32-2"
    },
    {
        "AbsEntry": 5308,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G32-3"
    },
    {
        "AbsEntry": 5310,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G33-1"
    },
    {
        "AbsEntry": 5311,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G33-2"
    },
    {
        "AbsEntry": 5312,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G33-3"
    },
    {
        "AbsEntry": 5314,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G34-1"
    },
    {
        "AbsEntry": 5315,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G34-2"
    },
    {
        "AbsEntry": 5316,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G34-3"
    },
    {
        "AbsEntry": 5318,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G35-1"
    },
    {
        "AbsEntry": 5319,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G35-2"
    },
    {
        "AbsEntry": 5320,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G35-3"
    },
    {
        "AbsEntry": 5322,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G36-1"
    },
    {
        "AbsEntry": 5323,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G36-2"
    },
    {
        "AbsEntry": 5324,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G36-3"
    },
    {
        "AbsEntry": 5326,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G37-1"
    },
    {
        "AbsEntry": 5327,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G37-2"
    },
    {
        "AbsEntry": 5328,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G37-3"
    },
    {
        "AbsEntry": 5330,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G38-1"
    },
    {
        "AbsEntry": 5331,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G38-2"
    },
    {
        "AbsEntry": 5332,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G38-3"
    },
    {
        "AbsEntry": 5334,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G39-1"
    },
    {
        "AbsEntry": 5335,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G39-2"
    },
    {
        "AbsEntry": 5336,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G39-3"
    },
    {
        "AbsEntry": 5338,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G40-1"
    },
    {
        "AbsEntry": 5339,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G40-2"
    },
    {
        "AbsEntry": 5340,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3G40-3"
    },
    {
        "AbsEntry": 5342,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H01-1"
    },
    {
        "AbsEntry": 5343,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H01-2"
    },
    {
        "AbsEntry": 5344,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H01-3"
    },
    {
        "AbsEntry": 5346,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H02-1"
    },
    {
        "AbsEntry": 5347,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H02-2"
    },
    {
        "AbsEntry": 5348,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H02-3"
    },
    {
        "AbsEntry": 5350,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H03-1"
    },
    {
        "AbsEntry": 5351,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H03-2"
    },
    {
        "AbsEntry": 5352,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H03-3"
    },
    {
        "AbsEntry": 5354,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H04-1"
    },
    {
        "AbsEntry": 5355,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H04-2"
    },
    {
        "AbsEntry": 5356,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H04-3"
    },
    {
        "AbsEntry": 5358,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H05-1"
    },
    {
        "AbsEntry": 5359,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H05-2"
    },
    {
        "AbsEntry": 5360,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H05-3"
    },
    {
        "AbsEntry": 5362,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H06-1"
    },
    {
        "AbsEntry": 5363,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H06-2"
    },
    {
        "AbsEntry": 5364,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H06-3"
    },
    {
        "AbsEntry": 5366,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H07-1"
    },
    {
        "AbsEntry": 5367,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H07-2"
    },
    {
        "AbsEntry": 5368,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H07-3"
    },
    {
        "AbsEntry": 5370,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H08-1"
    },
    {
        "AbsEntry": 5371,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H08-2"
    },
    {
        "AbsEntry": 5372,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H08-3"
    },
    {
        "AbsEntry": 5374,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H09-1"
    },
    {
        "AbsEntry": 5375,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H09-2"
    },
    {
        "AbsEntry": 5376,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H09-3"
    },
    {
        "AbsEntry": 5378,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H10-1"
    },
    {
        "AbsEntry": 5379,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H10-2"
    },
    {
        "AbsEntry": 5380,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H10-3"
    },
    {
        "AbsEntry": 5382,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H11-1"
    },
    {
        "AbsEntry": 5383,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H11-2"
    },
    {
        "AbsEntry": 5384,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H11-3"
    },
    {
        "AbsEntry": 5386,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H12-1"
    },
    {
        "AbsEntry": 5387,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H12-2"
    },
    {
        "AbsEntry": 5388,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H12-3"
    },
    {
        "AbsEntry": 5390,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H13-1"
    },
    {
        "AbsEntry": 5391,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H13-2"
    },
    {
        "AbsEntry": 5392,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H13-3"
    },
    {
        "AbsEntry": 5394,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H14-1"
    },
    {
        "AbsEntry": 5395,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H14-2"
    },
    {
        "AbsEntry": 5396,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H14-3"
    },
    {
        "AbsEntry": 5398,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H15-1"
    },
    {
        "AbsEntry": 5399,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H15-2"
    },
    {
        "AbsEntry": 5400,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H15-3"
    },
    {
        "AbsEntry": 5402,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H16-1"
    },
    {
        "AbsEntry": 5403,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H16-2"
    },
    {
        "AbsEntry": 5404,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H16-3"
    },
    {
        "AbsEntry": 5406,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H17-1"
    },
    {
        "AbsEntry": 5407,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H17-2"
    },
    {
        "AbsEntry": 5408,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H17-3"
    },
    {
        "AbsEntry": 5410,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H18-1"
    },
    {
        "AbsEntry": 5411,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H18-2"
    },
    {
        "AbsEntry": 5412,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H18-3"
    },
    {
        "AbsEntry": 5414,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H19-1"
    },
    {
        "AbsEntry": 5415,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H19-2"
    },
    {
        "AbsEntry": 5416,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H19-3"
    },
    {
        "AbsEntry": 5418,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H20-1"
    },
    {
        "AbsEntry": 5419,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H20-2"
    },
    {
        "AbsEntry": 5420,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H20-3"
    },
    {
        "AbsEntry": 5422,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H21-1"
    },
    {
        "AbsEntry": 5423,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H21-2"
    },
    {
        "AbsEntry": 5424,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H21-3"
    },
    {
        "AbsEntry": 5426,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H22-1"
    },
    {
        "AbsEntry": 5427,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H22-2"
    },
    {
        "AbsEntry": 5428,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H22-3"
    },
    {
        "AbsEntry": 5430,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H23-1"
    },
    {
        "AbsEntry": 5431,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H23-2"
    },
    {
        "AbsEntry": 5432,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H23-3"
    },
    {
        "AbsEntry": 5434,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H24-1"
    },
    {
        "AbsEntry": 5435,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H24-2"
    },
    {
        "AbsEntry": 5436,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H24-3"
    },
    {
        "AbsEntry": 5438,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H25-1"
    },
    {
        "AbsEntry": 5439,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H25-2"
    },
    {
        "AbsEntry": 5440,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H25-3"
    },
    {
        "AbsEntry": 5442,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H26-1"
    },
    {
        "AbsEntry": 5443,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H26-2"
    },
    {
        "AbsEntry": 5444,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H26-3"
    },
    {
        "AbsEntry": 5446,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H27-1"
    },
    {
        "AbsEntry": 5447,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H27-2"
    },
    {
        "AbsEntry": 5448,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H27-3"
    },
    {
        "AbsEntry": 5450,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H28-1"
    },
    {
        "AbsEntry": 5451,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H28-2"
    },
    {
        "AbsEntry": 5452,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H28-3"
    },
    {
        "AbsEntry": 5454,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H29-1"
    },
    {
        "AbsEntry": 5455,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H29-2"
    },
    {
        "AbsEntry": 5456,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H29-3"
    },
    {
        "AbsEntry": 5458,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H30-1"
    },
    {
        "AbsEntry": 5459,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H30-2"
    },
    {
        "AbsEntry": 5460,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H30-3"
    },
    {
        "AbsEntry": 5462,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H31-1"
    },
    {
        "AbsEntry": 5463,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H31-2"
    },
    {
        "AbsEntry": 5464,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H31-3"
    },
    {
        "AbsEntry": 5466,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H32-1"
    },
    {
        "AbsEntry": 5467,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H32-2"
    },
    {
        "AbsEntry": 5468,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H32-3"
    },
    {
        "AbsEntry": 5470,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H33-1"
    },
    {
        "AbsEntry": 5471,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H33-2"
    },
    {
        "AbsEntry": 5472,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H33-3"
    },
    {
        "AbsEntry": 5474,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H34-1"
    },
    {
        "AbsEntry": 5475,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H34-2"
    },
    {
        "AbsEntry": 5476,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H34-3"
    },
    {
        "AbsEntry": 5478,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H35-1"
    },
    {
        "AbsEntry": 5479,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H35-2"
    },
    {
        "AbsEntry": 5480,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H35-3"
    },
    {
        "AbsEntry": 5482,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H36-1"
    },
    {
        "AbsEntry": 5483,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H36-2"
    },
    {
        "AbsEntry": 5484,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H36-3"
    },
    {
        "AbsEntry": 5486,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H37-1"
    },
    {
        "AbsEntry": 5487,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H37-2"
    },
    {
        "AbsEntry": 5488,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H37-3"
    },
    {
        "AbsEntry": 5490,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H38-1"
    },
    {
        "AbsEntry": 5491,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H38-2"
    },
    {
        "AbsEntry": 5492,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H38-3"
    },
    {
        "AbsEntry": 5494,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H39-1"
    },
    {
        "AbsEntry": 5495,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H39-2"
    },
    {
        "AbsEntry": 5496,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H39-3"
    },
    {
        "AbsEntry": 5498,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H40-1"
    },
    {
        "AbsEntry": 5499,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H40-2"
    },
    {
        "AbsEntry": 5500,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3H40-3"
    },
    {
        "AbsEntry": 5502,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I01-1"
    },
    {
        "AbsEntry": 5503,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I01-2"
    },
    {
        "AbsEntry": 5504,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I01-3"
    },
    {
        "AbsEntry": 5506,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I02-1"
    },
    {
        "AbsEntry": 5507,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I02-2"
    },
    {
        "AbsEntry": 5508,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I02-3"
    },
    {
        "AbsEntry": 5510,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I03-1"
    },
    {
        "AbsEntry": 5511,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I03-2"
    },
    {
        "AbsEntry": 5512,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I03-3"
    },
    {
        "AbsEntry": 5514,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I04-1"
    },
    {
        "AbsEntry": 5515,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I04-2"
    },
    {
        "AbsEntry": 5516,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I04-3"
    },
    {
        "AbsEntry": 5518,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I05-1"
    },
    {
        "AbsEntry": 5519,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I05-2"
    },
    {
        "AbsEntry": 5520,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I05-3"
    },
    {
        "AbsEntry": 5522,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I06-1"
    },
    {
        "AbsEntry": 5523,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I06-2"
    },
    {
        "AbsEntry": 5524,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I06-3"
    },
    {
        "AbsEntry": 5526,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I07-1"
    },
    {
        "AbsEntry": 5527,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I07-2"
    },
    {
        "AbsEntry": 5528,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I07-3"
    },
    {
        "AbsEntry": 5530,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I08-1"
    },
    {
        "AbsEntry": 5531,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I08-2"
    },
    {
        "AbsEntry": 5532,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I08-3"
    },
    {
        "AbsEntry": 5534,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I09-1"
    },
    {
        "AbsEntry": 5535,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I09-2"
    },
    {
        "AbsEntry": 5536,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I09-3"
    },
    {
        "AbsEntry": 5538,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I10-1"
    },
    {
        "AbsEntry": 5539,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I10-2"
    },
    {
        "AbsEntry": 5540,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I10-3"
    },
    {
        "AbsEntry": 5542,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I11-1"
    },
    {
        "AbsEntry": 5543,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I11-2"
    },
    {
        "AbsEntry": 5544,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I11-3"
    },
    {
        "AbsEntry": 5546,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I12-1"
    },
    {
        "AbsEntry": 5547,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I12-2"
    },
    {
        "AbsEntry": 5548,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I12-3"
    },
    {
        "AbsEntry": 5550,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I13-1"
    },
    {
        "AbsEntry": 5551,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I13-2"
    },
    {
        "AbsEntry": 5552,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I13-3"
    },
    {
        "AbsEntry": 5554,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I14-1"
    },
    {
        "AbsEntry": 5555,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I14-2"
    },
    {
        "AbsEntry": 5556,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I14-3"
    },
    {
        "AbsEntry": 5558,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I15-1"
    },
    {
        "AbsEntry": 5559,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I15-2"
    },
    {
        "AbsEntry": 5560,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I15-3"
    },
    {
        "AbsEntry": 5562,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I16-1"
    },
    {
        "AbsEntry": 5563,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I16-2"
    },
    {
        "AbsEntry": 5564,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I16-3"
    },
    {
        "AbsEntry": 5566,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I17-1"
    },
    {
        "AbsEntry": 5567,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I17-2"
    },
    {
        "AbsEntry": 5568,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I17-3"
    },
    {
        "AbsEntry": 5570,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I18-1"
    },
    {
        "AbsEntry": 5571,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I18-2"
    },
    {
        "AbsEntry": 5572,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I18-3"
    },
    {
        "AbsEntry": 5574,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I19-1"
    },
    {
        "AbsEntry": 5575,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I19-2"
    },
    {
        "AbsEntry": 5576,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I19-3"
    },
    {
        "AbsEntry": 5578,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I20-1"
    },
    {
        "AbsEntry": 5579,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I20-2"
    },
    {
        "AbsEntry": 5580,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I20-3"
    },
    {
        "AbsEntry": 5582,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I21-1"
    },
    {
        "AbsEntry": 5583,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I21-2"
    },
    {
        "AbsEntry": 5584,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I21-3"
    },
    {
        "AbsEntry": 5586,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I22-1"
    },
    {
        "AbsEntry": 5587,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I22-2"
    },
    {
        "AbsEntry": 5588,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I22-3"
    },
    {
        "AbsEntry": 5590,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I23-1"
    },
    {
        "AbsEntry": 5591,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I23-2"
    },
    {
        "AbsEntry": 5592,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I23-3"
    },
    {
        "AbsEntry": 5594,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I24-1"
    },
    {
        "AbsEntry": 5595,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I24-2"
    },
    {
        "AbsEntry": 5596,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I24-3"
    },
    {
        "AbsEntry": 5598,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I25-1"
    },
    {
        "AbsEntry": 5599,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I25-2"
    },
    {
        "AbsEntry": 5600,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I25-3"
    },
    {
        "AbsEntry": 5602,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I26-1"
    },
    {
        "AbsEntry": 5603,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I26-2"
    },
    {
        "AbsEntry": 5604,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I26-3"
    },
    {
        "AbsEntry": 5606,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I27-1"
    },
    {
        "AbsEntry": 5607,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I27-2"
    },
    {
        "AbsEntry": 5608,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I27-3"
    },
    {
        "AbsEntry": 5610,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I28-1"
    },
    {
        "AbsEntry": 5611,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I28-2"
    },
    {
        "AbsEntry": 5612,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I28-3"
    },
    {
        "AbsEntry": 5614,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I29-1"
    },
    {
        "AbsEntry": 5615,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I29-2"
    },
    {
        "AbsEntry": 5616,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I29-3"
    },
    {
        "AbsEntry": 5618,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I30-1"
    },
    {
        "AbsEntry": 5619,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I30-2"
    },
    {
        "AbsEntry": 5620,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I30-3"
    },
    {
        "AbsEntry": 5622,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I31-1"
    },
    {
        "AbsEntry": 5623,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I31-2"
    },
    {
        "AbsEntry": 5624,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I31-3"
    },
    {
        "AbsEntry": 5626,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I32-1"
    },
    {
        "AbsEntry": 5627,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I32-2"
    },
    {
        "AbsEntry": 5628,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I32-3"
    },
    {
        "AbsEntry": 5630,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I33-1"
    },
    {
        "AbsEntry": 5631,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I33-2"
    },
    {
        "AbsEntry": 5632,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I33-3"
    },
    {
        "AbsEntry": 5634,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I34-1"
    },
    {
        "AbsEntry": 5635,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I34-2"
    },
    {
        "AbsEntry": 5636,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I34-3"
    },
    {
        "AbsEntry": 5638,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I35-1"
    },
    {
        "AbsEntry": 5639,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I35-2"
    },
    {
        "AbsEntry": 5640,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I35-3"
    },
    {
        "AbsEntry": 5642,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I36-1"
    },
    {
        "AbsEntry": 5643,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I36-2"
    },
    {
        "AbsEntry": 5644,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I36-3"
    },
    {
        "AbsEntry": 5646,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I37-1"
    },
    {
        "AbsEntry": 5647,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I37-2"
    },
    {
        "AbsEntry": 5648,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I37-3"
    },
    {
        "AbsEntry": 5650,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I38-1"
    },
    {
        "AbsEntry": 5651,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I38-2"
    },
    {
        "AbsEntry": 5652,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I38-3"
    },
    {
        "AbsEntry": 5654,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I39-1"
    },
    {
        "AbsEntry": 5655,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I39-2"
    },
    {
        "AbsEntry": 5656,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I39-3"
    },
    {
        "AbsEntry": 5658,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I40-1"
    },
    {
        "AbsEntry": 5659,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I40-2"
    },
    {
        "AbsEntry": 5660,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3I40-3"
    },
    {
        "AbsEntry": 5662,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J01-1"
    },
    {
        "AbsEntry": 5663,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J01-2"
    },
    {
        "AbsEntry": 5664,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J01-3"
    },
    {
        "AbsEntry": 5666,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J02-1"
    },
    {
        "AbsEntry": 5667,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J02-2"
    },
    {
        "AbsEntry": 5668,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J02-3"
    },
    {
        "AbsEntry": 5670,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J03-1"
    },
    {
        "AbsEntry": 5671,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J03-2"
    },
    {
        "AbsEntry": 5672,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J03-3"
    },
    {
        "AbsEntry": 5674,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J04-1"
    },
    {
        "AbsEntry": 5675,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J04-2"
    },
    {
        "AbsEntry": 5676,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J04-3"
    },
    {
        "AbsEntry": 5678,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J05-1"
    },
    {
        "AbsEntry": 5679,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J05-2"
    },
    {
        "AbsEntry": 5680,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J05-3"
    },
    {
        "AbsEntry": 5682,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J06-1"
    },
    {
        "AbsEntry": 5683,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J06-2"
    },
    {
        "AbsEntry": 5684,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J06-3"
    },
    {
        "AbsEntry": 5686,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J07-1"
    },
    {
        "AbsEntry": 5687,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J07-2"
    },
    {
        "AbsEntry": 5688,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J07-3"
    },
    {
        "AbsEntry": 5690,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J08-1"
    },
    {
        "AbsEntry": 5691,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J08-2"
    },
    {
        "AbsEntry": 5692,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J08-3"
    },
    {
        "AbsEntry": 5694,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J09-1"
    },
    {
        "AbsEntry": 5695,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J09-2"
    },
    {
        "AbsEntry": 5696,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J09-3"
    },
    {
        "AbsEntry": 5698,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J10-1"
    },
    {
        "AbsEntry": 5699,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J10-2"
    },
    {
        "AbsEntry": 5700,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J10-3"
    },
    {
        "AbsEntry": 5702,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J11-1"
    },
    {
        "AbsEntry": 5703,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J11-2"
    },
    {
        "AbsEntry": 5704,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J11-3"
    },
    {
        "AbsEntry": 5706,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J12-1"
    },
    {
        "AbsEntry": 5707,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J12-2"
    },
    {
        "AbsEntry": 5708,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J12-3"
    },
    {
        "AbsEntry": 5710,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J13-1"
    },
    {
        "AbsEntry": 5711,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J13-2"
    },
    {
        "AbsEntry": 5712,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J13-3"
    },
    {
        "AbsEntry": 5714,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J14-1"
    },
    {
        "AbsEntry": 5715,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J14-2"
    },
    {
        "AbsEntry": 5716,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J14-3"
    },
    {
        "AbsEntry": 5718,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J15-1"
    },
    {
        "AbsEntry": 5719,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J15-2"
    },
    {
        "AbsEntry": 5720,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J15-3"
    },
    {
        "AbsEntry": 5722,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J16-1"
    },
    {
        "AbsEntry": 5723,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J16-2"
    },
    {
        "AbsEntry": 5724,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J16-3"
    },
    {
        "AbsEntry": 5726,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J17-1"
    },
    {
        "AbsEntry": 5727,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J17-2"
    },
    {
        "AbsEntry": 5728,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J17-3"
    },
    {
        "AbsEntry": 5730,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J18-1"
    },
    {
        "AbsEntry": 5731,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J18-2"
    },
    {
        "AbsEntry": 5732,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J18-3"
    },
    {
        "AbsEntry": 5734,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J19-1"
    },
    {
        "AbsEntry": 5735,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J19-2"
    },
    {
        "AbsEntry": 5736,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J19-3"
    },
    {
        "AbsEntry": 5738,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J20-1"
    },
    {
        "AbsEntry": 5739,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J20-2"
    },
    {
        "AbsEntry": 5740,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J20-3"
    },
    {
        "AbsEntry": 5742,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J21-1"
    },
    {
        "AbsEntry": 5743,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J21-2"
    },
    {
        "AbsEntry": 5744,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J21-3"
    },
    {
        "AbsEntry": 5746,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J22-1"
    },
    {
        "AbsEntry": 5747,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J22-2"
    },
    {
        "AbsEntry": 5748,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J22-3"
    },
    {
        "AbsEntry": 5750,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J23-1"
    },
    {
        "AbsEntry": 5751,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J23-2"
    },
    {
        "AbsEntry": 5752,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J23-3"
    },
    {
        "AbsEntry": 5754,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J24-1"
    },
    {
        "AbsEntry": 5755,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J24-2"
    },
    {
        "AbsEntry": 5756,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J24-3"
    },
    {
        "AbsEntry": 5758,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J25-1"
    },
    {
        "AbsEntry": 5759,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J25-2"
    },
    {
        "AbsEntry": 5760,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J25-3"
    },
    {
        "AbsEntry": 5762,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J26-1"
    },
    {
        "AbsEntry": 5763,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J26-2"
    },
    {
        "AbsEntry": 5764,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J26-3"
    },
    {
        "AbsEntry": 5766,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J27-1"
    },
    {
        "AbsEntry": 5767,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J27-2"
    },
    {
        "AbsEntry": 5768,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J27-3"
    },
    {
        "AbsEntry": 5770,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J28-1"
    },
    {
        "AbsEntry": 5771,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J28-2"
    },
    {
        "AbsEntry": 5772,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J28-3"
    },
    {
        "AbsEntry": 5774,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J29-1"
    },
    {
        "AbsEntry": 5775,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J29-2"
    },
    {
        "AbsEntry": 5776,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J29-3"
    },
    {
        "AbsEntry": 5778,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J30-1"
    },
    {
        "AbsEntry": 5779,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J30-2"
    },
    {
        "AbsEntry": 5780,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J30-3"
    },
    {
        "AbsEntry": 5782,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J31-1"
    },
    {
        "AbsEntry": 5783,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J31-2"
    },
    {
        "AbsEntry": 5784,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J31-3"
    },
    {
        "AbsEntry": 5786,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J32-1"
    },
    {
        "AbsEntry": 5787,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J32-2"
    },
    {
        "AbsEntry": 5788,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J32-3"
    },
    {
        "AbsEntry": 5790,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J33-1"
    },
    {
        "AbsEntry": 5791,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J33-2"
    },
    {
        "AbsEntry": 5792,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J33-3"
    },
    {
        "AbsEntry": 5794,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J34-1"
    },
    {
        "AbsEntry": 5795,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J34-2"
    },
    {
        "AbsEntry": 5796,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J34-3"
    },
    {
        "AbsEntry": 5798,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J35-1"
    },
    {
        "AbsEntry": 5799,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J35-2"
    },
    {
        "AbsEntry": 5800,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J35-3"
    },
    {
        "AbsEntry": 5802,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J36-1"
    },
    {
        "AbsEntry": 5803,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J36-2"
    },
    {
        "AbsEntry": 5804,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J36-3"
    },
    {
        "AbsEntry": 5806,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J37-1"
    },
    {
        "AbsEntry": 5807,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J37-2"
    },
    {
        "AbsEntry": 5808,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J37-3"
    },
    {
        "AbsEntry": 5810,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J38-1"
    },
    {
        "AbsEntry": 5811,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J38-2"
    },
    {
        "AbsEntry": 5812,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J38-3"
    },
    {
        "AbsEntry": 5814,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J39-1"
    },
    {
        "AbsEntry": 5815,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J39-2"
    },
    {
        "AbsEntry": 5816,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J39-3"
    },
    {
        "AbsEntry": 5818,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J40-1"
    },
    {
        "AbsEntry": 5819,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J40-2"
    },
    {
        "AbsEntry": 5820,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J40-3"
    },
    {
        "AbsEntry": 5822,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J41-1"
    },
    {
        "AbsEntry": 5823,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J41-2"
    },
    {
        "AbsEntry": 5824,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J41-3"
    },
    {
        "AbsEntry": 5826,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J42-1"
    },
    {
        "AbsEntry": 5827,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J42-2"
    },
    {
        "AbsEntry": 5828,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J42-3"
    },
    {
        "AbsEntry": 5830,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J43-1"
    },
    {
        "AbsEntry": 5831,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J43-2"
    },
    {
        "AbsEntry": 5832,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J43-3"
    },
    {
        "AbsEntry": 5834,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J44-1"
    },
    {
        "AbsEntry": 5835,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J44-2"
    },
    {
        "AbsEntry": 5836,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J44-3"
    },
    {
        "AbsEntry": 5838,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J45-1"
    },
    {
        "AbsEntry": 5839,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J45-2"
    },
    {
        "AbsEntry": 5840,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J45-3"
    },
    {
        "AbsEntry": 5842,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J46-1"
    },
    {
        "AbsEntry": 5843,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J46-2"
    },
    {
        "AbsEntry": 5844,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J46-3"
    },
    {
        "AbsEntry": 5846,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J47-1"
    },
    {
        "AbsEntry": 5847,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J47-2"
    },
    {
        "AbsEntry": 5848,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J47-3"
    },
    {
        "AbsEntry": 5850,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J48-1"
    },
    {
        "AbsEntry": 5851,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J48-2"
    },
    {
        "AbsEntry": 5852,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3J48-3"
    },
    {
        "AbsEntry": 5854,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K01-1"
    },
    {
        "AbsEntry": 5855,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K01-2"
    },
    {
        "AbsEntry": 5856,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K01-3"
    },
    {
        "AbsEntry": 5858,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K02-1"
    },
    {
        "AbsEntry": 5859,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K02-2"
    },
    {
        "AbsEntry": 5860,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K02-3"
    },
    {
        "AbsEntry": 5862,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K03-1"
    },
    {
        "AbsEntry": 5863,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K03-2"
    },
    {
        "AbsEntry": 5864,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K03-3"
    },
    {
        "AbsEntry": 5866,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K04-1"
    },
    {
        "AbsEntry": 5867,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K04-2"
    },
    {
        "AbsEntry": 5868,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K04-3"
    },
    {
        "AbsEntry": 5870,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K05-1"
    },
    {
        "AbsEntry": 5871,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K05-2"
    },
    {
        "AbsEntry": 5872,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K05-3"
    },
    {
        "AbsEntry": 5874,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K06-1"
    },
    {
        "AbsEntry": 5875,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K06-2"
    },
    {
        "AbsEntry": 5876,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K06-3"
    },
    {
        "AbsEntry": 5878,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K07-1"
    },
    {
        "AbsEntry": 5879,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K07-2"
    },
    {
        "AbsEntry": 5880,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K07-3"
    },
    {
        "AbsEntry": 5882,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K08-1"
    },
    {
        "AbsEntry": 5883,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K08-2"
    },
    {
        "AbsEntry": 5884,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K08-3"
    },
    {
        "AbsEntry": 5886,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K09-1"
    },
    {
        "AbsEntry": 5887,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K09-2"
    },
    {
        "AbsEntry": 5888,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K09-3"
    },
    {
        "AbsEntry": 5890,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K10-1"
    },
    {
        "AbsEntry": 5891,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K10-2"
    },
    {
        "AbsEntry": 5892,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K10-3"
    },
    {
        "AbsEntry": 5894,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K11-1"
    },
    {
        "AbsEntry": 5895,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K11-2"
    },
    {
        "AbsEntry": 5896,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K11-3"
    },
    {
        "AbsEntry": 5898,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K12-1"
    },
    {
        "AbsEntry": 5899,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K12-2"
    },
    {
        "AbsEntry": 5900,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K12-3"
    },
    {
        "AbsEntry": 5902,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K13-1"
    },
    {
        "AbsEntry": 5903,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K13-2"
    },
    {
        "AbsEntry": 5904,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K13-3"
    },
    {
        "AbsEntry": 5906,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K14-1"
    },
    {
        "AbsEntry": 5907,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K14-2"
    },
    {
        "AbsEntry": 5908,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K14-3"
    },
    {
        "AbsEntry": 5910,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K15-1"
    },
    {
        "AbsEntry": 5911,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K15-2"
    },
    {
        "AbsEntry": 5912,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K15-3"
    },
    {
        "AbsEntry": 5914,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K16-1"
    },
    {
        "AbsEntry": 5915,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K16-2"
    },
    {
        "AbsEntry": 5916,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K16-3"
    },
    {
        "AbsEntry": 5918,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K17-1"
    },
    {
        "AbsEntry": 5919,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K17-2"
    },
    {
        "AbsEntry": 5920,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K17-3"
    },
    {
        "AbsEntry": 5922,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K18-1"
    },
    {
        "AbsEntry": 5923,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K18-2"
    },
    {
        "AbsEntry": 5924,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K18-3"
    },
    {
        "AbsEntry": 5926,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K19-1"
    },
    {
        "AbsEntry": 5927,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K19-2"
    },
    {
        "AbsEntry": 5928,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K19-3"
    },
    {
        "AbsEntry": 5930,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K20-1"
    },
    {
        "AbsEntry": 5931,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K20-2"
    },
    {
        "AbsEntry": 5932,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K20-3"
    },
    {
        "AbsEntry": 5934,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K21-1"
    },
    {
        "AbsEntry": 5935,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K21-2"
    },
    {
        "AbsEntry": 5936,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K21-3"
    },
    {
        "AbsEntry": 5938,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K22-1"
    },
    {
        "AbsEntry": 5939,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K22-2"
    },
    {
        "AbsEntry": 5940,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K22-3"
    },
    {
        "AbsEntry": 5942,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K23-1"
    },
    {
        "AbsEntry": 5943,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K23-2"
    },
    {
        "AbsEntry": 5944,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K23-3"
    },
    {
        "AbsEntry": 5946,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K24-1"
    },
    {
        "AbsEntry": 5947,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K24-2"
    },
    {
        "AbsEntry": 5948,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K24-3"
    },
    {
        "AbsEntry": 5950,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K25-1"
    },
    {
        "AbsEntry": 5951,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K25-2"
    },
    {
        "AbsEntry": 5952,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K25-3"
    },
    {
        "AbsEntry": 5954,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K26-1"
    },
    {
        "AbsEntry": 5955,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K26-2"
    },
    {
        "AbsEntry": 5956,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K26-3"
    },
    {
        "AbsEntry": 5958,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K27-1"
    },
    {
        "AbsEntry": 5959,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K27-2"
    },
    {
        "AbsEntry": 5960,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K27-3"
    },
    {
        "AbsEntry": 5962,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K28-1"
    },
    {
        "AbsEntry": 5963,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K28-2"
    },
    {
        "AbsEntry": 5964,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K28-3"
    },
    {
        "AbsEntry": 5966,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K29-1"
    },
    {
        "AbsEntry": 5967,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K29-2"
    },
    {
        "AbsEntry": 5968,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K29-3"
    },
    {
        "AbsEntry": 5970,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K30-1"
    },
    {
        "AbsEntry": 5971,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K30-2"
    },
    {
        "AbsEntry": 5972,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K30-3"
    },
    {
        "AbsEntry": 5974,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K31-1"
    },
    {
        "AbsEntry": 5975,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K31-2"
    },
    {
        "AbsEntry": 5976,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K31-3"
    },
    {
        "AbsEntry": 5978,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K32-1"
    },
    {
        "AbsEntry": 5979,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K32-2"
    },
    {
        "AbsEntry": 5980,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K32-3"
    },
    {
        "AbsEntry": 5982,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K33-1"
    },
    {
        "AbsEntry": 5983,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K33-2"
    },
    {
        "AbsEntry": 5984,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K33-3"
    },
    {
        "AbsEntry": 5986,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K34-1"
    },
    {
        "AbsEntry": 5987,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K34-2"
    },
    {
        "AbsEntry": 5988,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K34-3"
    },
    {
        "AbsEntry": 5990,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K35-1"
    },
    {
        "AbsEntry": 5991,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K35-2"
    },
    {
        "AbsEntry": 5992,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K35-3"
    },
    {
        "AbsEntry": 5994,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K36-1"
    },
    {
        "AbsEntry": 5995,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K36-2"
    },
    {
        "AbsEntry": 5996,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3K36-3"
    },
    {
        "AbsEntry": 5998,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L01-1"
    },
    {
        "AbsEntry": 5999,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L01-2"
    },
    {
        "AbsEntry": 6000,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L01-3"
    },
    {
        "AbsEntry": 6001,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L02-1"
    },
    {
        "AbsEntry": 6002,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L02-2"
    },
    {
        "AbsEntry": 6003,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L02-3"
    },
    {
        "AbsEntry": 6004,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L03-1"
    },
    {
        "AbsEntry": 6005,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L03-2"
    },
    {
        "AbsEntry": 6006,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L03-3"
    },
    {
        "AbsEntry": 6007,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L04-1"
    },
    {
        "AbsEntry": 6008,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L04-2"
    },
    {
        "AbsEntry": 6009,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L04-3"
    },
    {
        "AbsEntry": 6010,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L05-1"
    },
    {
        "AbsEntry": 6011,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L05-2"
    },
    {
        "AbsEntry": 6012,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L05-3"
    },
    {
        "AbsEntry": 6013,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L06-1"
    },
    {
        "AbsEntry": 6014,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L06-2"
    },
    {
        "AbsEntry": 6015,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L06-3"
    },
    {
        "AbsEntry": 6016,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L07-1"
    },
    {
        "AbsEntry": 6017,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L07-2"
    },
    {
        "AbsEntry": 6018,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L07-3"
    },
    {
        "AbsEntry": 6019,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L08-1"
    },
    {
        "AbsEntry": 6020,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L08-2"
    },
    {
        "AbsEntry": 6021,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L08-3"
    },
    {
        "AbsEntry": 6022,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L09-1"
    },
    {
        "AbsEntry": 6023,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L09-2"
    },
    {
        "AbsEntry": 6024,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L09-3"
    },
    {
        "AbsEntry": 6025,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L10-1"
    },
    {
        "AbsEntry": 6026,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L10-2"
    },
    {
        "AbsEntry": 6027,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L10-3"
    },
    {
        "AbsEntry": 6028,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L11-1"
    },
    {
        "AbsEntry": 6029,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L11-2"
    },
    {
        "AbsEntry": 6030,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L11-3"
    },
    {
        "AbsEntry": 6031,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L12-1"
    },
    {
        "AbsEntry": 6032,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L12-2"
    },
    {
        "AbsEntry": 6033,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L12-3"
    },
    {
        "AbsEntry": 6034,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L13-1"
    },
    {
        "AbsEntry": 6035,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L13-2"
    },
    {
        "AbsEntry": 6036,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L13-3"
    },
    {
        "AbsEntry": 6037,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L14-1"
    },
    {
        "AbsEntry": 6038,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L14-2"
    },
    {
        "AbsEntry": 6039,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L14-3"
    },
    {
        "AbsEntry": 6040,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L15-1"
    },
    {
        "AbsEntry": 6041,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L15-2"
    },
    {
        "AbsEntry": 6042,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L15-3"
    },
    {
        "AbsEntry": 6043,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L16-1"
    },
    {
        "AbsEntry": 6044,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L16-2"
    },
    {
        "AbsEntry": 6045,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L16-3"
    },
    {
        "AbsEntry": 6046,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L17-1"
    },
    {
        "AbsEntry": 6047,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L17-2"
    },
    {
        "AbsEntry": 6048,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L17-3"
    },
    {
        "AbsEntry": 6049,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L18-1"
    },
    {
        "AbsEntry": 6050,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L18-2"
    },
    {
        "AbsEntry": 6051,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L18-3"
    },
    {
        "AbsEntry": 6052,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L19-1"
    },
    {
        "AbsEntry": 6053,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L19-2"
    },
    {
        "AbsEntry": 6054,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L19-3"
    },
    {
        "AbsEntry": 6055,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L20-1"
    },
    {
        "AbsEntry": 6056,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L20-2"
    },
    {
        "AbsEntry": 6057,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L20-3"
    },
    {
        "AbsEntry": 6058,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L21-1"
    },
    {
        "AbsEntry": 6059,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L21-2"
    },
    {
        "AbsEntry": 6060,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L21-3"
    },
    {
        "AbsEntry": 6061,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L22-1"
    },
    {
        "AbsEntry": 6062,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L22-2"
    },
    {
        "AbsEntry": 6063,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L22-3"
    },
    {
        "AbsEntry": 6064,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L23-1"
    },
    {
        "AbsEntry": 6065,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L23-2"
    },
    {
        "AbsEntry": 6066,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L23-3"
    },
    {
        "AbsEntry": 6067,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L24-1"
    },
    {
        "AbsEntry": 6068,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L24-2"
    },
    {
        "AbsEntry": 6069,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L24-3"
    },
    {
        "AbsEntry": 6070,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L25-1"
    },
    {
        "AbsEntry": 6071,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L25-2"
    },
    {
        "AbsEntry": 6072,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L25-3"
    },
    {
        "AbsEntry": 6073,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L26-1"
    },
    {
        "AbsEntry": 6074,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L26-2"
    },
    {
        "AbsEntry": 6075,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L26-3"
    },
    {
        "AbsEntry": 6076,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L27-1"
    },
    {
        "AbsEntry": 6077,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L27-2"
    },
    {
        "AbsEntry": 6078,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L27-3"
    },
    {
        "AbsEntry": 6079,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L28-1"
    },
    {
        "AbsEntry": 6080,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L28-2"
    },
    {
        "AbsEntry": 6081,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L28-3"
    },
    {
        "AbsEntry": 6082,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L29-1"
    },
    {
        "AbsEntry": 6083,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L29-2"
    },
    {
        "AbsEntry": 6084,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L29-3"
    },
    {
        "AbsEntry": 6085,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L30-1"
    },
    {
        "AbsEntry": 6086,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L30-2"
    },
    {
        "AbsEntry": 6087,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L30-3"
    },
    {
        "AbsEntry": 6088,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L31-1"
    },
    {
        "AbsEntry": 6089,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L31-2"
    },
    {
        "AbsEntry": 6090,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L31-3"
    },
    {
        "AbsEntry": 6091,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L32-1"
    },
    {
        "AbsEntry": 6092,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L32-2"
    },
    {
        "AbsEntry": 6093,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L32-3"
    },
    {
        "AbsEntry": 6094,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L33-1"
    },
    {
        "AbsEntry": 6095,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L33-2"
    },
    {
        "AbsEntry": 6096,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L33-3"
    },
    {
        "AbsEntry": 6097,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L34-1"
    },
    {
        "AbsEntry": 6098,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L34-2"
    },
    {
        "AbsEntry": 6099,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L34-3"
    },
    {
        "AbsEntry": 6100,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L35-1"
    },
    {
        "AbsEntry": 6101,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L35-2"
    },
    {
        "AbsEntry": 6102,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L35-3"
    },
    {
        "AbsEntry": 6103,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L36-1"
    },
    {
        "AbsEntry": 6104,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L36-2"
    },
    {
        "AbsEntry": 6105,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L36-3"
    },
    {
        "AbsEntry": 6106,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L37-1"
    },
    {
        "AbsEntry": 6107,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L37-2"
    },
    {
        "AbsEntry": 6108,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L37-3"
    },
    {
        "AbsEntry": 6109,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L38-1"
    },
    {
        "AbsEntry": 6110,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L38-2"
    },
    {
        "AbsEntry": 6111,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L38-3"
    },
    {
        "AbsEntry": 6112,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L39-1"
    },
    {
        "AbsEntry": 6113,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L39-2"
    },
    {
        "AbsEntry": 6114,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L39-3"
    },
    {
        "AbsEntry": 6115,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L40-1"
    },
    {
        "AbsEntry": 6116,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L40-2"
    },
    {
        "AbsEntry": 6117,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L40-3"
    },
    {
        "AbsEntry": 6118,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L41-1"
    },
    {
        "AbsEntry": 6119,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L41-2"
    },
    {
        "AbsEntry": 6120,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L41-3"
    },
    {
        "AbsEntry": 6121,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L42-1"
    },
    {
        "AbsEntry": 6122,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L42-2"
    },
    {
        "AbsEntry": 6123,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L42-3"
    },
    {
        "AbsEntry": 6124,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L43-1"
    },
    {
        "AbsEntry": 6125,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L43-2"
    },
    {
        "AbsEntry": 6126,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L43-3"
    },
    {
        "AbsEntry": 6127,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L44-1"
    },
    {
        "AbsEntry": 6128,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L44-2"
    },
    {
        "AbsEntry": 6129,
        "Warehouse": "WCP",
        "BinCode": "WCP-3L44-3"
    },
    {
        "AbsEntry": 6130,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L01-1"
    },
    {
        "AbsEntry": 6131,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L01-2"
    },
    {
        "AbsEntry": 6132,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L01-3"
    },
    {
        "AbsEntry": 6133,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L02-1"
    },
    {
        "AbsEntry": 6134,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L02-2"
    },
    {
        "AbsEntry": 6135,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L02-3"
    },
    {
        "AbsEntry": 6136,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L03-1"
    },
    {
        "AbsEntry": 6137,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L03-2"
    },
    {
        "AbsEntry": 6138,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L03-3"
    },
    {
        "AbsEntry": 6139,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L04-1"
    },
    {
        "AbsEntry": 6140,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L04-2"
    },
    {
        "AbsEntry": 6141,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L04-3"
    },
    {
        "AbsEntry": 6142,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L05-1"
    },
    {
        "AbsEntry": 6143,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L05-2"
    },
    {
        "AbsEntry": 6144,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L05-3"
    },
    {
        "AbsEntry": 6145,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L06-1"
    },
    {
        "AbsEntry": 6146,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L06-2"
    },
    {
        "AbsEntry": 6147,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L06-3"
    },
    {
        "AbsEntry": 6148,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L07-1"
    },
    {
        "AbsEntry": 6149,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L07-2"
    },
    {
        "AbsEntry": 6150,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L07-3"
    },
    {
        "AbsEntry": 6151,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L08-1"
    },
    {
        "AbsEntry": 6152,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L08-2"
    },
    {
        "AbsEntry": 6153,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L08-3"
    },
    {
        "AbsEntry": 6154,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L09-1"
    },
    {
        "AbsEntry": 6155,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L09-2"
    },
    {
        "AbsEntry": 6156,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L09-3"
    },
    {
        "AbsEntry": 6157,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L10-1"
    },
    {
        "AbsEntry": 6158,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L10-2"
    },
    {
        "AbsEntry": 6159,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L10-3"
    },
    {
        "AbsEntry": 6160,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L11-1"
    },
    {
        "AbsEntry": 6161,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L11-2"
    },
    {
        "AbsEntry": 6162,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L11-3"
    },
    {
        "AbsEntry": 6163,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L12-1"
    },
    {
        "AbsEntry": 6164,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L12-2"
    },
    {
        "AbsEntry": 6165,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L12-3"
    },
    {
        "AbsEntry": 6166,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L13-1"
    },
    {
        "AbsEntry": 6167,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L13-2"
    },
    {
        "AbsEntry": 6168,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L13-3"
    },
    {
        "AbsEntry": 6169,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L14-1"
    },
    {
        "AbsEntry": 6170,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L14-2"
    },
    {
        "AbsEntry": 6171,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L14-3"
    },
    {
        "AbsEntry": 6172,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L15-1"
    },
    {
        "AbsEntry": 6173,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L15-2"
    },
    {
        "AbsEntry": 6174,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L15-3"
    },
    {
        "AbsEntry": 6175,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L16-1"
    },
    {
        "AbsEntry": 6176,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L16-2"
    },
    {
        "AbsEntry": 6177,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L16-3"
    },
    {
        "AbsEntry": 6178,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L17-1"
    },
    {
        "AbsEntry": 6179,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L17-2"
    },
    {
        "AbsEntry": 6180,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L17-3"
    },
    {
        "AbsEntry": 6181,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L18-1"
    },
    {
        "AbsEntry": 6182,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L18-2"
    },
    {
        "AbsEntry": 6183,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L18-3"
    },
    {
        "AbsEntry": 6184,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L19-1"
    },
    {
        "AbsEntry": 6185,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L19-2"
    },
    {
        "AbsEntry": 6186,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L19-3"
    },
    {
        "AbsEntry": 6187,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L20-1"
    },
    {
        "AbsEntry": 6188,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L20-2"
    },
    {
        "AbsEntry": 6189,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L20-3"
    },
    {
        "AbsEntry": 6190,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L21-1"
    },
    {
        "AbsEntry": 6191,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L21-2"
    },
    {
        "AbsEntry": 6192,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L21-3"
    },
    {
        "AbsEntry": 6193,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L22-1"
    },
    {
        "AbsEntry": 6194,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L22-2"
    },
    {
        "AbsEntry": 6195,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L22-3"
    },
    {
        "AbsEntry": 6196,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L23-1"
    },
    {
        "AbsEntry": 6197,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L23-2"
    },
    {
        "AbsEntry": 6198,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L23-3"
    },
    {
        "AbsEntry": 6199,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L24-1"
    },
    {
        "AbsEntry": 6200,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L24-2"
    },
    {
        "AbsEntry": 6201,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L24-3"
    },
    {
        "AbsEntry": 6202,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L25-1"
    },
    {
        "AbsEntry": 6203,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L25-2"
    },
    {
        "AbsEntry": 6204,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L25-3"
    },
    {
        "AbsEntry": 6205,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L26-1"
    },
    {
        "AbsEntry": 6206,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L26-2"
    },
    {
        "AbsEntry": 6207,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L26-3"
    },
    {
        "AbsEntry": 6208,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L27-1"
    },
    {
        "AbsEntry": 6209,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L27-2"
    },
    {
        "AbsEntry": 6210,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L27-3"
    },
    {
        "AbsEntry": 6211,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L28-1"
    },
    {
        "AbsEntry": 6212,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L28-2"
    },
    {
        "AbsEntry": 6213,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L28-3"
    },
    {
        "AbsEntry": 6214,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L29-1"
    },
    {
        "AbsEntry": 6215,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L29-2"
    },
    {
        "AbsEntry": 6216,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L29-3"
    },
    {
        "AbsEntry": 6217,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L30-1"
    },
    {
        "AbsEntry": 6218,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L30-2"
    },
    {
        "AbsEntry": 6219,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L30-3"
    },
    {
        "AbsEntry": 6220,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L31-1"
    },
    {
        "AbsEntry": 6221,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L31-2"
    },
    {
        "AbsEntry": 6222,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L31-3"
    },
    {
        "AbsEntry": 6223,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L32-1"
    },
    {
        "AbsEntry": 6224,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L32-2"
    },
    {
        "AbsEntry": 6225,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L32-3"
    },
    {
        "AbsEntry": 6226,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L33-1"
    },
    {
        "AbsEntry": 6227,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L33-2"
    },
    {
        "AbsEntry": 6228,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L33-3"
    },
    {
        "AbsEntry": 6229,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L34-1"
    },
    {
        "AbsEntry": 6230,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L34-2"
    },
    {
        "AbsEntry": 6231,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L34-3"
    },
    {
        "AbsEntry": 6232,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L35-1"
    },
    {
        "AbsEntry": 6233,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L35-2"
    },
    {
        "AbsEntry": 6234,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L35-3"
    },
    {
        "AbsEntry": 6235,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L36-1"
    },
    {
        "AbsEntry": 6236,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L36-2"
    },
    {
        "AbsEntry": 6237,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L36-3"
    },
    {
        "AbsEntry": 6238,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L37-1"
    },
    {
        "AbsEntry": 6239,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L37-2"
    },
    {
        "AbsEntry": 6240,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L37-3"
    },
    {
        "AbsEntry": 6241,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L38-1"
    },
    {
        "AbsEntry": 6242,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L38-2"
    },
    {
        "AbsEntry": 6243,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L38-3"
    },
    {
        "AbsEntry": 6244,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L39-1"
    },
    {
        "AbsEntry": 6245,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L39-2"
    },
    {
        "AbsEntry": 6246,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L39-3"
    },
    {
        "AbsEntry": 6247,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L40-1"
    },
    {
        "AbsEntry": 6248,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L40-2"
    },
    {
        "AbsEntry": 6249,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L40-3"
    },
    {
        "AbsEntry": 6250,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L41-1"
    },
    {
        "AbsEntry": 6251,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L41-2"
    },
    {
        "AbsEntry": 6252,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L41-3"
    },
    {
        "AbsEntry": 6253,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L42-1"
    },
    {
        "AbsEntry": 6254,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L42-2"
    },
    {
        "AbsEntry": 6255,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L42-3"
    },
    {
        "AbsEntry": 6256,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L43-1"
    },
    {
        "AbsEntry": 6257,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L43-2"
    },
    {
        "AbsEntry": 6258,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L43-3"
    },
    {
        "AbsEntry": 6259,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L44-1"
    },
    {
        "AbsEntry": 6260,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L44-2"
    },
    {
        "AbsEntry": 6261,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-3L44-3"
    },
    {
        "AbsEntry": 6262,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02386"
    },
    {
        "AbsEntry": 6263,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02416"
    },
    {
        "AbsEntry": 6264,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02417"
    },
    {
        "AbsEntry": 6265,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02418"
    },
    {
        "AbsEntry": 6267,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02445"
    },
    {
        "AbsEntry": 6268,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02344"
    },
    {
        "AbsEntry": 6269,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02471"
    },
    {
        "AbsEntry": 6270,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02500"
    },
    {
        "AbsEntry": 6271,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A01-1"
    },
    {
        "AbsEntry": 6272,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A01-2"
    },
    {
        "AbsEntry": 6273,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A01-3"
    },
    {
        "AbsEntry": 6274,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A02-1"
    },
    {
        "AbsEntry": 6275,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A02-2"
    },
    {
        "AbsEntry": 6276,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A02-3"
    },
    {
        "AbsEntry": 6277,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A03-1"
    },
    {
        "AbsEntry": 6278,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A03-2"
    },
    {
        "AbsEntry": 6279,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A03-3"
    },
    {
        "AbsEntry": 6280,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A04-1"
    },
    {
        "AbsEntry": 6281,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A04-2"
    },
    {
        "AbsEntry": 6282,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A04-3"
    },
    {
        "AbsEntry": 6283,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A05-1"
    },
    {
        "AbsEntry": 6284,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A05-2"
    },
    {
        "AbsEntry": 6285,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A05-3"
    },
    {
        "AbsEntry": 6286,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A06-1"
    },
    {
        "AbsEntry": 6287,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A06-2"
    },
    {
        "AbsEntry": 6288,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A06-3"
    },
    {
        "AbsEntry": 6289,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A07-1"
    },
    {
        "AbsEntry": 6290,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A07-2"
    },
    {
        "AbsEntry": 6291,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A07-3"
    },
    {
        "AbsEntry": 6292,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A08-1"
    },
    {
        "AbsEntry": 6293,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A08-2"
    },
    {
        "AbsEntry": 6294,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A08-3"
    },
    {
        "AbsEntry": 6295,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A09-1"
    },
    {
        "AbsEntry": 6296,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A09-2"
    },
    {
        "AbsEntry": 6297,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A09-3"
    },
    {
        "AbsEntry": 6298,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A10-1"
    },
    {
        "AbsEntry": 6299,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A10-2"
    },
    {
        "AbsEntry": 6300,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A10-3"
    },
    {
        "AbsEntry": 6301,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A11-1"
    },
    {
        "AbsEntry": 6302,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A11-2"
    },
    {
        "AbsEntry": 6303,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A11-3"
    },
    {
        "AbsEntry": 6304,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A12-1"
    },
    {
        "AbsEntry": 6305,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A12-2"
    },
    {
        "AbsEntry": 6306,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A12-3"
    },
    {
        "AbsEntry": 6307,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A13-1"
    },
    {
        "AbsEntry": 6308,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A13-2"
    },
    {
        "AbsEntry": 6309,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A13-3"
    },
    {
        "AbsEntry": 6310,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A14-1"
    },
    {
        "AbsEntry": 6311,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A14-2"
    },
    {
        "AbsEntry": 6312,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A14-3"
    },
    {
        "AbsEntry": 6313,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A15-1"
    },
    {
        "AbsEntry": 6314,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A15-2"
    },
    {
        "AbsEntry": 6315,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A15-3"
    },
    {
        "AbsEntry": 6316,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A16-1"
    },
    {
        "AbsEntry": 6317,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A16-2"
    },
    {
        "AbsEntry": 6318,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A16-3"
    },
    {
        "AbsEntry": 6319,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A17-1"
    },
    {
        "AbsEntry": 6320,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A17-2"
    },
    {
        "AbsEntry": 6321,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A17-3"
    },
    {
        "AbsEntry": 6322,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A18-1"
    },
    {
        "AbsEntry": 6323,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A18-2"
    },
    {
        "AbsEntry": 6324,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A18-3"
    },
    {
        "AbsEntry": 6325,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A19-1"
    },
    {
        "AbsEntry": 6326,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A19-2"
    },
    {
        "AbsEntry": 6327,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A19-3"
    },
    {
        "AbsEntry": 6328,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A20-1"
    },
    {
        "AbsEntry": 6329,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A20-2"
    },
    {
        "AbsEntry": 6330,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A20-3"
    },
    {
        "AbsEntry": 6331,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A21-1"
    },
    {
        "AbsEntry": 6332,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A21-2"
    },
    {
        "AbsEntry": 6333,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A21-3"
    },
    {
        "AbsEntry": 6334,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A22-1"
    },
    {
        "AbsEntry": 6335,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A22-2"
    },
    {
        "AbsEntry": 6336,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A22-3"
    },
    {
        "AbsEntry": 6337,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A23-1"
    },
    {
        "AbsEntry": 6338,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A23-2"
    },
    {
        "AbsEntry": 6339,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A23-3"
    },
    {
        "AbsEntry": 6340,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A24-1"
    },
    {
        "AbsEntry": 6341,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A24-2"
    },
    {
        "AbsEntry": 6342,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A24-3"
    },
    {
        "AbsEntry": 6343,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A25-1"
    },
    {
        "AbsEntry": 6344,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A25-2"
    },
    {
        "AbsEntry": 6345,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A25-3"
    },
    {
        "AbsEntry": 6346,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A26-1"
    },
    {
        "AbsEntry": 6347,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A26-2"
    },
    {
        "AbsEntry": 6348,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A26-3"
    },
    {
        "AbsEntry": 6349,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A27-1"
    },
    {
        "AbsEntry": 6350,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A27-2"
    },
    {
        "AbsEntry": 6351,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A27-3"
    },
    {
        "AbsEntry": 6352,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A28-1"
    },
    {
        "AbsEntry": 6353,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A28-2"
    },
    {
        "AbsEntry": 6354,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A28-3"
    },
    {
        "AbsEntry": 6355,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A29-1"
    },
    {
        "AbsEntry": 6356,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A29-2"
    },
    {
        "AbsEntry": 6357,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A29-3"
    },
    {
        "AbsEntry": 6358,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A30-1"
    },
    {
        "AbsEntry": 6359,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A30-2"
    },
    {
        "AbsEntry": 6360,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A30-3"
    },
    {
        "AbsEntry": 6361,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A31-1"
    },
    {
        "AbsEntry": 6362,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A31-2"
    },
    {
        "AbsEntry": 6363,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A31-3"
    },
    {
        "AbsEntry": 6364,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A32-1"
    },
    {
        "AbsEntry": 6365,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A32-2"
    },
    {
        "AbsEntry": 6366,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A32-3"
    },
    {
        "AbsEntry": 6367,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A33-1"
    },
    {
        "AbsEntry": 6368,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A33-2"
    },
    {
        "AbsEntry": 6369,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A33-3"
    },
    {
        "AbsEntry": 6370,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A34-1"
    },
    {
        "AbsEntry": 6371,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A34-2"
    },
    {
        "AbsEntry": 6372,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A34-3"
    },
    {
        "AbsEntry": 6373,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A35-1"
    },
    {
        "AbsEntry": 6374,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A35-2"
    },
    {
        "AbsEntry": 6375,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A35-3"
    },
    {
        "AbsEntry": 6376,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A36-1"
    },
    {
        "AbsEntry": 6377,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A36-2"
    },
    {
        "AbsEntry": 6378,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A36-3"
    },
    {
        "AbsEntry": 6379,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A37-1"
    },
    {
        "AbsEntry": 6380,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A37-2"
    },
    {
        "AbsEntry": 6381,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A37-3"
    },
    {
        "AbsEntry": 6382,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A38-1"
    },
    {
        "AbsEntry": 6383,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A38-2"
    },
    {
        "AbsEntry": 6384,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A38-3"
    },
    {
        "AbsEntry": 6385,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A39-1"
    },
    {
        "AbsEntry": 6386,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A39-2"
    },
    {
        "AbsEntry": 6387,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A39-3"
    },
    {
        "AbsEntry": 6388,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A40-1"
    },
    {
        "AbsEntry": 6389,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A40-2"
    },
    {
        "AbsEntry": 6390,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A40-3"
    },
    {
        "AbsEntry": 6391,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A41-1"
    },
    {
        "AbsEntry": 6392,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A41-2"
    },
    {
        "AbsEntry": 6393,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A41-3"
    },
    {
        "AbsEntry": 6394,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A42-1"
    },
    {
        "AbsEntry": 6395,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A42-2"
    },
    {
        "AbsEntry": 6396,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A42-3"
    },
    {
        "AbsEntry": 6397,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A43-1"
    },
    {
        "AbsEntry": 6398,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A43-2"
    },
    {
        "AbsEntry": 6399,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A43-3"
    },
    {
        "AbsEntry": 6400,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A44-1"
    },
    {
        "AbsEntry": 6401,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A44-2"
    },
    {
        "AbsEntry": 6402,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A44-3"
    },
    {
        "AbsEntry": 6403,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A45-1"
    },
    {
        "AbsEntry": 6404,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A45-2"
    },
    {
        "AbsEntry": 6405,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A45-3"
    },
    {
        "AbsEntry": 6406,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A46-1"
    },
    {
        "AbsEntry": 6407,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A46-2"
    },
    {
        "AbsEntry": 6408,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A46-3"
    },
    {
        "AbsEntry": 6409,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A47-1"
    },
    {
        "AbsEntry": 6410,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A47-2"
    },
    {
        "AbsEntry": 6411,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A47-3"
    },
    {
        "AbsEntry": 6412,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A48-1"
    },
    {
        "AbsEntry": 6413,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A48-2"
    },
    {
        "AbsEntry": 6414,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A48-3"
    },
    {
        "AbsEntry": 6415,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A49-1"
    },
    {
        "AbsEntry": 6416,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A49-2"
    },
    {
        "AbsEntry": 6417,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A49-3"
    },
    {
        "AbsEntry": 6418,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A50-1"
    },
    {
        "AbsEntry": 6419,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A50-2"
    },
    {
        "AbsEntry": 6420,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A50-3"
    },
    {
        "AbsEntry": 6421,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B01-1"
    },
    {
        "AbsEntry": 6422,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B01-2"
    },
    {
        "AbsEntry": 6423,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B01-3"
    },
    {
        "AbsEntry": 6424,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B02-1"
    },
    {
        "AbsEntry": 6425,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B02-2"
    },
    {
        "AbsEntry": 6426,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B02-3"
    },
    {
        "AbsEntry": 6427,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B03-1"
    },
    {
        "AbsEntry": 6428,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B03-2"
    },
    {
        "AbsEntry": 6429,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B03-3"
    },
    {
        "AbsEntry": 6430,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B04-1"
    },
    {
        "AbsEntry": 6431,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B04-2"
    },
    {
        "AbsEntry": 6432,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B04-3"
    },
    {
        "AbsEntry": 6433,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B05-1"
    },
    {
        "AbsEntry": 6434,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B05-2"
    },
    {
        "AbsEntry": 6435,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B05-3"
    },
    {
        "AbsEntry": 6436,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B06-1"
    },
    {
        "AbsEntry": 6437,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B06-2"
    },
    {
        "AbsEntry": 6438,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B06-3"
    },
    {
        "AbsEntry": 6439,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B07-1"
    },
    {
        "AbsEntry": 6440,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B07-2"
    },
    {
        "AbsEntry": 6441,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B07-3"
    },
    {
        "AbsEntry": 6442,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B08-1"
    },
    {
        "AbsEntry": 6443,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B08-2"
    },
    {
        "AbsEntry": 6444,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B08-3"
    },
    {
        "AbsEntry": 6445,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B09-1"
    },
    {
        "AbsEntry": 6446,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B09-2"
    },
    {
        "AbsEntry": 6447,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B09-3"
    },
    {
        "AbsEntry": 6448,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B10-1"
    },
    {
        "AbsEntry": 6449,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B10-2"
    },
    {
        "AbsEntry": 6450,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B10-3"
    },
    {
        "AbsEntry": 6451,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B11-1"
    },
    {
        "AbsEntry": 6452,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B11-2"
    },
    {
        "AbsEntry": 6453,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B11-3"
    },
    {
        "AbsEntry": 6454,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B12-1"
    },
    {
        "AbsEntry": 6455,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B12-2"
    },
    {
        "AbsEntry": 6456,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B12-3"
    },
    {
        "AbsEntry": 6457,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B13-1"
    },
    {
        "AbsEntry": 6458,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B13-2"
    },
    {
        "AbsEntry": 6459,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B13-3"
    },
    {
        "AbsEntry": 6460,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B14-1"
    },
    {
        "AbsEntry": 6461,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B14-2"
    },
    {
        "AbsEntry": 6462,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B14-3"
    },
    {
        "AbsEntry": 6463,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B15-1"
    },
    {
        "AbsEntry": 6464,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B15-2"
    },
    {
        "AbsEntry": 6465,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B15-3"
    },
    {
        "AbsEntry": 6466,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B16-1"
    },
    {
        "AbsEntry": 6467,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B16-2"
    },
    {
        "AbsEntry": 6468,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B16-3"
    },
    {
        "AbsEntry": 6469,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B17-1"
    },
    {
        "AbsEntry": 6470,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B17-2"
    },
    {
        "AbsEntry": 6471,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B17-3"
    },
    {
        "AbsEntry": 6472,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B18-1"
    },
    {
        "AbsEntry": 6473,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B18-2"
    },
    {
        "AbsEntry": 6474,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B18-3"
    },
    {
        "AbsEntry": 6475,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B19-1"
    },
    {
        "AbsEntry": 6476,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B19-2"
    },
    {
        "AbsEntry": 6477,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B19-3"
    },
    {
        "AbsEntry": 6478,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B20-1"
    },
    {
        "AbsEntry": 6479,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B20-2"
    },
    {
        "AbsEntry": 6480,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B20-3"
    },
    {
        "AbsEntry": 6481,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B21-1"
    },
    {
        "AbsEntry": 6482,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B21-2"
    },
    {
        "AbsEntry": 6483,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B21-3"
    },
    {
        "AbsEntry": 6484,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B22-1"
    },
    {
        "AbsEntry": 6485,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B22-2"
    },
    {
        "AbsEntry": 6486,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B22-3"
    },
    {
        "AbsEntry": 6487,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B23-1"
    },
    {
        "AbsEntry": 6488,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B23-2"
    },
    {
        "AbsEntry": 6489,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B23-3"
    },
    {
        "AbsEntry": 6490,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B24-1"
    },
    {
        "AbsEntry": 6491,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B24-2"
    },
    {
        "AbsEntry": 6492,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B24-3"
    },
    {
        "AbsEntry": 6493,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B25-1"
    },
    {
        "AbsEntry": 6494,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B25-2"
    },
    {
        "AbsEntry": 6495,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B25-3"
    },
    {
        "AbsEntry": 6496,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B26-1"
    },
    {
        "AbsEntry": 6497,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B26-2"
    },
    {
        "AbsEntry": 6498,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B26-3"
    },
    {
        "AbsEntry": 6499,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B27-1"
    },
    {
        "AbsEntry": 6500,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B27-2"
    },
    {
        "AbsEntry": 6501,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B27-3"
    },
    {
        "AbsEntry": 6502,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B28-1"
    },
    {
        "AbsEntry": 6503,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B28-2"
    },
    {
        "AbsEntry": 6504,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B28-3"
    },
    {
        "AbsEntry": 6505,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B29-1"
    },
    {
        "AbsEntry": 6506,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B29-2"
    },
    {
        "AbsEntry": 6507,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B29-3"
    },
    {
        "AbsEntry": 6508,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B30-1"
    },
    {
        "AbsEntry": 6509,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B30-2"
    },
    {
        "AbsEntry": 6510,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B30-3"
    },
    {
        "AbsEntry": 6511,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B31-1"
    },
    {
        "AbsEntry": 6512,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B31-2"
    },
    {
        "AbsEntry": 6513,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B31-3"
    },
    {
        "AbsEntry": 6514,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B32-1"
    },
    {
        "AbsEntry": 6515,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B32-2"
    },
    {
        "AbsEntry": 6516,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B32-3"
    },
    {
        "AbsEntry": 6517,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B33-1"
    },
    {
        "AbsEntry": 6518,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B33-2"
    },
    {
        "AbsEntry": 6519,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B33-3"
    },
    {
        "AbsEntry": 6520,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B34-1"
    },
    {
        "AbsEntry": 6521,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B34-2"
    },
    {
        "AbsEntry": 6522,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B34-3"
    },
    {
        "AbsEntry": 6523,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B35-1"
    },
    {
        "AbsEntry": 6524,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B35-2"
    },
    {
        "AbsEntry": 6525,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B35-3"
    },
    {
        "AbsEntry": 6526,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B36-1"
    },
    {
        "AbsEntry": 6527,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B36-2"
    },
    {
        "AbsEntry": 6528,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B36-3"
    },
    {
        "AbsEntry": 6529,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B37-1"
    },
    {
        "AbsEntry": 6530,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B37-2"
    },
    {
        "AbsEntry": 6531,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B37-3"
    },
    {
        "AbsEntry": 6532,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B38-1"
    },
    {
        "AbsEntry": 6533,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B38-2"
    },
    {
        "AbsEntry": 6534,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B38-3"
    },
    {
        "AbsEntry": 6535,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B39-1"
    },
    {
        "AbsEntry": 6536,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B39-2"
    },
    {
        "AbsEntry": 6537,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B39-3"
    },
    {
        "AbsEntry": 6538,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B40-1"
    },
    {
        "AbsEntry": 6539,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B40-2"
    },
    {
        "AbsEntry": 6540,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B40-3"
    },
    {
        "AbsEntry": 6541,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B41-1"
    },
    {
        "AbsEntry": 6542,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B41-2"
    },
    {
        "AbsEntry": 6543,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B41-3"
    },
    {
        "AbsEntry": 6544,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B42-1"
    },
    {
        "AbsEntry": 6545,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B42-2"
    },
    {
        "AbsEntry": 6546,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B42-3"
    },
    {
        "AbsEntry": 6547,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B43-1"
    },
    {
        "AbsEntry": 6548,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B43-2"
    },
    {
        "AbsEntry": 6549,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B43-3"
    },
    {
        "AbsEntry": 6550,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B44-1"
    },
    {
        "AbsEntry": 6551,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B44-2"
    },
    {
        "AbsEntry": 6552,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B44-3"
    },
    {
        "AbsEntry": 6553,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B45-1"
    },
    {
        "AbsEntry": 6554,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B45-2"
    },
    {
        "AbsEntry": 6555,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B45-3"
    },
    {
        "AbsEntry": 6556,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B46-1"
    },
    {
        "AbsEntry": 6557,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B46-2"
    },
    {
        "AbsEntry": 6558,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B46-3"
    },
    {
        "AbsEntry": 6559,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B47-1"
    },
    {
        "AbsEntry": 6560,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B47-2"
    },
    {
        "AbsEntry": 6561,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B47-3"
    },
    {
        "AbsEntry": 6562,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B48-1"
    },
    {
        "AbsEntry": 6563,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B48-2"
    },
    {
        "AbsEntry": 6564,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B48-3"
    },
    {
        "AbsEntry": 6565,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B49-1"
    },
    {
        "AbsEntry": 6566,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B49-2"
    },
    {
        "AbsEntry": 6567,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B49-3"
    },
    {
        "AbsEntry": 6568,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B50-1"
    },
    {
        "AbsEntry": 6569,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B50-2"
    },
    {
        "AbsEntry": 6570,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B50-3"
    },
    {
        "AbsEntry": 6571,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C01-1"
    },
    {
        "AbsEntry": 6572,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C01-2"
    },
    {
        "AbsEntry": 6573,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C01-3"
    },
    {
        "AbsEntry": 6574,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C02-1"
    },
    {
        "AbsEntry": 6575,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C02-2"
    },
    {
        "AbsEntry": 6576,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C02-3"
    },
    {
        "AbsEntry": 6577,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C03-1"
    },
    {
        "AbsEntry": 6578,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C03-2"
    },
    {
        "AbsEntry": 6579,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C03-3"
    },
    {
        "AbsEntry": 6580,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C04-1"
    },
    {
        "AbsEntry": 6581,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C04-2"
    },
    {
        "AbsEntry": 6582,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C04-3"
    },
    {
        "AbsEntry": 6583,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C05-1"
    },
    {
        "AbsEntry": 6584,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C05-2"
    },
    {
        "AbsEntry": 6585,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C05-3"
    },
    {
        "AbsEntry": 6586,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C06-1"
    },
    {
        "AbsEntry": 6587,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C06-2"
    },
    {
        "AbsEntry": 6588,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C06-3"
    },
    {
        "AbsEntry": 6589,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C07-1"
    },
    {
        "AbsEntry": 6590,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C07-2"
    },
    {
        "AbsEntry": 6591,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C07-3"
    },
    {
        "AbsEntry": 6592,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C08-1"
    },
    {
        "AbsEntry": 6593,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C08-2"
    },
    {
        "AbsEntry": 6594,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C08-3"
    },
    {
        "AbsEntry": 6595,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C09-1"
    },
    {
        "AbsEntry": 6596,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C09-2"
    },
    {
        "AbsEntry": 6597,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C09-3"
    },
    {
        "AbsEntry": 6598,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C10-1"
    },
    {
        "AbsEntry": 6599,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C10-2"
    },
    {
        "AbsEntry": 6600,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C10-3"
    },
    {
        "AbsEntry": 6601,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C11-1"
    },
    {
        "AbsEntry": 6602,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C11-2"
    },
    {
        "AbsEntry": 6603,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C11-3"
    },
    {
        "AbsEntry": 6604,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C12-1"
    },
    {
        "AbsEntry": 6605,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C12-2"
    },
    {
        "AbsEntry": 6606,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C12-3"
    },
    {
        "AbsEntry": 6607,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C13-1"
    },
    {
        "AbsEntry": 6608,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C13-2"
    },
    {
        "AbsEntry": 6609,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C13-3"
    },
    {
        "AbsEntry": 6610,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C14-1"
    },
    {
        "AbsEntry": 6611,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C14-2"
    },
    {
        "AbsEntry": 6612,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C14-3"
    },
    {
        "AbsEntry": 6613,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C15-1"
    },
    {
        "AbsEntry": 6614,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C15-2"
    },
    {
        "AbsEntry": 6615,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C15-3"
    },
    {
        "AbsEntry": 6616,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C16-1"
    },
    {
        "AbsEntry": 6617,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C16-2"
    },
    {
        "AbsEntry": 6618,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C16-3"
    },
    {
        "AbsEntry": 6619,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C17-1"
    },
    {
        "AbsEntry": 6620,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C17-2"
    },
    {
        "AbsEntry": 6621,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C17-3"
    },
    {
        "AbsEntry": 6622,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C18-1"
    },
    {
        "AbsEntry": 6623,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C18-2"
    },
    {
        "AbsEntry": 6624,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C18-3"
    },
    {
        "AbsEntry": 6625,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C19-1"
    },
    {
        "AbsEntry": 6626,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C19-2"
    },
    {
        "AbsEntry": 6627,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C19-3"
    },
    {
        "AbsEntry": 6628,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C20-1"
    },
    {
        "AbsEntry": 6629,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C20-2"
    },
    {
        "AbsEntry": 6630,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C20-3"
    },
    {
        "AbsEntry": 6631,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C21-1"
    },
    {
        "AbsEntry": 6632,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C21-2"
    },
    {
        "AbsEntry": 6633,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C21-3"
    },
    {
        "AbsEntry": 6634,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C22-1"
    },
    {
        "AbsEntry": 6635,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C22-2"
    },
    {
        "AbsEntry": 6636,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C22-3"
    },
    {
        "AbsEntry": 6637,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C23-1"
    },
    {
        "AbsEntry": 6638,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C23-2"
    },
    {
        "AbsEntry": 6639,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C23-3"
    },
    {
        "AbsEntry": 6640,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C24-1"
    },
    {
        "AbsEntry": 6641,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C24-2"
    },
    {
        "AbsEntry": 6642,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C24-3"
    },
    {
        "AbsEntry": 6643,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C25-1"
    },
    {
        "AbsEntry": 6644,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C25-2"
    },
    {
        "AbsEntry": 6645,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C25-3"
    },
    {
        "AbsEntry": 6646,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C26-1"
    },
    {
        "AbsEntry": 6647,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C26-2"
    },
    {
        "AbsEntry": 6648,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C26-3"
    },
    {
        "AbsEntry": 6649,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C27-1"
    },
    {
        "AbsEntry": 6650,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C27-2"
    },
    {
        "AbsEntry": 6651,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C27-3"
    },
    {
        "AbsEntry": 6652,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C28-1"
    },
    {
        "AbsEntry": 6653,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C28-2"
    },
    {
        "AbsEntry": 6654,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C28-3"
    },
    {
        "AbsEntry": 6655,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C29-1"
    },
    {
        "AbsEntry": 6656,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C29-2"
    },
    {
        "AbsEntry": 6657,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C29-3"
    },
    {
        "AbsEntry": 6658,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C30-1"
    },
    {
        "AbsEntry": 6659,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C30-2"
    },
    {
        "AbsEntry": 6660,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C30-3"
    },
    {
        "AbsEntry": 6661,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C31-1"
    },
    {
        "AbsEntry": 6662,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C31-2"
    },
    {
        "AbsEntry": 6663,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C31-3"
    },
    {
        "AbsEntry": 6664,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C32-1"
    },
    {
        "AbsEntry": 6665,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C32-2"
    },
    {
        "AbsEntry": 6666,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C32-3"
    },
    {
        "AbsEntry": 6667,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C33-1"
    },
    {
        "AbsEntry": 6668,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C33-2"
    },
    {
        "AbsEntry": 6669,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C33-3"
    },
    {
        "AbsEntry": 6670,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C34-1"
    },
    {
        "AbsEntry": 6671,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C34-2"
    },
    {
        "AbsEntry": 6672,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C34-3"
    },
    {
        "AbsEntry": 6673,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C35-1"
    },
    {
        "AbsEntry": 6674,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C35-2"
    },
    {
        "AbsEntry": 6675,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C35-3"
    },
    {
        "AbsEntry": 6676,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C36-1"
    },
    {
        "AbsEntry": 6677,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C36-2"
    },
    {
        "AbsEntry": 6678,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C36-3"
    },
    {
        "AbsEntry": 6679,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C37-1"
    },
    {
        "AbsEntry": 6680,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C37-2"
    },
    {
        "AbsEntry": 6681,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C37-3"
    },
    {
        "AbsEntry": 6682,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C38-1"
    },
    {
        "AbsEntry": 6683,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C38-2"
    },
    {
        "AbsEntry": 6684,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C38-3"
    },
    {
        "AbsEntry": 6685,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C39-1"
    },
    {
        "AbsEntry": 6686,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C39-2"
    },
    {
        "AbsEntry": 6687,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C39-3"
    },
    {
        "AbsEntry": 6688,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C40-1"
    },
    {
        "AbsEntry": 6689,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C40-2"
    },
    {
        "AbsEntry": 6690,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C40-3"
    },
    {
        "AbsEntry": 6691,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C41-1"
    },
    {
        "AbsEntry": 6692,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C41-2"
    },
    {
        "AbsEntry": 6693,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C41-3"
    },
    {
        "AbsEntry": 6694,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C42-1"
    },
    {
        "AbsEntry": 6695,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C42-2"
    },
    {
        "AbsEntry": 6696,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C42-3"
    },
    {
        "AbsEntry": 6697,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C43-1"
    },
    {
        "AbsEntry": 6698,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C43-2"
    },
    {
        "AbsEntry": 6699,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C43-3"
    },
    {
        "AbsEntry": 6700,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C44-1"
    },
    {
        "AbsEntry": 6701,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C44-2"
    },
    {
        "AbsEntry": 6702,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C44-3"
    },
    {
        "AbsEntry": 6703,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C45-1"
    },
    {
        "AbsEntry": 6704,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C45-2"
    },
    {
        "AbsEntry": 6705,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C45-3"
    },
    {
        "AbsEntry": 6706,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C46-1"
    },
    {
        "AbsEntry": 6707,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C46-2"
    },
    {
        "AbsEntry": 6708,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C46-3"
    },
    {
        "AbsEntry": 6709,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C47-1"
    },
    {
        "AbsEntry": 6710,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C47-2"
    },
    {
        "AbsEntry": 6711,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C47-3"
    },
    {
        "AbsEntry": 6712,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C48-1"
    },
    {
        "AbsEntry": 6713,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C48-2"
    },
    {
        "AbsEntry": 6714,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C48-3"
    },
    {
        "AbsEntry": 6715,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C49-1"
    },
    {
        "AbsEntry": 6716,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C49-2"
    },
    {
        "AbsEntry": 6717,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C49-3"
    },
    {
        "AbsEntry": 6718,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C50-1"
    },
    {
        "AbsEntry": 6719,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C50-2"
    },
    {
        "AbsEntry": 6720,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C50-3"
    },
    {
        "AbsEntry": 6721,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D01-1"
    },
    {
        "AbsEntry": 6722,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D01-2"
    },
    {
        "AbsEntry": 6723,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D01-3"
    },
    {
        "AbsEntry": 6724,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D02-1"
    },
    {
        "AbsEntry": 6725,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D02-2"
    },
    {
        "AbsEntry": 6726,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D02-3"
    },
    {
        "AbsEntry": 6727,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D03-1"
    },
    {
        "AbsEntry": 6728,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D03-2"
    },
    {
        "AbsEntry": 6729,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D03-3"
    },
    {
        "AbsEntry": 6730,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D04-1"
    },
    {
        "AbsEntry": 6731,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D04-2"
    },
    {
        "AbsEntry": 6732,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D04-3"
    },
    {
        "AbsEntry": 6733,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D05-1"
    },
    {
        "AbsEntry": 6734,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D05-2"
    },
    {
        "AbsEntry": 6735,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D05-3"
    },
    {
        "AbsEntry": 6736,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D06-1"
    },
    {
        "AbsEntry": 6737,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D06-2"
    },
    {
        "AbsEntry": 6738,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D06-3"
    },
    {
        "AbsEntry": 6739,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D07-1"
    },
    {
        "AbsEntry": 6740,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D07-2"
    },
    {
        "AbsEntry": 6741,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D07-3"
    },
    {
        "AbsEntry": 6742,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D08-1"
    },
    {
        "AbsEntry": 6743,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D08-2"
    },
    {
        "AbsEntry": 6744,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D08-3"
    },
    {
        "AbsEntry": 6745,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D09-1"
    },
    {
        "AbsEntry": 6746,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D09-2"
    },
    {
        "AbsEntry": 6747,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D09-3"
    },
    {
        "AbsEntry": 6748,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D10-1"
    },
    {
        "AbsEntry": 6749,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D10-2"
    },
    {
        "AbsEntry": 6750,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D10-3"
    },
    {
        "AbsEntry": 6751,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D11-1"
    },
    {
        "AbsEntry": 6752,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D11-2"
    },
    {
        "AbsEntry": 6753,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D11-3"
    },
    {
        "AbsEntry": 6754,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D12-1"
    },
    {
        "AbsEntry": 6755,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D12-2"
    },
    {
        "AbsEntry": 6756,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D12-3"
    },
    {
        "AbsEntry": 6757,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D13-1"
    },
    {
        "AbsEntry": 6758,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D13-2"
    },
    {
        "AbsEntry": 6759,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D13-3"
    },
    {
        "AbsEntry": 6760,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D14-1"
    },
    {
        "AbsEntry": 6761,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D14-2"
    },
    {
        "AbsEntry": 6762,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D14-3"
    },
    {
        "AbsEntry": 6763,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D15-1"
    },
    {
        "AbsEntry": 6764,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D15-2"
    },
    {
        "AbsEntry": 6765,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D15-3"
    },
    {
        "AbsEntry": 6766,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D16-1"
    },
    {
        "AbsEntry": 6767,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D16-2"
    },
    {
        "AbsEntry": 6768,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D16-3"
    },
    {
        "AbsEntry": 6769,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D17-1"
    },
    {
        "AbsEntry": 6770,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D17-2"
    },
    {
        "AbsEntry": 6771,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D17-3"
    },
    {
        "AbsEntry": 6772,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D18-1"
    },
    {
        "AbsEntry": 6773,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D18-2"
    },
    {
        "AbsEntry": 6774,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D18-3"
    },
    {
        "AbsEntry": 6775,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D19-1"
    },
    {
        "AbsEntry": 6776,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D19-2"
    },
    {
        "AbsEntry": 6777,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D19-3"
    },
    {
        "AbsEntry": 6778,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D20-1"
    },
    {
        "AbsEntry": 6779,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D20-2"
    },
    {
        "AbsEntry": 6780,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D20-3"
    },
    {
        "AbsEntry": 6781,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D21-1"
    },
    {
        "AbsEntry": 6782,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D21-2"
    },
    {
        "AbsEntry": 6783,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D21-3"
    },
    {
        "AbsEntry": 6784,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D22-1"
    },
    {
        "AbsEntry": 6785,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D22-2"
    },
    {
        "AbsEntry": 6786,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D22-3"
    },
    {
        "AbsEntry": 6787,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D23-1"
    },
    {
        "AbsEntry": 6788,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D23-2"
    },
    {
        "AbsEntry": 6789,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D23-3"
    },
    {
        "AbsEntry": 6790,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D24-1"
    },
    {
        "AbsEntry": 6791,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D24-2"
    },
    {
        "AbsEntry": 6792,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D24-3"
    },
    {
        "AbsEntry": 6793,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D25-1"
    },
    {
        "AbsEntry": 6794,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D25-2"
    },
    {
        "AbsEntry": 6795,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D25-3"
    },
    {
        "AbsEntry": 6796,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D26-1"
    },
    {
        "AbsEntry": 6797,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D26-2"
    },
    {
        "AbsEntry": 6798,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D26-3"
    },
    {
        "AbsEntry": 6799,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D27-1"
    },
    {
        "AbsEntry": 6800,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D27-2"
    },
    {
        "AbsEntry": 6801,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D27-3"
    },
    {
        "AbsEntry": 6802,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D28-1"
    },
    {
        "AbsEntry": 6803,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D28-2"
    },
    {
        "AbsEntry": 6804,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D28-3"
    },
    {
        "AbsEntry": 6805,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D29-1"
    },
    {
        "AbsEntry": 6806,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D29-2"
    },
    {
        "AbsEntry": 6807,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D29-3"
    },
    {
        "AbsEntry": 6808,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D30-1"
    },
    {
        "AbsEntry": 6809,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D30-2"
    },
    {
        "AbsEntry": 6810,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D30-3"
    },
    {
        "AbsEntry": 6811,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D31-1"
    },
    {
        "AbsEntry": 6812,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D31-2"
    },
    {
        "AbsEntry": 6813,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D31-3"
    },
    {
        "AbsEntry": 6814,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D32-1"
    },
    {
        "AbsEntry": 6815,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D32-2"
    },
    {
        "AbsEntry": 6816,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D32-3"
    },
    {
        "AbsEntry": 6817,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D33-1"
    },
    {
        "AbsEntry": 6818,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D33-2"
    },
    {
        "AbsEntry": 6819,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D33-3"
    },
    {
        "AbsEntry": 6820,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D34-1"
    },
    {
        "AbsEntry": 6821,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D34-2"
    },
    {
        "AbsEntry": 6822,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D34-3"
    },
    {
        "AbsEntry": 6823,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D35-1"
    },
    {
        "AbsEntry": 6824,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D35-2"
    },
    {
        "AbsEntry": 6825,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D35-3"
    },
    {
        "AbsEntry": 6826,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D36-1"
    },
    {
        "AbsEntry": 6827,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D36-2"
    },
    {
        "AbsEntry": 6828,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D36-3"
    },
    {
        "AbsEntry": 6829,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D37-1"
    },
    {
        "AbsEntry": 6830,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D37-2"
    },
    {
        "AbsEntry": 6831,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D37-3"
    },
    {
        "AbsEntry": 6832,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D38-1"
    },
    {
        "AbsEntry": 6833,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D38-2"
    },
    {
        "AbsEntry": 6834,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D38-3"
    },
    {
        "AbsEntry": 6835,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D39-1"
    },
    {
        "AbsEntry": 6836,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D39-2"
    },
    {
        "AbsEntry": 6837,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D39-3"
    },
    {
        "AbsEntry": 6838,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D40-1"
    },
    {
        "AbsEntry": 6839,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D40-2"
    },
    {
        "AbsEntry": 6840,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D40-3"
    },
    {
        "AbsEntry": 6841,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D41-1"
    },
    {
        "AbsEntry": 6842,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D41-2"
    },
    {
        "AbsEntry": 6843,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D41-3"
    },
    {
        "AbsEntry": 6844,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D42-1"
    },
    {
        "AbsEntry": 6845,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D42-2"
    },
    {
        "AbsEntry": 6846,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D42-3"
    },
    {
        "AbsEntry": 6847,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D43-1"
    },
    {
        "AbsEntry": 6848,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D43-2"
    },
    {
        "AbsEntry": 6849,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D43-3"
    },
    {
        "AbsEntry": 6850,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D44-1"
    },
    {
        "AbsEntry": 6851,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D44-2"
    },
    {
        "AbsEntry": 6852,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D44-3"
    },
    {
        "AbsEntry": 6853,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D45-1"
    },
    {
        "AbsEntry": 6854,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D45-2"
    },
    {
        "AbsEntry": 6855,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D45-3"
    },
    {
        "AbsEntry": 6856,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D46-1"
    },
    {
        "AbsEntry": 6857,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D46-2"
    },
    {
        "AbsEntry": 6858,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D46-3"
    },
    {
        "AbsEntry": 6859,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D47-1"
    },
    {
        "AbsEntry": 6860,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D47-2"
    },
    {
        "AbsEntry": 6861,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D47-3"
    },
    {
        "AbsEntry": 6862,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D48-1"
    },
    {
        "AbsEntry": 6863,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D48-2"
    },
    {
        "AbsEntry": 6864,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D48-3"
    },
    {
        "AbsEntry": 6865,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D49-1"
    },
    {
        "AbsEntry": 6866,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D49-2"
    },
    {
        "AbsEntry": 6867,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D49-3"
    },
    {
        "AbsEntry": 6868,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D50-1"
    },
    {
        "AbsEntry": 6869,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D50-2"
    },
    {
        "AbsEntry": 6870,
        "Warehouse": "WCP",
        "BinCode": "WCP-8D50-3"
    },
    {
        "AbsEntry": 6871,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E01-1"
    },
    {
        "AbsEntry": 6872,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E01-2"
    },
    {
        "AbsEntry": 6873,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E01-3"
    },
    {
        "AbsEntry": 6874,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E02-1"
    },
    {
        "AbsEntry": 6875,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E02-2"
    },
    {
        "AbsEntry": 6876,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E02-3"
    },
    {
        "AbsEntry": 6877,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E03-1"
    },
    {
        "AbsEntry": 6878,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E03-2"
    },
    {
        "AbsEntry": 6879,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E03-3"
    },
    {
        "AbsEntry": 6880,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E04-1"
    },
    {
        "AbsEntry": 6881,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E04-2"
    },
    {
        "AbsEntry": 6882,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E04-3"
    },
    {
        "AbsEntry": 6883,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E05-1"
    },
    {
        "AbsEntry": 6884,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E05-2"
    },
    {
        "AbsEntry": 6885,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E05-3"
    },
    {
        "AbsEntry": 6886,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E06-1"
    },
    {
        "AbsEntry": 6887,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E06-2"
    },
    {
        "AbsEntry": 6888,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E06-3"
    },
    {
        "AbsEntry": 6889,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E07-1"
    },
    {
        "AbsEntry": 6890,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E07-2"
    },
    {
        "AbsEntry": 6891,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E07-3"
    },
    {
        "AbsEntry": 6892,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E08-1"
    },
    {
        "AbsEntry": 6893,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E08-2"
    },
    {
        "AbsEntry": 6894,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E08-3"
    },
    {
        "AbsEntry": 6895,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E09-1"
    },
    {
        "AbsEntry": 6896,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E09-2"
    },
    {
        "AbsEntry": 6897,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E09-3"
    },
    {
        "AbsEntry": 6898,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E10-1"
    },
    {
        "AbsEntry": 6899,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E10-2"
    },
    {
        "AbsEntry": 6900,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E10-3"
    },
    {
        "AbsEntry": 6901,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E11-1"
    },
    {
        "AbsEntry": 6902,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E11-2"
    },
    {
        "AbsEntry": 6903,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E11-3"
    },
    {
        "AbsEntry": 6904,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E12-1"
    },
    {
        "AbsEntry": 6905,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E12-2"
    },
    {
        "AbsEntry": 6906,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E12-3"
    },
    {
        "AbsEntry": 6907,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E13-1"
    },
    {
        "AbsEntry": 6908,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E13-2"
    },
    {
        "AbsEntry": 6909,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E13-3"
    },
    {
        "AbsEntry": 6910,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E14-1"
    },
    {
        "AbsEntry": 6911,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E14-2"
    },
    {
        "AbsEntry": 6912,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E14-3"
    },
    {
        "AbsEntry": 6913,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E15-1"
    },
    {
        "AbsEntry": 6914,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E15-2"
    },
    {
        "AbsEntry": 6915,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E15-3"
    },
    {
        "AbsEntry": 6916,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E16-1"
    },
    {
        "AbsEntry": 6917,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E16-2"
    },
    {
        "AbsEntry": 6918,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E16-3"
    },
    {
        "AbsEntry": 6919,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E17-1"
    },
    {
        "AbsEntry": 6920,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E17-2"
    },
    {
        "AbsEntry": 6921,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E17-3"
    },
    {
        "AbsEntry": 6922,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E18-1"
    },
    {
        "AbsEntry": 6923,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E18-2"
    },
    {
        "AbsEntry": 6924,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E18-3"
    },
    {
        "AbsEntry": 6925,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E19-1"
    },
    {
        "AbsEntry": 6926,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E19-2"
    },
    {
        "AbsEntry": 6927,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E19-3"
    },
    {
        "AbsEntry": 6928,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E20-1"
    },
    {
        "AbsEntry": 6929,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E20-2"
    },
    {
        "AbsEntry": 6930,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E20-3"
    },
    {
        "AbsEntry": 6931,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E21-1"
    },
    {
        "AbsEntry": 6932,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E21-2"
    },
    {
        "AbsEntry": 6933,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E21-3"
    },
    {
        "AbsEntry": 6934,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E22-1"
    },
    {
        "AbsEntry": 6935,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E22-2"
    },
    {
        "AbsEntry": 6936,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E22-3"
    },
    {
        "AbsEntry": 6937,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E23-1"
    },
    {
        "AbsEntry": 6938,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E23-2"
    },
    {
        "AbsEntry": 6939,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E23-3"
    },
    {
        "AbsEntry": 6940,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E24-1"
    },
    {
        "AbsEntry": 6941,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E24-2"
    },
    {
        "AbsEntry": 6942,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E24-3"
    },
    {
        "AbsEntry": 6943,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E25-1"
    },
    {
        "AbsEntry": 6944,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E25-2"
    },
    {
        "AbsEntry": 6945,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E25-3"
    },
    {
        "AbsEntry": 6946,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E26-1"
    },
    {
        "AbsEntry": 6947,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E26-2"
    },
    {
        "AbsEntry": 6948,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E26-3"
    },
    {
        "AbsEntry": 6949,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E27-1"
    },
    {
        "AbsEntry": 6950,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E27-2"
    },
    {
        "AbsEntry": 6951,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E27-3"
    },
    {
        "AbsEntry": 6952,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E28-1"
    },
    {
        "AbsEntry": 6953,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E28-2"
    },
    {
        "AbsEntry": 6954,
        "Warehouse": "WCP",
        "BinCode": "WCP-8E28-3"
    },
    {
        "AbsEntry": 6955,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F01-1"
    },
    {
        "AbsEntry": 6956,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F01-2"
    },
    {
        "AbsEntry": 6957,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F01-3"
    },
    {
        "AbsEntry": 6958,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F02-1"
    },
    {
        "AbsEntry": 6959,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F02-2"
    },
    {
        "AbsEntry": 6960,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F02-3"
    },
    {
        "AbsEntry": 6961,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F03-1"
    },
    {
        "AbsEntry": 6962,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F03-2"
    },
    {
        "AbsEntry": 6963,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F03-3"
    },
    {
        "AbsEntry": 6964,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F04-1"
    },
    {
        "AbsEntry": 6965,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F04-2"
    },
    {
        "AbsEntry": 6966,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F04-3"
    },
    {
        "AbsEntry": 6967,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F05-1"
    },
    {
        "AbsEntry": 6968,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F05-2"
    },
    {
        "AbsEntry": 6969,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F05-3"
    },
    {
        "AbsEntry": 6970,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F06-1"
    },
    {
        "AbsEntry": 6971,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F06-2"
    },
    {
        "AbsEntry": 6972,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F06-3"
    },
    {
        "AbsEntry": 6973,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F07-1"
    },
    {
        "AbsEntry": 6974,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F07-2"
    },
    {
        "AbsEntry": 6975,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F07-3"
    },
    {
        "AbsEntry": 6976,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F08-1"
    },
    {
        "AbsEntry": 6977,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F08-2"
    },
    {
        "AbsEntry": 6978,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F08-3"
    },
    {
        "AbsEntry": 6979,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F09-1"
    },
    {
        "AbsEntry": 6980,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F09-2"
    },
    {
        "AbsEntry": 6981,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F09-3"
    },
    {
        "AbsEntry": 6982,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F10-1"
    },
    {
        "AbsEntry": 6983,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F10-2"
    },
    {
        "AbsEntry": 6984,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F10-3"
    },
    {
        "AbsEntry": 6985,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F11-1"
    },
    {
        "AbsEntry": 6986,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F11-2"
    },
    {
        "AbsEntry": 6987,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F11-3"
    },
    {
        "AbsEntry": 6988,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F12-1"
    },
    {
        "AbsEntry": 6989,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F12-2"
    },
    {
        "AbsEntry": 6990,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F12-3"
    },
    {
        "AbsEntry": 6991,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F13-1"
    },
    {
        "AbsEntry": 6992,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F13-2"
    },
    {
        "AbsEntry": 6993,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F13-3"
    },
    {
        "AbsEntry": 6994,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F14-1"
    },
    {
        "AbsEntry": 6995,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F14-2"
    },
    {
        "AbsEntry": 6996,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F14-3"
    },
    {
        "AbsEntry": 6997,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F15-1"
    },
    {
        "AbsEntry": 6998,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F15-2"
    },
    {
        "AbsEntry": 6999,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F15-3"
    },
    {
        "AbsEntry": 7000,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F16-1"
    },
    {
        "AbsEntry": 7001,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F16-2"
    },
    {
        "AbsEntry": 7002,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F16-3"
    },
    {
        "AbsEntry": 7003,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F17-1"
    },
    {
        "AbsEntry": 7004,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F17-2"
    },
    {
        "AbsEntry": 7005,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F17-3"
    },
    {
        "AbsEntry": 7006,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F18-1"
    },
    {
        "AbsEntry": 7007,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F18-2"
    },
    {
        "AbsEntry": 7008,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F18-3"
    },
    {
        "AbsEntry": 7009,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F19-1"
    },
    {
        "AbsEntry": 7010,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F19-2"
    },
    {
        "AbsEntry": 7011,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F19-3"
    },
    {
        "AbsEntry": 7012,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F20-1"
    },
    {
        "AbsEntry": 7013,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F20-2"
    },
    {
        "AbsEntry": 7014,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F20-3"
    },
    {
        "AbsEntry": 7015,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F21-1"
    },
    {
        "AbsEntry": 7016,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F21-2"
    },
    {
        "AbsEntry": 7017,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F21-3"
    },
    {
        "AbsEntry": 7018,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F22-1"
    },
    {
        "AbsEntry": 7019,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F22-2"
    },
    {
        "AbsEntry": 7020,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F22-3"
    },
    {
        "AbsEntry": 7021,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F23-1"
    },
    {
        "AbsEntry": 7022,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F23-2"
    },
    {
        "AbsEntry": 7023,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F23-3"
    },
    {
        "AbsEntry": 7024,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F24-1"
    },
    {
        "AbsEntry": 7025,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F24-2"
    },
    {
        "AbsEntry": 7026,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F24-3"
    },
    {
        "AbsEntry": 7027,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F25-1"
    },
    {
        "AbsEntry": 7028,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F25-2"
    },
    {
        "AbsEntry": 7029,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F25-3"
    },
    {
        "AbsEntry": 7030,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F26-1"
    },
    {
        "AbsEntry": 7031,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F26-2"
    },
    {
        "AbsEntry": 7032,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F26-3"
    },
    {
        "AbsEntry": 7033,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F27-1"
    },
    {
        "AbsEntry": 7034,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F27-2"
    },
    {
        "AbsEntry": 7035,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F27-3"
    },
    {
        "AbsEntry": 7036,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F28-1"
    },
    {
        "AbsEntry": 7037,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F28-2"
    },
    {
        "AbsEntry": 7038,
        "Warehouse": "WCP",
        "BinCode": "WCP-8F28-3"
    },
    {
        "AbsEntry": 7039,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G01-1"
    },
    {
        "AbsEntry": 7040,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G01-2"
    },
    {
        "AbsEntry": 7041,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G01-3"
    },
    {
        "AbsEntry": 7042,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G02-1"
    },
    {
        "AbsEntry": 7043,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G02-2"
    },
    {
        "AbsEntry": 7044,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G02-3"
    },
    {
        "AbsEntry": 7045,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G03-1"
    },
    {
        "AbsEntry": 7046,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G03-2"
    },
    {
        "AbsEntry": 7047,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G03-3"
    },
    {
        "AbsEntry": 7048,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G04-1"
    },
    {
        "AbsEntry": 7049,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G04-2"
    },
    {
        "AbsEntry": 7050,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G04-3"
    },
    {
        "AbsEntry": 7051,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G05-1"
    },
    {
        "AbsEntry": 7052,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G05-2"
    },
    {
        "AbsEntry": 7053,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G05-3"
    },
    {
        "AbsEntry": 7054,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G06-1"
    },
    {
        "AbsEntry": 7055,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G06-2"
    },
    {
        "AbsEntry": 7056,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G06-3"
    },
    {
        "AbsEntry": 7057,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G07-1"
    },
    {
        "AbsEntry": 7058,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G07-2"
    },
    {
        "AbsEntry": 7059,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G07-3"
    },
    {
        "AbsEntry": 7060,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G08-1"
    },
    {
        "AbsEntry": 7061,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G08-2"
    },
    {
        "AbsEntry": 7062,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G08-3"
    },
    {
        "AbsEntry": 7063,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G09-1"
    },
    {
        "AbsEntry": 7064,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G09-2"
    },
    {
        "AbsEntry": 7065,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G09-3"
    },
    {
        "AbsEntry": 7066,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G10-1"
    },
    {
        "AbsEntry": 7067,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G10-2"
    },
    {
        "AbsEntry": 7068,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G10-3"
    },
    {
        "AbsEntry": 7069,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G11-1"
    },
    {
        "AbsEntry": 7070,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G11-2"
    },
    {
        "AbsEntry": 7071,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G11-3"
    },
    {
        "AbsEntry": 7072,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G12-1"
    },
    {
        "AbsEntry": 7073,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G12-2"
    },
    {
        "AbsEntry": 7074,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G12-3"
    },
    {
        "AbsEntry": 7075,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G13-1"
    },
    {
        "AbsEntry": 7076,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G13-2"
    },
    {
        "AbsEntry": 7077,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G13-3"
    },
    {
        "AbsEntry": 7078,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G14-1"
    },
    {
        "AbsEntry": 7079,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G14-2"
    },
    {
        "AbsEntry": 7080,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G14-3"
    },
    {
        "AbsEntry": 7081,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G15-1"
    },
    {
        "AbsEntry": 7082,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G15-2"
    },
    {
        "AbsEntry": 7083,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G15-3"
    },
    {
        "AbsEntry": 7084,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G16-1"
    },
    {
        "AbsEntry": 7085,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G16-2"
    },
    {
        "AbsEntry": 7086,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G16-3"
    },
    {
        "AbsEntry": 7087,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G17-1"
    },
    {
        "AbsEntry": 7088,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G17-2"
    },
    {
        "AbsEntry": 7089,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G17-3"
    },
    {
        "AbsEntry": 7090,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G18-1"
    },
    {
        "AbsEntry": 7091,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G18-2"
    },
    {
        "AbsEntry": 7092,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G18-3"
    },
    {
        "AbsEntry": 7093,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G19-1"
    },
    {
        "AbsEntry": 7094,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G19-2"
    },
    {
        "AbsEntry": 7095,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G19-3"
    },
    {
        "AbsEntry": 7096,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G20-1"
    },
    {
        "AbsEntry": 7097,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G20-2"
    },
    {
        "AbsEntry": 7098,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G20-3"
    },
    {
        "AbsEntry": 7099,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G21-1"
    },
    {
        "AbsEntry": 7100,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G21-2"
    },
    {
        "AbsEntry": 7101,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G21-3"
    },
    {
        "AbsEntry": 7102,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G22-1"
    },
    {
        "AbsEntry": 7103,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G22-2"
    },
    {
        "AbsEntry": 7104,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G22-3"
    },
    {
        "AbsEntry": 7105,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G23-1"
    },
    {
        "AbsEntry": 7106,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G23-2"
    },
    {
        "AbsEntry": 7107,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G23-3"
    },
    {
        "AbsEntry": 7108,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G24-1"
    },
    {
        "AbsEntry": 7109,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G24-2"
    },
    {
        "AbsEntry": 7110,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G24-3"
    },
    {
        "AbsEntry": 7111,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G25-1"
    },
    {
        "AbsEntry": 7112,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G25-2"
    },
    {
        "AbsEntry": 7113,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G25-3"
    },
    {
        "AbsEntry": 7114,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G26-1"
    },
    {
        "AbsEntry": 7115,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G26-2"
    },
    {
        "AbsEntry": 7116,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G26-3"
    },
    {
        "AbsEntry": 7117,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G27-1"
    },
    {
        "AbsEntry": 7118,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G27-2"
    },
    {
        "AbsEntry": 7119,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G27-3"
    },
    {
        "AbsEntry": 7120,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G28-1"
    },
    {
        "AbsEntry": 7121,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G28-2"
    },
    {
        "AbsEntry": 7122,
        "Warehouse": "WCP",
        "BinCode": "WCP-8G28-3"
    },
    {
        "AbsEntry": 7123,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H01-1"
    },
    {
        "AbsEntry": 7124,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H01-2"
    },
    {
        "AbsEntry": 7125,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H01-3"
    },
    {
        "AbsEntry": 7126,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H02-1"
    },
    {
        "AbsEntry": 7127,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H02-2"
    },
    {
        "AbsEntry": 7128,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H02-3"
    },
    {
        "AbsEntry": 7129,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H03-1"
    },
    {
        "AbsEntry": 7130,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H03-2"
    },
    {
        "AbsEntry": 7131,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H03-3"
    },
    {
        "AbsEntry": 7132,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H04-1"
    },
    {
        "AbsEntry": 7133,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H04-2"
    },
    {
        "AbsEntry": 7134,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H04-3"
    },
    {
        "AbsEntry": 7135,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H05-1"
    },
    {
        "AbsEntry": 7136,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H05-2"
    },
    {
        "AbsEntry": 7137,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H05-3"
    },
    {
        "AbsEntry": 7138,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H06-1"
    },
    {
        "AbsEntry": 7139,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H06-2"
    },
    {
        "AbsEntry": 7140,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H06-3"
    },
    {
        "AbsEntry": 7141,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H07-1"
    },
    {
        "AbsEntry": 7142,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H07-2"
    },
    {
        "AbsEntry": 7143,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H07-3"
    },
    {
        "AbsEntry": 7144,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H08-1"
    },
    {
        "AbsEntry": 7145,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H08-2"
    },
    {
        "AbsEntry": 7146,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H08-3"
    },
    {
        "AbsEntry": 7147,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H09-1"
    },
    {
        "AbsEntry": 7148,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H09-2"
    },
    {
        "AbsEntry": 7149,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H09-3"
    },
    {
        "AbsEntry": 7150,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H10-1"
    },
    {
        "AbsEntry": 7151,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H10-2"
    },
    {
        "AbsEntry": 7152,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H10-3"
    },
    {
        "AbsEntry": 7153,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H11-1"
    },
    {
        "AbsEntry": 7154,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H11-2"
    },
    {
        "AbsEntry": 7155,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H11-3"
    },
    {
        "AbsEntry": 7156,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H12-1"
    },
    {
        "AbsEntry": 7157,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H12-2"
    },
    {
        "AbsEntry": 7158,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H12-3"
    },
    {
        "AbsEntry": 7159,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H13-1"
    },
    {
        "AbsEntry": 7160,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H13-2"
    },
    {
        "AbsEntry": 7161,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H13-3"
    },
    {
        "AbsEntry": 7162,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H14-1"
    },
    {
        "AbsEntry": 7163,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H14-2"
    },
    {
        "AbsEntry": 7164,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H14-3"
    },
    {
        "AbsEntry": 7165,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H15-1"
    },
    {
        "AbsEntry": 7166,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H15-2"
    },
    {
        "AbsEntry": 7167,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H15-3"
    },
    {
        "AbsEntry": 7168,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H16-1"
    },
    {
        "AbsEntry": 7169,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H16-2"
    },
    {
        "AbsEntry": 7170,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H16-3"
    },
    {
        "AbsEntry": 7171,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H17-1"
    },
    {
        "AbsEntry": 7172,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H17-2"
    },
    {
        "AbsEntry": 7173,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H17-3"
    },
    {
        "AbsEntry": 7174,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H18-1"
    },
    {
        "AbsEntry": 7175,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H18-2"
    },
    {
        "AbsEntry": 7176,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H18-3"
    },
    {
        "AbsEntry": 7177,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H19-1"
    },
    {
        "AbsEntry": 7178,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H19-2"
    },
    {
        "AbsEntry": 7179,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H19-3"
    },
    {
        "AbsEntry": 7180,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H20-1"
    },
    {
        "AbsEntry": 7181,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H20-2"
    },
    {
        "AbsEntry": 7182,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H20-3"
    },
    {
        "AbsEntry": 7183,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H21-1"
    },
    {
        "AbsEntry": 7184,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H21-2"
    },
    {
        "AbsEntry": 7185,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H21-3"
    },
    {
        "AbsEntry": 7186,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H22-1"
    },
    {
        "AbsEntry": 7187,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H22-2"
    },
    {
        "AbsEntry": 7188,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H22-3"
    },
    {
        "AbsEntry": 7189,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H23-1"
    },
    {
        "AbsEntry": 7190,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H23-2"
    },
    {
        "AbsEntry": 7191,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H23-3"
    },
    {
        "AbsEntry": 7192,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H24-1"
    },
    {
        "AbsEntry": 7193,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H24-2"
    },
    {
        "AbsEntry": 7194,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H24-3"
    },
    {
        "AbsEntry": 7195,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H25-1"
    },
    {
        "AbsEntry": 7196,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H25-2"
    },
    {
        "AbsEntry": 7197,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H25-3"
    },
    {
        "AbsEntry": 7198,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H26-1"
    },
    {
        "AbsEntry": 7199,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H26-2"
    },
    {
        "AbsEntry": 7200,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H26-3"
    },
    {
        "AbsEntry": 7201,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H27-1"
    },
    {
        "AbsEntry": 7202,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H27-2"
    },
    {
        "AbsEntry": 7203,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H27-3"
    },
    {
        "AbsEntry": 7204,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H28-1"
    },
    {
        "AbsEntry": 7205,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H28-2"
    },
    {
        "AbsEntry": 7206,
        "Warehouse": "WCP",
        "BinCode": "WCP-8H28-3"
    },
    {
        "AbsEntry": 7207,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I01-1"
    },
    {
        "AbsEntry": 7208,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I01-2"
    },
    {
        "AbsEntry": 7209,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I01-3"
    },
    {
        "AbsEntry": 7210,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I02-1"
    },
    {
        "AbsEntry": 7211,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I02-2"
    },
    {
        "AbsEntry": 7212,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I02-3"
    },
    {
        "AbsEntry": 7213,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I03-1"
    },
    {
        "AbsEntry": 7214,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I03-2"
    },
    {
        "AbsEntry": 7215,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I03-3"
    },
    {
        "AbsEntry": 7216,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I04-1"
    },
    {
        "AbsEntry": 7217,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I04-2"
    },
    {
        "AbsEntry": 7218,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I04-3"
    },
    {
        "AbsEntry": 7219,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I05-1"
    },
    {
        "AbsEntry": 7220,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I05-2"
    },
    {
        "AbsEntry": 7221,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I05-3"
    },
    {
        "AbsEntry": 7222,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I06-1"
    },
    {
        "AbsEntry": 7223,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I06-2"
    },
    {
        "AbsEntry": 7224,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I06-3"
    },
    {
        "AbsEntry": 7225,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I07-1"
    },
    {
        "AbsEntry": 7226,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I07-2"
    },
    {
        "AbsEntry": 7227,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I07-3"
    },
    {
        "AbsEntry": 7228,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I08-1"
    },
    {
        "AbsEntry": 7229,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I08-2"
    },
    {
        "AbsEntry": 7230,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I08-3"
    },
    {
        "AbsEntry": 7231,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I09-1"
    },
    {
        "AbsEntry": 7232,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I09-2"
    },
    {
        "AbsEntry": 7233,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I09-3"
    },
    {
        "AbsEntry": 7234,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I10-1"
    },
    {
        "AbsEntry": 7235,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I10-2"
    },
    {
        "AbsEntry": 7236,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I10-3"
    },
    {
        "AbsEntry": 7237,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I11-1"
    },
    {
        "AbsEntry": 7238,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I11-2"
    },
    {
        "AbsEntry": 7239,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I11-3"
    },
    {
        "AbsEntry": 7240,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I12-1"
    },
    {
        "AbsEntry": 7241,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I12-2"
    },
    {
        "AbsEntry": 7242,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I12-3"
    },
    {
        "AbsEntry": 7243,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I13-1"
    },
    {
        "AbsEntry": 7244,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I13-2"
    },
    {
        "AbsEntry": 7245,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I13-3"
    },
    {
        "AbsEntry": 7246,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I14-1"
    },
    {
        "AbsEntry": 7247,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I14-2"
    },
    {
        "AbsEntry": 7248,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I14-3"
    },
    {
        "AbsEntry": 7249,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I15-1"
    },
    {
        "AbsEntry": 7250,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I15-2"
    },
    {
        "AbsEntry": 7251,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I15-3"
    },
    {
        "AbsEntry": 7252,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I16-1"
    },
    {
        "AbsEntry": 7253,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I16-2"
    },
    {
        "AbsEntry": 7254,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I16-3"
    },
    {
        "AbsEntry": 7255,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I17-1"
    },
    {
        "AbsEntry": 7256,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I17-2"
    },
    {
        "AbsEntry": 7257,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I17-3"
    },
    {
        "AbsEntry": 7258,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I18-1"
    },
    {
        "AbsEntry": 7259,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I18-2"
    },
    {
        "AbsEntry": 7260,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I18-3"
    },
    {
        "AbsEntry": 7261,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I19-1"
    },
    {
        "AbsEntry": 7262,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I19-2"
    },
    {
        "AbsEntry": 7263,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I19-3"
    },
    {
        "AbsEntry": 7264,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I20-1"
    },
    {
        "AbsEntry": 7265,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I20-2"
    },
    {
        "AbsEntry": 7266,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I20-3"
    },
    {
        "AbsEntry": 7267,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I21-1"
    },
    {
        "AbsEntry": 7268,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I21-2"
    },
    {
        "AbsEntry": 7269,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I21-3"
    },
    {
        "AbsEntry": 7270,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I22-1"
    },
    {
        "AbsEntry": 7271,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I22-2"
    },
    {
        "AbsEntry": 7272,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I22-3"
    },
    {
        "AbsEntry": 7273,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I23-1"
    },
    {
        "AbsEntry": 7274,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I23-2"
    },
    {
        "AbsEntry": 7275,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I23-3"
    },
    {
        "AbsEntry": 7276,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I24-1"
    },
    {
        "AbsEntry": 7277,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I24-2"
    },
    {
        "AbsEntry": 7278,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I24-3"
    },
    {
        "AbsEntry": 7279,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I25-1"
    },
    {
        "AbsEntry": 7280,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I25-2"
    },
    {
        "AbsEntry": 7281,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I25-3"
    },
    {
        "AbsEntry": 7282,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I26-1"
    },
    {
        "AbsEntry": 7283,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I26-2"
    },
    {
        "AbsEntry": 7284,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I26-3"
    },
    {
        "AbsEntry": 7285,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I27-1"
    },
    {
        "AbsEntry": 7286,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I27-2"
    },
    {
        "AbsEntry": 7287,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I27-3"
    },
    {
        "AbsEntry": 7288,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I28-1"
    },
    {
        "AbsEntry": 7289,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I28-2"
    },
    {
        "AbsEntry": 7290,
        "Warehouse": "WCP",
        "BinCode": "WCP-8I28-3"
    },
    {
        "AbsEntry": 7291,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A01-1"
    },
    {
        "AbsEntry": 7292,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A01-2"
    },
    {
        "AbsEntry": 7293,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A01-3"
    },
    {
        "AbsEntry": 7294,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A02-1"
    },
    {
        "AbsEntry": 7295,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A02-2"
    },
    {
        "AbsEntry": 7296,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A02-3"
    },
    {
        "AbsEntry": 7297,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A03-1"
    },
    {
        "AbsEntry": 7298,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A03-2"
    },
    {
        "AbsEntry": 7299,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A03-3"
    },
    {
        "AbsEntry": 7300,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A04-1"
    },
    {
        "AbsEntry": 7301,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A04-2"
    },
    {
        "AbsEntry": 7302,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A04-3"
    },
    {
        "AbsEntry": 7303,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A05-1"
    },
    {
        "AbsEntry": 7304,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A05-2"
    },
    {
        "AbsEntry": 7305,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A05-3"
    },
    {
        "AbsEntry": 7306,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A06-1"
    },
    {
        "AbsEntry": 7307,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A06-2"
    },
    {
        "AbsEntry": 7308,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A06-3"
    },
    {
        "AbsEntry": 7309,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A07-1"
    },
    {
        "AbsEntry": 7310,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A07-2"
    },
    {
        "AbsEntry": 7311,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A07-3"
    },
    {
        "AbsEntry": 7312,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A08-1"
    },
    {
        "AbsEntry": 7313,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A08-2"
    },
    {
        "AbsEntry": 7314,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A08-3"
    },
    {
        "AbsEntry": 7315,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A09-1"
    },
    {
        "AbsEntry": 7316,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A09-2"
    },
    {
        "AbsEntry": 7317,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A09-3"
    },
    {
        "AbsEntry": 7318,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A10-1"
    },
    {
        "AbsEntry": 7319,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A10-2"
    },
    {
        "AbsEntry": 7320,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A10-3"
    },
    {
        "AbsEntry": 7321,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A11-1"
    },
    {
        "AbsEntry": 7322,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A11-2"
    },
    {
        "AbsEntry": 7323,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A11-3"
    },
    {
        "AbsEntry": 7324,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A12-1"
    },
    {
        "AbsEntry": 7325,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A12-2"
    },
    {
        "AbsEntry": 7326,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A12-3"
    },
    {
        "AbsEntry": 7327,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A13-1"
    },
    {
        "AbsEntry": 7328,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A13-2"
    },
    {
        "AbsEntry": 7329,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A13-3"
    },
    {
        "AbsEntry": 7330,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A14-1"
    },
    {
        "AbsEntry": 7331,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A14-2"
    },
    {
        "AbsEntry": 7332,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A14-3"
    },
    {
        "AbsEntry": 7333,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A15-1"
    },
    {
        "AbsEntry": 7334,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A15-2"
    },
    {
        "AbsEntry": 7335,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A15-3"
    },
    {
        "AbsEntry": 7336,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A16-1"
    },
    {
        "AbsEntry": 7337,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A16-2"
    },
    {
        "AbsEntry": 7338,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A16-3"
    },
    {
        "AbsEntry": 7339,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A17-1"
    },
    {
        "AbsEntry": 7340,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A17-2"
    },
    {
        "AbsEntry": 7341,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A17-3"
    },
    {
        "AbsEntry": 7342,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A18-1"
    },
    {
        "AbsEntry": 7343,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A18-2"
    },
    {
        "AbsEntry": 7344,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A18-3"
    },
    {
        "AbsEntry": 7345,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A19-1"
    },
    {
        "AbsEntry": 7346,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A19-2"
    },
    {
        "AbsEntry": 7347,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A19-3"
    },
    {
        "AbsEntry": 7348,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A20-1"
    },
    {
        "AbsEntry": 7349,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A20-2"
    },
    {
        "AbsEntry": 7350,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A20-3"
    },
    {
        "AbsEntry": 7351,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A21-1"
    },
    {
        "AbsEntry": 7352,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A21-2"
    },
    {
        "AbsEntry": 7353,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A21-3"
    },
    {
        "AbsEntry": 7354,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A22-1"
    },
    {
        "AbsEntry": 7355,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A22-2"
    },
    {
        "AbsEntry": 7356,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A22-3"
    },
    {
        "AbsEntry": 7357,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A23-1"
    },
    {
        "AbsEntry": 7358,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A23-2"
    },
    {
        "AbsEntry": 7359,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A23-3"
    },
    {
        "AbsEntry": 7360,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A24-1"
    },
    {
        "AbsEntry": 7361,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A24-2"
    },
    {
        "AbsEntry": 7362,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A24-3"
    },
    {
        "AbsEntry": 7363,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A25-1"
    },
    {
        "AbsEntry": 7364,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A25-2"
    },
    {
        "AbsEntry": 7365,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A25-3"
    },
    {
        "AbsEntry": 7366,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A26-1"
    },
    {
        "AbsEntry": 7367,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A26-2"
    },
    {
        "AbsEntry": 7368,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A26-3"
    },
    {
        "AbsEntry": 7369,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A27-1"
    },
    {
        "AbsEntry": 7370,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A27-2"
    },
    {
        "AbsEntry": 7371,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A27-3"
    },
    {
        "AbsEntry": 7372,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A28-1"
    },
    {
        "AbsEntry": 7373,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A28-2"
    },
    {
        "AbsEntry": 7374,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A28-3"
    },
    {
        "AbsEntry": 7375,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A29-1"
    },
    {
        "AbsEntry": 7376,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A29-2"
    },
    {
        "AbsEntry": 7377,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A29-3"
    },
    {
        "AbsEntry": 7378,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A30-1"
    },
    {
        "AbsEntry": 7379,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A30-2"
    },
    {
        "AbsEntry": 7380,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A30-3"
    },
    {
        "AbsEntry": 7381,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A31-1"
    },
    {
        "AbsEntry": 7382,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A31-2"
    },
    {
        "AbsEntry": 7383,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A31-3"
    },
    {
        "AbsEntry": 7384,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A32-1"
    },
    {
        "AbsEntry": 7385,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A32-2"
    },
    {
        "AbsEntry": 7386,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A32-3"
    },
    {
        "AbsEntry": 7387,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A33-1"
    },
    {
        "AbsEntry": 7388,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A33-2"
    },
    {
        "AbsEntry": 7389,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A33-3"
    },
    {
        "AbsEntry": 7390,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A34-1"
    },
    {
        "AbsEntry": 7391,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A34-2"
    },
    {
        "AbsEntry": 7392,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A34-3"
    },
    {
        "AbsEntry": 7393,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A35-1"
    },
    {
        "AbsEntry": 7394,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A35-2"
    },
    {
        "AbsEntry": 7395,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A35-3"
    },
    {
        "AbsEntry": 7396,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A36-1"
    },
    {
        "AbsEntry": 7397,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A36-2"
    },
    {
        "AbsEntry": 7398,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A36-3"
    },
    {
        "AbsEntry": 7399,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A37-1"
    },
    {
        "AbsEntry": 7400,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A37-2"
    },
    {
        "AbsEntry": 7401,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A37-3"
    },
    {
        "AbsEntry": 7402,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A38-1"
    },
    {
        "AbsEntry": 7403,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A38-2"
    },
    {
        "AbsEntry": 7404,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A38-3"
    },
    {
        "AbsEntry": 7405,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A39-1"
    },
    {
        "AbsEntry": 7406,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A39-2"
    },
    {
        "AbsEntry": 7407,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A39-3"
    },
    {
        "AbsEntry": 7408,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A40-1"
    },
    {
        "AbsEntry": 7409,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A40-2"
    },
    {
        "AbsEntry": 7410,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A40-3"
    },
    {
        "AbsEntry": 7411,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A41-1"
    },
    {
        "AbsEntry": 7412,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A41-2"
    },
    {
        "AbsEntry": 7413,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A41-3"
    },
    {
        "AbsEntry": 7414,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A42-1"
    },
    {
        "AbsEntry": 7415,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A42-2"
    },
    {
        "AbsEntry": 7416,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A42-3"
    },
    {
        "AbsEntry": 7417,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A43-1"
    },
    {
        "AbsEntry": 7418,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A43-2"
    },
    {
        "AbsEntry": 7419,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A43-3"
    },
    {
        "AbsEntry": 7420,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A44-1"
    },
    {
        "AbsEntry": 7421,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A44-2"
    },
    {
        "AbsEntry": 7422,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A44-3"
    },
    {
        "AbsEntry": 7423,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A45-1"
    },
    {
        "AbsEntry": 7424,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A45-2"
    },
    {
        "AbsEntry": 7425,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A45-3"
    },
    {
        "AbsEntry": 7426,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A46-1"
    },
    {
        "AbsEntry": 7427,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A46-2"
    },
    {
        "AbsEntry": 7428,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A46-3"
    },
    {
        "AbsEntry": 7429,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A47-1"
    },
    {
        "AbsEntry": 7430,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A47-2"
    },
    {
        "AbsEntry": 7431,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A47-3"
    },
    {
        "AbsEntry": 7432,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A48-1"
    },
    {
        "AbsEntry": 7433,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A48-2"
    },
    {
        "AbsEntry": 7434,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A48-3"
    },
    {
        "AbsEntry": 7435,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A49-1"
    },
    {
        "AbsEntry": 7436,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A49-2"
    },
    {
        "AbsEntry": 7437,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A49-3"
    },
    {
        "AbsEntry": 7438,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A50-1"
    },
    {
        "AbsEntry": 7439,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A50-2"
    },
    {
        "AbsEntry": 7440,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A50-3"
    },
    {
        "AbsEntry": 7441,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B01-1"
    },
    {
        "AbsEntry": 7442,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B01-2"
    },
    {
        "AbsEntry": 7443,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B01-3"
    },
    {
        "AbsEntry": 7444,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B02-1"
    },
    {
        "AbsEntry": 7445,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B02-2"
    },
    {
        "AbsEntry": 7446,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B02-3"
    },
    {
        "AbsEntry": 7447,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B03-1"
    },
    {
        "AbsEntry": 7448,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B03-2"
    },
    {
        "AbsEntry": 7449,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B03-3"
    },
    {
        "AbsEntry": 7450,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B04-1"
    },
    {
        "AbsEntry": 7451,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B04-2"
    },
    {
        "AbsEntry": 7452,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B04-3"
    },
    {
        "AbsEntry": 7453,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B05-1"
    },
    {
        "AbsEntry": 7454,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B05-2"
    },
    {
        "AbsEntry": 7455,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B05-3"
    },
    {
        "AbsEntry": 7456,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B06-1"
    },
    {
        "AbsEntry": 7457,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B06-2"
    },
    {
        "AbsEntry": 7458,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B06-3"
    },
    {
        "AbsEntry": 7459,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B07-1"
    },
    {
        "AbsEntry": 7460,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B07-2"
    },
    {
        "AbsEntry": 7461,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B07-3"
    },
    {
        "AbsEntry": 7462,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B08-1"
    },
    {
        "AbsEntry": 7463,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B08-2"
    },
    {
        "AbsEntry": 7464,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B08-3"
    },
    {
        "AbsEntry": 7465,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B09-1"
    },
    {
        "AbsEntry": 7466,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B09-2"
    },
    {
        "AbsEntry": 7467,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B09-3"
    },
    {
        "AbsEntry": 7468,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B10-1"
    },
    {
        "AbsEntry": 7469,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B10-2"
    },
    {
        "AbsEntry": 7470,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B10-3"
    },
    {
        "AbsEntry": 7471,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B11-1"
    },
    {
        "AbsEntry": 7472,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B11-2"
    },
    {
        "AbsEntry": 7473,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B11-3"
    },
    {
        "AbsEntry": 7474,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B12-1"
    },
    {
        "AbsEntry": 7475,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B12-2"
    },
    {
        "AbsEntry": 7476,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B12-3"
    },
    {
        "AbsEntry": 7477,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B13-1"
    },
    {
        "AbsEntry": 7478,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B13-2"
    },
    {
        "AbsEntry": 7479,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B13-3"
    },
    {
        "AbsEntry": 7480,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B14-1"
    },
    {
        "AbsEntry": 7481,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B14-2"
    },
    {
        "AbsEntry": 7482,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B14-3"
    },
    {
        "AbsEntry": 7483,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B15-1"
    },
    {
        "AbsEntry": 7484,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B15-2"
    },
    {
        "AbsEntry": 7485,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B15-3"
    },
    {
        "AbsEntry": 7486,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B16-1"
    },
    {
        "AbsEntry": 7487,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B16-2"
    },
    {
        "AbsEntry": 7488,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B16-3"
    },
    {
        "AbsEntry": 7489,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B17-1"
    },
    {
        "AbsEntry": 7490,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B17-2"
    },
    {
        "AbsEntry": 7491,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B17-3"
    },
    {
        "AbsEntry": 7492,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B18-1"
    },
    {
        "AbsEntry": 7493,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B18-2"
    },
    {
        "AbsEntry": 7494,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B18-3"
    },
    {
        "AbsEntry": 7495,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B19-1"
    },
    {
        "AbsEntry": 7496,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B19-2"
    },
    {
        "AbsEntry": 7497,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B19-3"
    },
    {
        "AbsEntry": 7498,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B20-1"
    },
    {
        "AbsEntry": 7499,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B20-2"
    },
    {
        "AbsEntry": 7500,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B20-3"
    },
    {
        "AbsEntry": 7501,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B21-1"
    },
    {
        "AbsEntry": 7502,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B21-2"
    },
    {
        "AbsEntry": 7503,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B21-3"
    },
    {
        "AbsEntry": 7504,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B22-1"
    },
    {
        "AbsEntry": 7505,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B22-2"
    },
    {
        "AbsEntry": 7506,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B22-3"
    },
    {
        "AbsEntry": 7507,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B23-1"
    },
    {
        "AbsEntry": 7508,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B23-2"
    },
    {
        "AbsEntry": 7509,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B23-3"
    },
    {
        "AbsEntry": 7510,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B24-1"
    },
    {
        "AbsEntry": 7511,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B24-2"
    },
    {
        "AbsEntry": 7512,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B24-3"
    },
    {
        "AbsEntry": 7513,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B25-1"
    },
    {
        "AbsEntry": 7514,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B25-2"
    },
    {
        "AbsEntry": 7515,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B25-3"
    },
    {
        "AbsEntry": 7516,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B26-1"
    },
    {
        "AbsEntry": 7517,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B26-2"
    },
    {
        "AbsEntry": 7518,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B26-3"
    },
    {
        "AbsEntry": 7519,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B27-1"
    },
    {
        "AbsEntry": 7520,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B27-2"
    },
    {
        "AbsEntry": 7521,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B27-3"
    },
    {
        "AbsEntry": 7522,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B28-1"
    },
    {
        "AbsEntry": 7523,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B28-2"
    },
    {
        "AbsEntry": 7524,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B28-3"
    },
    {
        "AbsEntry": 7525,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B29-1"
    },
    {
        "AbsEntry": 7526,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B29-2"
    },
    {
        "AbsEntry": 7527,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B29-3"
    },
    {
        "AbsEntry": 7528,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B30-1"
    },
    {
        "AbsEntry": 7529,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B30-2"
    },
    {
        "AbsEntry": 7530,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B30-3"
    },
    {
        "AbsEntry": 7531,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B31-1"
    },
    {
        "AbsEntry": 7532,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B31-2"
    },
    {
        "AbsEntry": 7533,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B31-3"
    },
    {
        "AbsEntry": 7534,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B32-1"
    },
    {
        "AbsEntry": 7535,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B32-2"
    },
    {
        "AbsEntry": 7536,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B32-3"
    },
    {
        "AbsEntry": 7537,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B33-1"
    },
    {
        "AbsEntry": 7538,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B33-2"
    },
    {
        "AbsEntry": 7539,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B33-3"
    },
    {
        "AbsEntry": 7540,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B34-1"
    },
    {
        "AbsEntry": 7541,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B34-2"
    },
    {
        "AbsEntry": 7542,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B34-3"
    },
    {
        "AbsEntry": 7543,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B35-1"
    },
    {
        "AbsEntry": 7544,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B35-2"
    },
    {
        "AbsEntry": 7545,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B35-3"
    },
    {
        "AbsEntry": 7546,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B36-1"
    },
    {
        "AbsEntry": 7547,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B36-2"
    },
    {
        "AbsEntry": 7548,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B36-3"
    },
    {
        "AbsEntry": 7549,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B37-1"
    },
    {
        "AbsEntry": 7550,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B37-2"
    },
    {
        "AbsEntry": 7551,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B37-3"
    },
    {
        "AbsEntry": 7552,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B38-1"
    },
    {
        "AbsEntry": 7553,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B38-2"
    },
    {
        "AbsEntry": 7554,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B38-3"
    },
    {
        "AbsEntry": 7555,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B39-1"
    },
    {
        "AbsEntry": 7556,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B39-2"
    },
    {
        "AbsEntry": 7557,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B39-3"
    },
    {
        "AbsEntry": 7558,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B40-1"
    },
    {
        "AbsEntry": 7559,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B40-2"
    },
    {
        "AbsEntry": 7560,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B40-3"
    },
    {
        "AbsEntry": 7561,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B41-1"
    },
    {
        "AbsEntry": 7562,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B41-2"
    },
    {
        "AbsEntry": 7563,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B41-3"
    },
    {
        "AbsEntry": 7564,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B42-1"
    },
    {
        "AbsEntry": 7565,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B42-2"
    },
    {
        "AbsEntry": 7566,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B42-3"
    },
    {
        "AbsEntry": 7567,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B43-1"
    },
    {
        "AbsEntry": 7568,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B43-2"
    },
    {
        "AbsEntry": 7569,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B43-3"
    },
    {
        "AbsEntry": 7570,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B44-1"
    },
    {
        "AbsEntry": 7571,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B44-2"
    },
    {
        "AbsEntry": 7572,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B44-3"
    },
    {
        "AbsEntry": 7573,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B45-1"
    },
    {
        "AbsEntry": 7574,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B45-2"
    },
    {
        "AbsEntry": 7575,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B45-3"
    },
    {
        "AbsEntry": 7576,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B46-1"
    },
    {
        "AbsEntry": 7577,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B46-2"
    },
    {
        "AbsEntry": 7578,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B46-3"
    },
    {
        "AbsEntry": 7579,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B47-1"
    },
    {
        "AbsEntry": 7580,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B47-2"
    },
    {
        "AbsEntry": 7581,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B47-3"
    },
    {
        "AbsEntry": 7582,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B48-1"
    },
    {
        "AbsEntry": 7583,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B48-2"
    },
    {
        "AbsEntry": 7584,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B48-3"
    },
    {
        "AbsEntry": 7585,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B49-1"
    },
    {
        "AbsEntry": 7586,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B49-2"
    },
    {
        "AbsEntry": 7587,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B49-3"
    },
    {
        "AbsEntry": 7588,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B50-1"
    },
    {
        "AbsEntry": 7589,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B50-2"
    },
    {
        "AbsEntry": 7590,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B50-3"
    },
    {
        "AbsEntry": 7591,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C01-1"
    },
    {
        "AbsEntry": 7592,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C01-2"
    },
    {
        "AbsEntry": 7593,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C01-3"
    },
    {
        "AbsEntry": 7594,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C02-1"
    },
    {
        "AbsEntry": 7595,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C02-2"
    },
    {
        "AbsEntry": 7596,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C02-3"
    },
    {
        "AbsEntry": 7597,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C03-1"
    },
    {
        "AbsEntry": 7598,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C03-2"
    },
    {
        "AbsEntry": 7599,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C03-3"
    },
    {
        "AbsEntry": 7600,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C04-1"
    },
    {
        "AbsEntry": 7601,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C04-2"
    },
    {
        "AbsEntry": 7602,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C04-3"
    },
    {
        "AbsEntry": 7603,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C05-1"
    },
    {
        "AbsEntry": 7604,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C05-2"
    },
    {
        "AbsEntry": 7605,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C05-3"
    },
    {
        "AbsEntry": 7606,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C06-1"
    },
    {
        "AbsEntry": 7607,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C06-2"
    },
    {
        "AbsEntry": 7608,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C06-3"
    },
    {
        "AbsEntry": 7609,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C07-1"
    },
    {
        "AbsEntry": 7610,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C07-2"
    },
    {
        "AbsEntry": 7611,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C07-3"
    },
    {
        "AbsEntry": 7612,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C08-1"
    },
    {
        "AbsEntry": 7613,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C08-2"
    },
    {
        "AbsEntry": 7614,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C08-3"
    },
    {
        "AbsEntry": 7615,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C09-1"
    },
    {
        "AbsEntry": 7616,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C09-2"
    },
    {
        "AbsEntry": 7617,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C09-3"
    },
    {
        "AbsEntry": 7618,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C10-1"
    },
    {
        "AbsEntry": 7619,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C10-2"
    },
    {
        "AbsEntry": 7620,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C10-3"
    },
    {
        "AbsEntry": 7621,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C11-1"
    },
    {
        "AbsEntry": 7622,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C11-2"
    },
    {
        "AbsEntry": 7623,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C11-3"
    },
    {
        "AbsEntry": 7624,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C12-1"
    },
    {
        "AbsEntry": 7625,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C12-2"
    },
    {
        "AbsEntry": 7626,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C12-3"
    },
    {
        "AbsEntry": 7627,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C13-1"
    },
    {
        "AbsEntry": 7628,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C13-2"
    },
    {
        "AbsEntry": 7629,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C13-3"
    },
    {
        "AbsEntry": 7630,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C14-1"
    },
    {
        "AbsEntry": 7631,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C14-2"
    },
    {
        "AbsEntry": 7632,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C14-3"
    },
    {
        "AbsEntry": 7633,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C15-1"
    },
    {
        "AbsEntry": 7634,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C15-2"
    },
    {
        "AbsEntry": 7635,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C15-3"
    },
    {
        "AbsEntry": 7636,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C16-1"
    },
    {
        "AbsEntry": 7637,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C16-2"
    },
    {
        "AbsEntry": 7638,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C16-3"
    },
    {
        "AbsEntry": 7639,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C17-1"
    },
    {
        "AbsEntry": 7640,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C17-2"
    },
    {
        "AbsEntry": 7641,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C17-3"
    },
    {
        "AbsEntry": 7642,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C18-1"
    },
    {
        "AbsEntry": 7643,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C18-2"
    },
    {
        "AbsEntry": 7644,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C18-3"
    },
    {
        "AbsEntry": 7645,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C19-1"
    },
    {
        "AbsEntry": 7646,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C19-2"
    },
    {
        "AbsEntry": 7647,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C19-3"
    },
    {
        "AbsEntry": 7648,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C20-1"
    },
    {
        "AbsEntry": 7649,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C20-2"
    },
    {
        "AbsEntry": 7650,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C20-3"
    },
    {
        "AbsEntry": 7651,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C21-1"
    },
    {
        "AbsEntry": 7652,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C21-2"
    },
    {
        "AbsEntry": 7653,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C21-3"
    },
    {
        "AbsEntry": 7654,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C22-1"
    },
    {
        "AbsEntry": 7655,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C22-2"
    },
    {
        "AbsEntry": 7656,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C22-3"
    },
    {
        "AbsEntry": 7657,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C23-1"
    },
    {
        "AbsEntry": 7658,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C23-2"
    },
    {
        "AbsEntry": 7659,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C23-3"
    },
    {
        "AbsEntry": 7660,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C24-1"
    },
    {
        "AbsEntry": 7661,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C24-2"
    },
    {
        "AbsEntry": 7662,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C24-3"
    },
    {
        "AbsEntry": 7663,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C25-1"
    },
    {
        "AbsEntry": 7664,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C25-2"
    },
    {
        "AbsEntry": 7665,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C25-3"
    },
    {
        "AbsEntry": 7666,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C26-1"
    },
    {
        "AbsEntry": 7667,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C26-2"
    },
    {
        "AbsEntry": 7668,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C26-3"
    },
    {
        "AbsEntry": 7669,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C27-1"
    },
    {
        "AbsEntry": 7670,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C27-2"
    },
    {
        "AbsEntry": 7671,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C27-3"
    },
    {
        "AbsEntry": 7672,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C28-1"
    },
    {
        "AbsEntry": 7673,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C28-2"
    },
    {
        "AbsEntry": 7674,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C28-3"
    },
    {
        "AbsEntry": 7675,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C29-1"
    },
    {
        "AbsEntry": 7676,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C29-2"
    },
    {
        "AbsEntry": 7677,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C29-3"
    },
    {
        "AbsEntry": 7678,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C30-1"
    },
    {
        "AbsEntry": 7679,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C30-2"
    },
    {
        "AbsEntry": 7680,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C30-3"
    },
    {
        "AbsEntry": 7681,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C31-1"
    },
    {
        "AbsEntry": 7682,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C31-2"
    },
    {
        "AbsEntry": 7683,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C31-3"
    },
    {
        "AbsEntry": 7684,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C32-1"
    },
    {
        "AbsEntry": 7685,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C32-2"
    },
    {
        "AbsEntry": 7686,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C32-3"
    },
    {
        "AbsEntry": 7687,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C33-1"
    },
    {
        "AbsEntry": 7688,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C33-2"
    },
    {
        "AbsEntry": 7689,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C33-3"
    },
    {
        "AbsEntry": 7690,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C34-1"
    },
    {
        "AbsEntry": 7691,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C34-2"
    },
    {
        "AbsEntry": 7692,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C34-3"
    },
    {
        "AbsEntry": 7693,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C35-1"
    },
    {
        "AbsEntry": 7694,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C35-2"
    },
    {
        "AbsEntry": 7695,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C35-3"
    },
    {
        "AbsEntry": 7696,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C36-1"
    },
    {
        "AbsEntry": 7697,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C36-2"
    },
    {
        "AbsEntry": 7698,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C36-3"
    },
    {
        "AbsEntry": 7699,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C37-1"
    },
    {
        "AbsEntry": 7700,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C37-2"
    },
    {
        "AbsEntry": 7701,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C37-3"
    },
    {
        "AbsEntry": 7702,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C38-1"
    },
    {
        "AbsEntry": 7703,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C38-2"
    },
    {
        "AbsEntry": 7704,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C38-3"
    },
    {
        "AbsEntry": 7705,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C39-1"
    },
    {
        "AbsEntry": 7706,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C39-2"
    },
    {
        "AbsEntry": 7707,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C39-3"
    },
    {
        "AbsEntry": 7708,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C40-1"
    },
    {
        "AbsEntry": 7709,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C40-2"
    },
    {
        "AbsEntry": 7710,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C40-3"
    },
    {
        "AbsEntry": 7711,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C41-1"
    },
    {
        "AbsEntry": 7712,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C41-2"
    },
    {
        "AbsEntry": 7713,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C41-3"
    },
    {
        "AbsEntry": 7714,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C42-1"
    },
    {
        "AbsEntry": 7715,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C42-2"
    },
    {
        "AbsEntry": 7716,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C42-3"
    },
    {
        "AbsEntry": 7717,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C43-1"
    },
    {
        "AbsEntry": 7718,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C43-2"
    },
    {
        "AbsEntry": 7719,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C43-3"
    },
    {
        "AbsEntry": 7720,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C44-1"
    },
    {
        "AbsEntry": 7721,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C44-2"
    },
    {
        "AbsEntry": 7722,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C44-3"
    },
    {
        "AbsEntry": 7723,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C45-1"
    },
    {
        "AbsEntry": 7724,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C45-2"
    },
    {
        "AbsEntry": 7725,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C45-3"
    },
    {
        "AbsEntry": 7726,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C46-1"
    },
    {
        "AbsEntry": 7727,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C46-2"
    },
    {
        "AbsEntry": 7728,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C46-3"
    },
    {
        "AbsEntry": 7729,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C47-1"
    },
    {
        "AbsEntry": 7730,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C47-2"
    },
    {
        "AbsEntry": 7731,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C47-3"
    },
    {
        "AbsEntry": 7732,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C48-1"
    },
    {
        "AbsEntry": 7733,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C48-2"
    },
    {
        "AbsEntry": 7734,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C48-3"
    },
    {
        "AbsEntry": 7735,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C49-1"
    },
    {
        "AbsEntry": 7736,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C49-2"
    },
    {
        "AbsEntry": 7737,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C49-3"
    },
    {
        "AbsEntry": 7738,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C50-1"
    },
    {
        "AbsEntry": 7739,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C50-2"
    },
    {
        "AbsEntry": 7740,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C50-3"
    },
    {
        "AbsEntry": 7741,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D01-1"
    },
    {
        "AbsEntry": 7742,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D01-2"
    },
    {
        "AbsEntry": 7743,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D01-3"
    },
    {
        "AbsEntry": 7744,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D02-1"
    },
    {
        "AbsEntry": 7745,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D02-2"
    },
    {
        "AbsEntry": 7746,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D02-3"
    },
    {
        "AbsEntry": 7747,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D03-1"
    },
    {
        "AbsEntry": 7748,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D03-2"
    },
    {
        "AbsEntry": 7749,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D03-3"
    },
    {
        "AbsEntry": 7750,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D04-1"
    },
    {
        "AbsEntry": 7751,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D04-2"
    },
    {
        "AbsEntry": 7752,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D04-3"
    },
    {
        "AbsEntry": 7753,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D05-1"
    },
    {
        "AbsEntry": 7754,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D05-2"
    },
    {
        "AbsEntry": 7755,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D05-3"
    },
    {
        "AbsEntry": 7756,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D06-1"
    },
    {
        "AbsEntry": 7757,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D06-2"
    },
    {
        "AbsEntry": 7758,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D06-3"
    },
    {
        "AbsEntry": 7759,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D07-1"
    },
    {
        "AbsEntry": 7760,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D07-2"
    },
    {
        "AbsEntry": 7761,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D07-3"
    },
    {
        "AbsEntry": 7762,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D08-1"
    },
    {
        "AbsEntry": 7763,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D08-2"
    },
    {
        "AbsEntry": 7764,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D08-3"
    },
    {
        "AbsEntry": 7765,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D09-1"
    },
    {
        "AbsEntry": 7766,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D09-2"
    },
    {
        "AbsEntry": 7767,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D09-3"
    },
    {
        "AbsEntry": 7768,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D10-1"
    },
    {
        "AbsEntry": 7769,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D10-2"
    },
    {
        "AbsEntry": 7770,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D10-3"
    },
    {
        "AbsEntry": 7771,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D11-1"
    },
    {
        "AbsEntry": 7772,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D11-2"
    },
    {
        "AbsEntry": 7773,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D11-3"
    },
    {
        "AbsEntry": 7774,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D12-1"
    },
    {
        "AbsEntry": 7775,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D12-2"
    },
    {
        "AbsEntry": 7776,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D12-3"
    },
    {
        "AbsEntry": 7777,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D13-1"
    },
    {
        "AbsEntry": 7778,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D13-2"
    },
    {
        "AbsEntry": 7779,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D13-3"
    },
    {
        "AbsEntry": 7780,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D14-1"
    },
    {
        "AbsEntry": 7781,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D14-2"
    },
    {
        "AbsEntry": 7782,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D14-3"
    },
    {
        "AbsEntry": 7783,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D15-1"
    },
    {
        "AbsEntry": 7784,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D15-2"
    },
    {
        "AbsEntry": 7785,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D15-3"
    },
    {
        "AbsEntry": 7786,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D16-1"
    },
    {
        "AbsEntry": 7787,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D16-2"
    },
    {
        "AbsEntry": 7788,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D16-3"
    },
    {
        "AbsEntry": 7789,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D17-1"
    },
    {
        "AbsEntry": 7790,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D17-2"
    },
    {
        "AbsEntry": 7791,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D17-3"
    },
    {
        "AbsEntry": 7792,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D18-1"
    },
    {
        "AbsEntry": 7793,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D18-2"
    },
    {
        "AbsEntry": 7794,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D18-3"
    },
    {
        "AbsEntry": 7795,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D19-1"
    },
    {
        "AbsEntry": 7796,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D19-2"
    },
    {
        "AbsEntry": 7797,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D19-3"
    },
    {
        "AbsEntry": 7798,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D20-1"
    },
    {
        "AbsEntry": 7799,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D20-2"
    },
    {
        "AbsEntry": 7800,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D20-3"
    },
    {
        "AbsEntry": 7801,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D21-1"
    },
    {
        "AbsEntry": 7802,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D21-2"
    },
    {
        "AbsEntry": 7803,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D21-3"
    },
    {
        "AbsEntry": 7804,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D22-1"
    },
    {
        "AbsEntry": 7805,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D22-2"
    },
    {
        "AbsEntry": 7806,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D22-3"
    },
    {
        "AbsEntry": 7807,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D23-1"
    },
    {
        "AbsEntry": 7808,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D23-2"
    },
    {
        "AbsEntry": 7809,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D23-3"
    },
    {
        "AbsEntry": 7810,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D24-1"
    },
    {
        "AbsEntry": 7811,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D24-2"
    },
    {
        "AbsEntry": 7812,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D24-3"
    },
    {
        "AbsEntry": 7813,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D25-1"
    },
    {
        "AbsEntry": 7814,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D25-2"
    },
    {
        "AbsEntry": 7815,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D25-3"
    },
    {
        "AbsEntry": 7816,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D26-1"
    },
    {
        "AbsEntry": 7817,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D26-2"
    },
    {
        "AbsEntry": 7818,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D26-3"
    },
    {
        "AbsEntry": 7819,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D27-1"
    },
    {
        "AbsEntry": 7820,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D27-2"
    },
    {
        "AbsEntry": 7821,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D27-3"
    },
    {
        "AbsEntry": 7822,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D28-1"
    },
    {
        "AbsEntry": 7823,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D28-2"
    },
    {
        "AbsEntry": 7824,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D28-3"
    },
    {
        "AbsEntry": 7825,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D29-1"
    },
    {
        "AbsEntry": 7826,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D29-2"
    },
    {
        "AbsEntry": 7827,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D29-3"
    },
    {
        "AbsEntry": 7828,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D30-1"
    },
    {
        "AbsEntry": 7829,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D30-2"
    },
    {
        "AbsEntry": 7830,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D30-3"
    },
    {
        "AbsEntry": 7831,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D31-1"
    },
    {
        "AbsEntry": 7832,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D31-2"
    },
    {
        "AbsEntry": 7833,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D31-3"
    },
    {
        "AbsEntry": 7834,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D32-1"
    },
    {
        "AbsEntry": 7835,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D32-2"
    },
    {
        "AbsEntry": 7836,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D32-3"
    },
    {
        "AbsEntry": 7837,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D33-1"
    },
    {
        "AbsEntry": 7838,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D33-2"
    },
    {
        "AbsEntry": 7839,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D33-3"
    },
    {
        "AbsEntry": 7840,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D34-1"
    },
    {
        "AbsEntry": 7841,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D34-2"
    },
    {
        "AbsEntry": 7842,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D34-3"
    },
    {
        "AbsEntry": 7843,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D35-1"
    },
    {
        "AbsEntry": 7844,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D35-2"
    },
    {
        "AbsEntry": 7845,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D35-3"
    },
    {
        "AbsEntry": 7846,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D36-1"
    },
    {
        "AbsEntry": 7847,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D36-2"
    },
    {
        "AbsEntry": 7848,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D36-3"
    },
    {
        "AbsEntry": 7849,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D37-1"
    },
    {
        "AbsEntry": 7850,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D37-2"
    },
    {
        "AbsEntry": 7851,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D37-3"
    },
    {
        "AbsEntry": 7852,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D38-1"
    },
    {
        "AbsEntry": 7853,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D38-2"
    },
    {
        "AbsEntry": 7854,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D38-3"
    },
    {
        "AbsEntry": 7855,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D39-1"
    },
    {
        "AbsEntry": 7856,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D39-2"
    },
    {
        "AbsEntry": 7857,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D39-3"
    },
    {
        "AbsEntry": 7858,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D40-1"
    },
    {
        "AbsEntry": 7859,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D40-2"
    },
    {
        "AbsEntry": 7860,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D40-3"
    },
    {
        "AbsEntry": 7861,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D41-1"
    },
    {
        "AbsEntry": 7862,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D41-2"
    },
    {
        "AbsEntry": 7863,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D41-3"
    },
    {
        "AbsEntry": 7864,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D42-1"
    },
    {
        "AbsEntry": 7865,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D42-2"
    },
    {
        "AbsEntry": 7866,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D42-3"
    },
    {
        "AbsEntry": 7867,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D43-1"
    },
    {
        "AbsEntry": 7868,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D43-2"
    },
    {
        "AbsEntry": 7869,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D43-3"
    },
    {
        "AbsEntry": 7870,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D44-1"
    },
    {
        "AbsEntry": 7871,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D44-2"
    },
    {
        "AbsEntry": 7872,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D44-3"
    },
    {
        "AbsEntry": 7873,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D45-1"
    },
    {
        "AbsEntry": 7874,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D45-2"
    },
    {
        "AbsEntry": 7875,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D45-3"
    },
    {
        "AbsEntry": 7876,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D46-1"
    },
    {
        "AbsEntry": 7877,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D46-2"
    },
    {
        "AbsEntry": 7878,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D46-3"
    },
    {
        "AbsEntry": 7879,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D47-1"
    },
    {
        "AbsEntry": 7880,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D47-2"
    },
    {
        "AbsEntry": 7881,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D47-3"
    },
    {
        "AbsEntry": 7882,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D48-1"
    },
    {
        "AbsEntry": 7883,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D48-2"
    },
    {
        "AbsEntry": 7884,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D48-3"
    },
    {
        "AbsEntry": 7885,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D49-1"
    },
    {
        "AbsEntry": 7886,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D49-2"
    },
    {
        "AbsEntry": 7887,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D49-3"
    },
    {
        "AbsEntry": 7888,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D50-1"
    },
    {
        "AbsEntry": 7889,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D50-2"
    },
    {
        "AbsEntry": 7890,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8D50-3"
    },
    {
        "AbsEntry": 7891,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E01-1"
    },
    {
        "AbsEntry": 7892,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E01-2"
    },
    {
        "AbsEntry": 7893,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E01-3"
    },
    {
        "AbsEntry": 7894,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E02-1"
    },
    {
        "AbsEntry": 7895,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E02-2"
    },
    {
        "AbsEntry": 7896,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E02-3"
    },
    {
        "AbsEntry": 7897,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E03-1"
    },
    {
        "AbsEntry": 7898,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E03-2"
    },
    {
        "AbsEntry": 7899,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E03-3"
    },
    {
        "AbsEntry": 7900,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E04-1"
    },
    {
        "AbsEntry": 7901,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E04-2"
    },
    {
        "AbsEntry": 7902,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E04-3"
    },
    {
        "AbsEntry": 7903,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E05-1"
    },
    {
        "AbsEntry": 7904,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E05-2"
    },
    {
        "AbsEntry": 7905,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E05-3"
    },
    {
        "AbsEntry": 7906,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E06-1"
    },
    {
        "AbsEntry": 7907,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E06-2"
    },
    {
        "AbsEntry": 7908,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E06-3"
    },
    {
        "AbsEntry": 7909,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E07-1"
    },
    {
        "AbsEntry": 7910,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E07-2"
    },
    {
        "AbsEntry": 7911,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E07-3"
    },
    {
        "AbsEntry": 7912,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E08-1"
    },
    {
        "AbsEntry": 7913,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E08-2"
    },
    {
        "AbsEntry": 7914,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E08-3"
    },
    {
        "AbsEntry": 7915,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E09-1"
    },
    {
        "AbsEntry": 7916,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E09-2"
    },
    {
        "AbsEntry": 7917,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E09-3"
    },
    {
        "AbsEntry": 7918,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E10-1"
    },
    {
        "AbsEntry": 7919,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E10-2"
    },
    {
        "AbsEntry": 7920,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E10-3"
    },
    {
        "AbsEntry": 7921,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E11-1"
    },
    {
        "AbsEntry": 7922,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E11-2"
    },
    {
        "AbsEntry": 7923,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E11-3"
    },
    {
        "AbsEntry": 7924,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E12-1"
    },
    {
        "AbsEntry": 7925,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E12-2"
    },
    {
        "AbsEntry": 7926,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E12-3"
    },
    {
        "AbsEntry": 7927,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E13-1"
    },
    {
        "AbsEntry": 7928,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E13-2"
    },
    {
        "AbsEntry": 7929,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E13-3"
    },
    {
        "AbsEntry": 7930,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E14-1"
    },
    {
        "AbsEntry": 7931,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E14-2"
    },
    {
        "AbsEntry": 7932,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E14-3"
    },
    {
        "AbsEntry": 7933,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E15-1"
    },
    {
        "AbsEntry": 7934,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E15-2"
    },
    {
        "AbsEntry": 7935,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E15-3"
    },
    {
        "AbsEntry": 7936,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E16-1"
    },
    {
        "AbsEntry": 7937,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E16-2"
    },
    {
        "AbsEntry": 7938,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E16-3"
    },
    {
        "AbsEntry": 7939,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E17-1"
    },
    {
        "AbsEntry": 7940,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E17-2"
    },
    {
        "AbsEntry": 7941,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E17-3"
    },
    {
        "AbsEntry": 7942,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E18-1"
    },
    {
        "AbsEntry": 7943,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E18-2"
    },
    {
        "AbsEntry": 7944,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E18-3"
    },
    {
        "AbsEntry": 7945,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E19-1"
    },
    {
        "AbsEntry": 7946,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E19-2"
    },
    {
        "AbsEntry": 7947,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E19-3"
    },
    {
        "AbsEntry": 7948,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E20-1"
    },
    {
        "AbsEntry": 7949,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E20-2"
    },
    {
        "AbsEntry": 7950,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E20-3"
    },
    {
        "AbsEntry": 7951,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E21-1"
    },
    {
        "AbsEntry": 7952,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E21-2"
    },
    {
        "AbsEntry": 7953,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E21-3"
    },
    {
        "AbsEntry": 7954,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E22-1"
    },
    {
        "AbsEntry": 7955,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E22-2"
    },
    {
        "AbsEntry": 7956,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E22-3"
    },
    {
        "AbsEntry": 7957,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E23-1"
    },
    {
        "AbsEntry": 7958,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E23-2"
    },
    {
        "AbsEntry": 7959,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E23-3"
    },
    {
        "AbsEntry": 7960,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E24-1"
    },
    {
        "AbsEntry": 7961,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E24-2"
    },
    {
        "AbsEntry": 7962,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E24-3"
    },
    {
        "AbsEntry": 7963,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E25-1"
    },
    {
        "AbsEntry": 7964,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E25-2"
    },
    {
        "AbsEntry": 7965,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E25-3"
    },
    {
        "AbsEntry": 7966,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E26-1"
    },
    {
        "AbsEntry": 7967,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E26-2"
    },
    {
        "AbsEntry": 7968,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E26-3"
    },
    {
        "AbsEntry": 7969,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E27-1"
    },
    {
        "AbsEntry": 7970,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E27-2"
    },
    {
        "AbsEntry": 7971,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E27-3"
    },
    {
        "AbsEntry": 7972,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E28-1"
    },
    {
        "AbsEntry": 7973,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E28-2"
    },
    {
        "AbsEntry": 7974,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8E28-3"
    },
    {
        "AbsEntry": 7975,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F01-1"
    },
    {
        "AbsEntry": 7976,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F01-2"
    },
    {
        "AbsEntry": 7977,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F01-3"
    },
    {
        "AbsEntry": 7978,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F02-1"
    },
    {
        "AbsEntry": 7979,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F02-2"
    },
    {
        "AbsEntry": 7980,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F02-3"
    },
    {
        "AbsEntry": 7981,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F03-1"
    },
    {
        "AbsEntry": 7982,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F03-2"
    },
    {
        "AbsEntry": 7983,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F03-3"
    },
    {
        "AbsEntry": 7984,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F04-1"
    },
    {
        "AbsEntry": 7985,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F04-2"
    },
    {
        "AbsEntry": 7986,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F04-3"
    },
    {
        "AbsEntry": 7987,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F05-1"
    },
    {
        "AbsEntry": 7988,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F05-2"
    },
    {
        "AbsEntry": 7989,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F05-3"
    },
    {
        "AbsEntry": 7990,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F06-1"
    },
    {
        "AbsEntry": 7991,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F06-2"
    },
    {
        "AbsEntry": 7992,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F06-3"
    },
    {
        "AbsEntry": 7993,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F07-1"
    },
    {
        "AbsEntry": 7994,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F07-2"
    },
    {
        "AbsEntry": 7995,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F07-3"
    },
    {
        "AbsEntry": 7996,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F08-1"
    },
    {
        "AbsEntry": 7997,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F08-2"
    },
    {
        "AbsEntry": 7998,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F08-3"
    },
    {
        "AbsEntry": 7999,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F09-1"
    },
    {
        "AbsEntry": 8000,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F09-2"
    },
    {
        "AbsEntry": 8001,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F09-3"
    },
    {
        "AbsEntry": 8002,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F10-1"
    },
    {
        "AbsEntry": 8003,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F10-2"
    },
    {
        "AbsEntry": 8004,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F10-3"
    },
    {
        "AbsEntry": 8005,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F11-1"
    },
    {
        "AbsEntry": 8006,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F11-2"
    },
    {
        "AbsEntry": 8007,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F11-3"
    },
    {
        "AbsEntry": 8008,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F12-1"
    },
    {
        "AbsEntry": 8009,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F12-2"
    },
    {
        "AbsEntry": 8010,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F12-3"
    },
    {
        "AbsEntry": 8011,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F13-1"
    },
    {
        "AbsEntry": 8012,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F13-2"
    },
    {
        "AbsEntry": 8013,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F13-3"
    },
    {
        "AbsEntry": 8014,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F14-1"
    },
    {
        "AbsEntry": 8015,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F14-2"
    },
    {
        "AbsEntry": 8016,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F14-3"
    },
    {
        "AbsEntry": 8017,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F15-1"
    },
    {
        "AbsEntry": 8018,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F15-2"
    },
    {
        "AbsEntry": 8019,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F15-3"
    },
    {
        "AbsEntry": 8020,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F16-1"
    },
    {
        "AbsEntry": 8021,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F16-2"
    },
    {
        "AbsEntry": 8022,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F16-3"
    },
    {
        "AbsEntry": 8023,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F17-1"
    },
    {
        "AbsEntry": 8024,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F17-2"
    },
    {
        "AbsEntry": 8025,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F17-3"
    },
    {
        "AbsEntry": 8026,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F18-1"
    },
    {
        "AbsEntry": 8027,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F18-2"
    },
    {
        "AbsEntry": 8028,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F18-3"
    },
    {
        "AbsEntry": 8029,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F19-1"
    },
    {
        "AbsEntry": 8030,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F19-2"
    },
    {
        "AbsEntry": 8031,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F19-3"
    },
    {
        "AbsEntry": 8032,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F20-1"
    },
    {
        "AbsEntry": 8033,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F20-2"
    },
    {
        "AbsEntry": 8034,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F20-3"
    },
    {
        "AbsEntry": 8035,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F21-1"
    },
    {
        "AbsEntry": 8036,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F21-2"
    },
    {
        "AbsEntry": 8037,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F21-3"
    },
    {
        "AbsEntry": 8038,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F22-1"
    },
    {
        "AbsEntry": 8039,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F22-2"
    },
    {
        "AbsEntry": 8040,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F22-3"
    },
    {
        "AbsEntry": 8041,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F23-1"
    },
    {
        "AbsEntry": 8042,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F23-2"
    },
    {
        "AbsEntry": 8043,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F23-3"
    },
    {
        "AbsEntry": 8044,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F24-1"
    },
    {
        "AbsEntry": 8045,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F24-2"
    },
    {
        "AbsEntry": 8046,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F24-3"
    },
    {
        "AbsEntry": 8047,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F25-1"
    },
    {
        "AbsEntry": 8048,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F25-2"
    },
    {
        "AbsEntry": 8049,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F25-3"
    },
    {
        "AbsEntry": 8050,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F26-1"
    },
    {
        "AbsEntry": 8051,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F26-2"
    },
    {
        "AbsEntry": 8052,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F26-3"
    },
    {
        "AbsEntry": 8053,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F27-1"
    },
    {
        "AbsEntry": 8054,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F27-2"
    },
    {
        "AbsEntry": 8055,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F27-3"
    },
    {
        "AbsEntry": 8056,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F28-1"
    },
    {
        "AbsEntry": 8057,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F28-2"
    },
    {
        "AbsEntry": 8058,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8F28-3"
    },
    {
        "AbsEntry": 8059,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G01-1"
    },
    {
        "AbsEntry": 8060,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G01-2"
    },
    {
        "AbsEntry": 8061,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G01-3"
    },
    {
        "AbsEntry": 8062,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G02-1"
    },
    {
        "AbsEntry": 8063,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G02-2"
    },
    {
        "AbsEntry": 8064,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G02-3"
    },
    {
        "AbsEntry": 8065,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G03-1"
    },
    {
        "AbsEntry": 8066,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G03-2"
    },
    {
        "AbsEntry": 8067,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G03-3"
    },
    {
        "AbsEntry": 8068,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G04-1"
    },
    {
        "AbsEntry": 8069,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G04-2"
    },
    {
        "AbsEntry": 8070,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G04-3"
    },
    {
        "AbsEntry": 8071,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G05-1"
    },
    {
        "AbsEntry": 8072,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G05-2"
    },
    {
        "AbsEntry": 8073,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G05-3"
    },
    {
        "AbsEntry": 8074,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G06-1"
    },
    {
        "AbsEntry": 8075,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G06-2"
    },
    {
        "AbsEntry": 8076,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G06-3"
    },
    {
        "AbsEntry": 8077,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G07-1"
    },
    {
        "AbsEntry": 8078,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G07-2"
    },
    {
        "AbsEntry": 8079,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G07-3"
    },
    {
        "AbsEntry": 8080,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G08-1"
    },
    {
        "AbsEntry": 8081,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G08-2"
    },
    {
        "AbsEntry": 8082,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G08-3"
    },
    {
        "AbsEntry": 8083,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G09-1"
    },
    {
        "AbsEntry": 8084,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G09-2"
    },
    {
        "AbsEntry": 8085,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G09-3"
    },
    {
        "AbsEntry": 8086,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G10-1"
    },
    {
        "AbsEntry": 8087,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G10-2"
    },
    {
        "AbsEntry": 8088,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G10-3"
    },
    {
        "AbsEntry": 8089,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G11-1"
    },
    {
        "AbsEntry": 8090,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G11-2"
    },
    {
        "AbsEntry": 8091,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G11-3"
    },
    {
        "AbsEntry": 8092,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G12-1"
    },
    {
        "AbsEntry": 8093,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G12-2"
    },
    {
        "AbsEntry": 8094,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G12-3"
    },
    {
        "AbsEntry": 8095,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G13-1"
    },
    {
        "AbsEntry": 8096,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G13-2"
    },
    {
        "AbsEntry": 8097,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G13-3"
    },
    {
        "AbsEntry": 8098,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G14-1"
    },
    {
        "AbsEntry": 8099,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G14-2"
    },
    {
        "AbsEntry": 8100,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G14-3"
    },
    {
        "AbsEntry": 8101,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G15-1"
    },
    {
        "AbsEntry": 8102,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G15-2"
    },
    {
        "AbsEntry": 8103,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G15-3"
    },
    {
        "AbsEntry": 8104,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G16-1"
    },
    {
        "AbsEntry": 8105,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G16-2"
    },
    {
        "AbsEntry": 8106,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G16-3"
    },
    {
        "AbsEntry": 8107,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G17-1"
    },
    {
        "AbsEntry": 8108,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G17-2"
    },
    {
        "AbsEntry": 8109,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G17-3"
    },
    {
        "AbsEntry": 8110,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G18-1"
    },
    {
        "AbsEntry": 8111,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G18-2"
    },
    {
        "AbsEntry": 8112,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G18-3"
    },
    {
        "AbsEntry": 8113,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G19-1"
    },
    {
        "AbsEntry": 8114,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G19-2"
    },
    {
        "AbsEntry": 8115,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G19-3"
    },
    {
        "AbsEntry": 8116,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G20-1"
    },
    {
        "AbsEntry": 8117,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G20-2"
    },
    {
        "AbsEntry": 8118,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G20-3"
    },
    {
        "AbsEntry": 8119,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G21-1"
    },
    {
        "AbsEntry": 8120,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G21-2"
    },
    {
        "AbsEntry": 8121,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G21-3"
    },
    {
        "AbsEntry": 8122,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G22-1"
    },
    {
        "AbsEntry": 8123,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G22-2"
    },
    {
        "AbsEntry": 8124,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G22-3"
    },
    {
        "AbsEntry": 8125,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G23-1"
    },
    {
        "AbsEntry": 8126,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G23-2"
    },
    {
        "AbsEntry": 8127,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G23-3"
    },
    {
        "AbsEntry": 8128,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G24-1"
    },
    {
        "AbsEntry": 8129,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G24-2"
    },
    {
        "AbsEntry": 8130,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G24-3"
    },
    {
        "AbsEntry": 8131,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G25-1"
    },
    {
        "AbsEntry": 8132,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G25-2"
    },
    {
        "AbsEntry": 8133,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G25-3"
    },
    {
        "AbsEntry": 8134,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G26-1"
    },
    {
        "AbsEntry": 8135,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G26-2"
    },
    {
        "AbsEntry": 8136,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G26-3"
    },
    {
        "AbsEntry": 8137,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G27-1"
    },
    {
        "AbsEntry": 8138,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G27-2"
    },
    {
        "AbsEntry": 8139,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G27-3"
    },
    {
        "AbsEntry": 8140,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G28-1"
    },
    {
        "AbsEntry": 8141,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G28-2"
    },
    {
        "AbsEntry": 8142,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8G28-3"
    },
    {
        "AbsEntry": 8143,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H01-1"
    },
    {
        "AbsEntry": 8144,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H01-2"
    },
    {
        "AbsEntry": 8145,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H01-3"
    },
    {
        "AbsEntry": 8146,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H02-1"
    },
    {
        "AbsEntry": 8147,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H02-2"
    },
    {
        "AbsEntry": 8148,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H02-3"
    },
    {
        "AbsEntry": 8149,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H03-1"
    },
    {
        "AbsEntry": 8150,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H03-2"
    },
    {
        "AbsEntry": 8151,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H03-3"
    },
    {
        "AbsEntry": 8152,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H04-1"
    },
    {
        "AbsEntry": 8153,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H04-2"
    },
    {
        "AbsEntry": 8154,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H04-3"
    },
    {
        "AbsEntry": 8155,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H05-1"
    },
    {
        "AbsEntry": 8156,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H05-2"
    },
    {
        "AbsEntry": 8157,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H05-3"
    },
    {
        "AbsEntry": 8158,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H06-1"
    },
    {
        "AbsEntry": 8159,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H06-2"
    },
    {
        "AbsEntry": 8160,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H06-3"
    },
    {
        "AbsEntry": 8161,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H07-1"
    },
    {
        "AbsEntry": 8162,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H07-2"
    },
    {
        "AbsEntry": 8163,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H07-3"
    },
    {
        "AbsEntry": 8164,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H08-1"
    },
    {
        "AbsEntry": 8165,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H08-2"
    },
    {
        "AbsEntry": 8166,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H08-3"
    },
    {
        "AbsEntry": 8167,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H09-1"
    },
    {
        "AbsEntry": 8168,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H09-2"
    },
    {
        "AbsEntry": 8169,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H09-3"
    },
    {
        "AbsEntry": 8170,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H10-1"
    },
    {
        "AbsEntry": 8171,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H10-2"
    },
    {
        "AbsEntry": 8172,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H10-3"
    },
    {
        "AbsEntry": 8173,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H11-1"
    },
    {
        "AbsEntry": 8174,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H11-2"
    },
    {
        "AbsEntry": 8175,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H11-3"
    },
    {
        "AbsEntry": 8176,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H12-1"
    },
    {
        "AbsEntry": 8177,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H12-2"
    },
    {
        "AbsEntry": 8178,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H12-3"
    },
    {
        "AbsEntry": 8179,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H13-1"
    },
    {
        "AbsEntry": 8180,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H13-2"
    },
    {
        "AbsEntry": 8181,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H13-3"
    },
    {
        "AbsEntry": 8182,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H14-1"
    },
    {
        "AbsEntry": 8183,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H14-2"
    },
    {
        "AbsEntry": 8184,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H14-3"
    },
    {
        "AbsEntry": 8185,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H15-1"
    },
    {
        "AbsEntry": 8186,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H15-2"
    },
    {
        "AbsEntry": 8187,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H15-3"
    },
    {
        "AbsEntry": 8188,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H16-1"
    },
    {
        "AbsEntry": 8189,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H16-2"
    },
    {
        "AbsEntry": 8190,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H16-3"
    },
    {
        "AbsEntry": 8191,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H17-1"
    },
    {
        "AbsEntry": 8192,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H17-2"
    },
    {
        "AbsEntry": 8193,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H17-3"
    },
    {
        "AbsEntry": 8194,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H18-1"
    },
    {
        "AbsEntry": 8195,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H18-2"
    },
    {
        "AbsEntry": 8196,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H18-3"
    },
    {
        "AbsEntry": 8197,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H19-1"
    },
    {
        "AbsEntry": 8198,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H19-2"
    },
    {
        "AbsEntry": 8199,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H19-3"
    },
    {
        "AbsEntry": 8200,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H20-1"
    },
    {
        "AbsEntry": 8201,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H20-2"
    },
    {
        "AbsEntry": 8202,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H20-3"
    },
    {
        "AbsEntry": 8203,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H21-1"
    },
    {
        "AbsEntry": 8204,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H21-2"
    },
    {
        "AbsEntry": 8205,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H21-3"
    },
    {
        "AbsEntry": 8206,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H22-1"
    },
    {
        "AbsEntry": 8207,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H22-2"
    },
    {
        "AbsEntry": 8208,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H22-3"
    },
    {
        "AbsEntry": 8209,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H23-1"
    },
    {
        "AbsEntry": 8210,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H23-2"
    },
    {
        "AbsEntry": 8211,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H23-3"
    },
    {
        "AbsEntry": 8212,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H24-1"
    },
    {
        "AbsEntry": 8213,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H24-2"
    },
    {
        "AbsEntry": 8214,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H24-3"
    },
    {
        "AbsEntry": 8215,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H25-1"
    },
    {
        "AbsEntry": 8216,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H25-2"
    },
    {
        "AbsEntry": 8217,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H25-3"
    },
    {
        "AbsEntry": 8218,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H26-1"
    },
    {
        "AbsEntry": 8219,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H26-2"
    },
    {
        "AbsEntry": 8220,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H26-3"
    },
    {
        "AbsEntry": 8221,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H27-1"
    },
    {
        "AbsEntry": 8222,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H27-2"
    },
    {
        "AbsEntry": 8223,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H27-3"
    },
    {
        "AbsEntry": 8224,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H28-1"
    },
    {
        "AbsEntry": 8225,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H28-2"
    },
    {
        "AbsEntry": 8226,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8H28-3"
    },
    {
        "AbsEntry": 8227,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I01-1"
    },
    {
        "AbsEntry": 8228,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I01-2"
    },
    {
        "AbsEntry": 8229,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I01-3"
    },
    {
        "AbsEntry": 8230,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I02-1"
    },
    {
        "AbsEntry": 8231,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I02-2"
    },
    {
        "AbsEntry": 8232,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I02-3"
    },
    {
        "AbsEntry": 8233,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I03-1"
    },
    {
        "AbsEntry": 8234,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I03-2"
    },
    {
        "AbsEntry": 8235,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I03-3"
    },
    {
        "AbsEntry": 8236,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I04-1"
    },
    {
        "AbsEntry": 8237,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I04-2"
    },
    {
        "AbsEntry": 8238,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I04-3"
    },
    {
        "AbsEntry": 8239,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I05-1"
    },
    {
        "AbsEntry": 8240,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I05-2"
    },
    {
        "AbsEntry": 8241,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I05-3"
    },
    {
        "AbsEntry": 8242,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I06-1"
    },
    {
        "AbsEntry": 8243,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I06-2"
    },
    {
        "AbsEntry": 8244,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I06-3"
    },
    {
        "AbsEntry": 8245,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I07-1"
    },
    {
        "AbsEntry": 8246,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I07-2"
    },
    {
        "AbsEntry": 8247,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I07-3"
    },
    {
        "AbsEntry": 8248,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I08-1"
    },
    {
        "AbsEntry": 8249,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I08-2"
    },
    {
        "AbsEntry": 8250,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I08-3"
    },
    {
        "AbsEntry": 8251,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I09-1"
    },
    {
        "AbsEntry": 8252,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I09-2"
    },
    {
        "AbsEntry": 8253,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I09-3"
    },
    {
        "AbsEntry": 8254,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I10-1"
    },
    {
        "AbsEntry": 8255,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I10-2"
    },
    {
        "AbsEntry": 8256,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I10-3"
    },
    {
        "AbsEntry": 8257,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I11-1"
    },
    {
        "AbsEntry": 8258,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I11-2"
    },
    {
        "AbsEntry": 8259,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I11-3"
    },
    {
        "AbsEntry": 8260,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I12-1"
    },
    {
        "AbsEntry": 8261,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I12-2"
    },
    {
        "AbsEntry": 8262,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I12-3"
    },
    {
        "AbsEntry": 8263,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I13-1"
    },
    {
        "AbsEntry": 8264,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I13-2"
    },
    {
        "AbsEntry": 8265,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I13-3"
    },
    {
        "AbsEntry": 8266,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I14-1"
    },
    {
        "AbsEntry": 8267,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I14-2"
    },
    {
        "AbsEntry": 8268,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I14-3"
    },
    {
        "AbsEntry": 8269,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I15-1"
    },
    {
        "AbsEntry": 8270,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I15-2"
    },
    {
        "AbsEntry": 8271,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I15-3"
    },
    {
        "AbsEntry": 8272,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I16-1"
    },
    {
        "AbsEntry": 8273,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I16-2"
    },
    {
        "AbsEntry": 8274,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I16-3"
    },
    {
        "AbsEntry": 8275,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I17-1"
    },
    {
        "AbsEntry": 8276,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I17-2"
    },
    {
        "AbsEntry": 8277,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I17-3"
    },
    {
        "AbsEntry": 8278,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I18-1"
    },
    {
        "AbsEntry": 8279,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I18-2"
    },
    {
        "AbsEntry": 8280,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I18-3"
    },
    {
        "AbsEntry": 8281,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I19-1"
    },
    {
        "AbsEntry": 8282,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I19-2"
    },
    {
        "AbsEntry": 8283,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I19-3"
    },
    {
        "AbsEntry": 8284,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I20-1"
    },
    {
        "AbsEntry": 8285,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I20-2"
    },
    {
        "AbsEntry": 8286,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I20-3"
    },
    {
        "AbsEntry": 8287,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I21-1"
    },
    {
        "AbsEntry": 8288,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I21-2"
    },
    {
        "AbsEntry": 8289,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I21-3"
    },
    {
        "AbsEntry": 8290,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I22-1"
    },
    {
        "AbsEntry": 8291,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I22-2"
    },
    {
        "AbsEntry": 8292,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I22-3"
    },
    {
        "AbsEntry": 8293,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I23-1"
    },
    {
        "AbsEntry": 8294,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I23-2"
    },
    {
        "AbsEntry": 8295,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I23-3"
    },
    {
        "AbsEntry": 8296,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I24-1"
    },
    {
        "AbsEntry": 8297,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I24-2"
    },
    {
        "AbsEntry": 8298,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I24-3"
    },
    {
        "AbsEntry": 8299,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I25-1"
    },
    {
        "AbsEntry": 8300,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I25-2"
    },
    {
        "AbsEntry": 8301,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I25-3"
    },
    {
        "AbsEntry": 8302,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I26-1"
    },
    {
        "AbsEntry": 8303,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I26-2"
    },
    {
        "AbsEntry": 8304,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I26-3"
    },
    {
        "AbsEntry": 8305,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I27-1"
    },
    {
        "AbsEntry": 8306,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I27-2"
    },
    {
        "AbsEntry": 8307,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I27-3"
    },
    {
        "AbsEntry": 8308,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I28-1"
    },
    {
        "AbsEntry": 8309,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I28-2"
    },
    {
        "AbsEntry": 8310,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8I28-3"
    },
    {
        "AbsEntry": 8311,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M01-1"
    },
    {
        "AbsEntry": 8312,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M02-1"
    },
    {
        "AbsEntry": 8313,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M03-1"
    },
    {
        "AbsEntry": 8314,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M04-1"
    },
    {
        "AbsEntry": 8315,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M05-1"
    },
    {
        "AbsEntry": 8316,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M06-1"
    },
    {
        "AbsEntry": 8317,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M07-1"
    },
    {
        "AbsEntry": 8318,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M08-1"
    },
    {
        "AbsEntry": 8319,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M09-1"
    },
    {
        "AbsEntry": 8320,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M10-1"
    },
    {
        "AbsEntry": 8321,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M11-1"
    },
    {
        "AbsEntry": 8322,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M12-1"
    },
    {
        "AbsEntry": 8323,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M13-1"
    },
    {
        "AbsEntry": 8324,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M14-1"
    },
    {
        "AbsEntry": 8325,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M15-1"
    },
    {
        "AbsEntry": 8326,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M16-1"
    },
    {
        "AbsEntry": 8327,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M17-1"
    },
    {
        "AbsEntry": 8328,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M18-1"
    },
    {
        "AbsEntry": 8329,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M19-1"
    },
    {
        "AbsEntry": 8330,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M20-1"
    },
    {
        "AbsEntry": 8331,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M21-1"
    },
    {
        "AbsEntry": 8332,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M22-1"
    },
    {
        "AbsEntry": 8333,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M23-1"
    },
    {
        "AbsEntry": 8334,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M24-1"
    },
    {
        "AbsEntry": 8335,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M25-1"
    },
    {
        "AbsEntry": 8336,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M26-1"
    },
    {
        "AbsEntry": 8337,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M27-1"
    },
    {
        "AbsEntry": 8338,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M28-1"
    },
    {
        "AbsEntry": 8339,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M29-1"
    },
    {
        "AbsEntry": 8340,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M30-1"
    },
    {
        "AbsEntry": 8341,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M31-1"
    },
    {
        "AbsEntry": 8342,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M32-1"
    },
    {
        "AbsEntry": 8343,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M33-1"
    },
    {
        "AbsEntry": 8344,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M34-1"
    },
    {
        "AbsEntry": 8345,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M35-1"
    },
    {
        "AbsEntry": 8346,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M36-1"
    },
    {
        "AbsEntry": 8347,
        "Warehouse": "WRV",
        "BinCode": "WRV-1M37-1"
    },
    {
        "AbsEntry": 8348,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K01-1"
    },
    {
        "AbsEntry": 8349,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K01-2"
    },
    {
        "AbsEntry": 8350,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K02-1"
    },
    {
        "AbsEntry": 8351,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K02-2"
    },
    {
        "AbsEntry": 8352,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K03-1"
    },
    {
        "AbsEntry": 8353,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K03-2"
    },
    {
        "AbsEntry": 8354,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K04-1"
    },
    {
        "AbsEntry": 8355,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K04-2"
    },
    {
        "AbsEntry": 8356,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K05-1"
    },
    {
        "AbsEntry": 8357,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K05-2"
    },
    {
        "AbsEntry": 8358,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K06-1"
    },
    {
        "AbsEntry": 8359,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K06-2"
    },
    {
        "AbsEntry": 8360,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K07-1"
    },
    {
        "AbsEntry": 8361,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K07-2"
    },
    {
        "AbsEntry": 8362,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K08-1"
    },
    {
        "AbsEntry": 8363,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K08-2"
    },
    {
        "AbsEntry": 8364,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K09-1"
    },
    {
        "AbsEntry": 8365,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K09-2"
    },
    {
        "AbsEntry": 8366,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K10-1"
    },
    {
        "AbsEntry": 8367,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K10-2"
    },
    {
        "AbsEntry": 8368,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K11-1"
    },
    {
        "AbsEntry": 8369,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K11-2"
    },
    {
        "AbsEntry": 8370,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K12-1"
    },
    {
        "AbsEntry": 8371,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K12-2"
    },
    {
        "AbsEntry": 8372,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K13-1"
    },
    {
        "AbsEntry": 8373,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K13-2"
    },
    {
        "AbsEntry": 8374,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K14-1"
    },
    {
        "AbsEntry": 8375,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K14-2"
    },
    {
        "AbsEntry": 8376,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K15-1"
    },
    {
        "AbsEntry": 8377,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K15-2"
    },
    {
        "AbsEntry": 8378,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K16-1"
    },
    {
        "AbsEntry": 8379,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K16-2"
    },
    {
        "AbsEntry": 8380,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K17-1"
    },
    {
        "AbsEntry": 8381,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K17-2"
    },
    {
        "AbsEntry": 8382,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K18-1"
    },
    {
        "AbsEntry": 8383,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K18-2"
    },
    {
        "AbsEntry": 8384,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K19-1"
    },
    {
        "AbsEntry": 8385,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K19-2"
    },
    {
        "AbsEntry": 8386,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K20-1"
    },
    {
        "AbsEntry": 8387,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K20-2"
    },
    {
        "AbsEntry": 8388,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K21-1"
    },
    {
        "AbsEntry": 8389,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K21-2"
    },
    {
        "AbsEntry": 8390,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K22-1"
    },
    {
        "AbsEntry": 8391,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K22-2"
    },
    {
        "AbsEntry": 8392,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K23-1"
    },
    {
        "AbsEntry": 8393,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K23-2"
    },
    {
        "AbsEntry": 8394,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K24-1"
    },
    {
        "AbsEntry": 8395,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K24-2"
    },
    {
        "AbsEntry": 8396,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K25-1"
    },
    {
        "AbsEntry": 8397,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K25-2"
    },
    {
        "AbsEntry": 8398,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K26-1"
    },
    {
        "AbsEntry": 8399,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K26-2"
    },
    {
        "AbsEntry": 8400,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K27-1"
    },
    {
        "AbsEntry": 8401,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K27-2"
    },
    {
        "AbsEntry": 8402,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K28-1"
    },
    {
        "AbsEntry": 8403,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K28-2"
    },
    {
        "AbsEntry": 8404,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K29-1"
    },
    {
        "AbsEntry": 8405,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K29-2"
    },
    {
        "AbsEntry": 8406,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K30-1"
    },
    {
        "AbsEntry": 8407,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K30-2"
    },
    {
        "AbsEntry": 8408,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K31-1"
    },
    {
        "AbsEntry": 8409,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K31-2"
    },
    {
        "AbsEntry": 8410,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K32-1"
    },
    {
        "AbsEntry": 8411,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K32-2"
    },
    {
        "AbsEntry": 8412,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K33-1"
    },
    {
        "AbsEntry": 8413,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K33-2"
    },
    {
        "AbsEntry": 8414,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K34-1"
    },
    {
        "AbsEntry": 8415,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K34-2"
    },
    {
        "AbsEntry": 8416,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K35-1"
    },
    {
        "AbsEntry": 8417,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K35-2"
    },
    {
        "AbsEntry": 8418,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K36-1"
    },
    {
        "AbsEntry": 8419,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K36-2"
    },
    {
        "AbsEntry": 8420,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K37-1"
    },
    {
        "AbsEntry": 8421,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K37-2"
    },
    {
        "AbsEntry": 8422,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K38-1"
    },
    {
        "AbsEntry": 8423,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K38-2"
    },
    {
        "AbsEntry": 8424,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K39-1"
    },
    {
        "AbsEntry": 8425,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K39-2"
    },
    {
        "AbsEntry": 8426,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K40-1"
    },
    {
        "AbsEntry": 8427,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K40-2"
    },
    {
        "AbsEntry": 8428,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K41-1"
    },
    {
        "AbsEntry": 8429,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K41-2"
    },
    {
        "AbsEntry": 8430,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K42-1"
    },
    {
        "AbsEntry": 8431,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K42-2"
    },
    {
        "AbsEntry": 8432,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K43-1"
    },
    {
        "AbsEntry": 8433,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K43-2"
    },
    {
        "AbsEntry": 8434,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K44-1"
    },
    {
        "AbsEntry": 8435,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K44-2"
    },
    {
        "AbsEntry": 8436,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K45-1"
    },
    {
        "AbsEntry": 8437,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K45-2"
    },
    {
        "AbsEntry": 8438,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K46-1"
    },
    {
        "AbsEntry": 8439,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K46-2"
    },
    {
        "AbsEntry": 8440,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K47-1"
    },
    {
        "AbsEntry": 8441,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K47-2"
    },
    {
        "AbsEntry": 8442,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K48-1"
    },
    {
        "AbsEntry": 8443,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K48-2"
    },
    {
        "AbsEntry": 8444,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K49-1"
    },
    {
        "AbsEntry": 8445,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K49-2"
    },
    {
        "AbsEntry": 8446,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K50-1"
    },
    {
        "AbsEntry": 8447,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K50-2"
    },
    {
        "AbsEntry": 8448,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K51-1"
    },
    {
        "AbsEntry": 8449,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K51-2"
    },
    {
        "AbsEntry": 8450,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K52-1"
    },
    {
        "AbsEntry": 8451,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K52-2"
    },
    {
        "AbsEntry": 8452,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K53-1"
    },
    {
        "AbsEntry": 8453,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K53-2"
    },
    {
        "AbsEntry": 8454,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K54-1"
    },
    {
        "AbsEntry": 8455,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K54-2"
    },
    {
        "AbsEntry": 8456,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K55-1"
    },
    {
        "AbsEntry": 8457,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K55-2"
    },
    {
        "AbsEntry": 8458,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K56-1"
    },
    {
        "AbsEntry": 8459,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K56-2"
    },
    {
        "AbsEntry": 8460,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K57-1"
    },
    {
        "AbsEntry": 8461,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K57-2"
    },
    {
        "AbsEntry": 8462,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K58-1"
    },
    {
        "AbsEntry": 8463,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K58-2"
    },
    {
        "AbsEntry": 8464,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K59-1"
    },
    {
        "AbsEntry": 8465,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K59-2"
    },
    {
        "AbsEntry": 8466,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K60-1"
    },
    {
        "AbsEntry": 8467,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K60-2"
    },
    {
        "AbsEntry": 8468,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K61-1"
    },
    {
        "AbsEntry": 8469,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K61-2"
    },
    {
        "AbsEntry": 8470,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K62-1"
    },
    {
        "AbsEntry": 8471,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K62-2"
    },
    {
        "AbsEntry": 8472,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K63-1"
    },
    {
        "AbsEntry": 8473,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K63-2"
    },
    {
        "AbsEntry": 8474,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K64-1"
    },
    {
        "AbsEntry": 8475,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K64-2"
    },
    {
        "AbsEntry": 8476,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K65-1"
    },
    {
        "AbsEntry": 8477,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K65-2"
    },
    {
        "AbsEntry": 8478,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K66-1"
    },
    {
        "AbsEntry": 8479,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K66-2"
    },
    {
        "AbsEntry": 8480,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K67-1"
    },
    {
        "AbsEntry": 8481,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K67-2"
    },
    {
        "AbsEntry": 8482,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K68-1"
    },
    {
        "AbsEntry": 8483,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K68-2"
    },
    {
        "AbsEntry": 8484,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K69-1"
    },
    {
        "AbsEntry": 8485,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K69-2"
    },
    {
        "AbsEntry": 8486,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K70-1"
    },
    {
        "AbsEntry": 8487,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K70-2"
    },
    {
        "AbsEntry": 8488,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K71-1"
    },
    {
        "AbsEntry": 8489,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K71-2"
    },
    {
        "AbsEntry": 8490,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K72-1"
    },
    {
        "AbsEntry": 8491,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K72-2"
    },
    {
        "AbsEntry": 8492,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K73-1"
    },
    {
        "AbsEntry": 8493,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K73-2"
    },
    {
        "AbsEntry": 8494,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K74-1"
    },
    {
        "AbsEntry": 8495,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K74-2"
    },
    {
        "AbsEntry": 8496,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K75-1"
    },
    {
        "AbsEntry": 8497,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K75-2"
    },
    {
        "AbsEntry": 8498,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K76-1"
    },
    {
        "AbsEntry": 8499,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K76-2"
    },
    {
        "AbsEntry": 8500,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K77-1"
    },
    {
        "AbsEntry": 8501,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K77-2"
    },
    {
        "AbsEntry": 8502,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K78-1"
    },
    {
        "AbsEntry": 8503,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K78-2"
    },
    {
        "AbsEntry": 8504,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K79-1"
    },
    {
        "AbsEntry": 8505,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K79-2"
    },
    {
        "AbsEntry": 8506,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K80-1"
    },
    {
        "AbsEntry": 8507,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K80-2"
    },
    {
        "AbsEntry": 8508,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K81-1"
    },
    {
        "AbsEntry": 8509,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K81-2"
    },
    {
        "AbsEntry": 8510,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K82-1"
    },
    {
        "AbsEntry": 8511,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K82-2"
    },
    {
        "AbsEntry": 8512,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K83-1"
    },
    {
        "AbsEntry": 8513,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K83-2"
    },
    {
        "AbsEntry": 8514,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K84-1"
    },
    {
        "AbsEntry": 8515,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K84-2"
    },
    {
        "AbsEntry": 8516,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K85-1"
    },
    {
        "AbsEntry": 8517,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K85-2"
    },
    {
        "AbsEntry": 8518,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K86-1"
    },
    {
        "AbsEntry": 8519,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K86-2"
    },
    {
        "AbsEntry": 8520,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K87-1"
    },
    {
        "AbsEntry": 8521,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K87-2"
    },
    {
        "AbsEntry": 8522,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K88-1"
    },
    {
        "AbsEntry": 8523,
        "Warehouse": "WRV",
        "BinCode": "WRV-1K88-2"
    },
    {
        "AbsEntry": 8524,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8J01-1"
    },
    {
        "AbsEntry": 8525,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8J02-1"
    },
    {
        "AbsEntry": 8526,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8J03-1"
    },
    {
        "AbsEntry": 8527,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8J04-1"
    },
    {
        "AbsEntry": 8528,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8J05-1"
    },
    {
        "AbsEntry": 8529,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8J05-2"
    },
    {
        "AbsEntry": 8530,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K01-1"
    },
    {
        "AbsEntry": 8531,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K01-2"
    },
    {
        "AbsEntry": 8532,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K01-3"
    },
    {
        "AbsEntry": 8533,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K02-1"
    },
    {
        "AbsEntry": 8534,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K02-2"
    },
    {
        "AbsEntry": 8535,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K02-3"
    },
    {
        "AbsEntry": 8536,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K03-1"
    },
    {
        "AbsEntry": 8537,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K03-2"
    },
    {
        "AbsEntry": 8538,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K03-3"
    },
    {
        "AbsEntry": 8539,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K04-1"
    },
    {
        "AbsEntry": 8540,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K04-2"
    },
    {
        "AbsEntry": 8541,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K04-3"
    },
    {
        "AbsEntry": 8542,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K05-1"
    },
    {
        "AbsEntry": 8543,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K05-2"
    },
    {
        "AbsEntry": 8544,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K05-3"
    },
    {
        "AbsEntry": 8545,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K06-1"
    },
    {
        "AbsEntry": 8546,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K06-2"
    },
    {
        "AbsEntry": 8547,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K06-3"
    },
    {
        "AbsEntry": 8548,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K07-1"
    },
    {
        "AbsEntry": 8549,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K07-2"
    },
    {
        "AbsEntry": 8550,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K07-3"
    },
    {
        "AbsEntry": 8551,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K08-1"
    },
    {
        "AbsEntry": 8552,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K08-2"
    },
    {
        "AbsEntry": 8553,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K08-3"
    },
    {
        "AbsEntry": 8554,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K09-03"
    },
    {
        "AbsEntry": 8555,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8K10-03"
    },
    {
        "AbsEntry": 8556,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L01-1"
    },
    {
        "AbsEntry": 8557,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L01-2"
    },
    {
        "AbsEntry": 8558,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L01-3"
    },
    {
        "AbsEntry": 8559,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L02-1"
    },
    {
        "AbsEntry": 8560,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L02-2"
    },
    {
        "AbsEntry": 8561,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L02-3"
    },
    {
        "AbsEntry": 8562,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L03-1"
    },
    {
        "AbsEntry": 8563,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L03-2"
    },
    {
        "AbsEntry": 8564,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L03-3"
    },
    {
        "AbsEntry": 8565,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L04-1"
    },
    {
        "AbsEntry": 8566,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L04-2"
    },
    {
        "AbsEntry": 8567,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L04-3"
    },
    {
        "AbsEntry": 8568,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L05-1"
    },
    {
        "AbsEntry": 8569,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L05-2"
    },
    {
        "AbsEntry": 8570,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L05-3"
    },
    {
        "AbsEntry": 8571,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L06-1"
    },
    {
        "AbsEntry": 8572,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L06-2"
    },
    {
        "AbsEntry": 8573,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L06-3"
    },
    {
        "AbsEntry": 8574,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L07-1"
    },
    {
        "AbsEntry": 8575,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L07-2"
    },
    {
        "AbsEntry": 8576,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L07-3"
    },
    {
        "AbsEntry": 8577,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L08-1"
    },
    {
        "AbsEntry": 8578,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L08-2"
    },
    {
        "AbsEntry": 8579,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L08-3"
    },
    {
        "AbsEntry": 8580,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L09-1"
    },
    {
        "AbsEntry": 8581,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L09-2"
    },
    {
        "AbsEntry": 8582,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L09-3"
    },
    {
        "AbsEntry": 8583,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L10-1"
    },
    {
        "AbsEntry": 8584,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L10-2"
    },
    {
        "AbsEntry": 8585,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8L10-3"
    },
    {
        "AbsEntry": 8586,
        "Warehouse": "WCP",
        "BinCode": "WCP-8J01-1"
    },
    {
        "AbsEntry": 8587,
        "Warehouse": "WCP",
        "BinCode": "WCP-8J02-1"
    },
    {
        "AbsEntry": 8588,
        "Warehouse": "WCP",
        "BinCode": "WCP-8J03-1"
    },
    {
        "AbsEntry": 8589,
        "Warehouse": "WCP",
        "BinCode": "WCP-8J04-1"
    },
    {
        "AbsEntry": 8590,
        "Warehouse": "WCP",
        "BinCode": "WCP-8J05-1"
    },
    {
        "AbsEntry": 8591,
        "Warehouse": "WCP",
        "BinCode": "WCP-8J05-2"
    },
    {
        "AbsEntry": 8592,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K01-1"
    },
    {
        "AbsEntry": 8593,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K01-2"
    },
    {
        "AbsEntry": 8594,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K01-3"
    },
    {
        "AbsEntry": 8595,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K02-1"
    },
    {
        "AbsEntry": 8596,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K02-2"
    },
    {
        "AbsEntry": 8597,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K02-3"
    },
    {
        "AbsEntry": 8598,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K03-1"
    },
    {
        "AbsEntry": 8599,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K03-2"
    },
    {
        "AbsEntry": 8600,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K03-3"
    },
    {
        "AbsEntry": 8601,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K04-1"
    },
    {
        "AbsEntry": 8602,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K04-2"
    },
    {
        "AbsEntry": 8603,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K04-3"
    },
    {
        "AbsEntry": 8604,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K05-1"
    },
    {
        "AbsEntry": 8605,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K05-2"
    },
    {
        "AbsEntry": 8606,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K05-3"
    },
    {
        "AbsEntry": 8607,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K06-1"
    },
    {
        "AbsEntry": 8608,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K06-2"
    },
    {
        "AbsEntry": 8609,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K06-3"
    },
    {
        "AbsEntry": 8610,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K07-1"
    },
    {
        "AbsEntry": 8611,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K07-2"
    },
    {
        "AbsEntry": 8612,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K07-3"
    },
    {
        "AbsEntry": 8613,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K08-1"
    },
    {
        "AbsEntry": 8614,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K08-2"
    },
    {
        "AbsEntry": 8615,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K08-3"
    },
    {
        "AbsEntry": 8616,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K09-03"
    },
    {
        "AbsEntry": 8617,
        "Warehouse": "WCP",
        "BinCode": "WCP-8K10-03"
    },
    {
        "AbsEntry": 8618,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L01-1"
    },
    {
        "AbsEntry": 8619,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L01-2"
    },
    {
        "AbsEntry": 8620,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L01-3"
    },
    {
        "AbsEntry": 8621,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L02-1"
    },
    {
        "AbsEntry": 8622,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L02-2"
    },
    {
        "AbsEntry": 8623,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L02-3"
    },
    {
        "AbsEntry": 8624,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L03-1"
    },
    {
        "AbsEntry": 8625,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L03-2"
    },
    {
        "AbsEntry": 8626,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L03-3"
    },
    {
        "AbsEntry": 8627,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L04-1"
    },
    {
        "AbsEntry": 8628,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L04-2"
    },
    {
        "AbsEntry": 8629,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L04-3"
    },
    {
        "AbsEntry": 8630,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L05-1"
    },
    {
        "AbsEntry": 8631,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L05-2"
    },
    {
        "AbsEntry": 8632,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L05-3"
    },
    {
        "AbsEntry": 8633,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L06-1"
    },
    {
        "AbsEntry": 8634,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L06-2"
    },
    {
        "AbsEntry": 8635,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L06-3"
    },
    {
        "AbsEntry": 8636,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L07-1"
    },
    {
        "AbsEntry": 8637,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L07-2"
    },
    {
        "AbsEntry": 8638,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L07-3"
    },
    {
        "AbsEntry": 8639,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L08-1"
    },
    {
        "AbsEntry": 8640,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L08-2"
    },
    {
        "AbsEntry": 8641,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L08-3"
    },
    {
        "AbsEntry": 8642,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L09-1"
    },
    {
        "AbsEntry": 8643,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L09-2"
    },
    {
        "AbsEntry": 8644,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L09-3"
    },
    {
        "AbsEntry": 8645,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L10-1"
    },
    {
        "AbsEntry": 8646,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L10-2"
    },
    {
        "AbsEntry": 8647,
        "Warehouse": "WCP",
        "BinCode": "WCP-8L10-3"
    },
    {
        "AbsEntry": 8648,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-0-08LOAD"
    },
    {
        "AbsEntry": 8649,
        "Warehouse": "WCP",
        "BinCode": "WCP-0-08LOAD"
    },
    {
        "AbsEntry": 8650,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A51-1"
    },
    {
        "AbsEntry": 8651,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A51-2"
    },
    {
        "AbsEntry": 8652,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A51-3"
    },
    {
        "AbsEntry": 8653,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A52-1"
    },
    {
        "AbsEntry": 8654,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A52-2"
    },
    {
        "AbsEntry": 8655,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8A52-3"
    },
    {
        "AbsEntry": 8656,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B52-1"
    },
    {
        "AbsEntry": 8657,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B52-2"
    },
    {
        "AbsEntry": 8658,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B52-3"
    },
    {
        "AbsEntry": 8659,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B51-1"
    },
    {
        "AbsEntry": 8660,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B51-2"
    },
    {
        "AbsEntry": 8661,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8B51-3"
    },
    {
        "AbsEntry": 8662,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C51-1"
    },
    {
        "AbsEntry": 8663,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C51-2"
    },
    {
        "AbsEntry": 8664,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C51-3"
    },
    {
        "AbsEntry": 8665,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C52-1"
    },
    {
        "AbsEntry": 8666,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C52-2"
    },
    {
        "AbsEntry": 8667,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-8C52-3"
    },
    {
        "AbsEntry": 8668,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C52-1"
    },
    {
        "AbsEntry": 8669,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C52-2"
    },
    {
        "AbsEntry": 8670,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C52-3"
    },
    {
        "AbsEntry": 8671,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C51-1"
    },
    {
        "AbsEntry": 8672,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C51-2"
    },
    {
        "AbsEntry": 8673,
        "Warehouse": "WCP",
        "BinCode": "WCP-8C51-3"
    },
    {
        "AbsEntry": 8674,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B51-1"
    },
    {
        "AbsEntry": 8675,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B51-2"
    },
    {
        "AbsEntry": 8676,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B51-3"
    },
    {
        "AbsEntry": 8677,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B52-1"
    },
    {
        "AbsEntry": 8678,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B52-2"
    },
    {
        "AbsEntry": 8679,
        "Warehouse": "WCP",
        "BinCode": "WCP-8B52-3"
    },
    {
        "AbsEntry": 8680,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A52-1"
    },
    {
        "AbsEntry": 8681,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A52-2"
    },
    {
        "AbsEntry": 8682,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A52-3"
    },
    {
        "AbsEntry": 8683,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A51-1"
    },
    {
        "AbsEntry": 8684,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A51-2"
    },
    {
        "AbsEntry": 8685,
        "Warehouse": "WCP",
        "BinCode": "WCP-8A51-3"
    },
    {
        "AbsEntry": 8686,
        "Warehouse": "WRV",
        "BinCode": "WRV-0-59GMP"
    },
    {
        "AbsEntry": 8687,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02522"
    },
    {
        "AbsEntry": 8688,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02523"
    },
    {
        "AbsEntry": 8689,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02524"
    },
    {
        "AbsEntry": 8690,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02535"
    },
    {
        "AbsEntry": 8691,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02143"
    },
    {
        "AbsEntry": 8692,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02634"
    },
    {
        "AbsEntry": 8693,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02636"
    },
    {
        "AbsEntry": 8694,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02555"
    },
    {
        "AbsEntry": 8695,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02659"
    },
    {
        "AbsEntry": 8696,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02670"
    },
    {
        "AbsEntry": 8697,
        "Warehouse": "WCP",
        "BinCode": "WCP-C00059"
    },
    {
        "AbsEntry": 8698,
        "Warehouse": "WCP",
        "BinCode": "WCP-C00205"
    },
    {
        "AbsEntry": 8699,
        "Warehouse": "WCP",
        "BinCode": "WCP-C00855"
    },
    {
        "AbsEntry": 8700,
        "Warehouse": "WCP",
        "BinCode": "WCP-C01209"
    },
    {
        "AbsEntry": 8701,
        "Warehouse": "WCP",
        "BinCode": "WCP-C01210"
    },
    {
        "AbsEntry": 8702,
        "Warehouse": "WCP",
        "BinCode": "WCP-C01324"
    },
    {
        "AbsEntry": 8703,
        "Warehouse": "WCP",
        "BinCode": "WCP-C01338"
    },
    {
        "AbsEntry": 8704,
        "Warehouse": "WCP",
        "BinCode": "WCP-C01670"
    },
    {
        "AbsEntry": 8705,
        "Warehouse": "WCP",
        "BinCode": "WCP-C01721"
    },
    {
        "AbsEntry": 8706,
        "Warehouse": "WCP",
        "BinCode": "WCP-C01991"
    },
    {
        "AbsEntry": 8707,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02001"
    },
    {
        "AbsEntry": 8708,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02012"
    },
    {
        "AbsEntry": 8709,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02049"
    },
    {
        "AbsEntry": 8710,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02050"
    },
    {
        "AbsEntry": 8711,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02072"
    },
    {
        "AbsEntry": 8712,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02111"
    },
    {
        "AbsEntry": 8713,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02117"
    },
    {
        "AbsEntry": 8714,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02143"
    },
    {
        "AbsEntry": 8715,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02212"
    },
    {
        "AbsEntry": 8716,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02263"
    },
    {
        "AbsEntry": 8717,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02281"
    },
    {
        "AbsEntry": 8718,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02308"
    },
    {
        "AbsEntry": 8719,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02344"
    },
    {
        "AbsEntry": 8720,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02386"
    },
    {
        "AbsEntry": 8721,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02416"
    },
    {
        "AbsEntry": 8722,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02417"
    },
    {
        "AbsEntry": 8723,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02418"
    },
    {
        "AbsEntry": 8724,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02445"
    },
    {
        "AbsEntry": 8725,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02471"
    },
    {
        "AbsEntry": 8726,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02500"
    },
    {
        "AbsEntry": 8727,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02522"
    },
    {
        "AbsEntry": 8728,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02523"
    },
    {
        "AbsEntry": 8729,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02524"
    },
    {
        "AbsEntry": 8730,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02535"
    },
    {
        "AbsEntry": 8731,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02555"
    },
    {
        "AbsEntry": 8732,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02634"
    },
    {
        "AbsEntry": 8733,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02636"
    },
    {
        "AbsEntry": 8734,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02659"
    },
    {
        "AbsEntry": 8735,
        "Warehouse": "WCP",
        "BinCode": "WCP-C02670"
    },
    {
        "AbsEntry": 8736,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C00059"
    },
    {
        "AbsEntry": 8737,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C00205"
    },
    {
        "AbsEntry": 8738,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C00855"
    },
    {
        "AbsEntry": 8739,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C01209"
    },
    {
        "AbsEntry": 8740,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C01210"
    },
    {
        "AbsEntry": 8741,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C01324"
    },
    {
        "AbsEntry": 8742,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C01338"
    },
    {
        "AbsEntry": 8743,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C01670"
    },
    {
        "AbsEntry": 8744,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C01721"
    },
    {
        "AbsEntry": 8745,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C01991"
    },
    {
        "AbsEntry": 8746,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02001"
    },
    {
        "AbsEntry": 8747,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02012"
    },
    {
        "AbsEntry": 8748,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02049"
    },
    {
        "AbsEntry": 8749,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02050"
    },
    {
        "AbsEntry": 8750,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02072"
    },
    {
        "AbsEntry": 8751,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02111"
    },
    {
        "AbsEntry": 8752,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02117"
    },
    {
        "AbsEntry": 8753,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02143"
    },
    {
        "AbsEntry": 8754,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02212"
    },
    {
        "AbsEntry": 8755,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02263"
    },
    {
        "AbsEntry": 8756,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02281"
    },
    {
        "AbsEntry": 8757,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02308"
    },
    {
        "AbsEntry": 8758,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02344"
    },
    {
        "AbsEntry": 8759,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02386"
    },
    {
        "AbsEntry": 8760,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02416"
    },
    {
        "AbsEntry": 8761,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02417"
    },
    {
        "AbsEntry": 8762,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02418"
    },
    {
        "AbsEntry": 8763,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02445"
    },
    {
        "AbsEntry": 8764,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02471"
    },
    {
        "AbsEntry": 8765,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02500"
    },
    {
        "AbsEntry": 8766,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02522"
    },
    {
        "AbsEntry": 8767,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02523"
    },
    {
        "AbsEntry": 8768,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02524"
    },
    {
        "AbsEntry": 8769,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02535"
    },
    {
        "AbsEntry": 8770,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02555"
    },
    {
        "AbsEntry": 8771,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02634"
    },
    {
        "AbsEntry": 8772,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02636"
    },
    {
        "AbsEntry": 8773,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02659"
    },
    {
        "AbsEntry": 8774,
        "Warehouse": "WIQ",
        "BinCode": "WIQ-C02670"
    },
    {
        "AbsEntry": 8775,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02669"
    },
    {
        "AbsEntry": 8776,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02220"
    },
    {
        "AbsEntry": 8777,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02719"
    },
    {
        "AbsEntry": 8778,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02739"
    },
    {
        "AbsEntry": 8779,
        "Warehouse": "WCS",
        "BinCode": "WCS-C02766"
    }
]





// batch in bin

localhost:3005/api/batchinbin

{
    "BatchNumber": "H36594"
}

// Example 1
{
    "odata.metadata": "https://192.168.0.44:50000/b1s/v1/view.svc/$metadata#Homart_B1_BatchInBinQty_B1SLQuery",
    "value": [
        {
            "ItemCode": "PB600-0004",
            "ItemName": "Bottle 1HOM RA600 600ml Amber Round PET Bottle - JX",
            "DistNumber": "H36594",
            "batchabsebntry": 19427,
            "WhsCode": "WCP",
            "WhsName": "Component warehouse",
            "BinAbs": 2395,
            "BinCode": "WCP-0-59GMP",
            "OnHandQty": 903,
            "id__": 1
        }
    ]
}

// Example 2

{
    "odata.metadata": "https://192.168.0.44:50000/b1s/v1/view.svc/$metadata#Homart_B1_BatchInBinQty_B1SLQuery",
    "value": [
        {
            "ItemCode": "PKKEY-0005",
            "ItemName": "Carton 1KEY Osmolax 298g Powder Carton 13186",
            "DistNumber": "H35996",
            "batchabsebntry": 18489,
            "WhsCode": "WCP",
            "WhsName": "Component warehouse",
            "BinAbs": 805,
            "BinCode": "WCP-1K87-1",
            "OnHandQty": 1497,
            "id__": 1
        },
        {
            "ItemCode": "PKKEY-0005",
            "ItemName": "Carton 1KEY Osmolax 298g Powder Carton 13186",
            "DistNumber": "H35996",
            "batchabsebntry": 18489,
            "WhsCode": "WCP",
            "WhsName": "Component warehouse",
            "BinAbs": 893,
            "BinCode": "WCP-1L36-1",
            "OnHandQty": 3,
            "id__": 2
        }
    ]
}



// StockTransfers
http://localhost:3005/api/StockTransfers

{
    "StockTransferLines": [
        {
            "ItemCode":"BT-0091",
            "Quantity":"1000",
            "WarehouseCode":"WIQ",
            "FromWarehouseCode":"WIQ",
            "SerialNumbers":[],
            "JournalMemo":"WEB STOCK Transfer 202307070001",
            "Comment":"",
            "BatchNumbers":[{
                "BatchNumber":"H36590",
                "Quantity":1000
            }],
            "StockTransferLinesBinAllocations": [{
                "BinAbsEntry": 7761,
                "BinActionType": "batToWarehouse",
                "Quantity":1000,
                "SerialAndBatchNumbersBaseLine": 0
            },
            {
                "BinAbsEntry": 2393,
                "BinActionType": "batFromWarehouse",
                "Quantity":1000,
                "SerialAndBatchNumbersBaseLine": 0
            }]
        }
    ]
}



// journalmemo

