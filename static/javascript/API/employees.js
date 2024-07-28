const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const employees = [
  {
    ID: '001',
    Name: 'Vichai Suksan',
    Phone_Number: '081-123-4567',
    Email: 'vichai.suksan@email.com',
    Date_of_Birth: '1980-05-10',
    Date_Started: '2010-01-15',
    Salary: '50,000 THB',
    Position: 'Manager',
    Responsibilities: 'Overseeing daily operations, managing staff, setting goals'
  },
  {
    ID: '002',
    Name: 'Natthapat Kaewkong',
    Phone_Number: '081-456-7890',
    Email: 'natthapat@gmail.com',
    Date_of_Birth: '1985-12-25',
    Date_Started: '2012-07-20',
    Salary: '45,000 THB',
    Position: 'Assistant Manager',
    Responsibilities: 'Assisting managers in daily operations, managing staff, setting goals'
  },
  {
    ID: '003',
    Name: 'Somchai Somsri',
    Phone_Number: '081-789-1234',
    Email: 'somchai@gmail.com',
    Date_of_Birth: '1975-03-15',
    Date_Started: '2008-09-30',
    Salary: '40,000 THB',
    Position: 'Assistant Manager',
    Responsibilities: 'Assisting managers in daily operations, managing staff, setting goals'
  },
  {
    ID: '004',
    Name: 'Pattarapol Kaewkong',
    Phone_Number: '081-987-6543',
    Email: 'pattarapol@gmail.com',
    Date_of_Birth: '1982-11-05',
    Date_Started: '2015-04-20',
    Salary: '55,000 THB',
    Position: 'Manager',
    Responsibilities: 'Overseeing daily operations, managing staff, setting goals'
  },
  {
    ID: '005',
    Name: 'Ornthip Thongdee',
    Phone_Number: '082-234-5678',
    Email: 'ornthip@gmail.com',
    Date_of_Birth: '1985-08-25',
    Date_Started: '2012-03-20',
    Salary: '40,000 THB',
    Position: 'Accountant',
    Responsibilities: 'Managing financial records, preparing reports, handling taxes'
  },
  {
    ID: '006',
    Name: 'Nengxiong WTX',
    Phone_Number: '774-234-7577',
    Email: 'nengxiong@gmail.com',
    Date_of_Birth: '2001-02-03',
    Date_Started: '2024-07-20',
    Salary: '60,000 THB',
    Position: 'Web Developer',
    Responsibilities: 'Web developer, mobile app developer, database administrator'
  }
];

app.get('/employees', (req, res) => {
    res.json(employees);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});