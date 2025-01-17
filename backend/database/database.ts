import mysql from "mysql";
import dotenv from "dotenv"; 
dotenv.config();

const todosConnection = {
  host: process.env.host,
  database: process.env.database,
  user: process.env.user,
  password: process.env.password,
}

export const connection = mysql.createConnection(todosConnection);

connection.connect((error)=>{
  if(error) {console.log(error); return;}

  console.log(`Database status: ${connection.state}`)
})


export async function useMySql(sql:string, options: any=[]) {
  return new Promise((resolve, reject) => {
    connection.query(sql, options, (error,result) => {
      if (error) {reject(console.log(error))};

      resolve(result)
    })
  })
}

