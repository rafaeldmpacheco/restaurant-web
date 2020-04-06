import React from "react";
import { FiPower } from "react-icons/fi";
import { useDispatch } from "react-redux";
import logoImg from "../../assets/logo.svg";
import { signOut } from "../../store/modules/auth/actions";
import { Container, Header, List, ListItem, Title } from "./styles";

const dishes = [
  {
    id: 1,
    image:
      "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/baked-chilli-jacket-potatoes.jpg",
    description:
      "This impressive baked potato is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  },
  {
    id: 2,
    image:
      "https://thumbor.thedailymeal.com/Li6jFZP4s0EjJYTzA4H2lJvhAuM=/870x565/filters:format(webp)/https://www.thedailymeal.com/sites/default/files/slideshows/1952820/2121750/1-cordonbleu-shutterstock.JPG",
    description:
      "This dish originated in Switzerland, and is a riff on traditional schnitzel. But instead of just frying the pounded veal cutlet, it’s stuffed with ham and an easily meltable cheese (generally Swiss or Gruyère), rolled up into a roulade, and then deep-fried.",
  },
  {
    id: 3,
    image:
      "https://assets.marthastewart.com/styles/wmax-750/d34/med105046_1109_thx_brussels_sprout/med105046_1109_thx_brussels_sprout_horiz.jpg?itok=I0yv420R",
    description:
      "This delicious seasonal vegetable becomes sweet and nutty when browned. For the best flavor and texture, make the dish just before serving.",
  },
  {
    id: 4,
    image:
      "https://assets.marthastewart.com/styles/wmax-750/d35/homemade-stuffing-in-dish-mla101092/homemade-stuffing-in-dish-mla101092_horiz.jpg?itok=A3bUnnFE",
    description:
      "Studded with meaty chestnuts and fragrant with parsley and sage, this stuffing is equally good cooked inside or outside the turkey.",
  },
];

export default function Dishes() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <img src={logoImg} alt="Restaurant logo" />

        <span>Welcome!</span>

        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#a0131b" />
        </button>
      </Header>

      <Title>Dishes</Title>

      <List>
        {dishes.map((dish) => (
          <ListItem key={dish.id}>
            <p>{dish.description}</p>
            <img src={dish.image} alt="Dish" />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
