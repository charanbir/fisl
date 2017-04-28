## USC FISL system using MEAN stack

   *M*  MongoDb  
   *E*  Express  
   *A*  Angular 2  
   *N*  Node.js

```shell
Download Mongo and Node before proceeding.
```

### Getting Started

1. Start MongoDB
   
   ```shell
   mongo start
   ```  

2. ```shell
   git clone https://github.usc.edu/web/fisl.git
   cd fisl
   ```
   
3. Install Node Modules
   
   ```shell
   npm install
   ``` 
   
4. Start server
   
   ```shell
   node server
   ```
   
5. Go to :
    ```shell   
    http://localhost:3000
    ```

### Tips and Troubleshooting

   * Download open source IDE

   ```shell
   https://code.visualstudio.com/
   ```

   * Path to Database Configuration
   ```shell
   server/config/db.js
   ```
   
   * Import tables from CSV

   ```shell
   mongoimport -d fisl -c products --type csv --file FISL.BANK.TRANS.CLASS.CSV --headerline

   mongoimport -d fisl -c	FISL_BANK_ASSET_CLASS	--type csv --file	FISL.BANK.ASSET.CLASS.CSV	--headerline
   mongoimport -d fisl -c	FISL_BANK	--type csv --file	FISL.BANK.CSV	--headerline
   mongoimport -d fisl -c	FISL_BANK_TRANS_CLASS	--type csv --file	FISL.BANK.TRANS.CLASS.CSV	--headerline
   mongoimport -d fisl -c	FISL_LOAD_ASSET	--type csv --file	FISL.LOAD.ASSET.CSV	--headerline
   mongoimport -d fisl -c	ISL_SCHEDULE	--type csv --file	ISL.SCHEDULE.CSV	--headerline
   mongoimport -d fisl -c	ISL_BANK_REF	--type csv --file	ISL.BANK.REF.CSV	--headerline
   mongoimport -d fisl -c	ISL_CUSIP_REF	--type csv --file	ISL.CUSIP.REF.CSV	--headerline
   mongoimport -d fisl -c	ISL_ASSET_TYPES	--type csv --file	ISL.ASSET.TYPES.CSV	--headerline
   mongoimport -d fisl -c	ISL_OWNERSHIPS	--type csv --file	ISL.OWNERSHIPS.CSV	--headerline
   mongoimport -d fisl -c	ISL_PAY_FREQ	--type csv --file	ISL.PAY.FREQ.CSV	--headerline
   mongoimport -d fisl -c	ISL_FUNDS	--type csv --file	ISL.FUNDS.CSV	--headerline
   mongoimport -d fisl -c	ISL_SOI_CODES	--type csv --file	ISL.SOI.CODES.CSV	--headerline
   ```

### Contact

    * Charanbir Singh Rekhi ``crekhi@usc.edu``
    * Swapnil Joshi ``swapnilj@usc.edu``