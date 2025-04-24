import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";

function Results() {


    // API CALL TO GET USER DETAILS FROM WORKDAY
  return (
    <div>
        <p>
            Here's some accounts we found that might be of interest:
        </p>
        <Container fluid>
        <div style={{ overflowX: "auto", width: "100%" }}>
            <Table striped bordered hover responsive>
            <thead>
                <tr>
                <th>Account Type</th>
                <th>Why It's Good for Early Careers</th>
                <th>Lean more + apply</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Club Lloyds Advantage ISA Saver</td>
                <td>
                **Flexibility & Growth** – Higher interest when limiting withdrawals (3.50%), giving you tax free savings with great rates and helping manage your money with a rainy day fund.
              </td>
              <td><Button variant="success" href="https://www.lloydsbank.com/isas/club-lloyds-advantage-isa-saver.html">Apply</Button><Button variant="success" href="https://www.lloydsbank.com/isas/club-lloyds-advantage-isa-saver.html">Share</Button></td>
                </tr>
                <tr>
                <td>Cash ISA Saver</td>
              <td>
                **Long-Term Stability & Rewards** – Longer term savings perfect for saving up for your first home! (<s>1.20%</s> 1.90% for balances £25,000 - £99,999), plus added benefits for Club Lloyds members (extra 0.30%).
              </td>
              <td><Button variant="success" href="https://www.lloydsbank.com/isas/cash-isa-saver.html">Apply</Button><Button variant="success" href="https://www.lloydsbank.com/isas/cash-isa-saver.html">Share</Button></td>
                </tr>
                <tr>
                <td>Club Lloyds Advantage Saver</td>
                <td>
                **Encourages Smart Saving Habits** – Great rates for saving up for something nice! (3.50%). Adding a bit of your salary each month goes far!
              </td>
              <td><Button variant="success" href="https://www.lloydsbank.com/savings/club-lloyds-advantage-saver.html">Apply</Button><br /><Button variant="success" href="https://www.lloydsbank.com/savings/club-lloyds-advantage-saver.html">Share</Button></td>
                </tr>
            </tbody>
        </Table>
      </div>
    </Container>




    </div>
  );
}

export default Results;
