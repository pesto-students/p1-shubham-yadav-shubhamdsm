-- CREATE DATABASE
DROP DATABASE WAREHOUSE;
CREATE DATABASE WAREHOUSE;
USE DATABASE;

-- CREATE CITIES TABLE
CREATE TABLE cities(
    city CHAR (20) UNIQUE NOT NULL ,
    states CHAR (20) UNIQUE NOT NULL
)
-- CREATE WAREHOUSES TABLE
CREATE TABLE warehouses(
    wid INTEGER PRIMARY KEY,
    wname CHAR(30) UNIQUE NOT NULL,
    wlocation CHAR(20) UNIQUE NOT NULL ,
    FOREIGN KEY (wlocation) REFERENCES cities(city)

)
-- CREATE STORES TABLE
CREATE TABLE stores(
    store_id INTEGER PRIMARY KEY,
    store_name CHAR(20) NOT NULL,
    location_city CHAR(20) NOT NULL,
    FOREIGN KEY (location_city) REFERENCES warehouses(wlocation),
    wid INTEGER NOT NULL,
    FOREIGN KEY (wid) REFERENCES warehouses(wid)
    
)

-- CREATE CUSTOMERS TABLE
CREATE TABLE customers(
    customer_no INTEGER UNIQUE NOT NULL,
    customer_name CHAR(20) NOT NULL,
    addr VARCHAR(50) NOT NULL,
    customer_city CHAR(20) NOT NULL,
    FOREIGN KEY (customer_city) REFERENCES cities(city)

)
-- CREATE ORDERS TABLE
CREATE TABLE orders(
    o_no INT PRIMARY KEY,
    o_date DATE NOT NULL,
    customer_no INTEGER UNIQUE NOT NULL,
    FOREIGN KEY (customer_no) REFERENCES customers(customer_no)
    item_no INTEGER,
    FOREIGN KEY (item_no) REFERENCES items(item_no)
)
-- CREATE TABLE ITEMS
CREATE TABLE items(
    item_no INTEGER PRIMARY KEY,
    item_description TEXT NOT NULL,
    item_weight DECIMAL(5,2) NOT NULL,
    item_cost DECIMAL(5,2) NOT NULL,

)
