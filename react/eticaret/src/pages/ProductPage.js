import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import { getUser } from "../scripts/user";

export default function ProductPage(props) {
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState("");
  const [route, setRoute] = useState(props.route);
  const [user, setUser] = useState(getUser());
  const [userRating, setUserRating] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentors, setCommentors] = useState([]);

  const navigate = useNavigate();

  const EMPTY_STAR =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
  const FULL_STAR =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";
  const starIds = [1, 2, 3, 4, 5];
  const [hovered, setHovered] = useState(0);
  const [clicked, setClicked] = useState(0);

  const onCartHandler = (event) => {
    event.preventDefault();
    if (user != "None") {
      const member_id = user.ID;
      const product_id = product.ID;

      let quantity = 0;
      // alert(`http://localhost:3001/api/get/quantity?member_id=${member_id}&product_id=${product_id}`);
      // fetch(`http://localhost:3001/api/get/quantity?member_id=${member_id}&product_id=${product_id}`).then(response => response.json()).then(data => {quantity = (data[0].quantity);}).catch(error => {console.error(error)});
      fetch("http://localhost:3001/api/post/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ member_id, product_id }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
      alert(`${product.product_name} ürününüz başarıyla sepete eklendi!`);
      window.location.reload();
    } else {
      alert("Ürünü sepete ekleyebilmek için üye olmanız gerekli!");
      navigate("/giris-yap");
    }
  };

  const onFavHandler = (event) => {
    event.preventDefault();
    if (user != "None") {
      const member_id = user.ID;
      const product_id = product.ID;
      fetch("http://localhost:3001/api/post/fav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ member_id, product_id }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
      alert(`${product.product_name} ürünü başarıyla favorilere eklendi!`);
      window.location.reload();
    } else {
      alert("Ürünü sepete ekleyebilmek için üye olmanız gerekli!");
      navigate("/giris-yap");
    }
  };

  const getStarImg = (id) => {
    return hovered >= id || clicked >= id ? FULL_STAR : EMPTY_STAR;
  };

  const handleRating = (id) => {
    let product_id = product.ID;
    let user_id = user.ID;
    let rating = id;
    fetch("http://localhost:3001/api/post/rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id, user_id, rating }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getComments = async () => {
    try {
      if (product) {
        const response = await fetch(
          `http://localhost:3001/api/get/comments/product_id=${product.ID}`
        );
        const data = await response.json();
        setComments(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getCommentors = async () => {
    if (comments.length > 0) {
      const commentorsArray = [];
      for (let comment of comments) {
        const member_id = comment.member_id;
        try {
          const response = await fetch(
            `http://localhost:3001/api/get/member_id=${member_id}`
          );
          const data = await response.json();
          commentorsArray.push(data);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
      setCommentors(commentorsArray);
      console.log(commentorsArray);
    }
  };
  const handleCommenting = (event) => {
    event.preventDefault();
    let product_id = product.ID;
    let user_id = user.ID;
    console.log(`USER ID:${user_id}`);
    let comment = event.target.comment.value;
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month2 = currentDate.getMonth() + 1;
    const year2 = currentDate.getFullYear();
    const date = `${year2}-${month2}-${day}`;
    fetch("http://localhost:3001/api/post/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, product_id, date, comment }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    alert("Yorumunuz başarıyla gönderildi!");
    window.location.reload();
  };

  useEffect(() => {
    fetch(
      `http://localhost:3001/api/get/route=${route.substring(1, route.length)}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProduct(data[0]);
        if (data[0] && data[0].category_id) {
          fetch(
            `http://localhost:3001/api/get/category_id=${data[0].category_id}`
          )
            .then((response) => response.json())
            .then((data) => {
              setCategory(data[0]);
            })
            .catch((error) => {
              console.error(error);
            });
          fetch(
            `http://localhost:3001/api/get/rating?product_id=${data[0].ID}&member_id=${user.userID}`
          )
            .then((response) => response.json())
            .then((data_r) => {
              setUserRating(data_r[0] ? data_r[0].rating : 0);
              setHovered(data_r[0] ? data_r[0].rating : 0);
              setClicked(data_r[0] ? data_r[0].rating : 0);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [route, user.userID]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        if (product) {
          const response = await fetch(
            `http://localhost:3001/api/get/comments/product_id=${product.ID}`
          );
          const data = await response.json();
          setComments(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, [product]);

  useEffect(() => {
    const fetchCommentors = async () => {
      if (comments.length > 0) {
        const commentorsArray = [];
        for (let comment of comments) {
          const member_id = comment.member_id;
          try {
            const response = await fetch(
              `http://localhost:3001/api/get/member_id=${member_id}`
            );
            const data = await response.json();
            commentorsArray.push(data[0]);
            console.log(data[0]);
          } catch (error) {
            console.error(error);
          }
        }
        setCommentors(commentorsArray);
      }
    };
    fetchCommentors();
  }, [comments]);

  useEffect(() => {
    console.log(commentors);
  }, [commentors]);
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <img
              width={"80%"}
              className="product-image"
              src={product.image_source}
              alt={product.product_name}
            />
          </Col>
          <Col>
            <h2 className="product-title">{product.product_name}</h2>
            <h3>Marka: {product.product_author}</h3>
            <h4>Kategori: {category.category_name}</h4>
            <h5>
              Ortalama Puan: {product.product_rate} ({product.review_count}{" "}
              değerlendirme)
            </h5>

            <div className="star-container">
              {starIds.map((id) => (
                <img
                  src={getStarImg(id)}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(0)}
                  onClick={() => {
                    setClicked(id);
                    handleRating(id);
                  }}
                  width={"30px"}
                  height={"30px"}
                  alt=""
                />
              ))}
            </div>
            <h4> Ürün Açıklaması</h4>
            <p className="product-description">{product.product_description}</p>
            <h4>Ürün İçeriği</h4>
            <p className="product-ingridients">{product.ingridients}</p>
            <h3>
              <b>Fiyat: {product.product_price}$</b>
            </h3>
            <p>Güncel Stok Adedi: {product.stock}</p>
            <Button onClick={onCartHandler} className="card-btn btn__purple">
              SEPETE EKLE
            </Button>
            <Button onClick={onFavHandler} className="card-btn favorite-btn">
              Favorilere Ekle
            </Button>
          </Col>
        </Row>
        <div>
          <h3>Yorum Yap</h3>
          {user != "None" ? (
            <div>
              <form onSubmit={handleCommenting} className="form-comment">
                <textarea
                  id="comment"
                  placeholder="Yorumunuzu buraya girin."
                ></textarea>
                <button type="submit">Yorumu Paylaş</button>
              </form>
            </div>
          ) : (
            <p>Yorum yapabilmek için üye olmanız gerekli!</p>
          )}
        </div>
        <div>
          <h3>Yorumlar</h3>
          {comments.length > 0 && user !== "None" ? (
            comments.map((comment, index) => {
              <p>{comment.member_id}</p>;
              const commentor = commentors.find(
                (c) => c.ID === comment.member_id
              );
              return (
                <div key={index}>
                  <h5>
                    {commentor
                      ? `${commentor.first_name} ${commentor.surname}`
                      : "Yorum sahibi bulunamadı."}{" "}
                    demiş ki;
                  </h5>
                  <p>{comment.comment}</p>
                  <p>
                    {new Date(comment.comment_date).toISOString().split("T")[0]}
                  </p>
                </div>
              );
            })
          ) : user !== "None" ? (
            <p>Henüz yorum yok!</p>
          ) : (
            <p>Yorumlarınızı yorum yapabilmek için üye olmanız gerekli!</p>
          )}
        </div>
      </Container>
    </div>
  );
}
