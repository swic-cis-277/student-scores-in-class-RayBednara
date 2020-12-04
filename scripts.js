import {createTable, displayTable} from "./lib.js";
import api from "./api.js"

(async () => {
  try{
  const data = await api.index();
  console.log(data);
  createTable(data);
  displayTable();
  }
  catch(error){
    console.error(error, "error fetching");
}
})();

