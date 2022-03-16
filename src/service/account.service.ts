import pool from "../../core/connect";

export async function openAccount(data: any) {
  const isExist = await checkCustomer(data[12]);
  console.log("isExist",isExist);
  
 if(!isExist.rows[0]?.id){
  const customer = await createCustomer(data);
  const Account = await addAccount([generateAccountNumber(10),data[0],new Date().toLocaleString()]);
  console.log("Account",Account);
  
 }else{
   //console.log("isExist.rows[0].id",isExist.rows[0].id);
 }


}


// Check if a customer has an account already
export async function checkCustomer(ssn: any) {
  try {
    const customerExist = await pool.query(
      `SELECT id FROM customers WHERE ssn = $1`,
      [ssn]
    );
    return customerExist;
  } catch (e: any) {
    throw new Error(e);
  }
}


 const generateAccountNumber = (length:number) =>  Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));


export async function addAccount(data:Array<any>) {
  console.log("data",data);
  try {
    const account = await pool.query(
      `INSERT INTO accounts (
        account,
        customer,
        last_update
        ) VALUES ($1,$2,$3)`,
      data
    );
    return account;
  } catch (e: any) {
    throw new Error(e);
  }
}


export async function createCustomer(data:Array<any>) {
  try {
    const customer = await pool.query(
      `INSERT INTO customers (
        fname,
        lname,
        username,
        dob,
        type,
        phone,
        address,
        city,
        state,
        country,
        currency,
        acceptTerms,
        ssn) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING id`,
      data
    );
    return customer;
  } catch (e: any) {
    throw new Error(e);
  }
}

