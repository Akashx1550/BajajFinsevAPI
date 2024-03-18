var express = require("express");
var router = express.Router();

/* GET users listing. */

router.post("/bfhl", (req, res) => {
  const { data } = req.body;
  
  const numArr = [];
  const strArr = [];

  data.forEach((d) => {
    if (typeof d === "number") {
      numArr.push(d);
    }

    if (typeof d === "string") {
      strArr.push(d.toUpperCase());
    }
  });

  const odd = numArr.filter((num) => num % 2 != 0);
  const even = numArr.filter((num) => num % 2 == 0);

  console.log(numArr);
  console.log(strArr);
  console.log(odd);
  console.log(even);

  res.send({
    is_success: true,
    user_id: "Akash_20072002",
    email: "akash1630.be21@chitkara.edu.in",
    roll_number: "2110991630",
    odd_numbers: odd,
    even_numbers: even,
    alphabets: strArr,
  });
});
module.exports = router;
