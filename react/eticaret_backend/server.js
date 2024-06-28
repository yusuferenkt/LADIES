const express = require("express");
const sql = require("msnodesqlv8");
const app = express();

app.use(express.json()); //Middleware to parse JSON
app.use(express.urlencoded({ extended: true })); //Middleware to parse URL-encoded data
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Allows CORS
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); //Allows GET, POST, PUT, DELETE, OPTIONS HTTP requests
  next();
});

const connectionString =
  "Driver={SQL Server Native Client 11.0};Server=LEGION\\SQLEXPRESS;Database=ladies;Trusted_Connection=Yes;"; //Connection string
const queries = [
  "SELECT * FROM products", //0
  "SELECT * FROM products WHERE category_id = (SELECT ID FROM categories WHERE category_name = '?')", //1
  "SELECT * FROM products WHERE product_author = '?'", //2
  "SELECT product_route from products", //3
  "SELECT * FROM products WHERE product_route = '/?'", //4
  "SELECT category_name FROM categories where ID = ?", //5
  "SELECT rating FROM ratings WHERE product_id = pid AND member_id = uid", //6
  "SELECT quantity FROM customer_cart WHERE member_id = uid AND product_id = pid", //7
  "SELECT * FROM customer_cart WHERE member_id = uid", //8
  "SELECT * FROM products WHERE ID = pid", //9,
  "SELECT * FROM customer_favs WHERE member_id = uid", //10
  "SELECT * FROM products WHERE product_name LIKE '%?%'", //11
  "SELECT TOP 1 * FROM customer_orders WHERE member_id = uid ORDER BY ID DESC;", //12
  "SELECT * FROM customer_orders WHERE member_id = uid", //13
  "SELECT * FROM order_details WHERE order_id = oid", //14
  "SELECT * FROM members WHERE ID = uid", //15
  "SELECT * FROM product_comments where product_id = pid", //16
];

const post_queries = [
  `IF NOT ( (SELECT COUNT(*) FROM ratings WHERE product_id = pid AND member_id = uid) > 0)
	BEGIN
		INSERT INTO ratings(product_id,member_id,rating) VALUES (pid,uid,rtg);
    UPDATE products SET product_rate = (SELECT AVG(rating) FROM ratings WHERE product_id = pid), review_count = (SELECT COUNT(*) FROM ratings WHERE product_id = pid) WHERE ID = pid;
	END
ELSE
	BEGIN
		UPDATE ratings SET rating = rtg WHERE product_id = pid AND member_id = uid;
    UPDATE products SET product_rate = (SELECT AVG(rating) FROM ratings WHERE product_id = pid), review_count = (SELECT COUNT(*) FROM ratings WHERE product_id = pid) WHERE ID = pid;
	END
  `, //0
  `UPDATE members SET first_name = ?, surname = ?, gender = ?, birth_date = ?, email_address = ?, phone_number = ? WHERE ID = uid`, //1
  `INSERT INTO customer_messages(first_name,last_name,email_address,phone_number,customer_message) VALUES(?,?,?,?,?)`, //2
  // `INSERT INTO customer_cart(member_id,product_id) VALUES (?,?)`
  `IF NOT ((SELECT COUNT(*) FROM customer_cart WHERE member_id = uid AND product_id = pid) > 0)
BEGIN
	INSERT INTO customer_cart(member_id,product_id,quantity) VALUES(uid,pid,1);
END
ELSE
	BEGIN
		UPDATE customer_cart SET quantity = (SELECT (quantity+1) FROM customer_cart WHERE member_id = uid AND product_id = pid) WHERE member_id = uid AND product_id = pid
	END`, //3
  `IF NOT ((SELECT COUNT(*) FROM customer_favs WHERE member_id = uid AND product_id = pid) > 0)
  BEGIN
    INSERT INTO customer_favs(member_id,product_id) VALUES(uid,pid);
  END`, //4
  `DELETE FROM customer_cart WHERE member_id = uid AND product_id = pid`, //5
  `DELETE FROM customer_favs WHERE member_id = uid AND product_id = pid`, //6
  `INSERT INTO customer_orders(member_id,order_date,total_amount,order_address,order_city,order_country,post_code) VALUES (uid,'odt',tam,'oad','ocy','oct',opc)`, //7
  `INSERT INTO order_details(order_id,product_id,quantity,unit_price,subtotal_price) VALUES (oid,pid,qty,utp,stp)`, //8
  `DELETE FROM customer_cart WHERE member_id = uid`, //9
  `INSERT INTO product_comments(member_id,product_id,comment_date,comment) VALUES(uid,pid,'cdt','cmt')`, //10
  `DELETE FROM customer_orders WHERE ID = oid`, //11
  `DELETE FROM order_details WHERE order_id = oid`, //12
];

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/get", (req, res) => {
  sql.query(connectionString, queries[0], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/get/category=:category", (req, res) => {
  const { category } = req.params;
  let query = queries[1].replace("?", category);
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("<b>HATA:</b> Bir hata oluştu!");
    } else {
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send("<b>HATA:</b> Kategori ismi yanlış girildi!");
      }
    }
  });
});

app.get("/api/get/brand=:brand", (req, res) => {
  const { brand } = req.params;
  let query = queries[2].replace("?", brand);
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("<b>HATA:</b> Bir hata oluştu!");
    } else {
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send("<b>HATA:</b> Marka ismi yanlış girildi!");
      }
    }
  });
});

app.get("/api/get/routes", (req, res) => {
  sql.query(connectionString, queries[3], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("<b>HATA:</b> Bir hata oluştu!");
    } else {
      if (result.length > 0) {
        res.send(result);
      }
    }
  });
});

app.get("/api/get/route=:route", (req, res) => {
  const { route } = req.params;
  let query = queries[4].replace("?", route);
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("<b>HATA:</b> Bir hata oluştu!");
    } else {
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send("<b>HATA:</b> Rota ismi yanlış girildi!");
      }
    }
  });
});

app.get("/api/get/category_id=:id", (req, res) => {
  const { id } = req.params;
  sql.query(connectionString, queries[5].replace("?", id), (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("<b>HATA:</b> Bir hata oluştu!");
    } else {
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send("<b>HATA:</b> Kategori id yanlış girildi!");
      }
    }
  });
});

app.get("/api/get/rating/", (req, res) => {
  const { product_id, member_id } = req.query;
  const query = queries[6].replace("pid", product_id).replace("uid", member_id);
  sql.query(
    connectionString,
    queries[6].replace("pid", product_id).replace("uid", member_id),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/api/get/quantity", (req, res) => {
  const { member_id, product_id } = req.query;
  const query = queries[7].replace("pid", product_id).replace("uid", member_id);
  // res.send({"query":query});

  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/get/cart", (req, res) => {
  const { member_id } = req.query;
  const query = queries[8].replace("uid", member_id);

  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/get/favs", (req, res) => {
  const { member_id } = req.query;
  const query = queries[10].replace("uid", member_id);

  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/get/product_id=:id", (req, res) => {
  const { id } = req.params;
  query = queries[9].replace("pid", id);
  // res.send({"query":query});

  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/get/keyword=:keyword", (req, res) => {
  const { keyword } = req.params;
  const query = queries[11].replace("?", keyword.replace(/'/g, "''"));
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/get/orders/:member_id", (req, res) => {
  const { member_id } = req.params;
  const query = queries[13].replace("uid", member_id);

  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/get/orders/products/:order_id", (req, res) => {
  const { order_id } = req.params;
  const query = queries[14].replace("oid", order_id);
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/post/rating", (req, res) => {
  const { product_id, user_id, rating } = req.body;
  const query = post_queries[0]
    .replace(/pid/g, String(product_id))
    .replace(/uid/g, String(user_id))
    .replace(/rtg/g, String(rating));

  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.post("/api/post/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const query = post_queries[2];
  const params = [firstName, lastName, email, phone, message];
  const finalQuery = query.replace(/\?/g, () => {
    return `'${params.shift()}'`;
  });
  sql.query(connectionString, finalQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/post/cart", (req, res) => {
  const { member_id, product_id } = req.body;
  const query = post_queries[3]
    .replace(/pid/g, String(product_id))
    .replace(/uid/g, String(member_id));
  // res.send({"query":query});
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/post/fav", (req, res) => {
  const { member_id, product_id } = req.body;
  const query = post_queries[4]
    .replace(/pid/g, String(product_id))
    .replace(/uid/g, String(member_id));
  // res.send({"query":query});
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/post/delete/cart", (req, res) => {
  const { member_id, product_id } = req.body;
  const query = post_queries[5]
    .replace(/pid/g, String(product_id))
    .replace(/uid/g, String(member_id));
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/post/delete/cart/user", (req, res) => {
  const { userID } = req.body;
  const query = post_queries[9].replace(/uid/g, String(userID));
  // res.send({"query":query});
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/post/delete/fav", (req, res) => {
  const { member_id, product_id } = req.body;
  const query = post_queries[6]
    .replace(/pid/g, String(product_id))
    .replace(/uid/g, String(member_id));
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/post/order", (req, res) => {
  const { cardNo, cardDate, cvc, orderInfo } = req.body;
  const query = post_queries[7]
    .replace("uid", orderInfo.userID)
    .replace("odt", orderInfo.date)
    .replace("tam", orderInfo.totalPrice)
    .replace("oad", orderInfo.address)
    .replace("ocy", orderInfo.city)
    .replace("oct", orderInfo.country)
    .replace("opc", orderInfo.postcode);
  // res.send({"query":query});
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/get/lastOrder", (req, res) => {
  const { member_id } = req.query;
  const query = queries[12].replace("uid", member_id);
  // res.send({"query":query});

  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/post/orderDetails", (req, res) => {
  const { orderID, itemID, quantity, unit_price, subtotal } = req.body;
  const query = post_queries[8]
    .replace("oid", orderID)
    .replace("pid", itemID)
    .replace("qty", quantity)
    .replace("utp", unit_price)
    .replace("stp", subtotal);
  // res.send({"query":query});
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/post/comment", (req, res) => {
  const { user_id, product_id, date, comment } = req.body;
  const query = post_queries[10]
    .replace("pid", product_id)
    .replace("uid", user_id)
    .replace("cdt", date)
    .replace("cmt", comment);
  // res.send({ query: query });
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/get/member_id=:member_id", (req, res) => {
  const { member_id } = req.params;
  const query = queries[15].replace("uid", member_id);
  // res.send({"query":query});
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/api/get/comments/product_id=:product_id", (req, res) => {
  const { product_id } = req.params;
  const query = queries[16].replace("pid", product_id);
  // res.send({"query":query});
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/login", (req, res) => {
  query = `SELECT * FROM members WHERE email_address = '${req.body.email}' AND user_password = '${req.body.password}'`;
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/register", (req, res) => {
  query = `INSERT INTO members(first_name, surname, email_address, user_password) VALUES ('${req.body.ad}', '${req.body.soyad}', '${req.body.email}', '${req.body.password}')`;
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/update/id=:id", (req, res) => {
  const { id } = req.params;
  const query = post_queries[1].replace("uid", id);
  const params = [
    req.body.firstName,
    req.body.lastName,
    req.body.gender,
    req.body.birthdate,
    req.body.email,
    req.body.phone,
  ];
  const finalQuery = query.replace(/\?/g, () => {
    return `'${params.shift()}'`;
  });
  sql.query(connectionString, finalQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/delete/order", (req, res) => {
  const { order_id } = req.body;
  const query = post_queries[11].replace("oid", order_id);
  // res.send({"query":query});
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/delete/orderDetails", (req, res) => {
  const { order_id } = req.body;
  const query = post_queries[12].replace("oid", order_id);
  // res.send({"query":query});
  sql.query(connectionString, query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
